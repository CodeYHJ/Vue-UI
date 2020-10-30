import { defineComponent, h, SVGAttributes } from 'vue';

import { createClass } from '@/util';

import { cancelInfo } from '../iconInfo/cancelInfo';

export type CancelIconProps = SVGAttributes;

export default defineComponent<CancelIconProps>({
  name: 'CancelIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = cancelInfo.path.map((d: string) =>
      h('path', { class: cls(), d, key: cancelInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...cancelInfo.attributes }, childrenList);
  }
});
