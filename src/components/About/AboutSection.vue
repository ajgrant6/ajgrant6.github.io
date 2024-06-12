<template>
    <div class="section-title-container">
        <section-title title="About" bgColor="#F4D06F" />
    </div>
    <div class="description-container">
        <div class="description-item">
            <image-of-me />
        </div>
        <div class="description-item">
            <div class="description-text">
                <p>
                    I'm AJ Grant. I'm a recent Computer Science graduate with a Bachelor of Science
                    from the University of California, Merced. From the latest research in Large
                    Language Models to the newest iOS SDKs, I'm always exploring the cutting edge.
                </p>
                <p>Thanks for visiting my site, I hope I can impress!</p>
            </div>
        </div>
    </div>

    <div>
        <div>
            <section-subtitle title="What I can do" bgColor="#F4D06F" />
        </div>
        <div>
            <my-traits />
        </div>
    </div>

    <div class="marquee-container">
        <div class="marquee-item" style="margin-bottom: 15px">
            <software-marquee />
        </div>
        <div class="marquee-item">
            <software-marquee :direction="'reverse'" />
        </div>
    </div>
</template>

<script></script>

<style scoped>
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
    max-width: 700px;
    margin: 0 10px;
    /* background-color: #fff8f0;
    border-radius: 10px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.2); */
}

.marquee-container {
    margin-top: 70px;
    margin-bottom: 70px;
}

.section-title-container {
    position: relative;
}

p {
    font-size: 20px;
    font-family: 'Roboto';
    color: #373538;
    padding: 20px;
}
</style>
