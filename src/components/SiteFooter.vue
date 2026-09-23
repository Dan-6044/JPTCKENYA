<script setup>
import logoImage from '../assets/JPTC-LOGO.jpeg'
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <div class="brand-mark">
          <img class="brand-logo" :src="logoImage" alt="Jenga logo" />
        </div>
        <p>
          Supporting children and families with compassionate, specialist paediatric therapy to help every child thrive.
        </p>
      </div>

      <div>
        <h4>Quick links</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/what-to-expect">What to expect</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/team">Team & Partners</router-link></li>
          <li><router-link to="/gallery">Gallery</router-link></li>
        </ul>
      </div>

      <div>
        <h4>Services</h4>
        <ul>
          <li><router-link to="/services/paediatric-physiotherapy">Paediatric Physiotherapy</router-link></li>
          <li><router-link to="/services/occupational-therapy">Occupational Therapy</router-link></li>
          <li><router-link to="/services/baby-and-early-development">Baby & Early Development</router-link></li>
          <li><router-link to="/services/assessments-and-evaluations">Assessments & Evaluations</router-link></li>
        </ul>
      </div>

      <div>
        <h4>Contact</h4>
        <ul>
          <li>Red Hill Drive, Nyari Estate, Nairobi</li>
          <li>+254 741 064 492</li>
          <li><a href="https://wa.me/254741064492" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="vertical-align:-2px;margin-right:4px;"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.2 4.79 1.2 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z" fill="#25D366"/><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.2 4.79 1.2 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2z" stroke="#25D366" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8.69 13.49c-.13-.22-.34-.28-.58-.28-.2 0-.4.07-.58.2-.16.13-.26.31-.26.48 0 .16.07.3.19.43.14.13.3.2.43.2.16 0 .29-.1.4-.24.13-.2.2-.43.2-.66 0-.1-.03-.17-.07-.23z" fill="#fff"/><path d="M15.39 8.61c-.13-.22-.34-.28-.58-.28-.2 0-.4.07-.58.2-.16.13-.26.31-.26.48 0 .16.07.3.19.43.14.13.3.2.43.2.16 0 .29-.1.4-.24.13-.2.2-.43.2-.66 0-.1-.03-.17-.07-.23z" fill="#fff"/><path d="M16.46 12.09c-.24.67-1.4 1.29-1.94 1.3-.48.09-.88.04-1.89-.38-1.5-.7-2.91-2.11-3.86-3.66-.79-1.29-1.02-2.24-.71-2.92.23-.52.66-.85 1.1-.97.37-.1.76-.05 1.14.06.41.12.9.54 1.22 1.1.3.52.43 1.17.61 1.69.16.48.34 1.47.06 2.14z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            WhatsApp
          </a></li>
          <li>jengatherapycentre@gmail.com</li>
        </ul>
        <div class="socials">
          <a href="https://www.instagram.com/pptfonda/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">◎ <span>Instagram</span></a>
        </div>
      </div>
    </div>

    <div class="copyright-bar">
      <div class="container">
        <span>© 2026 Jenga. All rights reserved.</span>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.site-footer {
  background: #1f4533;
  color: rgba(255, 255, 255, 0.82);
  margin-top: 60px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: 32px;
  padding: 48px 0 24px;
}

.brand-mark {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
}

.brand-logo {
  width: 220px;
  height: 90px;
  object-fit: cover;
  object-position: center;
  border-radius: 0;
}

.site-footer h4 {
  color: #fff;
  margin: 0 0 16px;
  font-size: 1rem;
}

.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}

.site-footer li,
.site-footer a,
.site-footer p {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 0.96rem;
}

.socials {
  display: flex;
  gap: 12px;
  margin-top: 18px;
}

.socials a {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
  font-size: 1.45rem;
}

.socials a span {
  font-size: 0.6rem;
}

.copyright-bar {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 14px 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
}

@media (max-width: 760px) {
  .footer-grid {
    grid-template-columns: 1fr;
    padding-top: 34px;
  }
}

@media (max-width: 480px) {
  .brand-logo {
    width: 160px;
    height: 66px;
  }

  .footer-grid {
    gap: 26px;
  }

  .site-footer {
    margin-top: 44px;
  }
}
</style>
