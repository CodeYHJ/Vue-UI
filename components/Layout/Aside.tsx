import {defineComponent} from "vue";

import {createClass} from "@/util";

import './style/index.less';

export default defineComponent({
  name: 'Aside',
  setup(props, {slots}) {
    const cls = createClass('layout-aside');

    return ()=>(
      <div class={cls()}>
        {slots.default&&slots.default()}
      </div>
    )
  }
})
