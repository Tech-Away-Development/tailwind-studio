<script setup lang="ts"></script>

<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
nav {
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 2rem;
}

nav a {
  font-weight: bold;
  color: #646cff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: rgba(100, 108, 255, 0.1);
}

nav a.router-link-active {
  color: #42b883;
}
</style>
