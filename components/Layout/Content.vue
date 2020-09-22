<template>
  <div :class="cls()">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { createClass } from '@/util';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ContentProps {}

export default defineComponent({
  name: 'Content',
  setup(props: ContentProps) {
    const cls = createClass('layout-content');

    return { cls };
  }
});
</script>

<style lang="less">
@import './style/index.less';
</style>
