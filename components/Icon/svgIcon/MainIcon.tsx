import { defineComponent, h, SVGAttributes } from 'vue';

import { createClass } from '@/util';

import { mainInfo } from '../iconInfo/mainInfo';

export type MainIconProps = SVGAttributes;

export default defineComponent<MainIconProps>({
  name: 'MainIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = mainInfo.path.map((d: string) =>
      h('path', { class: cls(), d, key: mainInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...mainInfo.attributes }, childrenList);
  }
});
