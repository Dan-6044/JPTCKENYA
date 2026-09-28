<script setup>
import { ref, computed } from 'vue'
import { expectSteps } from '../data/siteData'

const testimonials = [
  { name: 'Parents of Aarav', initials: 'PA', text: 'From our first visit, Fonda made us feel heard and supported. Our son looks forward to every session and we have seen real progress in his confidence and movement.' },
  { name: 'Parent of Noah', initials: 'PN', text: 'We noticed our baby preferred one side and felt unsure where to start. Fonda gave us simple, practical strategies to use at home and the improvement has been lovely to see.' },
  { name: 'Parent of Zuri', initials: 'PZ', text: 'Therapy here is fun and engaging. Zuri is always excited to come in, and the team has helped her build the skills she needs for school and play.' },
  { name: 'Parents of Joseph', initials: 'PJ', text: 'Joseph was nervous about movement after his injury, but the therapists turned every exercise into a game. His strength and confidence have come back beautifully.' },
  { name: 'Parents of Mariam', initials: 'PM', text: 'We felt guided at every step. The team worked closely with us and Mariam’s school, and the progress she has made has been truly inspiring.' },
]

const currentIndex = ref(0)

const slides = computed(() => {
  const result = []
  for (let i = 0; i < testimonials.length; i += 2) {
    result.push(testimonials.slice(i, i + 2))
  }
  return result
})

const totalSlides = computed(() => slides.value.length)

const goTo = (index) => {
  currentIndex.value = index
}

const next = () => {
  if (currentIndex.value < totalSlides.value - 1) {
    currentIndex.value += 1
  }
}

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1
  }
}
</script>

<template>
  <main class="page-shell">
    <section class="page-hero small-hero">
      <div class="container">
        <span class="eyebrow">What to expect</span>
        <h1>Your child's journey with us</h1>
      </div>
    </section>

    <section class="section">
      <div class="container intro-copy">
        <p>
          Starting therapy can feel like a big step, especially when you are not yet sure what your child needs.
          At Jenga Paediatric Therapy Centre, we aim to make the process of starting paediatric
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

    <section class="section testimonial-section">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">Testimonials</span>
          <h2>What parents are saying</h2>
        </div>

        <div class="testimonial-slider">
          <button type="button" class="slider-arrow slider-arrow--left" @click="prev" aria-label="Previous testimonials">←</button>
          
          <div class="slider-viewport">
            <div class="slider-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
              <div v-for="(slide, i) in slides" :key="i" class="slide">
                <div v-for="item in slide" :key="item.name" class="testimonial-card">
                  <div class="testimonial-avatar">{{ item.initials }}</div>
                  <p class="testimonial-text">“{{ item.text }}”</p>
                  <p class="testimonial-name">{{ item.name }}</p>
                </div>
              </div>
            </div>
          </div>

          <button type="button" class="slider-arrow slider-arrow--right" @click="next" aria-label="Next testimonials">→</button>
        </div>

        <div class="slider-dots">
          <button
            v-for="(_, index) in slides"
            :key="index"
            type="button"
            class="dot"
            :class="{ 'is-active': currentIndex === index }"
            @click="goTo(index)"
            :aria-label="`Go to slide ${index + 1}`"
          />
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

.testimonial-section {
  padding-top: 20px;
}

.section-heading {
  max-width: 680px;
  margin: 0 auto 36px;
  text-align: center;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.15;
  color: #3d6b26;
}

.testimonial-slider {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
}

.slider-viewport {
  overflow: hidden;
  flex: 1;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  flex: 0 0 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.testimonial-card {
  background: linear-gradient(180deg, #ffffff, #f3fbfd);
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 20px;
  padding: 28px;
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.testimonial-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, #8CC63F, #5a9a3a);
  color: #fff;
  font-weight: 800;
  font-size: 1.1rem;
  display: grid;
  place-items: center;
  flex-shrink: 0;
}

.testimonial-text {
  margin: 0;
  color: #526659;
  line-height: 1.75;
  font-size: 1rem;
  font-style: italic;
}

.testimonial-name {
  margin: 0;
  color: #3d6b26;
  font-weight: 700;
  font-size: 0.98rem;
}

.slider-arrow {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #fff;
  color: #3d6b26;
  font-size: 1.2rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
  transition: transform 0.2s ease, background 0.2s ease;
  flex-shrink: 0;
}

.slider-arrow:hover {
  background: #f0f9e6;
  transform: translateY(-1px);
}

.slider-arrow:active {
  transform: translateY(0);
}

.slider-dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 28px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: rgba(15, 23, 42, 0.12);
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;
}

.dot.is-active {
  background: #8CC63F;
  transform: scale(1.15);
}

@media (max-width: 760px) {
  .slide {
    grid-template-columns: 1fr;
  }

  .slider-arrow {
    display: none;
  }
}

@media (max-width: 700px) {
  .section {
    padding: 48px 0 64px;
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

  .testimonial-card {
    padding: 22px;
  }
}
</style>
