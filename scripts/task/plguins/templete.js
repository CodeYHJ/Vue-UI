const generateIconInfoTemplete = (svgComponent, content) => {
  const str = `
/* eslint-disable max-len */

import { SvgInfo } from "../svgInfo"

export const ${svgComponent}: SvgInfo =  ${content};

`;

  return str;
};

const greateSvgIconIndexTemplete = content => {
  const str = content;

  return str;
};

const generateIconIndexTemplete = () => {
  const str = `

  import I from './LocalIcon'

  import c from './createIcon'

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
    import { defineComponent, h } from 'vue';

    import { createClass } from '@/util';

    import { ${tsName}Info } from '../iconInfo/${tsName}Info'

    export default defineComponent({
      name: '${componentName}',
      render() {
        const cls = createClass('svg');

        const childrenList = ${tsName}Info.path.map((d: string) =>
          h('path', { d, key: ${tsName}Info.attributes.key + d })
        );

        return h('svg', { class: cls(), ...${tsName}Info.attributes }, childrenList);
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
