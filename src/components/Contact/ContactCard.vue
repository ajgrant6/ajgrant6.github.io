<template>
    <div class="container" @click="openLink">
        <img :src="contact.icon" alt="contact.description" />
    </div>
</template>

<script>
export default {
    props: {
        contact: Object
    },
    methods: {
        openLink() {
            window.open(this.contact.link, '_blank')
        }
    }
}
</script>

<style scoped>
.container {
    cursor: pointer;
    width: 70px;
    height: 70px;
}

img {
    width: 70px;
    height: 70px;
    filter: invert(75%) sepia(80%) saturate(200%) hue-rotate(10deg) brightness(21%);
}
</style>
