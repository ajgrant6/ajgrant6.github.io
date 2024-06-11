<template>
    <div class="particle-wall-container">
        <particle-wall />
    </div>
    <title-screen />
    <navbar-item />
    <about-section />
    <p style="margin-top: 500px">_</p>
</template>

<script></script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import './assets/css/main.css';

html,
body {
    margin: 0;
    padding: 0;
    height: 100%;
}

.particle-wall-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Ensure it is behind other elements */
}

@font-face {
    font-family: 'Jaoren';
    src: url('@/assets/fonts/Jaoren.ttf');
}

@font-face {
    font-family: 'PlayFair';
    src: url('@/assets/fonts/PlayfairDisplay-VariableFont_wght.ttf');
}
</style>
