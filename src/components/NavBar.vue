<template>
    <sticky-element :visibleOnDirection="'disabled'" :stickMode="'element-start'">
        <div class="nav">
            <div class="item item-1" @click="scrollToSection('about')">About</div>
            <div class="item item-2" @click="scrollToSection('projects')">Projects</div>
            <div class="item item-3" @click="scrollToSection('contact')">Contact</div>
        </div>
    </sticky-element>
</template>

<script>
export default {
    methods: {
        scrollToSection(sectionId) {
            const section = document.getElementById(sectionId)
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }
}
</script>

<style scoped>
.nav {
    display: flex;
    justify-content: right; /* Changed from right to space-between */
    background-color: #59565a;
    width: 100vw;
    transition: all 0.3s;
}

.item {
    padding: 10px;
    cursor: pointer;
    text-align: center;
    min-width: 80px;
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

.item-1:hover {
    background-color: #d4b05f; /* Manually specify a darker shade */
}

.item-2:hover {
    background-color: #e6790d; /* Manually specify a darker shade */
}

.item-3:hover {
    background-color: #7dc7c3; /* Manually specify a darker shade */
}

div {
    font-family: 'Roboto';
    font-size: large;
}
</style>
