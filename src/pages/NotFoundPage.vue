<script setup>
</script>

<template>
  <main>
    <section class="error-page">
      <div class="container error-page__content">
        <span class="error-page__code">404</span>
        <h1 class="error-page__title">Page not found</h1>
        <p class="error-page__message">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div class="error-page__actions">
          <router-link to="/" class="btn btn-primary">Go to homepage</router-link>
          <router-link to="/contact" class="btn btn-secondary">Contact us</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  text-align: center;
  padding: 4rem 1.5rem;
}

.error-page__code {
  display: block;
  font-size: 6rem;
  font-weight: 800;
  line-height: 1;
  color: var(--color-primary, #2a7f62);
  margin-bottom: 1rem;
}

.error-page__title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.error-page__message {
  font-size: 1.1rem;
  color: var(--color-text-muted, #666);
  margin-bottom: 2rem;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
}

.error-page__actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
