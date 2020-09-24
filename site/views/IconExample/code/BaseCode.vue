<template>
  <div>
    <CancelIcon />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { CancelIcon } from '@/Icon';

export default defineComponent({
  name: 'BaseCode',
  components: { CancelIcon }
});
</script>
