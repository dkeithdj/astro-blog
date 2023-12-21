/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent } from '../astro_jneZDTKm.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getCollection, $ as $$Main, b as $$H1, a as $$Layout } from './_slug__woMon-y8.mjs';

const $$Astro$2 = createAstro();
const $$Blog$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Blog$1;
  const { blog } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <a${addAttribute(`/blogs/${blog.slug}`, "href")}> <img${addAttribute(blog.data.image, "src")}${addAttribute(blog.data.title, "alt")}${addAttribute(600, "width")}${addAttribute(600 / 1.5, "height")} class="rounded-2xl shadow-xl mb-6 aspect-thumbnail object-cover"> </a> <a${addAttribute(`/blogs/${blog.slug}`, "href")} class="text-4xl text-zinc-900 mb-4 font-semibold inline-block"> ${blog.data.title} </a> <p class="text-zinc-500 text-2xl mb-9 line-clamp-2"> ${blog.body} </p> <span class="text-zinc-700 text-xl"> ${blog.data.date} </span> </article>`;
}, "/home/denrei/codes/web/astro-tut/astro-blog/src/components/Blog.astro", void 0);

const $$Astro$1 = createAstro();
const $$BlogList = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogList;
  const { blogs } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 gap-x-16 gap-y-32 max-md:grid-cols-1 max-sm:gap-y-14"> ${blogs.map((blog) => renderTemplate`${renderComponent($$result, "Blog", $$Blog$1, { "blog": blog })}`)} </div>`;
}, "/home/denrei/codes/web/astro-tut/astro-blog/src/components/BlogList.astro", void 0);

const $$Astro = createAstro();
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const blogs = await getCollection("blogs");
  console.log(blogs.filter((blog) => blog.data.featured));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "H1", $$H1, { "text": "Blog" })} ${maybeRenderHead()}<p class="py-4">This is my curated list of blogs!</p> <div class="mb-32"> ${renderComponent($$result3, "BlogList", $$BlogList, { "blogs": blogs })} </div> ` })} ` })}`;
}, "/home/denrei/codes/web/astro-tut/astro-blog/src/pages/blog.astro", void 0);

const $$file = "/home/denrei/codes/web/astro-tut/astro-blog/src/pages/blog.astro";
const $$url = "/blog";

const blog = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Blog$1 as $, $$BlogList as a, blog as b };
