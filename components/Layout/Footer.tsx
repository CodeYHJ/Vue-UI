import {defineComponent} from "vue";

import {createClass} from "@/util";

import './style/index.less';

export default defineComponent({
  name: 'Footer',
  setup(props, {slots}) {
    const cls = createClass('layout-footer');

    return ()=>(
      <div class={cls()}>
        {slots.default&&slots.default()}
      </div>
    )
  }
})
