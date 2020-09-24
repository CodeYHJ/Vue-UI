import { defineComponent, h } from 'vue';

import { createClass } from '@/util';

import { successInfo } from '../iconInfo/successInfo';

export default defineComponent({
  name: 'SuccessIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = successInfo.path.map((d: string) =>
      h('path', { d, key: successInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...successInfo.attributes }, childrenList);
  }
});
