<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { serviceItems } from '../data/siteData'

const route = useRoute()
const service = computed(
  () => serviceItems.find((item) => item.slug === route.params.slug) || serviceItems[0],
)
</script>

<template>
  <main class="page-shell">
    <section class="page-hero detail-hero">
      <div class="container hero-inner">
        <div class="icon-badge">{{ service.icon }}</div>
        <div>
          <span class="eyebrow">Service detail</span>
          <h1>{{ service.name }}</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container detail-layout">
        <article class="detail-content">
          <p class="seo-intro">
            Jenga Paediatric Therapy Center provides individualised paediatric therapy and
            physiotherapy support for children and families in Nairobi and through telehealth.
          </p>
          <p class="lead">{{ service.summary }}</p>

          <div v-for="(section, index) in service.sections" :key="index" class="info-block">
            <h2>{{ section.heading }}</h2>
            <p v-if="section.body">{{ section.body }}</p>
            <p v-for="(paragraph, paragraphIndex) in section.paragraphs" :key="paragraphIndex">
              {{ paragraph }}
            </p>

            <div v-if="section.subsections" class="subsections">
              <div v-for="(subsection, subsectionIndex) in section.subsections" :key="subsectionIndex" class="subsection">
                <h3>{{ subsection.heading }}</h3>
                <p>{{ subsection.body }}</p>
              </div>
            </div>
          </div>
        </article>

        <aside class="side-card">
          <h3>Need support?</h3>
          <p>We can help your child with personalized assessment and therapy planning.</p>
          <router-link to="/contact" class="btn">Book a consultation</router-link>
        </aside>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.page-shell {
  min-height: 100vh;
}

.page-hero {
  background: linear-gradient(135deg, #285943, #8fca3f);
  color: white;
  padding: 70px 0 60px;
}

.hero-inner {
  display: flex;
  align-items: center;
  gap: 22px;
}

.icon-badge {
  width: 80px;
  height: 80px;
  display: grid;
  place-items: center;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.12);
  font-size: 2.3rem;
}

.eyebrow {
  display: inline-block;
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
}

.page-hero h1 {
  margin: 0;
  font-size: clamp(2.2rem, 3vw, 3.6rem);
}

.section {
  padding: 80px 0;
}

.detail-layout {
  display: grid;
  grid-template-columns: 1.5fr 0.7fr;
  gap: 28px;
  align-items: start;
}

.detail-content {
  background: #fff;
  border-radius: 26px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 18px 36px rgba(15, 23, 42, 0.04);
  padding: 30px;
}

.lead {
  font-size: 1.12rem;
  line-height: 1.8;
  color: #435d78;
  margin: 0 0 24px;
}

.seo-intro {
  margin: 0 0 18px;
  color: #526659;
  line-height: 1.7;
}

.info-block {
  margin-top: 24px;
}

.info-block h2 {
  margin: 0 0 12px;
  color: #285943;
  font-size: 1.35rem;
}

.info-block p {
  margin: 0;
  color: #526659;
  line-height: 1.8;
}

.info-block > p + p {
  margin-top: 16px;
}

.subsections {
  display: grid;
  gap: 20px;
  margin-top: 22px;
}

.subsection {
  padding-left: 18px;
  border-left: 3px solid rgba(143, 202, 63, 0.38);
}

.subsection h3 {
  margin: 0 0 8px;
  color: #285943;
  font-size: 1.08rem;
  line-height: 1.4;
}

.side-card {
  background: linear-gradient(180deg, #edf8e4, #f4faee);
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 22px;
  padding: 28px 24px;
}

.side-card h3 {
  margin: 0 0 14px;
  color: #285943;
  font-size: 1.5rem;
}

.side-card p {
  margin: 0 0 18px;
  color: #526659;
  line-height: 1.7;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 20px;
  border-radius: 999px;
  background: linear-gradient(135deg, #8fca3f, #4e923e);
  color: white;
  text-decoration: none;
  font-weight: 700;
}

@media (max-width: 760px) {
  .detail-layout {
    grid-template-columns: 1fr;
  }

  .hero-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
