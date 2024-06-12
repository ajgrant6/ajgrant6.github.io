<template>
    <div class="particle-wall-container">
        <particle-wall />
    </div>

    <title-screen />

    <div style="background-color: #fff8f0">
        <navbar-item />
        <about-section />
        <project-section />
    </div>
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
