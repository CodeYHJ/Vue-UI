import { defineComponent, h, SVGAttributes } from 'vue';

import { createClass } from '@/util';

import { arrorLeftInfo } from '../iconInfo/arrorLeftInfo';

export type ArrorLeftIconProps = SVGAttributes;

export default defineComponent<ArrorLeftIconProps>({
  name: 'ArrorLeftIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = arrorLeftInfo.path.map((d: string) =>
      h('path', { class: cls(), d, key: arrorLeftInfo.attributes.key + d })
    );

    return h(
      'svg',
      { class: cls(), ...arrorLeftInfo.attributes },
      childrenList
    );
  }
});
