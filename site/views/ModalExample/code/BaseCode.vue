<template>
  <Modal headerText="基本" :visible="visible" :closeFn="closeVisible"
    >Modal</Modal
  >
  <Button type="primary" @click="openVisible"> open Modal</Button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Modal from '@/Modal';

export default defineComponent({
  name: 'BaseCode',
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
