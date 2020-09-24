<template>
  <div>
    <div>
      <Row justify="start">
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
      <Row justify="center">
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
      <Row justify="end">
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
      <Row justify="space-around">
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
      <Row justify="space-between">
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
