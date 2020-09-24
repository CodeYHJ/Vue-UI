import { defineComponent, h } from 'vue';

import { createClass } from '@/util';

import { arrorLeftInfo } from '../iconInfo/arrorLeftInfo';

export default defineComponent({
  name: 'ArrorLeftIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = arrorLeftInfo.path.map((d: string) =>
      h('path', { d, key: arrorLeftInfo.attributes.key + d })
    );

    return h(
      'svg',
      { class: cls(), ...arrorLeftInfo.attributes },
      childrenList
    );
  }
});
