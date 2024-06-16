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
                            url: 'https://github.com/CSE-120-316/Sweep-LLM-Builder'
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'HackDavis 2024: JobScoper',
                    description:
                        "This is my HackDavis 2024 submission. JobScoper is a React application that uses Selenium to scrape job postings to help you find out if you're a good fit. It makes use of various social justice APIs for location information and the OpenAI API for a resume review.",
                    image: new URL(
                        '/../src/assets/ProjectImages/JobScoperScreenCap.png',
                        import.meta.url
                    ).href,
                    links: [
                        {
                            title: 'DevPost',
                            url: 'https://devpost.com/software/job-scoper'
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Kaggle: Store Sales Time Series Forecasting',
                    description:
                        'One of my first attempts at time-serie forecasting. This Python Notebook predicts store sales in Ecuador from a Kaggle dataset. It makes use of various models, including Gradient Boosting.',
                    image: new URL(
                        '/../src/assets/ProjectImages/TimeSeriesStock.png',
                        import.meta.url
                    ).href,
                    links: [
                        {
                            title: 'Python Notebook',
                            url: 'https://github.com/ajgrant6/store-sales-time-series-forecasting/blob/main/Analysis.ipynb'
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'PUNKT: Distribution Center Data Analysis',
                    description:
                        'For my final project during my study abroad in the Netherlands, I analyzed real-world data from a shipping center in the Netherlands and created this write up.',
                    image: new URL('/../src/assets/ProjectImages/Punkt.png', import.meta.url).href,
                    links: [
                        {
                            title: 'Google Drive',
                            url: 'https://drive.google.com/file/d/1OotQMgFvDIU7ONffWX_rZKqa9sKB3F5e/view?usp=sharing'
                        }
                    ]
                },
                {
                    id: 5,
                    title: 'This Website!',
                    description:
                        'If I add my own portfolio site to my portfolio, does that make it a recursive portfolio? This site was built using Vue.js and Vite and is hosted on Github Pages.',
                    image: new URL('/../src/assets/ProjectImages/SiteCap.png', import.meta.url)
                        .href,
                    links: [
                        {
                            title: 'Github',
                            url: 'https://github.com/ajgrant6/ajgrant6.github.io'
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
