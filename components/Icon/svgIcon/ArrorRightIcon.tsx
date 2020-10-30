import { defineComponent, h, SVGAttributes } from 'vue';

import { createClass } from '@/util';

import { arrorRightInfo } from '../iconInfo/arrorRightInfo';

export type ArrorRightIconProps = SVGAttributes;

export default defineComponent<ArrorRightIconProps>({
  name: 'ArrorRightIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = arrorRightInfo.path.map((d: string) =>
      h('path', { class: cls(), d, key: arrorRightInfo.attributes.key + d })
    );

    return h(
      'svg',
      { class: cls(), ...arrorRightInfo.attributes },
      childrenList
    );
  }
});
