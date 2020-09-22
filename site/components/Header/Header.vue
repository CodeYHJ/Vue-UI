<template>
  <div :class="cls()">
    <span :class="cls('logo')">
      <router-link to="/vue">CodeUI</router-link>
    </span>
    <span :class="cls('component')">
      <router-link to="/vue">组件</router-link>
    </span>

    <span :class="cls('github')">
      <a
        :class="cls('github-link')"
        href="https://github.com/CodeYHJ/Vue-UI"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span :class="cls('github-png')"></span>
      </a>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { createClass } from '../../util';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}

export default defineComponent({
  name: 'Header',
  setup(props: HeaderProps) {
    const cls = createClass('headerPage');

    return { cls };
  }
});
</script>

<style lang="less">
@import './index.less';
</style>
