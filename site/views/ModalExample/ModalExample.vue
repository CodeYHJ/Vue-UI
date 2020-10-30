<template>
  <div :class="cls()">
    <section>
      <h1 :class="cls('title')">Modal</h1>
      <p :class="cls('p')">对话框</p>
    </section>
    <section>
      <h1 :class="cls('title')">何时使用</h1>
      <p :class="cls('p')">
        避免打断用户操作流程，可以使用Modal交互来处理相关事情
      </p>
    </section>
    <section>
      <h2 :class="cls('title')">代码示例</h2>
      <ExampleBox
        title="基本"
        description="组件方式使用，通过控制visible属性来显示or隐藏"
      >
        <Dialog
          headerText="基本"
          :visible="showModal"
          @update-visible="updateVisible"
          >Modal</Dialog
        >
        <Button type="primary" @click="updateVisible"> open Modal</Button>
      </ExampleBox>
    </section>
    <section>
      <ExampleBox
        title="自定义"
        description="自定义header、footer。不需要header可不传"
      >
        <Dialog
          :visible="showModal1"
          @update-visible="updateVisible1"
          closable
          maskClosable
        >
          Modal
          <template v-slot:footer>
            <Button type="primary" @click="updateVisible1">OK</Button>
          </template>
        </Dialog>
        <Button type="primary" @click="updateVisible1"> open Modal</Button>
      </ExampleBox>
    </section>

    <section>
      <ExampleBox
        title="自定义"
        description="自定义header、footer。不需要header可不传"
      >
        <Dialog
          :visible="showModal1"
          @update-visible="updateVisible1"
          closable
          maskClosable
        >
          Modal
          <template v-slot:footer>
            <Button type="primary" @click="updateVisible1">OK</Button>
          </template>
        </Dialog>
        <Button type="primary" @click="updateVisible1"> open Modal</Button>
      </ExampleBox>
    </section>
  </div>
</template>

<script lang="ts">
import { createClass } from '../../util';

import { defineComponent, ref } from 'vue';

import Dialog from '../../../components/Modal/Dialog.vue';

import { Button } from '../../../components/index';

export default defineComponent({
  name: 'ModalExample',
  components: { Dialog, Button },
  setup() {
    const cls = createClass('modal');

    const showModal = ref(false);

    const showModal1 = ref(false);

    const updateVisible = () => {
      showModal.value = !showModal.value;
    };

    const updateVisible1 = () => {
      showModal1.value = !showModal1.value;
    };

    return { cls, showModal, showModal1, updateVisible, updateVisible1 };
  }
});
</script>
