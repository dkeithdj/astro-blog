/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, f as renderComponent } from '../astro_jneZDTKm.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Main, a as $$Layout } from './_slug__woMon-y8.mjs';

const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, {}, { "default": ($$result3) => renderTemplate`This is an about page` })} ` })}`;
}, "/home/denrei/codes/web/astro-tut/astro-blog/src/pages/about.astro", void 0);

const $$file = "/home/denrei/codes/web/astro-tut/astro-blog/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
