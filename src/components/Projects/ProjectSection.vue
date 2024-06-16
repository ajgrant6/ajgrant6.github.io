<template>
    <section-title title="Projects" bgColor="#ff8811" />
    <div class="project-container">
        <project-card v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    id: 1,
                    title: 'Sweep AI: LLM Fine-Tuning API',
                    description:
                        'My senior project at UC Merced. Worked with mentors at Sweep AI to create an API for fine-tuning large language models. Used Hugging Face, Docker, Flask, and PostgreSQL.',
                    image: new URL(
                        '/../src/assets/ProjectImages/SweepAIPoster.png',
                        import.meta.url
                    ).href,
                    links: [
                        {
                            title: 'Github',
                            url: 'https://github.com'
                        },
                        {
                            title: 'Live',
                            url: 'https://live.com'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'HackDavis 2024: JobScoper',
                    description: 'This is a description of project 2',
                    image: new URL('@/assets/images/project2.jpg', import.meta.url).href,
                    links: [
                        {
                            title: 'Github',
                            url: 'https://github.com'
                        },
                        {
                            title: 'Live',
                            url: 'https://live.com'
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Kaggle: Store Sales Time Series Forecasting',
                    description: 'This is a description of project 3',
                    image: new URL('@/assets/images/project3.jpg', import.meta.url).href,
                    links: [
                        {
                            title: 'Github',
                            url: 'https://github.com'
                        },
                        {
                            title: 'Live',
                            url: 'https://live.com'
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'PUNKT: Distribution Center Data Analysis',
                    description: 'This is a description of project 4',
                    image: new URL('@/assets/images/project4.jpg', import.meta.url).href,
                    links: [
                        {
                            title: 'Github',
                            url: 'https://github.com'
                        },
                        {
                            title: 'Live',
                            url: 'https://live.com'
                        }
                    ]
                },
                {
                    id: 5,
                    title: 'This Website!',
                    description: 'This is a description of project 5',
                    image: new URL('@/assets/images/project5.jpg', import.meta.url).href,
                    links: [
                        {
                            title: 'Github',
                            url: 'https://github.com'
                        },
                        {
                            title: 'Live',
                            url: 'https://live.com'
                        }
                    ]
                }
            ]
        }
    }
}
</script>

<style scoped>
.project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.project-card {
    flex: 400px;
    max-width: 450px;
}
</style>
