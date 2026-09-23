<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { testimonials } from '../data/siteData'

const current = ref(0)
let timer = null

const palette = ['#3d6b26', '#8CC63F', '#2a7f62', '#5b8c4e', '#7ab83a']

function next() {
  current.value = (current.value + 1) % testimonials.length
}

function prev() {
  current.value = (current.value - 1 + testimonials.length) % testimonials.length
}

function select(index) {
  current.value = index
  resetTimer()
}

function resetTimer() {
  if (timer) clearInterval(timer)
  timer = setInterval(next, 10000)
}

function avatarColor(index) {
  return palette[index % palette.length]
}

function initials(name) {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()
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
        <span class="eyebrow">What families say</span>
        <h2>Real stories from parents and caregivers</h2>
      </div>

      <div class="testimonial-track">
        <article
          v-for="(item, index) in testimonials"
          :key="item.name"
          class="testimonial-card"
          :class="{ 'testimonial-card--active': index === current }"
        >
          <div class="avatar" :style="{ background: avatarColor(index) }">
            {{ initials(item.name) }}
          </div>
          <div class="testimonial-body">
            <p class="testimonial-text">“{{ item.text }}”</p>
            <p class="testimonial-name">{{ item.name }}</p>
          </div>
        </article>
      </div>

      <div class="testimonial-dots">
        <button
          v-for="(_, index) in testimonials"
          :key="index"
          class="testimonial-dot"
          :class="{ 'testimonial-dot--active': index === current }"
          @click="select(index)"
          :aria-label="`Show testimonial ${index + 1}`"
        />
      </div>

      <div class="testimonial-arrows">
        <button class="testimonial-arrow" @click="prev" aria-label="Previous testimonial">‹</button>
        <button class="testimonial-arrow" @click="next" aria-label="Next testimonial">›</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-section {
  padding: 64px 0 96px;
  background: linear-gradient(180deg, #f7fbf4, #ffffff);
}

.section-head {
  text-align: center;
  margin-bottom: 48px;
}

.section-head .eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: #3d6b26;
  margin-bottom: 12px;
}

.section-head h2 {
  margin: 0;
  color: #3d6b26;
  font-size: clamp(1.8rem, 4vw, 2.8rem);
}

.testimonial-track {
  position: relative;
  overflow: hidden;
  min-height: 280px;
}

.testimonial-card {
  display: flex;
  align-items: center;
  gap: 24px;
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 24px;
  padding: 32px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.05);
  opacity: 0;
  transform: translateX(60px);
  transition: opacity 0.6s ease, transform 0.6s ease;
  pointer-events: none;
}

.testimonial-card--active {
  opacity: 1;
  transform: translateX(0);
  pointer-events: auto;
}

.avatar {
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 700;
  font-size: 1.3rem;
}

.testimonial-body {
  flex: 1;
}

.testimonial-text {
  margin: 0 0 14px;
  color: #526659;
  font-size: 1.1rem;
  line-height: 1.7;
}

.testimonial-name {
  margin: 0;
  color: #3d6b26;
  font-weight: 700;
  font-size: 1.05rem;
}

.testimonial-dots {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 36px;
}

.testimonial-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: #c4d4c0;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.testimonial-dot--active {
  background: #3d6b26;
  transform: scale(1.25);
}

.testimonial-arrows {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-top: 20px;
}

.testimonial-arrow {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #fff;
  font-size: 1.6rem;
  color: #3d6b26;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: background 0.2s ease, color 0.2s ease;
}

.testimonial-arrow:hover {
  background: #3d6b26;
  color: #fff;
}

@media (max-width: 760px) {
  .testimonial-card {
    flex-direction: column;
    text-align: center;
    padding: 24px;
  }

  .testimonial-text {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .testimonials-section {
    padding: 48px 0 64px;
  }

  .testimonial-card {
    padding: 20px;
    gap: 16px;
  }

  .avatar {
    width: 56px;
    height: 56px;
    font-size: 1.1rem;
  }
}
</style>