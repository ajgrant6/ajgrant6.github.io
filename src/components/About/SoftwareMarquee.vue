<template>
    <Vue3Marquee :clone="clone" :duration="duration" :direction="direction">
        <div v-for="logo in softwareLogos" :key="logo" class="software-card-container">
            <software-card :software_name="logo" />
        </div>
    </Vue3Marquee>
</template>

<script>
export default {
    props: {
        clone: {
            type: Boolean,
            default: true
        },
        duration: {
            type: Number,
            default: 60
        },
        direction: {
            type: String,
            default: 'normal'
        }
    },
    data() {
        return {
            softwareLogos: [
                'c',
                'c++',
                'docker',
                'github',
                'javascript',
                'jupyter',
                'postgresql',
                'python',
                'pytorch-icon',
                'react',
                'swift',
                'tensorflow',
                'vscode',
                'vuejs',
                'xcode'
                // add all your svg file names here
            ]
        }
    }
}
</script>

<style>
.software-card-container {
    display: inline-block;
    padding: 0 10px; /* Adjust spacing as needed */
}
</style>
