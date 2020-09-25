import {default as L} from './Layout'

import {default as H} from './Header'

import {default as F} from './Footer'

import {default as C} from './Content'

import {default as A} from './Aside'

type LayoutStyle = typeof L & { Header: typeof H, Content: typeof C, Footer: typeof F, Aside: typeof A }

const Layout = L as LayoutStyle;

Layout.Header = H;

Layout.Content = C;

Layout.Footer = F;

Layout.Aside = A;

export default Layout;
