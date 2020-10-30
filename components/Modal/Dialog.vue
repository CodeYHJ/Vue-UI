<template>
  <Teleport to="body">
    <Transition name="mask">
      <div :class="cls('mask')" @click="closeMask" v-if="visible"></div>
    </Transition>
    <Transition name="box">
      <div :class="cls()" v-if="visible">
        <div :class="cls('box')">
          <div :class="cls('close')" @click="closeMask" v-if="!closable">
            <CancelIcon />
          </div>
          <div :class="cls('header')" v-if="headerText !== ''">
            {{ headerText }}
          </div>
          <main :class="cls('main')">
            <slot />
          </main>
          <div :class="cls('footer')">
            <slot name="footer" v-if="$slots.footer" />
            <template v-else>
              <Button type="default" :class="cls('cancel')" @click="sucess">{{
                cancelText
              }}</Button>
              <Button type="primary" :class="cls('ok')" @click="fail">{{
                okText
              }}</Button>
            </template>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import { Button } from '../index';

import { createClass } from '@/util';

import { CancelIcon } from '../../components/Icon/svgIcon';

export default defineComponent({
  name: 'Dialog',
  components: { Button, CancelIcon },
  props: {
    maskClosable: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false,
      require: true
    },
    headerText: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: 'ok'
    },
    cancelText: {
      type: String,
      default: 'cancel'
    },
    successFn: {
      type: Function
    },
    failFn: {
      type: Function
    }
  },
  setup(props, { emit }) {
    const cls = createClass('dialog');

    const closeMask = () => {
      if (props.maskClosable) return;

      emit('update-visible');
    };

    const sucess = () => {
      emit('update-visible');

      props.successFn && props.successFn();
    };

    const fail = () => {
      emit('update-visible');

      props.failFn && props.failFn();
    };

    return { cls, closeMask, sucess, fail };
  }
});
</script>

<style lang="less" scoped>
@import '../style/var.less';
.code-ui-dialog {
  position: fixed;
  top: 120px;
  left: 50%;
  margin-left: -25%;
  outline: 0;
  z-index: 1001;
  &-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1000;
  }
  &-box {
    position: relative;
    width: 600px;
    border-radius: 4px;
    background: #ffffff;
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
  }

  & &-header {
    font-size: 24px;
    padding: 10px;
    border-bottom: 1px solid @neutral-color-border;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: default;
  }
  & &-main {
    min-height: 50px;
    padding: 20px;
    cursor: default;
  }
  & &-close {
    width: 20px;
    height: 20px;
    position: absolute;
    right: -10px;
    top: -10px;
    background: grey;
    border: 1px solid black;
    border-radius: 50%;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  & &-footer {
    display: flex;
    justify-content: flex-end;
    border-top: 1px solid @neutral-color-border;
    padding: 8px;
  }
  & &-ok {
    margin-left: 10px;
  }
}
// 遮罩层
.mask-enter {
  opacity: 0;
}
.mask-enter-active,
.mask-leave-active {
  opacity: 1;
  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.mask-enter-from,
.mask-leave-to {
  opacity: 0;
}

// 内容
.box-enter-active,
.box-leave-active {
  opacity: 1;
  transform: scale(1);
  transition: all 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.box-enter-to {
  position: absolute;
  top: 120px;
  left: 50%;
}
.box-enter-from,
.box-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
