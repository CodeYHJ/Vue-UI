<template>
  <div>
    <div>
      <Row>
        <Col span="24">24</Col>
      </Row>
    </div>

    <div>
      <Row>
        <Col span="12">12</Col>
        <Col span="12">12</Col>
      </Row>
    </div>

    <div>
      <Row>
        <Col span="8">8</Col>
        <Col span="8">8</Col>
        <Col span="8">8</Col>
      </Row>
    </div>

    <div>
      <Row>
        <Col span="6">4</Col>
        <Col span="6">4</Col>
        <Col span="6">4</Col>
        <Col span="6">4</Col>
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
