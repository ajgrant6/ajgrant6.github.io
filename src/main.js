import { createApp } from 'vue'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'
import Vue3Marquee from 'vue3-marquee'

import App from './App.vue'

import MyTitle from './components/Title/MyTitle.vue'
import TitleScreen from './components/Title/TitleScreen.vue'
import ParticleWall from './components/Title/ParticleWall.vue'

import NavBar from './components/NavBar.vue'

import SectionTitle from './components/SectionTitle.vue'
import SectionSubtitle from './components/SectionSubtitle.vue'

import AboutSection from './components/About/AboutSection.vue'
import ImageOfMe from './components/About/ImageOfMe.vue'
import SoftwareMarquee from './components/About/SoftwareMarquee.vue'
import SoftwareCard from './components/About/SoftwareCard.vue'
import MyTraits from './components/About/MyTraits.vue'

import ProjectSection from './components/Projects/ProjectSection.vue'
import ProjectCard from './components/Projects/ProjectCard.vue'

import ContactSection from './components/Contact/ContactSection.vue'
import ContactCard from './components/Contact/ContactCard.vue'

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
app.component('section-subtitle', SectionSubtitle)

app.component('about-section', AboutSection)
app.component('image-of-me', ImageOfMe)
app.component('software-marquee', SoftwareMarquee)
app.component('software-card', SoftwareCard)
app.component('my-traits', MyTraits)

app.component('project-section', ProjectSection)
app.component('project-card', ProjectCard)

app.component('contact-section', ContactSection)
app.component('contact-card', ContactCard)

app.mount('#app')
