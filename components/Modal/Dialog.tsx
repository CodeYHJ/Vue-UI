import { defineComponent, Teleport, Transition } from 'vue';

import { Button } from '../index';

import { createClass } from '@/util';

import { CancelIcon } from '../../components/Icon/svgIcon';

import './style/Dialog.less';

export default defineComponent({
  name: 'Dialog',
  components: { Button, CancelIcon },
  props: {
    maskClosable: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false,
      require: true
    },
    closeFn: {
      type: Function,
      require: true
    },
    headerText: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: 'ok'
    },
    cancelText: {
      type: String,
      default: 'cancel'
    },
    successFn: {
      type: Function
    },
    cancelFn: {
      type: Function
    }
  },
  setup(props, { slots }) {

    const cls = createClass('dialog');

    const closeMask = () => {
      if (props.maskClosable) return;

      props.closeFn && props.closeFn();
    };

    const sucess = () => {
      props.closeFn && props.closeFn();

      props.successFn && props.successFn();
    };

    const cancel = () => {
      props.closeFn && props.closeFn();

      props.cancelFn && props.cancelFn();
    };

    const renderMask = () => {
      return (
        <Transition name="mask">
          <div class={cls('mask')} onClick={closeMask}></div>
        </Transition>
      );
    };

    const renderCloseIcon = () => {
      return (
        <div class={cls('close')} onClick={closeMask}>
          <CancelIcon />
        </div>
      );

    };

    const renderHeaderText = () => {
      return <div class={cls('header')}>{props.headerText}</div>;
    };

    const handleFooter = () => {
      const footer = slots.footer ? slots.footer() : null;

      if (!footer) {
        return (
          <>
            <Button type="default" class={cls('cancel')} onClick={cancel}>
              {props.cancelText}
            </Button>
            <Button type="primary" class={cls('ok')} onClick={sucess}>
              {props.okText}
            </Button>
          </>
        );
      }

      return footer;
    };

    const renderContent = () => {
      return <div class={cls()} >
        <div class={cls('box')}>
          {!props.closable && renderCloseIcon()}
          {props.headerText !== '' && renderHeaderText()}
          <main class={cls('main')}>
            {slots.default && slots.default()}
          </main>
          <div class={cls('footer')}>
            {handleFooter()}
          </div>
        </div>
      </div>
    };

    return () => (
      <Teleport to="body">
        {props.visible && renderMask()}
        <Transition name="box">
          {props.visible && renderContent()}
        </Transition>
      </Teleport>
    )


  }
});
