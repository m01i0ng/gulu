<template>
  <div class="g-button-group">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: 'button-group',
    mounted () {
      for (let child of this.$el.children) {
        if (child.nodeName.toLocaleLowerCase() !== 'button') { console.warn('g-button-group 子元素必须全是 g-button') }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .g-button-group {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    > .g-button {
      border-radius: 0;
      margin-left: -1px;

      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }

      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }

      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
