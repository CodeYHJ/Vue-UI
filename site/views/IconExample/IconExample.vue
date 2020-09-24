<template>
  <div :class="cls()">
    <section>
      <h1 :class="cls('title')">Icon</h1>
      <p :class="cls('p')">SVG图形</p>
    </section>
    <section>
      <h2 :class="cls('title')">代码示例</h2>
      <ExampleBox
        title="Icon"
        description="UI库内置Icon展示，支持按需加载"
        :code="baseCodeStr"
      >
        <CancelIcon :class="cls('icon-demo')" />
        <ArrorDownIcon :class="cls('icon-demo')" />
        <ArrorUpIcon :class="cls('icon-demo')" />
        <ArrorLeftIcon :class="cls('icon-demo')" />
        <ArrorRightIcon :class="cls('icon-demo')" />
      </ExampleBox>
      <ExampleBox
        title="Icon"
        description="请求后台数据而生成Icon展示"
        :code="scriptCodeStr"
      >
        <ScriptIcon name="icon-jianceqi" :class="cls('icon-demo')" />
        <ScriptIcon name="icon-jinggai" :class="cls('icon-demo')" />
        <ScriptIcon name="icon-liujisuan" :class="cls('icon-demo')" />
        <ScriptIcon name="icon-hanshu" :class="cls('icon-demo')" />
        <ScriptIcon name="icon-lianjieliu" :class="cls('icon-demo')" />
      </ExampleBox>
    </section>
    <!--    <ExampleApi data={handleData}></ExampleApi>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { createClass } from '../../util';

import ExampleBox from '../../components/ExampleBox/ExampleBox.vue';

import Icon, {
  CancelIcon,
  ArrorDownIcon,
  ArrorUpIcon,
  ArrorLeftIcon,
  ArrorRightIcon
} from '@/Icon';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const baseCode = require('!!raw-loader!./code/BaseCode.vue');

// eslint-disable-next-line @typescript-eslint/no-var-requires
const scriptCode = require('!!raw-loader!./code/ScriptCode.vue');

const { createIcon } = Icon;

const ScriptIcon = createIcon('//at.alicdn.com/t/font_1186479_31cw72ggwdn.js');

export default defineComponent({
  name: 'IconExample',
  components: {
    ExampleBox,
    ScriptIcon,
    CancelIcon,
    ArrorDownIcon,
    ArrorUpIcon,
    ArrorLeftIcon,
    ArrorRightIcon
  },
  setup() {
    const baseCodeStr = baseCode && baseCode.default;

    const scriptCodeStr = scriptCode && scriptCode.default;

    const cls = createClass('icon');

    return { cls, baseCodeStr, scriptCodeStr };
  }
});
</script>

<style lang="less">
@import './index';
</style>
