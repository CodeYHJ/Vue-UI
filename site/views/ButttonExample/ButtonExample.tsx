/* eslint-disable @typescript-eslint/no-var-requires */

import { defineComponent, ref } from 'vue';

import { createClass } from '../../util';

import ExampleBox from '../../components/ExampleBox/ExampleBox';

import { Button } from '@/index';

import './index.less';

import { CancelIcon } from '@/Icon';

const baseCode = require('!!raw-loader!./code/BaseCode.vue');

const disabledCode = require('!!raw-loader!./code/DisabledCode.vue');

const loadingCode = require('!!raw-loader!./code/LoadingCode.vue');

const preFixCode = require('!!raw-loader!./code/PreFixCode.vue');

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ButtonExampleProps {}

export default defineComponent<ButtonExampleProps>({
  name: 'ButtonExample',
  components: { ExampleBox, Button },
  setup() {
    const cls = createClass('color');

    const baseCodeStr = baseCode && baseCode.default;

    const disabledCodeStr = disabledCode && disabledCode.default;

    const loadingCodeStr = loadingCode && loadingCode.default;

    const preFixCodeStr = preFixCode && preFixCode.default;

    const click = ref<boolean>(false);

    const click2 = ref<boolean>(false);

    const handleClick = () => {
      click.value = !click.value;
    };

    const handleClick2 = () => {
      click2.value = !click2.value;
    };

    const preIcon = () => <CancelIcon />;

    console.log('1111');

    return () => (
      <div class={cls()}>
        <section>
          <h1 class={cls('title')}>Button按钮</h1>
          <p class={cls('p')}>用于点击一个即时操作</p>
        </section>
        <section>
          <h2 class={cls('title')}>何时使用</h2>
          <p class={cls('p')}>用户点击行为，触发相应逻辑操作</p>
        </section>
        <section>
          <h2>代码示例</h2>
          <ExampleBox
            title="按钮类型"
            description="按钮有六种类型：默认按钮、虚线按钮、主要按钮、危险按钮、警告按钮、成功按钮"
            code={baseCodeStr}
          >
            <Button type="default" style={{ marginRight: '20px' }}>
              default
            </Button>
            <Button type="dashed" style={{ marginRight: '20px' }}>
              dashed
            </Button>
            <Button type="primary" style={{ marginRight: '20px' }}>
              primary
            </Button>
            <Button type="danger" style={{ marginRight: '20px' }}>
              danger
            </Button>
            <Button type="warn" style={{ marginRight: '20px' }}>
              warn
            </Button>
            <Button type="success" style={{ marginRight: '20px' }}>
              success
            </Button>
          </ExampleBox>
          <ExampleBox
            title="Disabled"
            description="设置 Disabled 状态"
            code={disabledCodeStr}
          >
            <Button type="default" disabled style={{ marginRight: '20px' }}>
              default
            </Button>
            <Button type="dashed" disabled style={{ marginRight: '20px' }}>
              dashed
            </Button>
            <Button type="primary" disabled style={{ marginRight: '20px' }}>
              primary
            </Button>
          </ExampleBox>
          <ExampleBox
            title="Loading"
            description="设置 Loading 状态"
            code={loadingCodeStr}
          >
            <Button type="danger" loading style={{ marginRight: '20px' }}>
              danger
            </Button>
            <Button
              type="primary"
              style={{ marginRight: '20px' }}
              loading={click.value}
              onClick={handleClick}
            >
              primary
            </Button>
          </ExampleBox>
          <ExampleBox
            title="PreFix"
            description="自定义Icon"
            code={preFixCodeStr}
          >
            <Button type="danger" pre={preIcon} style={{ marginRight: '20px' }}>
              danger
            </Button>
            <Button
              type="primary"
              style={{ marginRight: '20px' }}
              pre={preIcon}
              loading={click2.value}
              onClick={handleClick2}
            >
              primary
            </Button>
          </ExampleBox>
        </section>
        {/*<ExampleApi data={handleData}></ExampleApi>*/}
      </div>
    );
  },
});
