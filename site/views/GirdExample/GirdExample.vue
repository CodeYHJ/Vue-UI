<template>
  <div :class="cls()">
    <section>
      <h1 :class="cls('title')">Gird栅格布局</h1>
      <p :class="cls('p')">栅格响应式布局</p>
    </section>
    <section>
      <h2>代码示例</h2>
      <ExampleBox
        title="基础示例"
        description="基本栅格，总分为24格，span为控制占位格数的属性"
        :code="baseCodeStr"
      >
        <div :class="cls('rowExample')">
          <Row>
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
      </ExampleBox>
      <ExampleBox
        title="偏移"
        description="在Row容器内的元素，允许一定程度的偏移，offset属性控制偏移格数"
        :code="offsetCodeStr"
      >
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
      </ExampleBox>
      <ExampleBox
        title="间隔"
        description="在Col元素相互之间定义统一的间隔，分为横向与纵向。可以只定义横向，也可以横向与纵向一起定义"
        :code="gutterCodeStr"
      >
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
      </ExampleBox>
      <ExampleBox
        title="Flex-justify布局"
        description="实现Flex的justify排列"
        :code="justifyCodeStr"
      >
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
      </ExampleBox>
      <ExampleBox
        title="Flex-aligin布局"
        description="实现Flex的aligin排列"
        :code="alignCodeStr"
      >
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
      </ExampleBox>
      <ExampleBox
        title="响应式"
        description="设置 sm、md、lg、xl 属性覆盖以实现响应式布局"
        :code="responsiveCodeStr"
      >
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
      </ExampleBox>
    </section>
    <h2>Api</h2>
    <ExampleApi title="Row" data="{handleRowData}"></ExampleApi>
    <ExampleApi title="Col" data="{handleColData}"></ExampleApi>
  </div>
</template>

<script lang="ts">
/* eslint-disable @typescript-eslint/no-var-requires */

import { defineComponent } from 'vue';

import { createClass } from '../../util';

import ExampleBox from '../../components/ExampleBox/ExampleBox.vue';

import Row from '@/Gird';

const baseCode = require('!!raw-loader!./code/BaseCode.vue');

const alignCode = require('!!raw-loader!./code/AlignCode.vue');

const offsetCode = require('!!raw-loader!./code/OffsetCode.vue');

const justifyCode = require('!!raw-loader!./code/JustifyCode.vue');

const gutterCode = require('!!raw-loader!./code/GutterCode.vue');

const responsiveCode = require('!!raw-loader!./code/ResponsiveCode.vue');

const { Col } = Row;

export default defineComponent({
  name: 'GirdExample',
  components: { Row, Col, ExampleBox },
  setup() {
    const cls = createClass('gird');

    const baseCodeStr = baseCode && baseCode.default;

    const alignCodeStr = alignCode && alignCode.default;

    const offsetCodeStr = offsetCode && offsetCode.default;

    const justifyCodeStr = justifyCode && justifyCode.default;

    const gutterCodeStr = gutterCode && gutterCode.default;

    const responsiveCodeStr = responsiveCode && responsiveCode.default;

    return {
      cls,
      baseCodeStr,
      alignCodeStr,
      offsetCodeStr,
      justifyCodeStr,
      gutterCodeStr,
      responsiveCodeStr
    };
  }
});
</script>

<style lang="less">
@import './index';
</style>
