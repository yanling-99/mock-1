<template>
  <main>
    <HeroSection />
    <PostSection id="newPost" />
    <InstagramSection id="featuredPost" />
    <ServiceSection id="services" />
    <SliderDisplay />
  </main>
</template>

<script setup lang="ts">
import HeroSection from '@/components/a01/HeroSection.vue'
import InstagramSection from '@/components/a01/InstagramSection.vue'
import PostSection from '@/components/a01/PostSection.vue'
import ServiceSection from '@/components/a01/ServiceSection.vue'
import SliderDisplay from '@/components/a01/SliderDisplay.vue'
import { onMounted } from 'vue'
</script>
