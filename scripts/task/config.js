const paths = {
  dest: {
    lib: '../lib',
    esm: '../esm',
    distInfo: './dist/iconInfo',
    distIcon: './dist/svgIcon',
    distTs: './dist',
    index: './dist',
    iconLib: '../components/Icon'
  },
  entry: {
    ts: './task/plguins/svgInfo.ts',
    distInfo: './dist/iconInfo/*.ts',
    distIcon: './dist/svgIcon/*.tsx',
    distSvg: './dist/**/*.{ts,tsx}',
    svg: './assect/svg/*.svg',
    testSvg: './assect/svg/password.svg'
  },

  styles: '../components/**/*.less',
  scripts: ['../components/**/*.{ts,tsx}', '!../components/**/__test__/**'],

  svgConfig: {
    plugins: [
      { removeStyleElement: true },
      { cleanupAttrs: true },
      { removeDoctype: true },
      { removeXMLProcInst: true },
      { removeXMLNS: true },
      { removeComments: true },
      { removeMetadata: true },
      { removeTitle: true },
      { removeDesc: true },
      { removeUselessDefs: true },
      { removeEditorsNSData: true },
      { removeEmptyAttrs: true },
      { removeHiddenElems: true },
      { removeEmptyText: true },
      { removeEmptyContainers: true },
      { removeViewBox: false },
      { cleanupEnableBackground: true },
      { convertStyleToAttrs: true },
      { convertColors: true },
      { convertPathData: true },
      { convertTransform: true },
      { removeUnknownsAndDefaults: true },
      { removeNonInheritableGroupAttrs: true },
      { removeUselessStrokeAndFill: true },
      { removeUnusedNS: true },
      { cleanupIDs: true },
      { cleanupNumericValues: true },
      { moveElemsAttrsToGroup: true },
      { moveGroupAttrsToElems: true },
      { collapseGroups: true },
      { removeRasterImages: false },
      { mergePaths: true },
      { convertShapeToPath: true },
      { sortAttrs: true },
      { removeDimensions: true }
    ]
  }
};

module.exports = { paths };
