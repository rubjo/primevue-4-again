<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <component :is="NavBar" />
  <div id="content">
    <StartView />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

import StartView from './views/StartView.vue'

// Dynamically load necessary framework modules
const NavBar = defineAsyncComponent(
  () => import('./components/navigation/NavBar.vue'),
)
</script>

<style lang="scss">
@import './style/app';

#content {
  position: relative;
  top: 3.5rem;
  padding: 1rem;
}
</style>
