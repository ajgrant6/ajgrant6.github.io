<template>
    <div :class="['nav', { sticky: isSticky }]" ref="navbar">
        <div class="item item-1">About</div>
        <div class="item item-2">Projects</div>
        <div class="item item-3">Contact</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isSticky: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            const scrollTop = window.scrollY
            const windowHeight = window.innerHeight

            this.isSticky = scrollTop > windowHeight
        }
    }
}
</script>

<style scoped>
.nav {
    display: flex;
    justify-content: right;
    background-color: #59565a;
    width: 100vw;
    transition: all 0.3s;
}

.sticky {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.item {
    flex: 1;
    max-width: 100px;
    padding: 10px;
}

.item-1 {
    background-color: #f4d06f;
}

.item-2 {
    background-color: #ff8811;
}

.item-3 {
    background-color: #9dd9d2;
}

div {
    font-family: 'Roboto';
    font-size: large;
}
</style>
