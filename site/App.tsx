import { defineComponent } from 'vue';

import "./App.less"

import AsidePage from './components/Aside/Aside';

import HeaderPage from './components/Header/Header';

import Layout from '@/Layout';

import { createClass } from './util';

const { Header, Content, Aside } = Layout;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppProps {}

export default defineComponent<AppProps>({
  name: 'App',
  components: { AsidePage, HeaderPage, Layout, Header, Content, Aside },
  setup() {
    const cls = createClass('app');

    return () => (
      <Layout class={cls()}>
        <Header>
          <HeaderPage />
        </Header>
        <Content>
          <Layout>
            <Aside>
              <AsidePage/>
            </Aside>
            <Content>
              <router-view />
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  },
});
