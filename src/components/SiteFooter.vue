<script setup>
import logoImage from '../assets/JPTC-LOGO.jpeg'
import whatsappIcon from '../assets/whatsapp.svg'
import instagramIcon from '../assets/instagram.svg'
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
            <img :src="whatsappIcon" alt="WhatsApp" class="footer-whatsapp-icon" />
            WhatsApp
          </a></li>
          <li><a href="https://www.instagram.com/pptfonda/?hl=en" target="_blank" rel="noopener noreferrer">
            <img :src="instagramIcon" alt="Instagram" class="footer-instagram-icon" />
            Instagram
          </a></li>
          <li>jengatherapycentre@gmail.com</li>
        </ul>
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

.footer-instagram-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
  vertical-align: -2px;
  margin-right: 4px;
}

.footer-whatsapp-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
  vertical-align: -2px;
  margin-right: 4px;
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
