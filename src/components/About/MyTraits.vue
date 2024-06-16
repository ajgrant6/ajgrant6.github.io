<template>
    <div class="traits-container">
        <div class="traits-item">
            <img src="@/assets/traitslogos/decision-tree.svg" alt="Machine Learning" />
            <h>Machine Learning</h>
            <p>
                My machine learning expertise spans a wide range of techniques. I've classified
                mailing-list recipients using association rules and k-means clustering, and I've
                employed regression models to predict truck arrival times in the bustling ports of
                the Netherlands.
            </p>
        </div>
        <div class="traits-item">
            <img src="@/assets/traitslogos/mesh-brain.svg" alt="Artificial Intelligence" />
            <h>Artificial Intelligence</h>
            <p>
                I stay at the forefront of AI advancements, from classic game theory algorithms like
                minmax to cutting-edge Large Language Models. My hands-on experience includes
                fine-tuning models like Llama and exploring the latest research in the field.
            </p>
        </div>
        <div class="traits-item">
            <img src="@/assets/traitslogos/brackets.svg" alt="Software Development" />
            <h>Software Development</h>
            <p>
                With a strong foundation in various software development tools, I thrive in Python
                Notebooks and have proficiency in languages such as C and C++. My front-end
                development skills include creating projects with SwiftUI and Vue.js, which I used
                to build this website!
            </p>
        </div>
    </div>
</template>

<style scoped>
img {
    width: 100px;
    height: 100px;
}

h {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 10px;
}

p {
    font-size: 16px;
    text-align: left;
    margin: 0;
}

.traits-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-left: 5%;
    margin-right: 5%;
}
.traits-item {
    flex-grow: 1;
    flex-basis: 200px;
    max-width: 300px;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
