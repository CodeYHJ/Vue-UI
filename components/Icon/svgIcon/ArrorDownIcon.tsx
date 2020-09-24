import { defineComponent, h } from 'vue';

import { createClass } from '@/util';

import { arrorDownInfo } from '../iconInfo/arrorDownInfo';

export default defineComponent({
  name: 'ArrorDownIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = arrorDownInfo.path.map((d: string) =>
      h('path', { d, key: arrorDownInfo.attributes.key + d })
    );

    return h(
      'svg',
      { class: cls(), ...arrorDownInfo.attributes },
      childrenList
    );
  }
});
