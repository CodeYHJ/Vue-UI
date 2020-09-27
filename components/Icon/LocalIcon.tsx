import { defineComponent, SVGAttributes } from 'vue';

import { createClass } from '@/util';

import './style/index.less';

interface LocalIconProps extends SVGAttributes {
  name: string;
}

export default defineComponent<LocalIconProps>({
  name: 'LocalIcon',
  setup(props) {
    const cls = createClass('svg');

    const name = `#${props.name}`;

    console.log(props, '3333');

    return () => (
      <svg class={cls()}>
        <use href={name} />
      </svg>
    );
  }
});
