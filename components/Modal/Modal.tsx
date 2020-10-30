import { defineComponent } from 'vue'

import Dialog from 'Dialog.vue'

import { DangerIcon, MainIcon, SuccessIcon, WarnIcon } from '../Icon/svgIcon'

import { createClass } from '@/util';

type ModalType = 'info' | 'danger' | 'warn' | 'success';

type ModalProps = {
  mainText: string;
  okText?: string;
}

const cls = createClass('modal');

const createIcon = (type: ModalType) => {
  if (type === 'danger') {
    return <DangerIcon class={cls('icon')} />;
  }

  if (type === 'info') {
    return <MainIcon class={cls('icon')} />;
  }

  if (type === 'success') {
    return <SuccessIcon class={cls('icon')} />;
  }

  if (type === 'warn') {
    return <WarnIcon class={cls('icon')} />;
  }

  return <MainIcon class={cls('icon')} />;
};
const Modal = defineComponent({
  components: { Dialog },
  render() {
    return (
      <Dialog visible={true}>

      </Dialog>
    )
  }
})


export default Modal;
