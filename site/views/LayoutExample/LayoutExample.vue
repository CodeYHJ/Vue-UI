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
    <section>
      <h2 :class="cls('title')">代码示例</h2>
      <ExampleBox
        :class="cls('exampleBox')"
        title="基本结构"
        description="页面布局"
        :code="baseCodeStr"
      >
        <section>
          <Layout style="color:#ffffff ">
            <Header :class="cls('header')">Header</Header>
            <Content :class="cls('content')">Content</Content>
            <Footer :class="cls('footer')">Footer</Footer>
          </Layout>
        </section>
        <section>
          <Layout style="color: #ffffff">
            <Header :class="cls('header')">Header</Header>
            <Layout style="color: #ffffff">
              <Aside :class="cls('aside')">Aside</Aside>
              <Content :class="cls('content')">Content</Content>
            </Layout>
            <Footer :class="cls('footer')">Footer</Footer>
          </Layout>
        </section>
        <section>
          <Layout style="color: #ffffff">
            <Header :class="cls('header')">Header</Header>
            <Layout style="color: #ffffff">
              <Content :class="cls('content')">Content</Content>
              <Aside :class="cls('aside')">Aside</Aside>
            </Layout>
            <Footer :class="cls('footer')">Footer</Footer>
          </Layout>
        </section>
        <section>
          <Layout style="color: #ffffff">
            <Aside :class="cls('aside')">Aside</Aside>
            <Layout style="color: #ffffff">
              <Header :class="cls('header')">Header</Header>
              <Content :class="cls('content')">Content</Content>
              <Footer :class="cls('footer')">Footer</Footer>
            </Layout>
          </Layout>
        </section>
      </ExampleBox>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { createClass } from '../../util';

import ExampleBox from '../../components/ExampleBox/ExampleBox.vue';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseCode = require('!!raw-loader!./code/BaseCode.vue');

import Layout from '@/Layout';

const { Header, Content, Footer, Aside } = Layout;

export default defineComponent({
  name: 'LayoutExample',
  components: { Layout, Header, Content, Footer, Aside, ExampleBox },
  setup() {
    const cls = createClass('layout');

    const baseCodeStr = baseCode && baseCode.default;

    return { cls, baseCodeStr };
  }
});
</script>

<style lang="less">
@import './index.less';
</style>
