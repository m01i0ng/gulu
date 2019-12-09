<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <g-icon v-if="icon" :name="icon" class="icon"></g-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script>
  export default {
    name: 'button',
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
          return value === 'left' || value === 'right'
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    vertical-align: middle;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    > .icon {
      order: 1;
      margin-right: .3em;
      margin-left: 0;
    }

    > .content {
      order: 1;
    }

    &.icon-right {
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .3em;
      }

      > .content {
        order: 1;
      }
    }
  }
</style>
