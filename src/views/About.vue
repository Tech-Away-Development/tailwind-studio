<script setup lang="ts">
</script>

<template>
  <div class="about">
    <h1>About Page</h1>
    <p>This is an about page demonstrating Vue Router integration.</p>
    <div class="info">
      <p>This page was loaded using lazy loading with route-based code splitting.</p>
      <p>Navigate back to the Home page using the navigation links above.</p>
    </div>
  </div>
</template>

<style scoped>
.about {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.info {
  margin-top: 2rem;
  padding: 1.5rem;
  background-color: rgba(100, 108, 255, 0.1);
  border-radius: 8px;
}

.info p {
  margin: 0.5rem 0;
}
</style>
