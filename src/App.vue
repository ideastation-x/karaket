<script setup>
import SiteNavigation from './components/SiteNavigation.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex flex-col min-h-screen font-Mitr">
    <SiteNavigation />
    <RouterView />
  </div>
</template>
