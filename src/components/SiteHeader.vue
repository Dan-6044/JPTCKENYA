<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { serviceItems } from '../data/siteData'
import logoImage from '../assets/JPTC-LOGO.jpeg'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'What to expect?', to: '/what-to-expect' },
  { label: 'Services', to: '/services', hasDropdown: true },
  { label: 'Teams & Partners', to: '/team' },
  { label: 'Contact Us', to: '/contact' },
]

const isMenuOpen = ref(false)
const isServicesOpen = ref(false)
const serviceLinks = serviceItems

const closeMenu = () => {
  isMenuOpen.value = false
  isServicesOpen.value = false
}

const toggleServices = (event) => {
  if (window.matchMedia('(max-width: 900px)').matches) {
    event.preventDefault()
    isServicesOpen.value = !isServicesOpen.value
  }
}
</script>

<template>
  <header class="site-header">
    <div class="top-strip">
      <div class="top-strip__inner container">
        <span>Mon - Fri: 09:00AM - 17:00PM</span>
        <span>📍 Red Hill Drive, Nyari Estate, Nairobi</span>
        <span>📞 (254) 741064492</span>
        <span>✉️ fondajainruiter@gmail.com</span>
      </div>
    </div>

    <div class="container header-inner">
      <RouterLink to="/" class="brand" aria-label="Jenga home" @click="closeMenu">
        <img class="brand__logo" :src="logoImage" alt="Jenga logo" />
      </RouterLink>

      <button
        class="nav-toggle"
        aria-label="Toggle navigation"
        :aria-expanded="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
      >
        ☰
      </button>

      <nav class="main-nav" :class="{ 'is-open': isMenuOpen }">
        <template v-for="item in navItems" :key="item.label">
          <div v-if="item.hasDropdown" class="nav-item services-menu" :class="{ 'is-open': isServicesOpen }">
            <RouterLink :to="item.to" class="nav-link desktop-services-link">
              <span>{{ item.label }}</span>
              <span class="caret">▾</span>
            </RouterLink>
            <button type="button" class="nav-link mobile-services-toggle" @click="isServicesOpen = !isServicesOpen">
              <span>{{ item.label }}</span>
              <span class="caret">▾</span>
            </button>

            <div
              class="nav-dropdown"
              :class="{ 'is-visible': isServicesOpen }"
              :style="isServicesOpen ? { opacity: 1, visibility: 'visible', pointerEvents: 'auto' } : {}"
              aria-label="Services dropdown"
            >
              <RouterLink
                v-for="service in serviceLinks"
                :key="service.slug"
                :to="`/services/${service.slug}`"
                class="dropdown-link"
                @click="closeMenu"
              >
                {{ service.name }}
              </RouterLink>
            </div>
          </div>

          <RouterLink v-else :to="item.to" class="nav-link" @click="closeMenu">
            <span>{{ item.label }}</span>
          </RouterLink>
        </template>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.top-strip {
  background: linear-gradient(135deg, #285943, #8fca3f);
  color: #fff;
  font-size: 0.75rem;
}

.top-strip__inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 10px 0;
  flex-wrap: wrap;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 100px;
  gap: 20px;
  position: relative;
}

.brand {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: #285943;
}

.brand__logo {
  width: 220px;
  height: 90px;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
  box-shadow: 0 16px 30px rgba(143, 202, 63, 0.24);
}

.main-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex: 1;
  position: relative;
}

.nav-item {
  position: relative;
}

.nav-link,
.dropdown-link {
  text-decoration: none;
  color: #345b46;
  font-weight: 600;
  transition: color 0.2s ease;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 14px;
  border-radius: 999px;
}

.mobile-services-toggle {
  display: none;
  border: 0;
  background: transparent;
  font: inherit;
  cursor: pointer;
}

.nav-link:hover,
.dropdown-link:hover {
  color: #285943;
}

.nav-link.router-link-exact-active,
.nav-link.router-link-active {
  background: rgba(143, 202, 63, 0.14);
  color: #285943;
}

.nav-dropdown {
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  gap: 10px;
  min-width: 260px;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 22px 40px rgba(15, 23, 42, 0.12);
  border-radius: 16px;
  padding: 12px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.35s ease, visibility 0.35s ease;
  visibility: hidden;
}

.services-menu:hover .nav-dropdown,
.services-menu:focus-within .nav-dropdown,
.services-menu .nav-dropdown:hover {
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
}

.dropdown-link {
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 0.92rem;
}

.dropdown-link:hover {
  background: rgba(143, 202, 63, 0.14);
}

.nav-toggle {
  display: none;
  border: none;
  background: #edf8e4;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  font-size: 1.4rem;
  color: #285943;
  cursor: pointer;
}

@media (max-width: 900px) {
  .brand__logo {
    width: 180px;
    height: 76px;
  }

  .main-nav {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 20px 30px rgba(15, 23, 42, 0.08);
    border: 1px solid rgba(15, 23, 42, 0.05);
    border-radius: 18px;
    display: none;
    flex-direction: column;
    padding: 14px;
    align-items: flex-start;
  }

  .desktop-services-link {
    display: none;
  }

  .mobile-services-toggle {
    display: inline-flex;
  }

  .main-nav.is-open {
    display: flex;
  }

  .nav-dropdown {
    position: static;
    transform: none;
    transition: none;
    display: none;
    opacity: 0;
    pointer-events: none;
    box-shadow: none;
    border: none;
    background: transparent;
    width: 100%;
    padding: 0 0 10px 0;
    visibility: hidden;
  }

  .nav-dropdown.is-visible {
    display: grid;
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  }

  .nav-toggle {
    display: block;
  }
}
</style>
