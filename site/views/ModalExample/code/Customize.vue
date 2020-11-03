<template>
  <Modal
    headerText="基本"
    closable
    maskClosable
    :visible="visible"
    :closeFn="closeVisible"
  >
    Modal
    <template v-slot:footer>
      <Button type="primary" @click="closeVisible">Close</Button>
    </template>
  </Modal>

  <Button type="primary" @click="openVisible"> open Modal</Button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Modal from '@/Modal';

export default defineComponent({
  name: 'Customize',
  components: { Modal },
  setup() {
    const visible = ref(false);

    const openVisible = () => {
      visible.value = false;
    };

    const closeVisible = () => {
      visible.value = false;
    };

    return { visible, openVisible, closeVisible };
  }
});
</script>
