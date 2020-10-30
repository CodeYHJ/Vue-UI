import { defineComponent } from 'vue';

import {Button} from "@/index";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BaseCodeProps {}

export default defineComponent<BaseCodeProps>({
  name: 'BaseCode',
  componets: { Button },
  setup() {
    return () => (
      <div>
        <Button type="default">default</Button>

        <Button type="dashed">dashed</Button>

        <Button type="primary">primary</Button>

        <Button type="danger">danger</Button>

        <Button type="warn">warn</Button>

        <Button type="success">success</Button>
      </div>
    );
  },
});
