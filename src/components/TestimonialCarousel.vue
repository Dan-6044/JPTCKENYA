<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { testimonials } from '../data/siteData'

const current = ref(0)
let timer = null

const slides = [0, 2, 4]
const slideCount = slides.length

function next() {
  current.value = (current.value + 1) % slideCount
}

function prev() {
  current.value = (current.value - 1 + slideCount) % slideCount
}

function select(index) {
  current.value = index
  resetTimer()
}

function resetTimer() {
  if (timer) clearInterval(timer)
  timer = setInterval(next, 10000)
}

onMounted(() => {
  resetTimer()
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <section class="section testimonials-section">
    <div class="container">
      <div class="section-head">
        <h2>Testimonials</h2>
        <p class="section-subtitle">What families say about their experience at Jenga Paediatric Therapy Centre</p>
      </div>

      <div class="testimonial-track">
        <div
          class="testimonial-slide"
          :style="{ transform: `translateX(-${current * 100}%)` }"
        >
          <div
            v-for="(slideIndex, slideKey) in slides"
            :key="slideKey"
            class="testimonial-slide-group"
          >
            <article
              v-for="offset in [0, 1]"
              :key="offset"
              class="testimonial-card"
              :class="{ 'testimonial-card--empty': slideIndex + offset >= testimonials.length }"
            >
              <template v-if="slideIndex + offset < testimonials.length">
                <img
                  class="avatar"
                  :src="testimonials[slideIndex + offset].image"
                  :alt="testimonials[slideIndex + offset].name"
                />
                <h3 class="testimonial-name">{{ testimonials[slideIndex + offset].name }}</h3>
                <p class="testimonial-text">{{ testimonials[slideIndex + offset].text }}</p>
              </template>
            </article>
          </div>
        </div>
      </div>

      <div class="testimonial-dots">
        <button
          v-for="(_, index) in slides"
          :key="index"
          class="testimonial-dot"
          :class="{ 'testimonial-dot--active': index === current }"
          @click="select(index)"
          :aria-label="`Show slide ${index + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  padding: 80px 0 96px;
  background: #ffffff;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.section-head {
  text-align: center;
  margin-bottom: 56px;
}

.section-head h2 {
  margin: 0 0 16px;
  color: #1f2a1e;
  font-size: clamp(2rem, 5vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
}

.section-subtitle {
  margin: 0;
  color: #7a8a76;
  font-size: 1.05rem;
  line-height: 1.6;
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
}

.testimonial-track {
  overflow: hidden;
}

.testimonial-slide {
  display: flex;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.testimonial-slide-group {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  flex: 1;
  min-width: 100%;
}

.testimonial-card {
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  padding: 40px 32px 36px;
  box-shadow: 0 2px 16px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 340px;
}

.testimonial-card--empty {
  visibility: hidden;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  flex-shrink: 0;
}

.testimonial-name {
  margin: 0 0 16px;
  color: #2d4a22;
  font-size: 1.2rem;
  font-weight: 700;
}

.testimonial-text {
  margin: 0;
  color: #6b7a66;
  font-size: 0.98rem;
  line-height: 1.7;
}

.testimonial-dots {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 48px;
}

.testimonial-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: #d4e0cc;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.testimonial-dot--active {
  background: #3d6b26;
  transform: scale(1.3);
}

@media (max-width: 760px) {
  .testimonial-slide-group {
    grid-template-columns: 1fr;
  }

  .testimonial-card {
    min-height: auto;
    padding: 32px 24px 28px;
  }
}

@media (max-width: 480px) {
  .testimonials-section {
    padding: 56px 0 64px;
  }

  .section-head {
    margin-bottom: 40px;
  }

  .section-head h2 {
    font-size: clamp(1.6rem, 6vw, 2.2rem);
  }

  .section-subtitle {
    font-size: 0.95rem;
  }

  .testimonial-card {
    padding: 28px 20px 24px;
    border-radius: 20px;
  }

  .avatar {
    width: 60px;
    height: 60px;
    margin-bottom: 16px;
  }

  .testimonial-name {
    font-size: 1.1rem;
  }

  .testimonial-text {
    font-size: 0.92rem;
  }

  .testimonial-dots {
    margin-top: 36px;
  }
}
</style>