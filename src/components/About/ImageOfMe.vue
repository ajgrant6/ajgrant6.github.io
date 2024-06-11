<template>
    <div class="image-container">
        <img src="@/assets/Me.jpg" alt="Image of AJ" class="round-image" />
    </div>
</template>

<script></script>

<style>
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
}
</style>
