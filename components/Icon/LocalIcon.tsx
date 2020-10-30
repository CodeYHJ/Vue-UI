import { defineComponent, SVGAttributes, toRefs } from 'vue';

import { createClass } from '@/util';

import './style/index.less';

interface LocalIconProps extends SVGAttributes {
  name: string;
}

export default defineComponent<LocalIconProps>({
  name: 'LocalIcon',
  setup(props, { attrs }) {
    const cls = createClass('svg');

    const getAttrs = toRefs(attrs as Record<string, string>);

    const name = getAttrs.name;

    return () => (
      <svg class={cls()}>
        <use href={'#' + name.value} />
      </svg>
    );
  }
});
