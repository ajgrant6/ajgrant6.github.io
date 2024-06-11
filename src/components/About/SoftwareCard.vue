<template>
    <div class="software-card">
        <div class="software-card-image">
            <img :src="imgURL" :alt="`Logo of ${software_name}`" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        software_name: {
            type: String,
            required: true
        }
    },
    computed: {
        imgURL() {
            // Using require to dynamically load images
            return new URL(`../../assets/softwarelogos/${this.software_name}.svg`, import.meta.url)
                .href
        }
    }
}
</script>

<style scoped>
.software-card {
    display: inline-block;
    padding: 0 10px;
}

.software-card img {
    height: 100px;
    width: 100px;
}

/* img {
    filter: grayscale(90%) brightness(90%) sepia(30%);
} */
</style>
