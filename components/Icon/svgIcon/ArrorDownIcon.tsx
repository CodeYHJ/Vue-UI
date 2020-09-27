import { defineComponent, h, SVGAttributes } from 'vue';

import { createClass } from '@/util';

import { arrorDownInfo } from '../iconInfo/arrorDownInfo';

export type ArrorDownIconProps = SVGAttributes;

export default defineComponent<ArrorDownIconProps>({
  name: 'ArrorDownIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = arrorDownInfo.path.map((d: string) =>
      h('path', { d, key: arrorDownInfo.attributes.key + d })
    );

    return h(
      'svg',
      { class: cls(), ...arrorDownInfo.attributes },
      childrenList
    );
  }
});
