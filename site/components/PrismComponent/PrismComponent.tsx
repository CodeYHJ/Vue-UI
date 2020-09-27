import { defineComponent } from 'vue';

import Prism from 'prismjs';

import 'prismjs/themes/prism.css';

export default defineComponent({
  name: 'PrismComponent',
  props:{
    code: String
  },
  setup( props ) {
    const className = `language-html`;

    const html = Prism.highlight(props.code||'', Prism.languages.html, 'html');

    return () => (
        <pre class={className} v-html={html}/>
    )
  },
});
