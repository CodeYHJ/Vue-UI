import { defineComponent, h } from 'vue';

import { createClass } from '@/util';

import { codeInfo } from '../iconInfo/codeInfo';

export default defineComponent({
  name: 'CodeIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = codeInfo.path.map((d: string) =>
      h('path', { d, key: codeInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...codeInfo.attributes }, childrenList);
  }
});
