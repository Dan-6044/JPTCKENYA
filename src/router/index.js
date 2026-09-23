import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ExpectPage from '../pages/ExpectPage.vue'
import ServicesPage from '../pages/ServicesPage.vue'
import ServiceDetailPage from '../pages/ServiceDetailPage.vue'
import TeamPage from '../pages/TeamPage.vue'
import ContactPage from '../pages/ContactPage.vue'
import GalleryPage from '../pages/GalleryPage.vue'
import NotFoundPage from '../pages/NotFoundPage.vue'
import { serviceItems } from '../data/siteData'

const commonKeywords =
  'PPTKENYA, Jenga, Jenga Paediatric Therapy Centre, paediatric therapist, paediatric physiotherapist, physiotherapist, therapy, telehealth, peadiatric therapist, phsyiotherapist, peadiatric phsyiotherapist'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Jenga Paediatric Therapy East Africa | Leading Child Therapy Centre in Nairobi',
      description:
        'Jenga Paediatric Therapy East Africa is a leading paediatric therapy centre in Nairobi, Kenya. We provide expert physiotherapy, occupational therapy, developmental assessments and family-centred care for children across East Africa.',
      keywords:
        'PPTKENYA, Jenga, Jenga Paediatric Therapy East Africa, paediatric therapist Nairobi, paediatric physiotherapist East Africa, child therapy Kenya, paediatric therapy centre East Africa',
    },
  },
  {
    path: '/what-to-expect',
    name: 'expect',
    component: ExpectPage,
    meta: {
      title: 'What to Expect | Jenga Paediatric Therapy East Africa',
      description:
        'Know what to expect from your first visit to Jenga Paediatric Therapy East Africa. Our child-friendly physiotherapy, occupational therapy and developmental sessions are designed for comfort, collaboration and meaningful progress.',
      keywords: 'Jenga East Africa, what to expect paediatric therapy, first therapy visit Nairobi, paediatric physiotherapy assessment East Africa',
    },
  },
  {
    path: '/services',
    name: 'services',
    component: ServicesPage,
    meta: {
      title: 'Paediatric Therapy Services | Jenga Paediatric Therapy East Africa',
      description:
        'Explore our full range of paediatric therapy services at Jenga Paediatric Therapy East Africa including physiotherapy, occupational therapy, early development, assessments, school-based therapy, telehealth and family support across East Africa.',
      keywords:
        'PPTKENYA, Jenga East Africa, paediatric therapy services, paediatric physiotherapist, occupational therapy Nairobi, telehealth East Africa, child development Kenya',
    },
  },
  {
    path: '/services/:slug',
    name: 'service-detail',
    component: ServiceDetailPage,
    props: true,
    meta: {
      title: 'Paediatric Therapy Service | Jenga Paediatric Therapy East Africa',
      description:
        'Discover specialist paediatric therapy services from Jenga Paediatric Therapy East Africa. Expert child physiotherapy, occupational therapy and family-centred support in Nairobi and across East Africa.',
      keywords: 'Jenga East Africa, paediatric therapy, child physiotherapy, occupational therapy East Africa, family-centred paediatric care',
    },
  },
  {
    path: '/team',
    name: 'team',
    component: TeamPage,
    meta: {
      title: 'Our Team & Partners | Jenga Paediatric Therapy East Africa',
      description:
        'Meet the experienced paediatric therapists, physiotherapists and trusted partners behind Jenga Paediatric Therapy East Africa, dedicated to supporting children and families across East Africa.',
      keywords:
        'Jenga East Africa, paediatric therapy team, paediatric physiotherapist Nairobi, child therapy specialists East Africa',
    },
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: GalleryPage,
    meta: {
      title: 'Gallery | Jenga Paediatric Therapy East Africa',
      description:
        'Explore our gallery of therapy sessions, developmental activities and family-centred care at Jenga Paediatric Therapy East Africa in Nairobi.',
      keywords: 'Jenga East Africa, therapy gallery, paediatric therapy, child physiotherapy Nairobi',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
    meta: {
      title: 'Contact Us | Jenga Paediatric Therapy East Africa',
      description:
        'Get in touch with Jenga Paediatric Therapy East Africa in Nairobi, Kenya. Book a paediatric physiotherapy, occupational therapy or telehealth consultation for your child across East Africa.',
      keywords:
        'PPTKENYA, Jenga East Africa contact, book paediatric therapy Nairobi, telehealth East Africa, child physiotherapy Kenya',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundPage,
    meta: {
      title: 'Page Not Found | Jenga Paediatric Therapy East Africa',
      description: 'The page you are looking for does not exist. Jenga Paediatric Therapy East Africa offers expert child therapy services in Nairobi and across East Africa.',
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
    ? `${service.name} | Jenga Paediatric Therapy East Africa`
    : to.meta.title || 'Jenga Paediatric Therapy East Africa | Leading Child Therapy Centre in Nairobi'
  const description =
    to.meta.description ||
    'Jenga Paediatric Therapy East Africa is a leading paediatric therapy centre in Nairobi, Kenya, providing expert child physiotherapy, occupational therapy and family support across East Africa.'
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
