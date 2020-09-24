<template>
  <div :class="className" :style="rowStyleStr">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, cloneVNode } from 'vue';

import { createClass } from '@/util';

interface RowProps {
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  gutter?: number | number[];
  align?: 'top' | 'middle' | 'bottom';
}

export default defineComponent({
  name: 'Row',
  setup(props: RowProps, { slots }) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const { gutter, justify, align } = props;

    const cls = createClass('row');

    let rowStyleStr = {};

    let colStyleStr = {};

    let justifyCls;

    if (gutter) {
      if (typeof gutter === 'number') {
        const padLR = Math.floor(gutter / 2);

        rowStyleStr = { marginLeft: `-${padLR}px`, marginRight: `-${padLR}px` };

        colStyleStr = { paddingLeft: `${padLR}px`, paddingRight: `${padLR}px` };
      } else if (Array.isArray(gutter)) {
        const padLR = Math.floor(gutter[0] / 2);

        const padTB = Math.floor(gutter[1] / 2);

        rowStyleStr = { margin: `-${padTB}px -${padLR}px ${padTB}px` };

        colStyleStr = { padding: `${padTB}px ${padLR}px` };
      }
    }

    if (justify) {
      switch (justify) {
        case 'start':
          justifyCls = cls('justify-start');

          break;

        case 'center':
          justifyCls = cls('justify-center');

          break;

        case 'end':
          justifyCls = cls('justify-end');

          break;

        case 'space-around':
          justifyCls = cls('justify-space-around');

          break;

        case 'space-between':
          justifyCls = cls('justify-space-between');

          break;

        default:
          justifyCls = '';
      }
    }

    if (align) {
      switch (align) {
        case 'top':
          justifyCls = cls('align-top');

          break;

        case 'middle':
          justifyCls = cls('align-middle');

          break;

        case 'bottom':
          justifyCls = cls('align-bottom');

          break;

        default:
          justifyCls = '';
      }
    }

    const className = [cls(), justifyCls, align].filter(Boolean).join(' ');

    const childrens = slots.default && slots.default();

    if (Array.isArray(childrens)) {
      childrens.forEach(vnode => {
        cloneVNode(vnode, { style: colStyleStr });
      });
    }

    return {
      className,
      rowStyleStr
    };
  }
});
</script>

<style lang="less">
@import './style/Row';
</style>
