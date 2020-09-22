<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { createClass } from '@/util';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LayoutProps {}

export default defineComponent({
  name: 'Layout',
  setup(props: LayoutProps, { slots }) {
    let hasAside = false;

    const mergeClass = createClass('layout');

    if (slots.default) {
      const childrens = slots.default();

      if (Array.isArray(childrens)) {
        childrens.forEach(vnode => {
          const { type = false } = vnode;

          if (!type) return;

          if (type instanceof Object) {
            if ('name' in type) {
              type.name === 'Aside' ? (hasAside = true) : '';
            }
          }
        });
      }
    }

    const cls = hasAside
      ? [mergeClass(), mergeClass('hasAside')].filter(Boolean).join(' ')
      : mergeClass();

    return { cls };
  }
});
</script>

<style lang="less">
@import './style/index.less';
</style>
