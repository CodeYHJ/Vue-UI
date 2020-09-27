import I from './LocalIcon';

import c from './createIcon';

export * from './svgIcon/index';

type IconType = typeof I & { createIcon: typeof c };

const Icon = I as IconType;

Icon.createIcon = c;

export default Icon;
