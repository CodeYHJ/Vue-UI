import I from './LocalIcon.vue';

import c from './createIcon.vue';

export * from './svgIcon';

type IconType = typeof I & { createIcon: typeof c };

const Icon = I as IconType;

Icon.createIcon = c;

export default Icon;
