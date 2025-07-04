
<script setup>
  import { useRouter } from 'vue-router'
  import LogoAnimation from '@/components/LogoAnimation.vue'
  
  const router = useRouter()
  function goNext() {
    router.push({ name: 'layer01' })
  }
</script>

<template>
    <div
      class="fixed inset-0 bg-near-black flex items-center justify-center z-50"
      @click="goNext"
    >
      <LogoAnimation />
    </div>
</template>