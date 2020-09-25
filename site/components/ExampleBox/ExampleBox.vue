<template>
  <div :class="cls()">
    <section :class="cls('demo')">
      <slot />
    </section>
    <section :class="cls('meta')">
      <div :class="cls('title')">{{ title }}</div>
      <div :class="cls('description')">{{ description }}</div>
      <CodeIcon :class="cls('codeIcon')" @click="openCode" />
    </section>
    <transition name="transition">
      <PrismComponent :class="cls('prism-code')" v-if="open">{{
        code
      }}</PrismComponent>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { createClass } from '../../util';

import PrismComponent from '../PrismComponent/PrismComponent';

import { CodeIcon } from '@/Icon';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ExampleBoxProps {
  code: string;
  title: string;
  description: string;
}

export default defineComponent({
  name: 'ExampleBox',
  props: ['title', 'code', 'description'],
  components: { PrismComponent, CodeIcon },
  setup() {
    const cls = createClass('exampleBox');

    const open = ref(false);

    const openCode = () => {
      open.value = !open.value;
    };

    return { cls, openCode, open };
  }
});
</script>

<style lang="less">
@import './index';
</style>
