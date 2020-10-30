<template>
  <div>
    <Button type="default" disabled>
      default
    </Button>

    <Button type="dashed" disabled>
      dashed
    </Button>

    <Button type="primary" disabled>
      primary
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { Button } from '@/index';

interface DisabledCodeProps {}

export default defineComponent({
  name: 'DisabledCode',
  componets: { Button }
});
</script>
