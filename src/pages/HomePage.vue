<script setup>
import { serviceItems } from '../data/siteData'
import heroImage from '../assets/Home-Hero.jpeg'

const featuredServices = serviceItems.slice(0, 8)
</script>

<template>
  <main>
    <section class="hero" :style="{ backgroundImage: `url(${heroImage})` }">
      <div class="hero__overlay"></div>
      <div class="container hero__content">
        <div class="hero__copy">
          <h1 class="hero__title">Jenga Paediatric Therapy Center</h1>
          <div class="hero__tagline">Building skills. Growing possibilities.</div>
          <p>
            Jenga Paediatric Therapy Centre supports children and families with physio- and occupational therapy, developmental guidance, and practical strategies tailored to everyday life, helping each child build skills, confidence, and independence.
          </p>
          <div class="hero__actions">
            <router-link to="/contact" class="btn btn-primary">Book a consultation</router-link>
            <router-link to="/services" class="btn btn-secondary">Explore services</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="section about-section intro-section">
      <div class="container about-layout">
        <div class="about-copy">
          <span class="eyebrow">About Jenga</span>
          <h2>Building skills, confidence and independence.</h2>
          <p>
            At Jenga Paediatric Therapy Centre, we provide child-centred therapy and developmental support
            for babies, children and adolescents. Jenga means “to build” in Swahili, reflecting our belief in
            helping every child build the skills, confidence and independence they need to participate fully in
            everyday life.
          </p>
          <p>
            We recognise that every child develops differently. Our therapy is therefore tailored to each child’s
            individual strengths, challenges and goals, with a focus on practical, meaningful progress that carries
            over into daily routines at home, at school and in the community.
          </p>
          <p>
            We work closely with parents, caregivers, teachers, schools and other professionals involved in the
            child’s care. Through assessment, individual therapy, home programmes and collaborative support, we aim
            to create an environment where children feel comfortable, motivated and encouraged to learn, move,
            explore and grow.
          </p>
          <p>
            Jenga brings together different areas of paediatric therapy and developmental support, allowing us to
            look at the whole child and provide coordinated care as their needs change over time.
          </p>
        </div>

        <div class="info-panel">
          <div class="info-box">
            <strong>Child-centred care</strong>
            <span>Therapy is shaped around each child’s strengths, needs, interests and goals.</span>
          </div>
          <div class="info-box">
            <strong>Practical progress</strong>
            <span>We connect therapy to meaningful routines at home, at school and in the community.</span>
          </div>
          <div class="info-box">
            <strong>Coordinated support</strong>
            <span>We collaborate with families, schools and professionals to support the whole child.</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section services-overview">
      <div class="container">
        <div class="section-heading">
          <span class="eyebrow">What we offer</span>
          <h2>Support for your child’s development and wellbeing</h2>
        </div>

        <div class="service-grid">
          <router-link
            v-for="service in featuredServices"
            :key="service.slug"
            :to="`/services/${service.slug}`"
            class="service-card"
          >
            <div class="card-icon">{{ service.icon }}</div>
            <h3>{{ service.name }}</h3>
            <p>{{ service.short }}</p>
            <span class="learn-more">Learn more →</span>
          </router-link>
        </div>
      </div>
    </section>

    <section class="section about-section">
      <div class="container about-layout">
        <div class="about-copy">
          <span class="eyebrow">How can we help?</span>
          <h2>Support that meets your child where they are.</h2>
          <p>
            Every child develops in their own way, and sometimes they need extra support to move, learn,
            play, or participate confidently in everyday life. Families may come to us because their baby is
            not reaching expected milestones, their child seems unusually stiff or floppy, frequently falls,
            appears clumsy, struggles with balance or coordination, finds handwriting challenging, walks on
            their toes, or has difficulty with posture or pain during daily activities or sports.
          </p>
          <p>
            We assess and support children with a wide range of developmental, neurological, orthopaedic,
            and sensory-motor needs, including developmental delay, cerebral palsy, autism spectrum disorder,
            dyspraxia, genetic and congenital conditions, torticollis, plagiocephaly, and children recovering
            from injuries, fractures, surgery, or periods of immobilisation.
          </p>
          <p>
            For babies and younger children, parents may be concerned about tummy time, head control, rolling,
            sitting, crawling, standing, walking, or noticing that their baby consistently looks or moves toward
            one side. For school-aged children, concerns may include poor balance and coordination, reduced
            strength, posture, handwriting, fine motor difficulties, sensory processing, motor planning,
            attention, and difficulty managing everyday tasks independently.
          </p>
          <p>
            We also support children and adolescents with musculoskeletal and sports-related concerns, including pain, reduced strength, altered walking patterns, foot posture, joint instability and difficulties returning to normal activities following an injury.
          </p>
          <p>
            At Jenga, we look beyond a diagnosis and focus on how a child’s strengths and challenges affect their everyday life. Through assessment, physiotherapy, occupational therapy and collaboration with families and schools, we develop practical and meaningful goals that support greater confidence, independence and participation at home, at school, during play and in the wider community.
          </p>
          <p>
            You do not need to know whether your child needs physiotherapy or occupational therapy before contacting us. If something about your child’s movement, development or everyday skills concerns you, we can help determine the most appropriate next step.
          </p>
        </div>

        <div class="info-panels">
          <div class="info-panel">
            <div class="info-box">
              <strong>Assessment &amp; support</strong>
              <span>We look beyond the diagnosis to understand how your child’s strengths and challenges affect everyday life.</span>
            </div>
            <div class="info-box">
              <strong>Family and school collaboration</strong>
              <span>We work with families, schools, and caregivers to build practical goals that support confidence and participation.</span>
            </div>
            <div class="info-box">
              <strong>Personalised care</strong>
              <span>If something about your child’s movement, development, or daily skills concerns you, we can help identify the next step.</span>
            </div>
          </div>

          <div class="info-panel">
            <div class="info-box">
              <strong>Musculoskeletal &amp; sports support</strong>
              <span>We support children and adolescents with musculoskeletal and sports-related concerns, helping them return to the activities they enjoy.</span>
            </div>
            <div class="info-box">
              <strong>Easy first step</strong>
              <span>You do not need to know whether your child needs physiotherapy or occupational therapy before contacting us. We can help determine the most appropriate next step.</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section contact-cta">
      <div class="container contact-panel">
        <div>
          <span class="eyebrow">Contact us</span>
          <h2>Talk to us about your child’s needs.</h2>
        </div>

        <div class="contact-details">
          <p>📍 Red Hill Drive, Nyari Estate, Nairobi</p>
          <p>📞 (254) 741064492</p>
          <p>✉️ fondajainruiter@gmail.com</p>
        </div>

        <div class="booking-summary">
          <h3>Book a consultation</h3>
          <p>Contact us directly and we will help you find the most suitable first step for your child.</p>
          <div class="booking-links">
            <a href="tel:+254741064492">☎ <span>(254) 741064492</span></a>
            <a href="mailto:fondajainruiter@gmail.com">✉ <span>fondajainruiter@gmail.com</span></a>
          </div>
          <ol>
            <li>Contact the centre</li>
            <li>Share your child’s needs</li>
            <li>Arrange a consultation</li>
          </ol>
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

.section {
  padding: 80px 0;
}

.eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  color: #7ab83a;
  margin-bottom: 12px;
}

.hero {
  position: relative;
  min-height: 620px;
  display: flex;
  align-items: center;
  background-size: cover;
  background-position: center;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(22, 55, 37, 0.84), rgba(143, 202, 63, 0.48));
}

.hero__content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 620px;
}

.hero__copy {
  max-width: 720px;
  color: white;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.hero__title {
  font-size: clamp(2.1rem, 6vw, 4.5rem);
  line-height: 1.08;
  font-weight: 800;
  letter-spacing: -0.04em;
  margin: 0 0 12px;
  color: #ffffff;
}

.hero__tagline {
  font-size: clamp(1.1rem, 1.6vw, 1.9rem);
  line-height: 1.3;
  font-weight: 600;
  margin: 0 0 14px;
  color: rgba(255, 255, 255, 0.9);
}

.hero__copy p {
  font-size: 1.08rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}

.hero__actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: linear-gradient(135deg, #8CC63F, #5a9a3a);
  color: white;
  box-shadow: 0 20px 30px rgba(61, 107, 38, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.section-heading {
  max-width: 680px;
  margin: 0 auto 36px;
  text-align: center;
}

.section-heading h2,
.about-copy h2,
.contact-panel h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1.15;
  color: #3d6b26;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.service-card {
  display: block;
  background: linear-gradient(180deg, #ffffff, #f1f9eb);
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 22px;
  padding: 28px 22px;
  text-decoration: none;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 22px 50px rgba(15, 23, 42, 0.12);
}

.card-icon {
  width: 62px;
  height: 62px;
  display: grid;
  place-items: center;
  font-size: 2rem;
  border-radius: 18px;
  background: rgba(143, 202, 63, 0.14);
  margin-bottom: 18px;
}

.service-card h3 {
  margin: 0 0 12px;
  font-size: 1.2rem;
  color: #3d6b26;
}

.service-card p {
  margin: 0;
  color: #526659;
  line-height: 1.7;
}

.learn-more {
  display: inline-block;
  margin-top: 18px;
  color: #3d6b26;
  font-weight: 700;
}

.about-layout {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 32px;
  align-items: center;
}

.about-copy p {
  margin-top: 18px;
  color: #526659;
  line-height: 1.8;
  font-size: 1.06rem;
}

.info-panels {
  display: grid;
  gap: 18px;
}

.info-panel {
  display: grid;
  gap: 18px;
}

.info-box {
  background: linear-gradient(135deg, #f0f9e6, #f5faef);
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 20px;
  padding: 26px 22px;
  display: grid;
  gap: 8px;
}

.info-box strong {
  color: #3d6b26;
  font-size: 1.1rem;
}

.info-box span {
  color: #526659;
  line-height: 1.6;
}

.contact-panel {
  display: grid;
  grid-template-columns: 0.8fr 0.8fr 1.4fr;
  gap: 22px;
  align-items: start;
  background: linear-gradient(135deg, #f1f9eb, #f0f9e6);
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 28px;
  padding: 34px;
}

.contact-details {
  display: grid;
  gap: 10px;
  color: #465b73;
  font-weight: 600;
}

.booking-summary {
  display: grid;
  gap: 12px;
}

.booking-summary h3 {
  margin: 0;
  color: #3d6b26;
  font-size: 1.25rem;
}

.booking-summary p,
.booking-summary ol {
  margin: 0;
  color: #465b73;
  line-height: 1.6;
}

.booking-links {
  display: grid;
  gap: 8px;
}

.booking-links a {
  color: #3d6b26;
  font-weight: 700;
  text-decoration: none;
}

.booking-links a:hover {
  color: #7ab83a;
}

.booking-links span {
  margin-left: 4px;
}

.booking-summary ol {
  padding-left: 20px;
}

@media (max-width: 980px) {
  .service-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .about-layout,
  .contact-panel {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .hero {
    min-height: 520px;
    padding-bottom: 36px;
  }

  .hero__copy {
    padding-top: 8px;
  }

  .hero__copy p {
    font-size: 1rem;
    margin-bottom: 22px;
  }

  .hero__actions {
    gap: 12px;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 56px 0;
  }

  .contact-panel {
    padding: 22px 18px;
    gap: 18px;
  }

  .info-box {
    padding: 22px 18px;
  }
}

@media (max-width: 400px) {
  .hero {
    min-height: 460px;
  }

  .btn {
    width: 100%;
  }
}
</style>
