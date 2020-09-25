import {defineComponent} from "vue";

import {createClass} from "@/util";

import './style/index.less';


export default defineComponent({
  name: 'Header',
  setup(props, {slots}) {
    const cls = createClass('layout-header');

    return ()=>(
      <div class={cls()}>
        {slots.default&&slots.default()}
      </div>
    )
  }
})

