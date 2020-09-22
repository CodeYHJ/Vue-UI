<template>
  <Layout :class="cls()">
    <Header>
      <HeaderPage />
    </Header>
    <Content>
      <Layout>
        <Aside>
          <AsidePage></AsidePage>
        </Aside>
        <Content>
          <router-view />
        </Content>
      </Layout>
    </Content>
  </Layout>
</template>

<script lang="ts">
import { createClass } from './util';

import AsidePage from './components/Aside/Aside.vue';

import HeaderPage from './components/Header/Header.vue';

import Layout from '@/Layout';

const { Header, Content, Aside } = Layout;

export default {
  name: 'App',
  components: { AsidePage, HeaderPage, Layout, Header, Content, Aside },
  // components: { Layout, Header },
  setup() {
    const cls = createClass('app');

    return { cls };
  }
};
</script>

<style lang="less">
*,
:after,
:before {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
}
.code-ui-example-app {
  min-height: 100vh;
  overflow-x: hidden;
  &-footer {
    text-align: center;
    line-height: 50px;
    height: 50px;
    background: #000000;
    color: #ffffff;
  }
}
</style>
