<template>
  <div>
    <Button type="danger" :pre="preIcon">
      danger
    </Button>

    <Button
      type="primary"
      :pre="preIcon"
      :loading="loading"
      @click="handleClick"
    >
      primary
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { CancelIcon } from '@/Icon';

export default defineComponent({
  name: 'PreFixCode',
  setup() {
    const preIcon = () => CancelIcon;

    const loading = ref<boolean>(false);

    const handleClick = () => {
      loading.value = !loading.value;
    };

    return { preIcon, loading, handleClick };
  }
});
</script>

<style lang="less"></style>
