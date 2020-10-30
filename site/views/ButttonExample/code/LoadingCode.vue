<template>
  <div>
    <Button type="danger" loading>danger</Button>

    <Button type="primary" :loading="loading">primary</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { Button } from '@/index';

interface LoadingCodeProps {}

export default defineComponent({
  name: 'LoadingCode',
  componets: { Button },
  setup() {
    const loading = ref<boolean>(false);

    return { loading };
  }
});
</script>
