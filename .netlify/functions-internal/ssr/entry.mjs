import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_7bGzSzNm.mjs';

const _page0  = () => import('./chunks/generic_gjjbNjiy.mjs');
const _page1  = () => import('./chunks/index_9p8h7WZQ.mjs');
const _page2  = () => import('./chunks/about_IODtlnG1.mjs');
const _page3  = () => import('./chunks/index_idJAnKWf.mjs');
const _page4  = () => import('./chunks/_slug__gDCU0ac1.mjs');
const _page5  = () => import('./chunks/blog_hKPtnm0R.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/about.astro", _page2],["src/pages/blogs/index.astro", _page3],["src/pages/blogs/[slug].astro", _page4],["src/pages/blog.astro", _page5]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
