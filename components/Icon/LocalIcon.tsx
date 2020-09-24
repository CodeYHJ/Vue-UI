import { defineComponent } from 'vue';

import { createClass } from '@/util';

import './style/index.less';

export default defineComponent({
  name: 'LocalIcon',
  props: {
    name: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    const cls = createClass('svg');

    const name = `#${props.name}`;

    console.log(props, '3333');

    return () => (
      <svg class={cls()}>
        <use href={name} />
      </svg>
    );
  },
});
