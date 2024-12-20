import{_ as n,c as h,a as i,e as a,d as e,b as p,o as l,r as k}from"./app-Do-wsbZ9.js";const r={},d={id:"概述",tabindex:"-1"},o={class:"header-anchor",href:"#概述"};function g(c,s){const t=k("Badge");return l(),h("div",null,[i("h2",d,[i("a",o,[i("span",null,[s[0]||(s[0]=a("概述 ")),e(t,{type:"tip",text:"badge"})])])]),s[5]||(s[5]=p(`<p>使用 <code>&lt;Badge&gt;</code> 组件来显示 行内信息，如状态或标签。</p><p>将你想显示的内容传递给 <code>&lt;Badge&gt;</code> 组件的 <code>text</code> 属性。</p><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props"><span>Props</span></a></h2><table><thead><tr><th>名称</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>type</td><td><code>&#39;info&#39; | &#39;tip&#39; | &#39;warning&#39; | &#39;danger&#39;</code></td><td><code>&#39;tip&#39;</code></td><td>类型</td></tr><tr><td>text</td><td><code>string</code></td><td><code>&#39;&#39;</code></td><td>文本</td></tr></tbody></table><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p><strong>输入：</strong></p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> VuePress - </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Badge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">info</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">v2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> VuePress - </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Badge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">tip</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">v2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> VuePress - </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Badge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">warning</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">v2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#A65E2B;--shiki-dark:#D4976C;">-</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> VuePress - </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">Badge</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> type</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">danger</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> text</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">v2</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> /&gt;</span></span></code></pre></div><p><strong>输出：</strong></p>`,8)),i("ul",null,[i("li",null,[s[1]||(s[1]=a("VuePress - ")),e(t,{type:"info",text:"v2"})]),i("li",null,[s[2]||(s[2]=a("VuePress - ")),e(t,{type:"tip",text:"v2"})]),i("li",null,[s[3]||(s[3]=a("VuePress - ")),e(t,{type:"warning",text:"v2"})]),i("li",null,[s[4]||(s[4]=a("VuePress - ")),e(t,{type:"danger",text:"v2"})])])])}const u=n(r,[["render",g],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/guide/components/badge/","title":"徽章","lang":"zh-CN","frontmatter":{"title":"徽章","author":"pengzhanbo","icon":"iconamoon:badge-light","createTime":"2024/08/18 22:45:50","permalink":"/guide/components/badge/","description":"概述 使用 <Badge> 组件来显示 行内信息，如状态或标签。 将你想显示的内容传递给 <Badge> 组件的 text 属性。 Props 示例 输入： 输出： VuePress - VuePress - VuePress - VuePress -","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/guide/components/badge/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"徽章"}],["meta",{"property":"og:description","content":"概述 使用 <Badge> 组件来显示 行内信息，如状态或标签。 将你想显示的内容传递给 <Badge> 组件的 text 属性。 Props 示例 输入： 输出： VuePress - VuePress - VuePress - VuePress -"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-18T17:33:36.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:modified_time","content":"2024-08-18T17:33:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"徽章\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-18T17:33:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":0.49,"words":148},"git":{"updatedTime":1724002416000,"contributors":[{"name":"pengzhanbo","username":"pengzhanbo","email":"volodymyr@foxmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/pengzhanbo?v=4","url":"https://github.com/pengzhanbo"}],"changelog":[{"hash":"e3b1c3cc531ac9e163ec809c2a3ccdc35b12a4bb","date":1724002416000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: improve docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/e3b1c3cc531ac9e163ec809c2a3ccdc35b12a4bb"}]},"autoDesc":true,"filePathRelative":"notes/theme/guide/组件/徽章.md","bulletin":false}');export{u as comp,m as data};