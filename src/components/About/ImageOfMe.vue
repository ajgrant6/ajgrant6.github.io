<template>
    <div class="image-container">
        <img src="@/assets/Me.jpg" alt="Image of AJ" class="round-image" />
    </div>
</template>

<script></script>

<style scoped>
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px; /* Adjust as needed */
}
.round-image {
    width: 300px; /* Adjust the size as needed */
    height: 300px; /* Adjust the size as needed */
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}
</style>
