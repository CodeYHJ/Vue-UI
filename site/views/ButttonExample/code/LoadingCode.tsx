import {defineComponent, ref} from 'vue';

import { Button } from '@/index';

export default defineComponent({
  name: 'DisabledCode',
  render() {
    const loading = ref<boolean>(false);

    return (
      <div>
        <Button type="danger" loading>danger</Button>

        <Button type="primary" loading={loading.value}>primary</Button>

      </div>
    );
  },
});
