import r from './Row.vue';

import c from './Col.vue';

type RowType = typeof r & { Col: typeof c };

const Row = r as RowType;

Row.Col = c;

export default Row;
