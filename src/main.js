import { createApp } from 'vue'

import App from './App.vue'

import MyTitle from './components/MyTitle.vue'
import TitleScreen from './components/TitleScreen.vue'

import NavBar from './components/NavBar.vue'

import SectionTitle from './components/SectionTitle.vue'

import AboutSection from './components/AboutSection.vue'
import ImageOfMe from './components/ImageOfMe.vue'

const app = createApp(App)

app.component('title-item', MyTitle)
app.component('title-screen', TitleScreen)

app.component('navbar-item', NavBar)

app.component('section-title', SectionTitle)

app.component('about-section', AboutSection)
app.component('image-of-me', ImageOfMe)

app.mount('#app')
