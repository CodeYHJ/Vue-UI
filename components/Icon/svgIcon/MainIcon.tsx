import { defineComponent, h, SVGAttributes } from 'vue';

import { createClass } from '@/util';

import info from '../iconInfo/mainInfo';

export type MainIconProps = SVGAttributes;

export default defineComponent({
  name: 'MainIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = info.path.map((d: string) =>
      h('path', { d, key: info.attributes.key + d })
    );

    return h('svg', { class: cls(), ...info.attributes }, childrenList);
  }
});
