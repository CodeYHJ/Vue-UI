<template>
  <div :class="cls()">
    <h1>Color 色彩搭配</h1>
    <section>
      <h2 :class="cls('title')">主色</h2>
      <p :class="cls('p')">使用蓝色作为主色调。</p>
    </section>
    <div :class="cls('mainColor')">
      <div :class="cls('mainColor-box')">
        <span className="title">Light</span>
        <span className="hex">#7ab8ff</span>
      </div>
      <div :class="cls('mainColor-box')">
        <span className="title">Primary</span>
        <span className="hex">#268aff</span>
      </div>
      <div :class="cls('mainColor-box')">
        <span className="title">Dark</span>
        <span className="hex">#005fcc</span>
      </div>
    </div>
    <section>
      <h2 :class="cls('title')">功能色</h2>
      <p :class="cls('p')">
        功能色展示明确的信息以及状态，比如成功、出错、失败、提醒、链接等。
      </p>
    </section>
    <div :class="cls('mainColorFun')">
      <div :class="cls('mainColorFun-box')">
        <span className="title">Success</span>
        <span className="hex">#37dc94</span>
      </div>
      <div :class="cls('mainColorFun-box')">
        <span className="title">Warning</span>
        <span className="hex">#fd9a28</span>
      </div>
      <div :class="cls('mainColorFun-box')">
        <span className="title">Error</span>
        <span className="hex">#fa5c65</span>
      </div>
    </div>
    <section>
      <h2 :class="cls('title')">中性色</h2>
      <p :class="cls('p')">中性色大量的应用在界面的文字部分。</p>
    </section>
    <div :class="cls('mainColorNeutral')">
      <div :class="cls('mainColorNeutral-box')">
        <span className="title">Title</span>
        <span className="hex">#37dc94</span>
      </div>
      <div :class="cls('mainColorNeutral-box')">
        <span className="title">Content</span>
        <span className="hex">#fd9a28</span>
      </div>
      <div :class="cls('mainColorNeutral-box')">
        <span className="title">Sub</span>
        <span className="hex">#fa5c65</span>
      </div>
      <div :class="cls('mainColorNeutral-box')">
        <span className="title">Disabled</span>
        <span className="hex">#fa5c65</span>
      </div>
      <div :class="cls('mainColorNeutral-box')">
        <span className="title">Border</span>
        <span className="hex">#fa5c65</span>
      </div>
      <div :class="cls('mainColorNeutral-box')">
        <span className="title">Backgroud</span>
        <span className="hex">#fa5c65</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { createClass } from '../../util';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ColorProps {}

export default defineComponent({
  name: 'Color',
  setup(props: ColorProps) {
    const cls = createClass('color');

    return { cls };
  }
});
</script>

<style lang="less">
@import './index.less';
</style>
