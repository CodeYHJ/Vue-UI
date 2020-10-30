import { defineComponent, PropType, toRefs } from 'vue';

import { createClass } from '@/util';

import { LoadingIcon } from '@/Icon';

import './style/index.less';

type ButtonType =
  | 'primary'
  | 'danger'
  | 'warn'
  | 'default'
  | 'success'
  | 'dashed';

export default defineComponent({
  name: 'Button',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    pre: {
      type: Function
    },
    onClick: {
      type: Function
    }
  },
  setup(props, { slots }) {
    const cls = createClass('button');

    const { type, disabled, loading, pre, onClick } = toRefs(props);

    const defaultCls = [cls(), cls(type.value)];

    if (disabled.value) {
      if (type.value === 'dashed') {
        defaultCls.push(cls('dashed-disabled'));
      } else {
        defaultCls.push(cls('disabled'));
      }
    }

    const resultCls = defaultCls.filter(Boolean).join(' ');

    const handleClick = (e: MouseEvent) => {
      if (!disabled.value && onClick) {
        onClick.value && onClick.value(e);
      }
    };

    const loadingSvg = () => (
      <div class={cls('loading')}>
        <LoadingIcon />
      </div>
    );

    const renderIcon = () => {
      if (disabled.value) return null;

      if (loading.value) {
        return loadingSvg();
      }

      if (pre) {
        const preCom = pre.value && pre.value();

        if (preCom.render) {
          return <div class={cls('preIcon')}>{preCom.render()}</div>;
        } else if (!preCom.render) {
          return <div class={cls('preIcon')}>{preCom}</div>;
        }
      }

      return null;
    };

    return () => (
      <button type="button" class={resultCls} onClick={handleClick}>
        {renderIcon()}
        <span> {slots.default && slots.default()} </span>
      </button>
    );
  },
});
