import { defineComponent, h, SVGAttributes } from 'vue';

import { createClass } from '@/util';

import info from '../iconInfo/arrorRightInfo';

export type ArrorRightIconProps = SVGAttributes;

export default defineComponent({
  name: 'ArrorRightIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = info.path.map((d: string) =>
      h('path', { d, key: info.attributes.key + d })
    );

    return h('svg', { class: cls(), ...info.attributes }, childrenList);
  }
});
