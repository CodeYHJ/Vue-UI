import { defineComponent, h } from 'vue';

import { createClass } from '@/util';

import { arrorUpInfo } from '../iconInfo/arrorUpInfo';

export default defineComponent({
  name: 'ArrorUpIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = arrorUpInfo.path.map((d: string) =>
      h('path', { d, key: arrorUpInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...arrorUpInfo.attributes }, childrenList);
  }
});
