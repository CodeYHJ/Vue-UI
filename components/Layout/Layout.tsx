import {defineComponent} from "vue";

import {createClass} from "@/util";

import './style/index.less';

export default defineComponent({
  name:'Layout',
  render(){
    const mergeClass = createClass('layout');

    let hasAside = false;

    const childrens = this.$slots.default && this.$slots.default();

    if (Array.isArray(childrens)) {
      childrens.forEach(vnode => {
        const {type = false} = vnode;

        if (!type) return;

        if (type instanceof Object) {
          if ('name' in type) {
            type.name === 'Aside' ? (hasAside = true) : '';
          }
        }
      });
    }

    const cls = hasAside
      ? [mergeClass(), mergeClass('hasAside')].filter(Boolean).join(' ')
      : mergeClass();

    return (
      <div class={cls}>
        {childrens}
      </div>
    )
  }
})

