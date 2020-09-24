<template>
  <div>
    <div>
      <Row>
        <Col span="8">8</Col>
        <Col span="8" offset="8">offset-8</Col>
      </Row>
    </div>

    <div>
      <Row>
        <Col span="4" offset="1">offset-1</Col>
        <Col span="4" offset="3">offset-3</Col>
        <Col span="4" offset="5">offset-5</Col>
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
