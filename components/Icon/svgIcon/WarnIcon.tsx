import { defineComponent, h, SVGAttributes } from 'vue';

import { createClass } from '@/util';

import { warnInfo } from '../iconInfo/warnInfo';

export type WarnIconProps = SVGAttributes;

export default defineComponent<WarnIconProps>({
  name: 'WarnIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = warnInfo.path.map((d: string) =>
      h('path', { d, key: warnInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...warnInfo.attributes }, childrenList);
  }
});
