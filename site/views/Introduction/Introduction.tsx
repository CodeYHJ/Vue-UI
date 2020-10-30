import { defineComponent } from 'vue';

import "./index.less"

import { createClass } from '../../util';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IntroductionProps { }

export default defineComponent<IntroductionProps>({
  name: 'Introduction',
  setup() {
    const cls = createClass('introduction');

    return () => (
      <div class={cls()}>
        <section class={cls('section')}>
          <h1 class={cls('h1')}>CodeUI-Vue</h1>
          <p class={cls('p')}>CodeUI-Vue是一套PC端的Vue组件库</p>
        </section>
        <section class={cls('section')}>
          <h1 class={cls('h1')}>使用TypeScript</h1>
          <p class={cls('p')}>
            TypeScript进行静态类型支持，完全使用 TypeScript 编写
          </p>
        </section>
        <section class={cls('section')}>
          <h1 class={cls('h1')}>没有其他依赖</h1>
          <p class={cls('p')}>
            核心Vue 3.0。TypeScript进行静态类型支持，没有其他依赖
          </p>
        </section>
      </div>
    );
  },
});
