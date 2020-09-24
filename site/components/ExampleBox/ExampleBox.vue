<template>
  <div :class="cls()">
    <section :class="cls('demo')">
      <slot />
    </section>
    <section :class="cls('meta')">
      <div :class="cls('title')">{{ title }}</div>
      <div :class="cls('description')">{{ description }}</div>
    </section>
    <PrismComponent :class="cls('prism-code')">{{ code }}</PrismComponent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { createClass } from '../../util';

import PrismComponent from '../PrismComponent/PrismComponent';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ExampleBoxProps {
  code: string;
  title: string;
  description: string;
}

export default defineComponent({
  name: 'ExampleBox',
  props: ['title', 'code', 'description'],
  components: { PrismComponent },
  setup() {
    const cls = createClass('exampleBox');

    return { cls };
  }
});
</script>

<style lang="less">
@import './index';
</style>
