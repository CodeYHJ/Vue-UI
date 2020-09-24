<template>
  <div :class="clsStr" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { createClass } from '@/util';

type Num =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

interface ColProps {
  span?: Num;
  offset?: Num;
  sm?: Num;
  md?: Num;
  lg?: Num;
  xl?: Num;
}

export default defineComponent({
  name: 'Col',
  setup(props: ColProps) {
    const cls = createClass('col');

    // eslint-disable-next-line vue/no-setup-props-destructure
    const { span = 24, offset = 0, sm = 0, md = 0, lg = 0, xl = 0 } = props;

    const colSpan = cls(String(span));

    let offsetClass;

    let smClass;

    let mdClass;

    let lgClass;

    let xlClass;

    if (offset) {
      offsetClass = cls(`offset-${offset}`);
    }

    // > 576px
    if (sm) {
      smClass = cls(`sm-${sm}`);
    }

    // > 768px
    if (md) {
      mdClass = cls(`md-${md}`);
    }

    // > 992px
    if (lg) {
      lgClass = cls(`lg-${lg}`);
    }

    // > 1200px
    if (xl) {
      xlClass = cls(`xl-${xl}`);
    }

    const clsStr = [
      cls(),
      colSpan,
      offsetClass,
      smClass,
      mdClass,
      lgClass,
      xlClass
    ]
      .filter(Boolean)
      .join(' ');

    return { clsStr };
  }
});
</script>

<style lang="less">
@import './style/Col';
</style>
