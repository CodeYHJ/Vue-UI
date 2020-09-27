import { defineComponent } from 'vue';

import { createClass } from '../../util';

import './index.less';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ColorProps {}

export default defineComponent<ColorProps>({
  name: 'Color',
  setup() {
    const cls = createClass('color');

    return () => (
      <div class={cls()}>
        <h1>Color 色彩搭配</h1>
        <section>
          <h2 class={cls('title')}>主色</h2>
          <p class={cls('p')}>使用蓝色作为主色调。</p>
        </section>
        <div class={cls('mainColor')}>
          <div class={cls('mainColor-box')}>
            <span class="title">Light</span>
            <span class="hex">#7ab8ff</span>
          </div>
          <div class={cls('mainColor-box')}>
            <span class="title">Primary</span>
            <span class="hex">#268aff</span>
          </div>
          <div class={cls('mainColor-box')}>
            <span class="title">Dark</span>
            <span class="hex">#005fcc</span>
          </div>
        </div>
        <section>
          <h2 class={cls('title')}>功能色</h2>
          <p class={cls('p')}>
            功能色展示明确的信息以及状态，比如成功、出错、失败、提醒、链接等。
          </p>
        </section>
        <div class={cls('mainColorFun')}>
          <div class={cls('mainColorFun-box')}>
            <span class="title">Success</span>
            <span class="hex">#37dc94</span>
          </div>
          <div class={cls('mainColorFun-box')}>
            <span class="title">Warning</span>
            <span class="hex">#fd9a28</span>
          </div>
          <div class={cls('mainColorFun-box')}>
            <span class="title">Error</span>
            <span class="hex">#fa5c65</span>
          </div>
        </div>
        <section>
          <h2 class={cls('title')}>中性色</h2>
          <p class={cls('p')}>中性色大量的应用在界面的文字部分。</p>
        </section>
        <div class={cls('mainColorNeutral')}>
          <div class={cls('mainColorNeutral-box')}>
            <span class="title">Title</span>
            <span class="hex">#37dc94</span>
          </div>
          <div class={cls('mainColorNeutral-box')}>
            <span class="title">Content</span>
            <span class="hex">#fd9a28</span>
          </div>
          <div class={cls('mainColorNeutral-box')}>
            <span class="title">Sub</span>
            <span class="hex">#fa5c65</span>
          </div>
          <div class={cls('mainColorNeutral-box')}>
            <span class="title">Disabled</span>
            <span class="hex">#fa5c65</span>
          </div>
          <div class={cls('mainColorNeutral-box')}>
            <span class="title">Border</span>
            <span class="hex">#fa5c65</span>
          </div>
          <div class={cls('mainColorNeutral-box')}>
            <span class="title">Backgroud</span>
            <span class="hex">#fa5c65</span>
          </div>
        </div>
      </div>
    );
  },
});
