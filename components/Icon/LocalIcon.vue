<template>
  <svg :class="cls">
    <use :xlinkHref="`#${name}`" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { createClass } from '@/util';

export default defineComponent({
  name: 'LocalIcon',
  props: { name: { type: String, require: true } },
  setup() {
    const cls = createClass('svg');

    return { cls };
  }
});
</script>

<style lang="less">
@import './style/index';
</style>
