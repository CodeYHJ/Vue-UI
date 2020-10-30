import { defineComponent, h, SVGAttributes } from 'vue';

import { createClass } from '@/util';

import { loadingInfo } from '../iconInfo/loadingInfo';

export type LoadingIconProps = SVGAttributes;

export default defineComponent<LoadingIconProps>({
  name: 'LoadingIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = loadingInfo.path.map((d: string) =>
      h('path', { class: cls(), d, key: loadingInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...loadingInfo.attributes }, childrenList);
  }
});
