<template>
    <div class="project-card" @click="navigateToLink">
        <img :src="project.image" alt="project.title" />
        <div class="description">
            <h1>{{ project.title }}</h1>
            <p>{{ project.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    methods: {
        navigateToLink() {
            window.open(this.project.links[0].url, '_blank')
        }
    }
}
</script>

<style scoped>
img {
    display: block;
    flex-shrink: 0;
    margin: 0;
    width: 100%;
}

h1 {
    text-align: center;
    font-size: 24px;
}

p {
    font-size: 18px;
}

.project-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    overflow: hidden;
    padding: 0px;
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
    cursor: pointer;
}

.description {
    flex-grow: 2;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 10px;
}
</style>
