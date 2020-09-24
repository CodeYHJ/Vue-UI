import { defineComponent, h } from 'vue';

import { createClass } from '@/util';

import { loadingInfo } from '../iconInfo/loadingInfo';

export default defineComponent({
  name: 'LoadingIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = loadingInfo.path.map((d: string) =>
      h('path', { d, key: loadingInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...loadingInfo.attributes }, childrenList);
  }
});
