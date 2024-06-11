<template>
    <div class="title-container">
        <title-item />
    </div>
</template>

<script></script>

<style scoped>
.title-container {
    height: 100vh; /* Full height of the viewport */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.title-item {
    position: absolute;
    z-index: 2;
}

.particle-wall {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
}
</style>
