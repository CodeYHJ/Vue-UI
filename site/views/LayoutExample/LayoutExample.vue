<template>
  <div :class="cls()">
    <section>
      <h1 :class="cls('title')">Layout布局</h1>
      <p :class="cls('p')">页面整体布局</p>
    </section>
    <section>
      <h2 :class="cls('title')">组件成员</h2>
      <p :class="cls('p')">
        <strong>Layout</strong
        >、<strong>Header</strong>、<strong>Content</strong>、<strong
          >Footer</strong
        >
      </p>
      <p :class="cls('p')">
        <strong>Layout</strong> ：只可嵌套Layout、Header、Content、Footer本身
      </p>
      <p :class="cls('p')"><strong>Header</strong> ：可嵌套任何元素</p>
      <p :class="cls('p')"><strong>Content</strong> ：可嵌套任何元素</p>
      <p :class="cls('p')"><strong>Footer</strong> ：只可嵌套任何元素</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { createClass } from '../util';

export default defineComponent({
  name: 'LayoutExample',

  setup() {
    const cls = createClass('layout');

    return { cls };
  }
});
</script>
