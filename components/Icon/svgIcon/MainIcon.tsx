import { defineComponent, h } from 'vue';

import { createClass } from '@/util';

import { mainInfo } from '../iconInfo/mainInfo';

export default defineComponent({
  name: 'MainIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = mainInfo.path.map((d: string) =>
      h('path', { d, key: mainInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...mainInfo.attributes }, childrenList);
  }
});
