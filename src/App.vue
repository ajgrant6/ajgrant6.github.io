<template>
    <div class="particle-wall-container">
        <particle-wall />
    </div>

    <title-screen />

    <navbar-item />

    <section id="about">
        <div class="background2">
            <about-section />
        </div>
    </section>

    <section id="projects">
        <div class="background1">
            <project-section />
        </div>
    </section>

    <section id="contact">
        <div class="background2" style="padding-bottom: 150px">
            <contact-section />
        </div>
    </section>
</template>

<script></script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import './assets/css/main.css';

.particle-wall-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1000;
}

.background1,
.background2 {
    background-color: #fff8f0;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 70px;
    padding-bottom: 30px;
}
.background2 {
    background-color: #eae3db;
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import './assets/css/main.css';

@font-face {
    font-family: 'Jaoren';
    src: url('@/assets/fonts/Jaoren.ttf');
}

@font-face {
    font-family: 'PlayFair';
    src: url('@/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf');
}

html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
}
</style>
