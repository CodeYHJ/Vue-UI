import { defineComponent, h, SVGAttributes } from 'vue';

import { createClass } from '@/util';

import { codeInfo } from '../iconInfo/codeInfo';

export type CodeIconProps = SVGAttributes;

export default defineComponent<CodeIconProps>({
  name: 'CodeIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = codeInfo.path.map((d: string) =>
      h('path', { class: cls(), d, key: codeInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...codeInfo.attributes }, childrenList);
  }
});
