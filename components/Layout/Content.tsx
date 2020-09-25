import {defineComponent} from "vue";

import {createClass} from "@/util";

import './style/index.less';

export default defineComponent({
  name: 'Content',
  setup(props, {slots}) {
    const cls = createClass('layout-content');

    return ()=>(
      <div class={cls()}>
        {slots.default&&slots.default()}
      </div>
    )
  }
})
