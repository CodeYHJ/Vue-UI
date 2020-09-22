import {default as L} from './Layout.vue'

import {default as H} from './Header.vue'

import {default as F} from './Footer.vue'

import {default as C} from './Content.vue'

import {default as A} from './Aside.vue'

type LayoutStyle = typeof L & { Header: typeof H, Content: typeof C, Footer: typeof F, Aside: typeof A }

const Layout = L as LayoutStyle;

Layout.Header = H;

Layout.Content = C;

Layout.Footer = F;

Layout.Aside = A;

export default Layout;
