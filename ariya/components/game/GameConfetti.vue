<template>
  <div aria-hidden="true" class="confetti-layer">
    <div v-for="index in 9" :key="index" class="confetti" />
  </div>
</template>

<style scoped>
.confetti-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}
</style>
