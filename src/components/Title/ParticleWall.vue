<template>
    <vue-particles
        id="tsparticles"
        @particles-loaded="particlesLoaded"
        :options="{
            background: {
                color: {
                    value: '#fff8f0'
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    // onClick: {
                    //     enable: true,
                    //     mode: 'push'
                    // },
                    onHover: {
                        enable: false,
                        mode: ['connect']
                    }
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.1,
                        size: 40
                    },
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    grab: {
                        distance: 200,
                        links: {
                            opacity: 0.4
                        }
                    },
                    connect: {
                        distance: 550,
                        links: {
                            opacity: 0.5
                        }
                    }
                }
            },
            particles: {
                color: {
                    value: '#998e81'
                },
                links: {
                    color: '#998e81',
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: 'bounce',
                    random: false,
                    speed: 0.5,
                    straight: false
                },
                number: {
                    density: {
                        enable: true
                    },
                    value: 350
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    value: { min: 1, max: 2 }
                }
            },
            detectRetina: true
        }"
    />
</template>
