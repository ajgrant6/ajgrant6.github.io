import { createApp } from 'vue'
import Vue3Marquee from 'vue3-marquee'

import App from './App.vue'

import MyTitle from './components/MyTitle.vue'
import TitleScreen from './components/TitleScreen.vue'

import NavBar from './components/NavBar.vue'

import SectionTitle from './components/SectionTitle.vue'

import AboutSection from './components/About/AboutSection.vue'
import ImageOfMe from './components/About/ImageOfMe.vue'
import SoftwareMarquee from './components/About/SoftwareMarquee.vue'
import SoftwareCard from './components/About/SoftwareCard.vue'

const app = createApp(App)

app.use(Vue3Marquee)

app.component('title-item', MyTitle)
app.component('title-screen', TitleScreen)

app.component('navbar-item', NavBar)

app.component('section-title', SectionTitle)

app.component('about-section', AboutSection)
app.component('image-of-me', ImageOfMe)
app.component('software-marquee', SoftwareMarquee)
app.component('software-card', SoftwareCard)

app.mount('#app')
