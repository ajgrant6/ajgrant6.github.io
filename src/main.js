import { createApp } from 'vue'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles' // if you are going to use `loadFull`, install the "tsparticles" package too.
import Vue3Marquee from 'vue3-marquee'

import App from './App.vue'

import MyTitle from './components/Title/MyTitle.vue'
import TitleScreen from './components/Title/TitleScreen.vue'
import ParticleWall from './components/Title/ParticleWall.vue'

import NavBar from './components/NavBar.vue'

import SectionTitle from './components/SectionTitle.vue'

import AboutSection from './components/About/AboutSection.vue'
import ImageOfMe from './components/About/ImageOfMe.vue'
import SoftwareMarquee from './components/About/SoftwareMarquee.vue'
import SoftwareCard from './components/About/SoftwareCard.vue'

import ProjectSection from './components/Projects/ProjectSection.vue'

const app = createApp(App)

app.use(Vue3Marquee)
app.use(Particles, {
    init: async (engine) => {
        await loadFull(engine) // you can load the full tsParticles library from "tsparticles" if you need it
        //   await loadSlim(engine); // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    }
})

app.component('title-item', MyTitle)
app.component('title-screen', TitleScreen)
app.component('particle-wall', ParticleWall)

app.component('navbar-item', NavBar)

app.component('section-title', SectionTitle)

app.component('about-section', AboutSection)
app.component('image-of-me', ImageOfMe)
app.component('software-marquee', SoftwareMarquee)
app.component('software-card', SoftwareCard)

app.component('project-section', ProjectSection)

app.mount('#app')
