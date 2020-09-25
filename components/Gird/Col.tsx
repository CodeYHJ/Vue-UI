import { defineComponent, PropType } from 'vue';

import { createClass } from '@/util';

import './style/Col.less';

type Num =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;

const Col = defineComponent({
  name: 'Col',
  props: {
    span: { type: Number as PropType<Num> },
    offset: { type: Number as PropType<Num> },
    sm: { type: Number as PropType<Num> },
    md: { type: Number as PropType<Num> },
    lg: { type: Number as PropType<Num> },
    xl: { type: Number as PropType<Num> }
  },
  setup(props) {
    const cls = createClass('col');

    // eslint-disable-next-line vue/no-setup-props-destructure
    const { span = 24, offset = 0, sm = 0, md = 0, lg = 0, xl = 0 } = props;

    const colSpan = cls(String(span));

    let offsetClass;

    let smClass;

    let mdClass;

    let lgClass;

    let xlClass;

    if (offset) {
      offsetClass = cls(`offset-${offset}`);
    }

    // > 576px
    if (sm) {
      smClass = cls(`sm-${sm}`);
    }

    // > 768px
    if (md) {
      mdClass = cls(`md-${md}`);
    }

    // > 992px
    if (lg) {
      lgClass = cls(`lg-${lg}`);
    }

    // > 1200px
    if (xl) {
      xlClass = cls(`xl-${xl}`);
    }

    const clsStr = [
      cls(),
      colSpan,
      offsetClass,
      smClass,
      mdClass,
      lgClass,
      xlClass,
    ]
      .filter(Boolean)
      .join(' ');

    return { clsStr };
  },
  render() {
    const { clsStr } = this;

    const childrens = this.$slots.default && this.$slots.default();

    return <div class={clsStr}>{childrens}</div>;
  },
});

export default Col;
