<template>
  <div>
    <div>
      <Row align="top" gutter="24">
        <Col span="4">
          <div>4</div>
        </Col>
        <Col span="4">
          <div>4</div>
        </Col>
        <Col span="4">
          <div>4</div>
        </Col>
      </Row>
    </div>

    <div>
      <Row gutter="24" align="middle">
        <Col span="4">
          <div>4</div>
        </Col>
        <Col span="4">
          <div>4</div>
        </Col>
        <Col span="4">
          <div>4</div>
        </Col>
      </Row>
    </div>

    <div>
      <Row align="bottom" gutter="24">
        <Col span="{4}">
          <div>4</div>
        </Col>
        <Col span="{4}">
          <div>4</div>
        </Col>
        <Col span="{4}">
          <div>4</div>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Row from '@/Gird';

const { Col } = Row;

export default defineComponent({
  components: { Col, Row }
});
</script>
