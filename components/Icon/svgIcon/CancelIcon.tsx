import { defineComponent, h } from 'vue';

import { createClass } from '@/util';

import { cancelInfo } from '../iconInfo/cancelInfo';

export default defineComponent({
  name: 'CancelIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = cancelInfo.path.map((d: string) =>
      h('path', { d, key: cancelInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...cancelInfo.attributes }, childrenList);
  }
});
