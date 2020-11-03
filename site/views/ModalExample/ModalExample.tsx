import { defineComponent, ref } from 'vue';

import { createClass } from '../../util';

import { Modal } from '../../../components/index';

import { Button } from '../../../components/index';

import ExampleBox from '../../components/ExampleBox/ExampleBox';

import "./index.less";

export default defineComponent({
  name: 'ModalExample',
  setup() {
    const cls = createClass('modal');

    const showModal = ref(false);

    const showModal1 = ref(false);

    const showModal2 = ref(false);

    const openVisible = () => {
      showModal.value = true;
    };

    const closeVisible = () => {
      showModal.value = false;
    };

    const openVisible1 = () => {
      showModal1.value = true;
    };

    const closeVisible1 = () => {
      showModal1.value = false;
    };

    const slots = { footer: () => <Button type="primary" onClick={openVisible1}>OK</Button> }

    return () => (
      <div class={cls()}>
        <section>
          <h1 class={cls('title')}>Modal</h1>
          <p class={cls('p')}>对话框</p>
        </section>
        <section>
          <h1 class={cls('title')}>何时使用</h1>
          <p class={cls('p')}>
            避免打断用户操作流程，可以使用Modal交互来处理相关事情
        </p>
        </section>
        <section>
          <h2 class={cls('title')}>代码示例</h2>
          <ExampleBox
            title="基本"
            description="组件方式使用，通过控制visible属性来显示or隐藏"
          >
            <Modal
              headerText="基本"
              visible={showModal.value}
              closeFn={closeVisible}
            >Modal</Modal>
            <Button type="primary" onClick={openVisible}> open Modal</Button>
          </ExampleBox>
        </section>
        <section>
          <ExampleBox
            title="自定义"
            description="自定义header、footer。不需要header可不传"
          >
            <Modal
              visible={showModal1.value}
              closeFn={closeVisible1}
              closable
              maskClosable
              v-slot={slots}
            >
              Modal
            </Modal>
            <Button type="primary" onClick={openVisible1}> open Modal</Button>
          </ExampleBox>
        </section>
      </div >
    )
  }
})
