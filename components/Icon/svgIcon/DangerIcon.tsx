import { defineComponent, h } from 'vue';

import { createClass } from '@/util';

import { dangerInfo } from '../iconInfo/dangerInfo';

export default defineComponent({
  name: 'DangerIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = dangerInfo.path.map((d: string) =>
      h('path', { d, key: dangerInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...dangerInfo.attributes }, childrenList);
  }
});
