import { defineComponent, ref,VNodeProps } from 'vue';

import PrismComponent from '../PrismComponent/PrismComponent';

import { CodeIcon } from '@/Icon';

import { createClass } from '../../util';

export default defineComponent({
  name: 'ExampleBox',
  props: {
    title: {
      type: String,
      require: true
    },
    code: {
      type: String,
      require: true
    },
    description: {
      type: String,
      require: true
    }
  },
  setup() {
    const cls = createClass('exampleBox');

    const open = ref<boolean>(false);

    const openCode = () => {
      open.value = !open.value;
    };

    return { cls, open, openCode };
  },
  render() {
    const { cls, open, openCode, title, description, code } = this;

    const childrens = this.$slots.default && this.$slots.default();

    return (
      <div class={cls()}>
        <section class={cls('demo')}>{childrens}</section>
        <section class={cls('meta')}>
          <div class={cls('title')}>{{ title }}</div>
          <div class={cls('description')}>{{ description }}</div>
          <CodeIcon class={cls('codeIcon')} onClick={openCode} />
        </section>
        <transition name="transition">
          <PrismComponent class={cls('prism-code')} v-if={open}>
            {{ code }}
          </PrismComponent>
        </transition>

      </div>
    );
  }
});
