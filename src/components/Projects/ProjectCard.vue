<template>
    <div class="project-card">
        <img :src="project.image" alt="project.title" />
        <div class="description">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="links">
                <a
                    v-for="link in project.links"
                    :key="link.title"
                    :href="link.url"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {{ link.title }}
                </a>
            </div>
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
    }
}
</script>

<style scoped>
img {
    width: 100%;
    border-radius: 10px;
    display: block;
    flex-shrink: 0;
    margin: 0; /* Ensure no margin around the image */
}

.project-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    overflow: hidden;
    padding: 0px;
}

.project-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

.description {
    flex-grow: 2;
}
</style>
