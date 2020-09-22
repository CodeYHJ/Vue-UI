<template>
  <div :class="cls()">
    <section>
      <h1 :class="cls('title')">Gird栅格布局</h1>
      <p :class="cls('p')">栅格响应式布局</p>
    </section>
    <section>
      <h2>代码示例</h2>
      <!--      <ExampleBox-->
      <!--        title="基础示例"-->
      <!--        description="基本栅格，总分为24格，span为控制占位格数的属性"-->
      <!--        code={require('!!raw-loader!./code/baseCode.tsx')}>-->
      <div :class="cls('rowExample')">
        <Row :style="{ color: 0 }">
          <Col span="24">
            <div :class="cls('primary')">24</div>
          </Col>
        </Row>
      </div>
      <div :class="cls('rowExample')">
        <Row>
          <Col span="12">
            <div :class="cls('light')">12</div>
          </Col>
          <Col span="12">
            <div :class="cls('primary')">12</div>
          </Col>
        </Row>
      </div>
      <div :class="cls('rowExample')">
        <Row>
          <Col span="8">
            <div :class="cls('light')">8</div>
          </Col>
          <Col span="8">
            <div :class="cls('primary')">8</div>
          </Col>
          <Col span="8">
            <div :class="cls('light')">8</div>
          </Col>
        </Row>
      </div>
      <div :class="cls('rowExample')">
        <Row>
          <Col span="6">
            <div :class="cls('light')">4</div>
          </Col>
          <Col span="6">
            <div :class="cls('primary')">4</div>
          </Col>
          <Col span="6">
            <div :class="cls('light')">4</div>
          </Col>
          <Col span="6">
            <div :class="cls('primary')">4</div>
          </Col>
        </Row>
      </div>
      <!--      </ExampleBox>-->
      <!--      <ExampleBox-->
      <!--        title="偏移"-->
      <!--        description="在Row容器内的元素，允许一定程度的偏移，offset属性控制偏移格数"-->
      <!--        code={require('!!raw-loader!./code/offsetCode.tsx')}>-->
      <div :class="cls('rowExample')">
        <Row>
          <Col span="8">
            <div :class="cls('light')">8</div>
          </Col>
          <Col span="8" offset="8">
            <div :class="cls('primary')">offset-8</div>
          </Col>
        </Row>
      </div>
      <div :class="cls('rowExample')">
        <Row>
          <Col span="4" offset="1">
            <div :class="cls('light')">offset-1</div>
          </Col>
          <Col span="4" offset="3">
            <div :class="cls('primary')">offset-3</div>
          </Col>
          <Col span="4" offset="5">
            <div :class="cls('light')">offset-5</div>
          </Col>
        </Row>
      </div>
      <!--      </ExampleBox>-->
      <!--      <ExampleBox-->
      <!--        title="间隔"-->
      <!--        description="在Col元素相互之间定义统一的间隔，分为横向与纵向。可以只定义横向，也可以横向与纵向一起定义"-->
      <!--        code={require('!!raw-loader!./code/offsetCode.tsx')}>-->
      <div :class="cls('rowExample')">
        <Row gutter="12">
          <Col span="8">
            <div :class="cls('light')">8</div>
          </Col>
          <Col span="8">
            <div :class="cls('primary')">8</div>
          </Col>
        </Row>
      </div>
      <div :class="cls('rowExample')">
        <Row :gutter="[12, 24]">
          <Col span="4">
            <div :class="cls('light')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('primary')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('light')">4</div>
          </Col>
        </Row>
      </div>
      <!--      </ExampleBox>-->
      <!--      <ExampleBox-->
      <!--        title="Flex-justify布局"-->
      <!--        description="实现Flex的justify排列"-->
      <!--        code={require('!!raw-loader!./code/justifyCode.tsx')}>-->
      <div :class="cls('rowExample')">
        <Row justify="start">
          <Col span="4">
            <div :class="cls('light')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('primary')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('light')">4</div>
          </Col>
        </Row>
      </div>
      <div :class="cls('rowExample')">
        <Row justify="center">
          <Col span="4">
            <div :class="cls('light')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('primary')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('light')">4</div>
          </Col>
        </Row>
      </div>
      <div :class="cls('rowExample')">
        <Row justify="end">
          <Col span="4">
            <div :class="cls('light')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('primary')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('light')">4</div>
          </Col>
        </Row>
      </div>
      <div :class="cls('rowExample')">
        <Row justify="space-around">
          <Col span="4">
            <div :class="cls('light')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('primary')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('light')">4</div>
          </Col>
        </Row>
      </div>
      <div :class="cls('rowExample')">
        <Row justify="space-between">
          <Col span="4">
            <div :class="cls('light')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('primary')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('light')">4</div>
          </Col>
        </Row>
      </div>
      <!--      </ExampleBox>-->
      <!--      <ExampleBox-->
      <!--        title="Flex-aligin布局"-->
      <!--        description="实现Flex的aligin排列"-->
      <!--        code={require('!!raw-loader!./code/alignCode.tsx')}>-->
      <div :class="cls('rowExample')">
        <Row :align="top" gutter="24">
          <Col span="4">
            <div :class="cls('light-align')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('primary-align')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('light-align')">4</div>
          </Col>
        </Row>
      </div>
      <div :class="cls('rowExample')">
        <Row :align="middle" gutter="24">
          <Col span="4">
            <div :class="cls('light-align')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('primary-align')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('light-align')">4</div>
          </Col>
        </Row>
      </div>
      <div :class="cls('rowExample')">
        <Row align="bottom" gutter="{24}">
          <Col span="4">
            <div :class="cls('light-align')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('primary-align')">4</div>
          </Col>
          <Col span="4">
            <div :class="cls('light-align')">4</div>
          </Col>
        </Row>
      </div>

      <!--      </ExampleBox>-->
      <!--      <ExampleBox-->
      <!--        title="响应式"-->
      <!--        description="设置 sm、md、lg、xl 属性覆盖以实现响应式布局"-->
      <!--        code={require('!!raw-loader!./code/responsiveCode.tsx')}>-->
      <div :class="cls('rowExample')">
        <Row gutter="12">
          <Col span="4" sm="4" md="2" lg="4" xl="1">
            <div :class="cls('light')">4</div>
          </Col>
          <Col span="4" sm="4" md="4" lg="4" xl="2">
            <div :class="cls('primary')">4</div>
          </Col>
          <Col span="4" sm="4" md="3" lg="4" xl="3">
            <div :class="cls('light')">4</div>
          </Col>
          <Col span="4" sm="4" md="1" lg="4" xl="4">
            <div :class="cls('primary')">4</div>
          </Col>
          <Col span="4" sm="4" md="2" lg="4" xl="5">
            <div :class="cls('light')">4</div>
          </Col>
          <Col span="4" sm="4" md="5" lg="4" xl="6">
            <div :class="cls('primary')">4</div>
          </Col>
        </Row>
      </div>

      <!--      </ExampleBox>-->
    </section>
    <!--    <h2>Api</h2>-->
    <!--    <ExampleApi title="Row" data={handleRowData}></ExampleApi>-->
    <!--    <ExampleApi title="Col" data={handleColData}></ExampleApi>-->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { createClass } from '../../util';

import Row from '@/Gird';

const { Col } = Row;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface GirdExampleProps {}

export default defineComponent({
  name: 'GirdExample',
  components: { Row, Col },
  setup() {
    const cls = createClass('gird');

    return { cls };
  }
});
</script>

<style lang="less">
@import './index';
</style>
