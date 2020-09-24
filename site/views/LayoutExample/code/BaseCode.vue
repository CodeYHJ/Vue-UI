<template>
  <div>
    <div>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>

    <div>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Aside>Aside</Aside>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>

    <div>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Content>Content</Content>
          <Aside>Aside</Aside>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>

    <div>
      <Layout>
        <Aside>Aside</Aside>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Layout from '@/Layout';

const { Header, Content, Footer, Aside } = Layout;

export default defineComponent({
  name: 'BaseCode',
  components: { Layout, Header, Content, Footer, Aside }
});
</script>
