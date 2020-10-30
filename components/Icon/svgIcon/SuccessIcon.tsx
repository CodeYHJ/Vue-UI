import { defineComponent, h, SVGAttributes } from 'vue';

import { createClass } from '@/util';

import { successInfo } from '../iconInfo/successInfo';

export type SuccessIconProps = SVGAttributes;

export default defineComponent<SuccessIconProps>({
  name: 'SuccessIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = successInfo.path.map((d: string) =>
      h('path', { class: cls(), d, key: successInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...successInfo.attributes }, childrenList);
  }
});
