<script setup>
import { expectSteps } from '../data/siteData'
</script>

<template>
  <main class="page-shell">
    <section class="page-hero small-hero">
      <div class="container">
        <span class="eyebrow">What to expect</span>
        <h1>Your child’s journey with us</h1>
      </div>
    </section>

    <section class="section">
      <div class="container intro-copy">
        <p>
          Starting therapy can feel like a big step, especially when you are not yet sure what your child needs.
          At Jenga Paediatric Therapy Center, we aim to make the process of starting paediatric
          physiotherapy or occupational therapy clear, comfortable and collaborative from the very beginning.
          Every child is different, so their journey with us will be individually tailored to their needs,
          abilities and goals.
        </p>
      </div>

      <div class="container steps-layout">
        <div v-for="(step, index) in expectSteps" :key="index" class="step-card">
          <div class="step-number">0{{ index + 1 }}</div>
          <h3>{{ step.title }}</h3>
          <p v-for="(paragraph, paragraphIndex) in step.paragraphs" :key="paragraphIndex">
            {{ paragraph }}
          </p>
        </div>
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
  background: linear-gradient(135deg, #3d6b26, #8CC63F);
  color: white;
  padding: 72px 0 60px;
}

.small-hero h1 {
  margin: 0;
  font-size: clamp(2.3rem, 3vw, 3.3rem);
}

.eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 12px;
}

.section {
  padding: 64px 0 84px;
}

.intro-copy {
  margin-bottom: 36px;
}

.intro-copy p {
  margin: 0;
  color: #526659;
  font-size: 1.08rem;
  line-height: 1.8;
  max-width: 920px;
}

.steps-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.step-card {
  background: linear-gradient(180deg, #ffffff, #f3fbfd);
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.05);
}

.step-card h3 {
  margin: 0 0 14px;
  color: #3d6b26;
  font-size: 1.38rem;
  line-height: 1.3;
}

.step-number {
  width: 54px;
  height: 54px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: rgba(143, 202, 63, 0.14);
  color: #3d6b26;
  font-weight: 800;
  margin-bottom: 20px;
}

.step-card p {
  margin: 0 0 12px;
  color: #526659;
  line-height: 1.7;
  font-size: 1rem;
}

.step-card p:last-child {
  margin-bottom: 0;
}

@media (max-width: 900px) {
  .steps-layout {
    gap: 22px;
  }
}

@media (max-width: 700px) {
  .section {
    padding: 48px 0 64px;
  }

  .intro-copy p {
    font-size: 1rem;
    line-height: 1.7;
  }

  .steps-layout {
    grid-template-columns: 1fr;
  }

  .step-card {
    padding: 24px 22px;
  }
}

@media (max-width: 480px) {
  .page-hero {
    padding: 56px 0 44px;
  }

  .small-hero h1 {
    font-size: clamp(1.9rem, 7vw, 2.6rem);
  }

  .section {
    padding: 40px 0 56px;
  }

  .step-card {
    padding: 22px 18px;
  }
}
</style>
