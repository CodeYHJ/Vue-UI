import { defineComponent } from 'vue';

import { createClass } from '../../util';

import './index.less';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {}

export default defineComponent<HeaderProps>({
  name: 'Header',
  setup() {
    const cls = createClass('headerPage');

    return () => (
      <div class={cls()}>
        <span class={cls('logo')}>
          <router-link to="/vue">CodeUI</router-link>
        </span>
        <span class={cls('component')}>
          <router-link to="/vue">组件</router-link>
        </span>

        <span class={cls('github')}>
          <a
            class={cls('github-link')}
            href="https://github.com/CodeYHJ/Vue-UI"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class={cls('github-png')}/>
          </a>
        </span>
      </div>
    );
  },
});
