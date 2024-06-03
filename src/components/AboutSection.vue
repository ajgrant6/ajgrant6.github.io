<template>
    <div>
        <section-title title="About" bgColor="#F4D06F" />
    </div>
    <div class = "description">
        <div class = "description-pic">
            <image-of-me />
        </div>
        <div class = "description-text">
            <p>I'm AJ Grant. I'm a recent grad from the University of California, Merced. From the latest research in Large Language Models to the newest iOS SDKs, I'm always exploring the cutting edge.</p>
        </div>
    </div>
</template>

<script>
</script>

<style>

.description {
    display: flex;
    justify-content: center;
    max-width: 900px;
    margin: 0 auto;
}

.description-pic {
    margin-left: 20px;
    margin-right: 20px;
}

.description-text {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 18px;
    max-width: 600px;
    margin-left: 100px;
    /* margin-right: 20px; */

}

/* Media query for smaller screens */
@media (max-width: 1000px) {
    .description {
        flex-direction: column;
        align-items: center;
    }
}

</style>
