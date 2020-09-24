<template>
  <div>
    <div>
      <Row gutter="12">
        <Col span="8">
          <div>8</div>
        </Col>
        <Col span="8">
          <div>8</div>
        </Col>
      </Row>
    </div>

    <div>
      <Row :gutter="[12, 24]">
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
