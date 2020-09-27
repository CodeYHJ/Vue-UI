import { defineComponent, h, SVGAttributes } from 'vue';

import { createClass } from '@/util';

import { passwordInfo } from '../iconInfo/passwordInfo';

export type PasswordIconProps = SVGAttributes;

export default defineComponent<PasswordIconProps>({
  name: 'PasswordIcon',
  render() {
    const cls = createClass('svg');

    const childrenList = passwordInfo.path.map((d: string) =>
      h('path', { d, key: passwordInfo.attributes.key + d })
    );

    return h('svg', { class: cls(), ...passwordInfo.attributes }, childrenList);
  }
});
