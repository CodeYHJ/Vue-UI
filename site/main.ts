import { createApp } from 'vue';

import App from './App';

import router from './router';

import ExampleBox from './components/ExampleBox/ExampleBox';

createApp(App)
  .use(router)
  .component('ExampleBox', ExampleBox)
  .mount('#app');
