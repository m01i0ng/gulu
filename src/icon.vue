<template>
  <svg class="g-icon">
    <use :xlink:href="`#i-${name}`"/>
  </svg>
</template>

<script>
  export default {
    name: 'g-icon',
    props: ['name']
  }
</script>

<style lang="scss" scoped>
  .g-icon {
    width: 1em;
    height: 1em;
  }
</style>
