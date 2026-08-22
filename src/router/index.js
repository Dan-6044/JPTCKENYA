import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ExpectPage from '../pages/ExpectPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import ServiceDetailPage from '../pages/ServiceDetailPage.vue'
import TeamPage from '../pages/TeamPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import { serviceItems } from '../data/siteData'

const commonKeywords =
  'PPTKENYA, Jenga, Jenga Paediatric Therapy Center, paediatric therapist, paediatric physiotherapist, physiotherapist, therapy, telehealth, peadiatric therapist, phsyiotherapist, peadiatric phsyiotherapist'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Jenga | Jenga Paediatric Therapy Center',
      description:
        'Jenga Paediatric Therapy Center in Nairobi provides paediatric physiotherapy, occupational therapy, developmental support and family-centred care.',
      keywords:
        'PPTKENYA, Jenga, Jenga Paediatric Therapy Center, paediatric therapist, paediatric physiotherapist, therapy Nairobi',
    },
  },
  {
    path: '/what-to-expect',
    name: 'expect',
    component: ExpectPage,
    meta: {
      title: 'What to Expect | Jenga',
      description:
        'Learn how Jenga Paediatric Therapy Center makes paediatric physiotherapy, occupational therapy and developmental support clear, comfortable and collaborative.',
      keywords: 'Jenga, paediatric therapy, paediatric physiotherapist, therapy assessment',
    },
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesPage,
    meta: {
      title: 'Paediatric Therapy Services | Jenga',
      description:
        'Explore paediatric physiotherapy, occupational therapy, early development, assessments, school-based therapy, telehealth and family support at Jenga.',
      keywords:
        'PPTKENYA, Jenga, paediatric therapist, paediatric physiotherapist, physiotherapist, therapy, telehealth',
    },
  },
  {
    path: '/services/:slug',
    name: 'service-detail',
    component: ServiceDetailPage,
    props: true,
    meta: {
      title: 'Paediatric Therapy Service | Jenga',
      description:
        'Explore specialist paediatric therapy and family-centred support from Jenga Paediatric Therapy Center in Nairobi.',
      keywords: 'Jenga, Jenga Paediatric Therapy Center, paediatric therapy, paediatric therapist, physiotherapist',
    },
  },
  {
    path: '/team',
    name: 'team',
    component: TeamPage,
    meta: {
      title: 'Teams & Partners | Jenga',
      description:
        'Meet the paediatric therapists, physiotherapists and trusted professional partners supporting children and families at Jenga Paediatric Therapy Center.',
      keywords:
        'Jenga, paediatric therapist, paediatric physiotherapist, physiotherapist, therapy team',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
    meta: {
      title: 'Contact Jenga | Jenga Paediatric Therapy Center',
      description:
        'Contact Jenga Paediatric Therapy Center in Nairobi about paediatric physiotherapy, occupational therapy, assessments, telehealth and family support.',
      keywords:
        'PPTKENYA, Jenga, Jenga Paediatric Therapy Center, paediatric therapist, paediatric physiotherapist, telehealth, therapy Nairobi',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
    meta: {
      title: 'Page Not Found | Jenga',
      description: 'The page you are looking for does not exist.',
    },
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
    ? `${service.name} | Jenga`
    : to.meta.title || 'Jenga | Jenga Paediatric Therapy Center'
  const description =
    to.meta.description ||
    'Jenga Paediatric Therapy Center in Nairobi provides specialist paediatric therapy and family support.'
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
