<template>
    <div class="container" :style="{ '--bg-color': bgColor }">
        <h1>{{ title }}</h1>
    </div>
</template>

<script>
export default {
    name: 'SectionTitle',
    props: {
        title: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            default: '#F4D06F' // Default color if none is provided
        }
    }
}
</script>

<style scoped>
.container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: 'PlayFair';
}

.container h1::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 0.7em;
    background-color: var(--bg-color);
    transform: translate(-50%, -50%) translateX(15px) translateY(20px);
    z-index: -1;
}

h1 {
    position: relative;
    margin: 0;
    padding: 10px;
    font-size: 70px;
    z-index: 2;
}

div {
    margin-bottom: 70px;
}
</style>
