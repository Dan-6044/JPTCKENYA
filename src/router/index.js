import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ExpectPage from '../pages/ExpectPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import ServiceDetailPage from '../pages/ServiceDetailPage.vue'
import TeamPage from '../pages/TeamPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import { serviceItems } from '../data/siteData'

const commonKeywords =
  'PPTKENYA, JPTCKENYA, Jenga, Jenga Paediatric Therapy Center, paediatric therapist, paediatric physiotherapist, physiotherapist, therapy, telehealth, peadiatric therapist, phsyiotherapist, peadiatric phsyiotherapist'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'JPTCKENYA | Jenga Paediatric Therapy Center',
      description:
        'Jenga Paediatric Therapy Center in Nairobi provides paediatric physiotherapy, occupational therapy, developmental support and family-centred care.',
      keywords:
        'PPTKENYA, JPTCKENYA, Jenga Paediatric Therapy Center, paediatric therapist, paediatric physiotherapist, therapy Nairobi',
    },
  },
  {
    path: '/what-to-expect',
    name: 'expect',
    component: ExpectPage,
    meta: {
      title: 'What to Expect | JPTCKENYA',
      description:
        'Learn how Jenga Paediatric Therapy Center makes paediatric physiotherapy, occupational therapy and developmental support clear, comfortable and collaborative.',
      keywords: 'JPTCKENYA, Jenga, paediatric therapy, paediatric physiotherapist, therapy assessment',
    },
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesPage,
    meta: {
      title: 'Paediatric Therapy Services | JPTCKENYA',
      description:
        'Explore paediatric physiotherapy, occupational therapy, early development, assessments, school-based therapy, telehealth and family support at JPTCKENYA.',
      keywords:
        'PPTKENYA, JPTCKENYA, paediatric therapist, paediatric physiotherapist, physiotherapist, therapy, telehealth, Jenga',
    },
  },
  {
    path: '/services/:slug',
    name: 'service-detail',
    component: ServiceDetailPage,
    props: true,
    meta: {
      title: 'Paediatric Therapy Service | JPTCKENYA',
      description:
        'Explore specialist paediatric therapy and family-centred support from Jenga Paediatric Therapy Center in Nairobi.',
      keywords: 'JPTCKENYA, Jenga Paediatric Therapy Center, paediatric therapy, paediatric therapist, physiotherapist',
    },
  },
  {
    path: '/team',
    name: 'team',
    component: TeamPage,
    meta: {
      title: 'Teams & Partners | JPTCKENYA',
      description:
        'Meet the paediatric therapists, physiotherapists and trusted professional partners supporting children and families at Jenga Paediatric Therapy Center.',
      keywords:
        'JPTCKENYA, Jenga, paediatric therapist, paediatric physiotherapist, physiotherapist, therapy team',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
    meta: {
      title: 'Contact JPTCKENYA | Jenga Paediatric Therapy Center',
      description:
        'Contact Jenga Paediatric Therapy Center in Nairobi about paediatric physiotherapy, occupational therapy, assessments, telehealth and family support.',
      keywords:
        'PPTKENYA, JPTCKENYA, Jenga Paediatric Therapy Center, paediatric therapist, paediatric physiotherapist, telehealth, therapy Nairobi',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const service = to.name === 'service-detail'
    ? serviceItems.find((item) => item.slug === to.params.slug)
    : null
  const title = service
    ? `${service.name} | JPTCKENYA`
    : to.meta.title || 'JPTCKENYA | Jenga Paediatric Therapy Center'
  const description =
    to.meta.description ||
    'JPTCKENYA is Jenga Paediatric Therapy Center in Nairobi, providing specialist paediatric therapy and family support.'
  const keywords = [commonKeywords, to.meta.keywords].filter(Boolean).join(', ')

  document.title = title
  document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  document.querySelector('meta[name="keywords"]')?.setAttribute('content', keywords)

  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', `${window.location.origin}${to.fullPath}`)
})

export default router
