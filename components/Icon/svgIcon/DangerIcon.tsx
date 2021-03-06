import { defineComponent, h, SVGAttributes } from 'vue';

import { createClass } from '@/util';

import { dangerInfo } from '../iconInfo/dangerInfo';

export type DangerIconProps = SVGAttributes;

export default defineComponent<DangerIconProps>({
  name: 'DangerIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = dangerInfo.path.map((d: string) =>
      h('path', { class: cls(), d, key: dangerInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...dangerInfo.attributes }, childrenList);
  }
});
