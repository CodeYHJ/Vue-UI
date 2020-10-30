import { defineComponent, ref } from 'vue';

import { Button } from '@/index';

import { CancelIcon } from '@/Icon';

export default defineComponent({
  name: 'DisabledCode',
  render() {
    const preIcon = () => <CancelIcon />;

    const loading = ref<boolean>(false);

    const handleClick = () => {
      loading.value = !loading.value;
    };

    return (
      <div>
        <Button type="danger" pre={preIcon}>
          danger
        </Button>

        <Button
          type="primary"
          pre={preIcon}
          loading={loading.value}
          onClick={handleClick}
        >
          primary
        </Button>
      </div>
    );
  },
});
