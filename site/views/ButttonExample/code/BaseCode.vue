<template>
  <div>
    <Button type="default">default</Button>

    <Button type="dashed">dashed</Button>

    <Button type="primary">primary</Button>

    <Button type="danger">danger</Button>

    <Button type="warn">warn</Button>

    <Button type="success">success</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Button } from '@/index';

interface BaseCodeProps {}

export default defineComponent({
  name: 'BaseCode',
  componets: { Button }
});
</script>
