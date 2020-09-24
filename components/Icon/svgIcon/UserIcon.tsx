import { defineComponent, h } from 'vue';

import { createClass } from '@/util';

import { userInfo } from '../iconInfo/userInfo';

export default defineComponent({
  name: 'UserIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = userInfo.path.map((d: string) =>
      h('path', { d, key: userInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...userInfo.attributes }, childrenList);
  }
});
