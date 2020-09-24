const generateIconInfoTemplete = (svgComponent, content) => {
  const str = `
/* eslint-disable max-len */

import { SvgInfo } from "../svgInfo"

const ${svgComponent}: SvgInfo =  ${content};

export default  ${svgComponent};

`;

  return str;
};

const greateSvgIconIndexTemplete = content => {
  const str = content;

  return str;
};

const generateIconIndexTemplete = () => {
  const str = `

  import I from './LocalIcon.vue'

  import c from './createIcon.vue'

  export * from './svgIcon'

  type IconType = typeof I & { createIcon: typeof c }

  const Icon = I as IconType

  Icon.createIcon = c

  export default Icon

  `;

  return str;
};

const generateIconBaseTemplete = (tsName, componentName) => {
  const str = `
    import { defineComponent, h, SVGAttributes } from 'vue';

    import { createClass } from '@/util';

    import info from '../iconInfo/${tsName}Info'

    export interface ${componentName}Props extends SVGAttributes {}

    export default defineComponent({
      name: '${componentName}',
      render() {
        const cls = createClass('svg');

        const childrenList = info.path.map((d: string) =>
          h('path', { d, key: info.attributes.key + d })
        );

        return h('svg', { class: cls(), ...info.attributes }, childrenList);
      }
    });

  `;

  return str;
};

const generateIconExportTemplete = iconName => {
  const str = `
  export { default as ${iconName} } from "./${iconName}"\n
  `;

  return str;
};

module.exports = {
  generateIconInfoTemplete,
  generateIconIndexTemplete,
  generateIconBaseTemplete,
  generateIconExportTemplete,
  greateSvgIconIndexTemplete
};
