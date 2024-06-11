<template>
    <div>
        <section-title title="About" bgColor="#F4D06F" />
    </div>
    <div class="description-container">
        <div class="description-item">
            <image-of-me />
        </div>
        <div class="description-item">
            <div class="description-text">
                <p>
                    I'm AJ Grant. I'm a recent grad from the University of California, Merced. From
                    the latest research in Large Language Models to the newest iOS SDKs, I'm always
                    exploring the cutting edge.
                </p>
            </div>
        </div>
    </div>
</template>

<script></script>

<style>
.description-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    margin-left: 5%;
    margin-right: 5%;
    align-items: center; /* Center items vertically */
}

.description-item {
    flex-grow: 1;
    flex-basis: 300px;
}

.description-text {
    font-size: 18px;
    max-width: 700px;
    margin: 0 20px;
}
</style>
