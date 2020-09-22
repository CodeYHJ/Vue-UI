<template>
  <div :class="cls()">
    <h3 :class="cls('title')">组件</h3>
    <ul :class="cls('ul')">
      <li :class="cls('li')">
        <router-link :class="cls('navLink')" to="/vue/introduction"
          >Introduction</router-link
        >
      </li>
      <li :class="cls('li')">
        <router-link :class="cls('navLink')" to="/vue/color">Color</router-link>
      </li>
      <li :class="cls('li')">
        <router-link :class="cls('navLink')" to="/vue/layout"
          >layout</router-link
        >
      </li>
      <li :class="cls('li')">
        <router-link :class="cls('navLink')" to="/vue/gird">Gird</router-link>
      </li>
      <li :class="cls('li')">
        <router-link :class="cls('navLink')" to="/vue/button"
          >Button</router-link
        >
      </li>
      <li :class="cls('li')">
        <router-link :class="cls('navLink')" to="/vue/icon">Icon</router-link>
      </li>
      <li :class="cls('li')">
        <router-link :class="cls('navLink')" to="/vue/modal">Modal</router-link>
      </li>
      <!--      <li :class="cls('li')">-->
      <!--        <router-link :class="cls('navLink')" to="/vue/form">Form</router-link>-->
      <!--      </li>-->
      <li :class="cls('li')">
        <router-link :class="cls('navLink')" to="/vue/input">Input</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import {} from 'vue-router';

import { createClass } from '../../util';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AsideProps {}

export default defineComponent({
  name: 'AsidePage',
  setup(props: AsideProps) {
    const cls = createClass('aside');

    return { cls };
  }
});
</script>

<style lang="less">
@import 'index.less';
</style>
