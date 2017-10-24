<template>
  <div @scroll="onScroll">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    padTop: {
      type: Number,
      default: 0
    },
    padBottom: {
      type: Number,
      default: 0
    },
    once: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      hit: false
    }
  },
  methods: {
    onScroll(e) {
      if (e.target.scrollTop >= (e.target.scrollHeight - e.target.offsetHeight) - this.padBottom) {
        if (this.hit && this.once) return;
        this.hit = true;
        this.$emit('scrolledBottom', e);
      } else if (e.target.scrollTop <= this.padTop) {
        if (this.hit && this.once) return;
        this.hit = true;
        this.$emit('scrolledTop', e);
      } else {
        this.hit = false;
      }
      this.$emit('scroll', e);
    }
  }
}
</script>