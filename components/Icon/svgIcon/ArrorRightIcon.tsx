import { defineComponent, h } from 'vue';

import { createClass } from '@/util';

import { arrorRightInfo } from '../iconInfo/arrorRightInfo';

export default defineComponent({
  name: 'ArrorRightIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = arrorRightInfo.path.map((d: string) =>
      h('path', { d, key: arrorRightInfo.attributes.key + d })
    );

    return h(
      'svg',
      { class: cls(), ...arrorRightInfo.attributes },
      childrenList
    );
  }
});
