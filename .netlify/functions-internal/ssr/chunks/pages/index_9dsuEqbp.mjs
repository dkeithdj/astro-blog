/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent, m as maybeRenderHead } from '../astro_jneZDTKm.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection, $ as $$Main, b as $$H1, a as $$Layout } from './_slug__woMon-y8.mjs';
import { $ as $$Blog, a as $$BlogList } from './blog_E-v1T_aM.mjs';

const $$Astro$2 = createAstro();
const $$FeaturedBlog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FeaturedBlog;
  const blogs = await getCollection("blogs");
  return renderTemplate`${blogs.filter((blog) => blog.data.featured).map((blog) => renderTemplate`${renderComponent($$result, "Blog", $$Blog, { "blog": blog })}`)}`;
}, "/home/denrei/codes/web/astro-tut/astro-blog/src/components/FeaturedBlog.astro", void 0);

const $$Astro$1 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const blogs = await getCollection("blogs");
  console.log(blogs.map((blog) => blog.data.title));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hello world" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "This is my blog" })} ${maybeRenderHead()}<p class="pb-4 text-justify">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat possimus
      quae nisi! Perferendis earum velit possimus, non est quos, laborum facere
      recusandae delectus veniam itaque! Ducimus obcaecati esse eaque beatae!
</p> ${renderComponent($$result3, "H1", $$H1, { "text": "Featured" })} ${renderComponent($$result3, "FeaturedBlog", $$FeaturedBlog, {})} ` })} ` })}`;
}, "/home/denrei/codes/web/astro-tut/astro-blog/src/pages/index.astro", void 0);

const $$file$1 = "/home/denrei/codes/web/astro-tut/astro-blog/src/pages/index.astro";
const $$url$1 = "";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const blogs = await getCollection("blogs");
  console.log(blogs.filter((blog) => blog.data.featured));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Blog" })} ${maybeRenderHead()}<p class="py-4">This is my curated list of blogs!</p> <div class="mb-32"> ${renderComponent($$result3, "BlogList", $$BlogList, { "blogs": blogs })} </div> ` })} ` })}`;
}, "/home/denrei/codes/web/astro-tut/astro-blog/src/pages/blogs/index.astro", void 0);

const $$file = "/home/denrei/codes/web/astro-tut/astro-blog/src/pages/blogs/index.astro";
const $$url = "/blogs";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
