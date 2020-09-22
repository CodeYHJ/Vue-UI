<template>
  <div :class="cls()">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { createClass } from '@/util';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface FooterProps {}

export default defineComponent({
  name: 'Footer',
  setup(props: FooterProps) {
    const cls = createClass('layout-footer');

    return { cls };
  }
});
</script>

<style lang="less">
@import './style/index.less';
</style>
