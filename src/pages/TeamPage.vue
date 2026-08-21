<script setup>
import { teamMembers } from '../data/siteData'
</script>

<template>
  <main class="page-shell">
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Our team</span>
        <h2>Dedicated specialists caring for every child.</h2>
      </div>
    </section>

    <section class="section">
      <div class="container team-intro">
        <p>
          Meet the paediatric therapists, physiotherapists and trusted consultants supporting children and
          families through Jenga Paediatric Therapy Center. Together, the Jenga team provides thoughtful therapy,
          assessment and specialist guidance tailored to each child.
        </p>
      </div>

      <div class="container team-grid">
        <article v-for="member in teamMembers" :key="member.name" class="team-card">
          <img :src="member.image" :alt="member.name" />
          <div class="team-info">
            <h2>{{ member.name }}</h2>
            <h3>{{ member.role }}</h3>
            <p>{{ member.bio }}</p>
          </div>
        </article>
      </div>
    </section>
  </main>
</template>

<style scoped>
.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}
.container h2{
    font-size: clamp(2.3rem, 1vw, 2.9rem);
}

.page-shell {
  min-height: 100vh;
}

.page-hero {
  background: linear-gradient(135deg, #3d6b26, #8CC63F);
  color: white;
  padding: 72px 0 60px;
}

.page-hero h1 {
  margin: 0;
  max-width: 700px;
  font-size: clamp(2.3rem, 3vw, 3.9rem);
}

.eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 10px;
}

.section {
  padding: 82px 0;
}

.team-intro {
  margin-bottom: 30px;
}

.team-intro p {
  max-width: 900px;
  margin: 0;
  color: #526659;
  font-size: 1.08rem;
  line-height: 1.8;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}

.team-card {
  background: linear-gradient(180deg, #ffffff, #f1f8eb);
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.05);
}

.team-card img {
  width: 100%;
  height: 360px;
  object-fit: contain;
  background: #fff;
  display: block;
}

.team-info {
  padding: 24px;
}

.team-info h2 {
  margin: 0 0 8px;
  color: #3d6b26;
  font-size: 1.6rem;
}

.team-info h3 {
  margin: 0 0 12px;
  font-size: 1rem;
  color: #7ab83a;
}

.team-info p {
  margin: 0;
  color: #526659;
  line-height: 1.7;
}

@media (max-width: 760px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
