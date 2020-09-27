import { defineComponent, ref } from 'vue';

import "./index.less"

import PrismComponent from '../PrismComponent/PrismComponent';

import { CodeIcon } from '@/Icon';

import { createClass } from '../../util';

export default defineComponent({
  name: 'ExampleBox',
  props: {
    title: String,
    code: String,
    description: String
  },
  components: { PrismComponent },
  setup(props, { slots }) {
    const cls = createClass('exampleBox');

    const open = ref<boolean>(false);

    const openCode = () => {
      open.value = !open.value;
    };

    return () => (
      <div class={cls()}>
        <section class={cls('demo')}>{ slots.default && slots.default()}</section>
        <section class={cls('meta')}>
          <div class={cls('title')}>{props.title}</div>
          <div class={cls('description')}>{props.description}</div>
          <CodeIcon class={cls('codeIcon')} onClick={openCode} />
        </section>
          {open.value ? (
            <PrismComponent class={cls('prism-code')} code={props.code} />
          ) : null}
      </div>
    );
  }
});
