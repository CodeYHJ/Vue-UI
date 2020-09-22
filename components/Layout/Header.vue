<template>
  <div :class="cls()">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { createClass } from '@/util';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}

export default defineComponent({
  name: 'Header',
  setup(props: HeaderProps) {
    const cls = createClass('layout-header');

    return { cls };
  }
});
</script>

<style lang="less">
@import './style/index.less';
</style>
