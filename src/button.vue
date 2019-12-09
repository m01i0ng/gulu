<template>
  <button
    :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click')"
    class="g-button"
  >
    <g-icon class="loading icon" name="loading" v-if="loading"></g-icon>
    <g-icon :name="icon" class="icon" v-if="icon && !loading"></g-icon>
    <div class="content">
      <slot/>
    </div>
  </button>
</template>

<script>
  import Icon from './icon'

  export default {
    name: 'g-button',
    components: {
      'g-icon': Icon
    },
    props: {
      icon: {},
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
          return value === 'left' || value === 'right'
        }
      },
      loading: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

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
      margin-right: .1em;
    }

    > .content {
      order: 2;
    }

    &.icon-right {
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .1em;
      }

      > .content {
        order: 1;
      }
    }

    .loading {
      animation: spin 2s infinite linear;
    }
  }
</style>
