<template>
    <div class="traits-container">
        <div class="traits-item">
            <img src="@/assets/traitslogos/decision-tree.svg" alt="Machine Learning" />
            <h>Machine Learning</h>
            <p>
                From classifying mailing-list recipients with association rules and k-means
                clustering, to predicting the timeliness of trucks in the busiest ports in the
                Netherlands with regression models, I have experience with a variety of machine
                learning techniques.
            </p>
        </div>
        <div class="traits-item">
            <img src="@/assets/traitslogos/mesh-brain.svg" alt="Artificial Intelligence" />
            <h>Artificial Intelligence</h>
            <p>
                From the classic minmax algorithms in game theory to the latest Large Language
                Models, I'm always keeping up. I even have experience fine-tuning Large Language
                Models like Llama and more.
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
    max-width: 1200px;
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
