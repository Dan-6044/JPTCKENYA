<script setup>
const contactDetails = [
  { label: 'Phone', value: '(254) 741064492' },
  { label: 'Email', value: 'fondajainruiter@gmail.com' },
  { label: 'Location', value: 'Red Hill Drive, Nyari Estate, Nairobi' },
]
</script>

<template>
  <main class="page-shell">
    <section class="page-hero">
      <div class="container">
        <span class="eyebrow">Contact us</span>
        <h1>We’re here to support your child.</h1>
      </div>
    </section>

    <section class="section">
      <div class="container contact-layout">
        <div class="contact-card info-card">
          <h2>Get in touch</h2>
          <div v-for="item in contactDetails" :key="item.label" class="detail-row">
            <strong>{{ item.label }}:</strong>
            <span>{{ item.value }}</span>
          </div>
          <div class="hours">
            <strong>Hours:</strong>
            <span>Monday to Friday 09:00AM - 17:00PM</span>
          </div>
        </div>

        <div class="contact-card booking-card">
          <span class="eyebrow">Book a consultation</span>
          <h2>Let’s talk about your child’s needs.</h2>
          <p>
            Contact Jenga Paediatric Therapy Center directly and we will help you identify the
            most suitable first step for your child. You do not need to know whether your child requires
            paediatric physiotherapy, occupational therapy, telehealth or a specific assessment before getting in touch.
          </p>

          <div class="contact-actions">
            <a href="tel:+254741064492" class="contact-action">
              <span class="action-icon">☎</span>
              <span>
                <strong>Call us</strong>
                <small>(254) 741064492</small>
              </span>
            </a>
            <a href="mailto:fondajainruiter@gmail.com" class="contact-action">
              <span class="action-icon">✉</span>
              <span>
                <strong>Email us</strong>
                <small>fondajainruiter@gmail.com</small>
              </span>
            </a>
          </div>

          <div class="next-steps">
            <h3>What happens next?</h3>
            <ol>
              <li>Contact the centre by phone or email.</li>
              <li>Share your child’s needs and concerns.</li>
              <li>Arrange the most suitable consultation.</li>
            </ol>
          </div>
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

.page-hero h1 {
  margin: 0;
  font-size: clamp(2.3rem, 3vw, 3.8rem);
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
  padding: 82px 0;
}

.contact-layout {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 26px;
}

.contact-card {
  background: linear-gradient(180deg, #ffffff, #f3fbfd);
  border: 1px solid rgba(15, 23, 42, 0.06);
  border-radius: 26px;
  padding: 28px;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.04);
}

.contact-card h2 {
  margin-top: 0;
  margin-bottom: 18px;
  color: #3d6b26;
  font-size: 1.9rem;
}

.detail-row,
.hours {
  display: grid;
  gap: 4px;
  margin-bottom: 18px;
  color: #526659;
  line-height: 1.7;
}

.booking-card {
  display: grid;
  gap: 12px;
}

.booking-card .eyebrow {
  color: #7ab83a;
  margin-bottom: 0;
}

.booking-card > p {
  margin: 0 0 8px;
  color: #526659;
  line-height: 1.7;
}

.contact-actions {
  display: grid;
  gap: 10px;
  margin: 8px 0 14px;
}

.contact-action {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border: 1px solid rgba(143, 202, 63, 0.24);
  border-radius: 12px;
  color: #3d6b26;
  text-decoration: none;
  background: #f1f8eb;
}

.contact-action:hover {
  background: #e6f4d9;
}

.action-icon {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #8CC63F;
  color: #fff;
}

.contact-action strong,
.contact-action small {
  display: block;
}

.contact-action small {
  margin-top: 2px;
  color: #526659;
}

.next-steps {
  padding-top: 10px;
  border-top: 1px solid rgba(61, 107, 38, 0.12);
}

.next-steps h3 {
  margin: 0 0 10px;
  color: #3d6b26;
  font-size: 1.15rem;
}

.next-steps ol {
  margin: 0;
  padding-left: 22px;
  color: #526659;
  line-height: 1.8;
}

@media (max-width: 760px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .page-hero {
    padding: 56px 0 44px;
  }

  .section {
    padding: 56px 0;
  }

  .contact-card {
    padding: 22px 18px;
  }

  .page-hero h1 {
    font-size: clamp(1.9rem, 7vw, 2.6rem);
  }
}
</style>
