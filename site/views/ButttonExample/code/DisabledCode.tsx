import { defineComponent } from 'vue';

import { Button } from '@/index';

export default defineComponent({
  name: 'DisabledCode',
  render() {
    return (
      <div>
        <Button type="default" disabled>
          default
        </Button>

        <Button type="dashed" disabled>
          dashed
        </Button>

        <Button type="primary" disabled>
          primary
        </Button>
      </div>
    );
  },
});
