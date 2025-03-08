import { lazy } from "react";

const DelayDefer = lazy(() => import(/* webpackChunkName: "templates/DelayDefer.jsx" */ `./DelayDefer`));
const ArticleDefer = lazy(() => import(/* webpackChunkName: "templates/ArticleDefer.jsx" */ `./ArticleDefer`));
const DefaultJsDefer = lazy(() => import(/* webpackChunkName: "templates/DefaultJsDefer.jsx" */ `./DefaultJsDefer`));
const DefaultClsDefer = lazy(() => import(/* webpackChunkName: "templates/DefaultClsDefer.jsx" */ `./DefaultClsDefer`));

export default {
  DelayDefer,
  ArticleDefer,
  DefaultJsDefer,
  DefaultClsDefer,
};