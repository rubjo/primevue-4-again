<template>
  <div class="navbar">
    <div class="col-fixed px-3">
      <h2 class="select-none cursor-pointer">Vue DevTools 7 crash</h2>
    </div>
    <div class="col"></div>
    <div class="col-fixed text-right">
      <!-- <Test /> -->
      <Button class="p-button-text">
        <span> Profile </span>
      </Button>
    </div>
  </div>
</template>

<script setup>
// import Test from '@/components/Test.vue'
import Button from 'primevue/button'
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  z-index: 1000;
  display: flex;
  width: 100%;
  height: 3.5rem;
  align-items: center;
  background-color: #004027;
  color: #fff;
}
</style>
