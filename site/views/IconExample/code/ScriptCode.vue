<template>
  <div>
    <ScriptIcon name="icon-jianceqi" />

    <ScriptIcon name="icon-jinggai" />

    <ScriptIcon name="icon-liujisuan" />

    <ScriptIcon name="icon-hanshu" />

    <ScriptIcon name="icon-lianjieliu" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Icon from '@/Icon';

const { createIcon } = Icon;

const ScriptIcon = createIcon('url');

export default defineComponent({
  name: 'ScriptCode',
  components: { ScriptIcon }
});
</script>

<style lang="less"></style>
