<script setup>
import gallery1 from '../assets/Gallery-1.jpeg'
import gallery2 from '../assets/Gallery-2.jpeg'
import gallery3 from '../assets/Gallery-3.jpeg'
import gallery4 from '../assets/Gallery-4.jpeg'
import gallery5 from '../assets/Gallery-5.jpeg'
import gallery6 from '../assets/Gallery-6.jpeg'
import gallery7 from '../assets/Gallery-7.jpeg'
import gallery8 from '../assets/Gallery-8.jpeg'
import gallery9 from '../assets/Gallery-9.jpeg'
import gallery10 from '../assets/Gallery-10.jpeg'

const galleryImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5,
  gallery6, gallery7, gallery8, gallery9, gallery10,
]
</script>

<template>
  <main class="page-shell">
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Our work</span>
        <h1>Gallery</h1>
      </div>
    </section>

    <section class="section">
      <div class="container gallery-grid">
        <figure v-for="(image, index) in galleryImages" :key="index" class="gallery-item">
          <img :src="image" :alt="`Gallery image ${index + 1}`" />
        </figure>
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

.page-hero h1 {
  margin: 0;
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

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.gallery-item {
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 32px rgba(15, 23, 42, 0.1);
  background: #fff;
}

.gallery-item img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.03);
}

@media (max-width: 900px) {
  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .gallery-item img {
    height: 260px;
  }
}

@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 18px;
  }

  .gallery-item img {
    height: 280px;
  }
}

@media (max-width: 480px) {
  .page-hero {
    padding: 56px 0 44px;
  }

  .section {
    padding: 56px 0;
  }

  .gallery-grid {
    gap: 14px;
  }

  .gallery-item img {
    height: 240px;
  }
}
</style>