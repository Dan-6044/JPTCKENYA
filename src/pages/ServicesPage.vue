<script setup>
import { serviceItems } from '../data/siteData'
</script>

<template>
  <main class="page-shell">
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Our services</span>
        <h1>Helping children thrive in every stage of development.</h1>
      </div>
    </section>

    <section class="section">
      <div class="container services-intro">
        <p>
          JPTCKENYA is Jenga Paediatric Therapy Center in Nairobi, offering specialist paediatric therapy
          from experienced paediatric therapists and physiotherapists. Our services include physiotherapy,
          occupational therapy, developmental assessments, family support, school-based therapy and telehealth.
        </p>
      </div>

      <div class="container service-grid">
        <router-link
          v-for="service in serviceItems"
          :key="service.slug"
          :to="`/services/${service.slug}`"
          class="service-card"
        >
          <div class="card-icon">{{ service.icon }}</div>
          <h2>{{ service.name }}</h2>
          <p>{{ service.summary }}</p>
          <span>Read more →</span>
        </router-link>
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
  background: linear-gradient(135deg, rgba(23, 59, 99, 0.95), rgba(37, 132, 184, 0.88));
  color: white;
  padding: 72px 0 60px;
}

.page-hero h1 {
  margin: 0;
  max-width: 740px;
  font-size: clamp(2.4rem, 4vw, 4rem);
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
}

.section {
  padding: 82px 0;
}

.services-intro {
  margin-bottom: 30px;
}

.services-intro p {
  max-width: 900px;
  margin: 0;
  color: #53647a;
  font-size: 1.08rem;
  line-height: 1.8;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.service-card {
  display: block;
  background: linear-gradient(180deg, #ffffff, #f3fbfd);
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 22px;
  padding: 28px 24px;
  text-decoration: none;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 46px rgba(15, 23, 42, 0.12);
}

.card-icon {
  width: 62px;
  height: 62px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-size: 2rem;
  background: rgba(18, 159, 208, 0.12);
  margin-bottom: 18px;
}

.service-card h2 {
  margin: 0 0 14px;
  color: #243d61;
  font-size: 1.45rem;
}

.service-card p {
  margin: 0 0 16px;
  color: #53647a;
  line-height: 1.7;
}

.service-card span {
  color: #173b63;
  font-weight: 700;
}

@media (max-width: 760px) {
  .service-grid {
    grid-template-columns: 1fr;
  }
}
</style>
