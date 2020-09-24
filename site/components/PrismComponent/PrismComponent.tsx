import { defineComponent } from 'vue';

import Prism from 'prismjs';

import 'prismjs/themes/prism.css';

export default defineComponent({
  name: 'PrismComponent',
  setup(props, { slots }) {
    const className = `language-html`;

    const children = (slots.default && slots.default()) || [];

    let code = '';

    if (children.length) {
      const str = children[0].children;

      if (typeof str === 'string') {
        code = str;
      }
    }

    const html = Prism.highlight(code, Prism.languages.html, 'html');

    return () => (
      <pre class={className} v-html={html}/>
    );
  },

});
