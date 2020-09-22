<template>
  <div :class="cls">
    {{ slots }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { createClass } from "@/util";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface LayoutProps {}

export default defineComponent({
  name: "Layout",
  setup() {
    const cls = createClass("layout");

    return { cls };
  }
});
</script>

<style lang="less">
@import "./style/index.less";
</style>
