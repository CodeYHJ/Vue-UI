<template>
  <div :class="cls()">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { createClass } from '@/util';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AsideProps {}

export default defineComponent({
  name: 'Aside',
  setup(props: AsideProps) {
    const cls = createClass('layout-aside');

    return { cls };
  }
});
</script>

<style lang="less">
@import './style/index.less';
</style>
