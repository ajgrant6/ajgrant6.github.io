<template>
    <section-title title="Contact" bgColor="#9dd9d2" />
    <div class="contact-container">
        <contact-card v-for="contact in contacts" :key="contact.id" :contact="contact" />
    </div>
</template>

<script>
export default {
    data() {
        return {
            contacts: [
                {
                    id: 1,
                    title: 'LinkedIn',
                    description: 'aj.grant6',
                    link: 'https://www.linkedin.com/in/aj-grant6/',
                    icon: new URL('/../src/assets/ContactLogos/linkedin.svg', import.meta.url).href
                },
                {
                    id: 2,
                    title: 'Github',
                    description: 'ajgrant6',
                    link: 'https://github.com/ajgrant6',
                    icon: new URL('/../src/assets/ContactLogos/github.svg', import.meta.url).href
                },
                {
                    id: 3,
                    title: 'Email',
                    description: 'aj.grant6@icloud.com',
                    link: 'mailto:aj.grant6@icloud.com',
                    icon: new URL('/../src/assets/ContactLogos/mail.svg', import.meta.url).href
                }
            ]
        }
    }
}
</script>

<style scoped>
.contact-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px; /* Adjust the gap value as needed */
    margin-top: 50px;
}
.contact-card {
    flex: 1 1 auto; /* Allow cards to grow and shrink as needed */
    margin: 0 10px; /* Adjust margin for consistent spacing */
}
</style>
