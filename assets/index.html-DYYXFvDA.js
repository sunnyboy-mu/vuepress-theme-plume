import{_ as m,c as u,a as s,e,d as i,w as n,b as h,r,o as g}from"./app-Do-wsbZ9.js";const f={},y={class:"hint-container details"},b={class:"hint-container info"},A={class:"vp-file-tree"},v={class:"tree-node folder"},c={class:"tree-node folder"},B={class:"tree-node folder"},D={class:"tree-node folder"},E={class:"tree-node folder"},x={class:"tree-node folder"},C={class:"tree-node folder"};function z(F,t){const a=r("RouteLink"),l=r("VPIcon"),k=r("CodeTabs"),o=r("FileTreeItem");return g(),u("div",null,[s("p",null,[t[1]||(t[1]=e("VuePress 支持完整的 ")),i(a,{to:"/notes/theme/guide/markdown/%E5%9F%BA%E7%A1%80.html"},{default:n(()=>t[0]||(t[0]=[e("Markdown 语法")])),_:1}),t[2]||(t[2]=e(", 以及使用 ")),t[3]||(t[3]=s("a",{href:"https://dev.to/paulasantamaria/introduction-to-yaml-125f",target:"_blank",rel:"noopener noreferrer"},"YAML",-1)),t[4]||(t[4]=e(" 定义 frontmatter 页面元数据，例如 标题和创建时间。"))]),s("p",null,[t[6]||(t[6]=e("主题还对 Markdown 语法进行了 ")),i(a,{to:"/notes/theme/guide/markdown/%E6%89%A9%E5%B1%95.html"},{default:n(()=>t[5]||(t[5]=[e("扩展")])),_:1}),t[7]||(t[7]=e(" 支持。你还可以直接在 Markdown 中写 HTML ，或者使用 Vue 组件。"))]),t[73]||(t[73]=s("h2",{id:"frontmatter",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#frontmatter"},[s("span",null,"Frontmatter")])],-1)),t[74]||(t[74]=s("p",null,[e("你可以通过设置 frontmatter 中的值来自定义 VuePress 里每个页面。 Frontmatter 是你的文件顶部在 "),s("code",null,"---"),e(" 中间的部分。")],-1)),i(k,{id:"12",data:[{id:"post.md"}]},{title0:n(({value:d,isActive:p})=>[i(l,{name:"vscode-icons:file-type-markdown"}),t[8]||(t[8]=s("span",null,"post.md",-1))]),tab0:n(({value:d,isActive:p})=>t[9]||(t[9]=[s("div",{class:"language-md","data-ext":"md","data-title":"md"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"---")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"title"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," 文章标题")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"createTime"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," 2024/09/08 22:53:34")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"permalink"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},":"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}}," /article/9eh4d6ao/")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"---")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"页面内容在第二个 "),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"`"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}},"---"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"`"),s("span",{style:{"--shiki-light":"#393A34","--shiki-dark":"#DBD7CAEE"}}," 后面。")])])])],-1)])),_:1}),s("details",y,[t[13]||(t[13]=s("summary",null,"什么是 frontmatter？",-1)),t[14]||(t[14]=s("p",null,[e("frontmatter 是一个 "),s("a",{href:"https://dev.to/paulasantamaria/introduction-to-yaml-125f",target:"_blank",rel:"noopener noreferrer"},"YAML"),e(" 格式的配置内容，被放置于 markdown 文件的顶部，通过 "),s("code",null,"---"),e(" 来分隔。")],-1)),s("p",null,[t[11]||(t[11]=e("您可以阅读 ")),i(a,{to:"/4.%E6%95%99%E7%A8%8B/frontmatter.html"},{default:n(()=>t[10]||(t[10]=[e("这篇文章")])),_:1}),t[12]||(t[12]=e(" 了解如何正确书写 frontmatter。"))])]),t[75]||(t[75]=h(`<h2 id="自动生成-frontmatter" tabindex="-1"><a class="header-anchor" href="#自动生成-frontmatter"><span>自动生成 Frontmatter</span></a></h2><p>默认配置下，主题在启动开发服务后，会帮助为源目录中的 markdown 文件，生成一些 <code>frontmatter</code> 配置。 这些配置包括： <strong>标题</strong>, <strong>创建时间</strong> 以及 <strong>永久链接</strong>。</p><p>一方面，这可以减少 内容创作者 的一些重复工作；另一方面，这些配置也为主题后续的其他功能提供了前置支持。</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 标题</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">createTime</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 2024/09/08 22:53:34</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">permalink</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> /article/9eh4d6ao/</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span></code></pre></div><h3 id="标题" tabindex="-1"><a class="header-anchor" href="#标题"><span>标题</span></a></h3><p>主题默认 使用文件名作为文章标题。在解析 文件名 时，<a href="#%E6%96%87%E4%BB%B6%E5%A4%B9%E5%91%BD%E5%90%8D%E7%BA%A6%E5%AE%9A">文件命名约定</a> 所命名的文件名如 <code>1.我的文章.md</code>，其中 <code>1.</code> 和 <code>.md</code> 部分将被裁剪，最终文章标题为 <code>我的文章</code> 。</p><h3 id="创建时间" tabindex="-1"><a class="header-anchor" href="#创建时间"><span>创建时间</span></a></h3><p>主题默认使用文件创建时间作为文章创建时间，并将其格式化为 <code>yyyy/MM/dd HH:mm:ss</code>。</p><h3 id="永久链接" tabindex="-1"><a class="header-anchor" href="#永久链接"><span>永久链接</span></a></h3><p><strong>永久链接</strong> 指的是，文章发布后的 访问地址，这个地址一旦生成，只要您不手动修改它，即使文件路径、文件名发生改变也不会改变。</p><p>提前准备好 <strong>永久链接</strong> 是比较有价值的，一方面，它可以帮助改善 站点的 SEO，避免收录的地址频繁变动； 另一方面，主题使用一套规范 生成 <strong>永久链接</strong> ，它使得整个站点的 链接 风格一致。</p>`,11)),s("ul",null,[s("li",null,[t[20]||(t[20]=s("p",null,[s("strong",null,"博客文章")],-1)),t[21]||(t[21]=s("p",null,[e("对于 博客文章，默认使用 "),s("code",null,"/article/"),e(" 作为永久链接的前缀，然后使用 "),s("a",{href:"https://github.com/ai/nanoid",target:"_blank",rel:"noopener noreferrer"},[s("code",null,"nanoid")]),e(" 生成长度为 "),s("code",null,"8"),e(" 的随机字符串进行拼接，作为文章的永久链接， 如 "),s("code",null,"/article/9eh4d6ao/"),e("。")],-1)),s("p",null,[t[16]||(t[16]=e("对于链接前缀，还可以通过修改 ")),i(a,{to:"/notes/theme/config/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE.html#article"},{default:n(()=>t[15]||(t[15]=[e("主题配置 > article")])),_:1}),t[17]||(t[17]=e(" 替换默认的 ")),t[18]||(t[18]=s("code",null,"/article/",-1)),t[19]||(t[19]=e("。"))])]),s("li",null,[t[29]||(t[29]=s("p",null,[s("strong",null,"notes")],-1)),s("p",null,[t[23]||(t[23]=e("对于 notes , 主题使用更为灵活的自定义方案，你可以在 ")),i(a,{to:"/notes/theme/config/notes%E9%85%8D%E7%BD%AE.html#%E9%85%8D%E7%BD%AE"},{default:n(()=>t[22]||(t[22]=[e("notes > note.link")])),_:1}),t[24]||(t[24]=e(" 声明不同的 note 的链接前缀，然后同样适用 ")),t[25]||(t[25]=s("a",{href:"https://github.com/ai/nanoid",target:"_blank",rel:"noopener noreferrer"},[s("code",null,"nanoid")],-1)),t[26]||(t[26]=e(" 生成长度为 ")),t[27]||(t[27]=s("code",null,"8",-1)),t[28]||(t[28]=e(" 的随机字符串进行拼接，作为 ntoe 文章的永久链接。"))])])]),t[76]||(t[76]=s("h3",{id:"禁用自动生成",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#禁用自动生成"},[s("span",null,"禁用自动生成")])],-1)),s("p",null,[t[31]||(t[31]=e("你可能不想主题做额外的自动生成，希望由自己完全掌控。这完全没问题，主题支持通过配置来控制 自动生成 frontmatter 的行为。 通过 ")),i(a,{to:"/notes/theme/config/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE.html#autofrontmatter"},{default:n(()=>t[30]||(t[30]=[e("主题配置 > autoFrontmatter")])),_:1}),t[32]||(t[32]=e(" 即可轻松做到。"))]),i(k,{id:"83",data:[{id:".vuepress/config.ts"}]},{title0:n(({value:d,isActive:p})=>[i(l,{name:"vscode-icons:file-type-typescript"}),t[33]||(t[33]=s("span",null,".vuepress/config.ts",-1))]),tab0:n(({value:d,isActive:p})=>t[34]||(t[34]=[s("div",{class:"language-ts line-numbers-mode","data-ext":"ts","data-title":"ts"},[s("button",{class:"copy",title:"复制代码","data-copied":"已复制"}),s("pre",{class:"shiki shiki-themes vitesse-light vitesse-dark vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," defineUserConfig"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"vuepress"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"import"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," {"),s("span",{style:{"--shiki-light":"#B07D48","--shiki-dark":"#BD976A"}}," plumeTheme"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}}," }"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," from"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}}," '"),s("span",{style:{"--shiki-light":"#B56959","--shiki-dark":"#C98A7D"}},"vuepress-theme-plume"),s("span",{style:{"--shiki-light":"#B5695977","--shiki-dark":"#C98A7D77"}},"'")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"export"),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}}," default"),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}}," defineUserConfig"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"  theme"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#59873A","--shiki-dark":"#80A665"}},"plumeTheme"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"({")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"    // 完全禁用所有自动生成")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"    // autoFrontmatter: false,")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"    // 控制部分自动生成")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"    autoFrontmatter"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": {")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"      permalink"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"true"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"// 是否生成永久链接")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"      createTime"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"true"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"// 是否生成创建时间")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#998418","--shiki-dark":"#B8A965"}},"      title"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},": "),s("span",{style:{"--shiki-light":"#1E754F","--shiki-dark":"#4D9375"}},"true"),s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},", "),s("span",{style:{"--shiki-light":"#A0ADA0","--shiki-dark":"#758575DD"}},"// 是否生成标题")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"    }")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"  })")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#999999","--shiki-dark":"#666666"}},"})")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),t[77]||(t[77]=s("h2",{id:"约定",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#约定"},[s("span",null,"约定")])],-1)),s("div",b,[t[38]||(t[38]=s("p",{class:"hint-container-title"},"提示",-1)),s("p",null,[t[36]||(t[36]=e("以下内容，以 ")),i(a,{to:"/notes/theme/guide/%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84.html"},{default:n(()=>t[35]||(t[35]=[e("项目结构")])),_:1}),t[37]||(t[37]=e(" 中的文件结构作为基准。"))])]),t[78]||(t[78]=s("p",null,[e("使用本主题编写文章是一件很轻松的事情，你可以在 "),s("code",null,"docs"),e("目录中按照你的个人命名喜好新建任意名字的"),s("code",null,"Markdown"),e("文件。")],-1)),t[79]||(t[79]=s("h3",{id:"文件夹命名约定",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#文件夹命名约定"},[s("span",null,"文件夹命名约定")])],-1)),t[80]||(t[80]=s("p",null,[e("对于 "),s("code",null,"docs"),e(" 中的文件夹命名，主题有一套简单的约定。")],-1)),s("ul",null,[t[42]||(t[42]=s("li",null,[e("文件夹的名称将作为 "),s("code",null,"category"),e(" 即 "),s("strong",null,"分类"),e("。")],-1)),t[43]||(t[43]=s("li",null,"允许多级目录，子级目录将作为父目录对应的分类的子项。",-1)),s("li",null,[t[40]||(t[40]=e("如果目录名称 在 ")),i(a,{to:"/notes/theme/config/notes%E9%85%8D%E7%BD%AE.html"},{default:n(()=>t[39]||(t[39]=[e("主题配置 notes")])),_:1}),t[41]||(t[41]=e(" 中声明用于 notes 文章管理，则默认不作为 分类目录。"))])]),t[81]||(t[81]=h(`<p>由于文件夹名称将作为分类名称，且不在主题配置中进行排序配置，对于有排序需要的场景，使用以下规则进行命名：</p><div class="language-ts" data-ext="ts" data-title="ts"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">const </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">dir</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> /</span><span style="--shiki-light:#5A6AA6;--shiki-dark:#6872AB;">\\d</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">+</span><span style="--shiki-light:#BDA437;--shiki-dark:#E6CC77;">\\.</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">[</span><span style="--shiki-light:#5A6AA6;--shiki-dark:#6872AB;">\\s\\S</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">]</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">+</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">/</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 即 数字 + . + 分类名称</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">// 如： 1.前端</span></span></code></pre></div><p>数字将作为 <strong>排序</strong> 的依据。 如果不带数字，则以默认的规则进行排序。</p><p><strong>example:</strong></p>`,4)),s("div",A,[s("ul",null,[i(o,{type:"folder",expanded:!0,empty:!1},{default:n(()=>[s("span",v,[i(l,{name:"vscode-icons:folder-type-docs"}),t[44]||(t[44]=s("span",{class:"name"},"docs",-1))]),s("ul",null,[i(o,{type:"folder",expanded:!0,empty:!1},{default:n(()=>[s("span",c,[i(l,{name:"vscode-icons:default-folder"}),t[45]||(t[45]=s("span",{class:"name"},"1.前端",-1))]),s("ul",null,[i(o,{type:"folder",expanded:!1,empty:!0},{default:n(()=>[s("span",B,[i(l,{name:"vscode-icons:default-folder"}),t[46]||(t[46]=s("span",{class:"name"},"1.html",-1))])]),_:1}),i(o,{type:"folder",expanded:!1,empty:!0},{default:n(()=>[s("span",D,[i(l,{name:"vscode-icons:default-folder"}),t[47]||(t[47]=s("span",{class:"name"},"2.css",-1))])]),_:1}),i(o,{type:"folder",expanded:!1,empty:!0},{default:n(()=>[s("span",E,[i(l,{name:"vscode-icons:default-folder"}),t[48]||(t[48]=s("span",{class:"name"},"3.javascript",-1))])]),_:1})])]),_:1}),i(o,{type:"folder",expanded:!1,empty:!0},{default:n(()=>[s("span",x,[i(l,{name:"vscode-icons:default-folder"}),t[49]||(t[49]=s("span",{class:"name"},"2.后端",-1))])]),_:1}),i(o,{type:"folder",expanded:!1,empty:!0},{default:n(()=>[s("span",C,[i(l,{name:"vscode-icons:default-folder"}),t[50]||(t[50]=s("span",{class:"name"},"运维",-1))])]),_:1})])]),_:1})])]),t[82]||(t[82]=s("p",null,"主题将根据 目录结构，生成一个 分类页。",-1)),t[83]||(t[83]=s("h3",{id:"文件命名约定",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#文件命名约定"},[s("span",null,"文件命名约定")])],-1)),s("ul",null,[s("li",null,[t[56]||(t[56]=s("p",null,[s("strong",null,"博客文章")],-1)),s("p",null,[t[52]||(t[52]=e("对于 ")),t[53]||(t[53]=s("strong",null,"博客文章",-1)),t[54]||(t[54]=e(" 的名称，主题没有任何约定，你可以任意命名。博客文章默认排序规则仅根据文件创建时间进行排序。 你还可以通过 ")),i(a,{to:"/notes/theme/config/frontmatter/post.html#sticky"},{default:n(()=>t[51]||(t[51]=[e("frontmatter > sticky")])),_:1}),t[55]||(t[55]=e(" 配置文章是否置顶。"))])]),s("li",null,[t[64]||(t[64]=s("p",null,[s("strong",null,"notes")],-1)),s("p",null,[t[58]||(t[58]=e("对于 ")),t[59]||(t[59]=s("strong",null,"notes",-1)),t[60]||(t[60]=e(" 中的 markdown 文件名称，依然遵循 与 ")),t[61]||(t[61]=s("a",{href:"#%E6%96%87%E4%BB%B6%E5%A4%B9%E5%91%BD%E5%90%8D%E7%BA%A6%E5%AE%9A"},"文件夹命名约定",-1)),t[62]||(t[62]=e(" 相同的规则。 这可以为 notes 的 ")),i(a,{to:"/notes/theme/config/notes%E9%85%8D%E7%BD%AE.html#%E8%87%AA%E5%8A%A8%E7%94%9F%E6%88%90%E4%BE%A7%E8%BE%B9%E6%A0%8F"},{default:n(()=>t[57]||(t[57]=[e("自动生成侧边栏")])),_:1}),t[63]||(t[63]=e(" 提供排序依据。"))])])]),t[84]||(t[84]=s("h2",{id:"文章写作",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#文章写作"},[s("span",null,"文章写作")])],-1)),s("p",null,[t[66]||(t[66]=e("你可以使用 ")),t[67]||(t[67]=s("code",null,"markdown",-1)),t[68]||(t[68]=e(" 语法开始在 ")),t[69]||(t[69]=s("code",null,"docs",-1)),t[70]||(t[70]=e(" 下新建 ")),t[71]||(t[71]=s("code",null,"Markdown",-1)),t[72]||(t[72]=e(" 文件，编写你自己的文章了， 关于 markdown 扩展的功能支持，请查看 ")),i(a,{to:"/notes/theme/guide/markdown/%E6%89%A9%E5%B1%95.html"},{default:n(()=>t[65]||(t[65]=[e("这个文档")])),_:1})]),t[85]||(t[85]=h(`<p>由于主题默认会为文章 的 <code>frontmatter</code> 自动生成一个 <code>title</code>，因此，文章内容的主体部分的标题，起始应该从 <code>h2</code> 即 <code>## 二级标题</code> 开始。如果您禁用了 <code>autoFrontmatter.title</code>，那么应该使用 <code>h1</code> 即 <code># 一级标题</code> 开始。</p><h3 id="标签" tabindex="-1"><a class="header-anchor" href="#标签"><span>标签</span></a></h3><p>通过 <code>frontmatter.tags</code> 可以为文章添加标签。</p><div class="language-md" data-ext="md" data-title="md"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">title</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 我的文章</span></span>
<span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">tags</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 标签 1</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  -</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> 标签 2</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">---</span></span></code></pre></div>`,4))])}const M=m(f,[["render",z],["__file","index.html.vue"]]),T=JSON.parse('{"path":"/guide/write/","title":"编写文章","lang":"zh-CN","frontmatter":{"title":"编写文章","author":"pengzhanbo","icon":"mingcute:edit-4-line","createTime":"2024/03/04 10:06:06","permalink":"/guide/write/","tags":["指南","快速开始"],"description":"VuePress 支持完整的 , 以及使用 YAML 定义 frontmatter 页面元数据，例如 标题和创建时间。 主题还对 Markdown 语法进行了 支持。你还可以直接在 Markdown 中写 HTML ，或者使用 Vue 组件。 Frontmatter 你可以通过设置 frontmatter 中的值来自定义 VuePress 里每个页面。...","head":[["meta",{"property":"og:url","content":"https://plume.pengzhanbo.cn/guide/write/"}],["meta",{"property":"og:site_name","content":"Plume 主题"}],["meta",{"property":"og:title","content":"编写文章"}],["meta",{"property":"og:description","content":"VuePress 支持完整的 , 以及使用 YAML 定义 frontmatter 页面元数据，例如 标题和创建时间。 主题还对 Markdown 语法进行了 支持。你还可以直接在 Markdown 中写 HTML ，或者使用 Vue 组件。 Frontmatter 你可以通过设置 frontmatter 中的值来自定义 VuePress 里每个页面。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-08T16:35:28.000Z"}],["meta",{"property":"article:author","content":"pengzhanbo"}],["meta",{"property":"article:tag","content":"指南"}],["meta",{"property":"article:tag","content":"快速开始"}],["meta",{"property":"article:modified_time","content":"2024-11-08T16:35:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"编写文章\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-08T16:35:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"pengzhanbo\\"}]}"]]},"headers":[],"readingTime":{"minutes":5.03,"words":1509},"git":{"updatedTime":1731083728000,"contributors":[{"name":"pengzhanbo","username":"pengzhanbo","email":"volodymyr@foxmail.com","commits":14,"avatar":"https://avatars.githubusercontent.com/pengzhanbo?v=4","url":"https://github.com/pengzhanbo"}],"changelog":[{"hash":"0c53be8f10bec3e943a493111b321be89a5952cf","date":1731083728000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: improve docs (<a href=\\"https://github.com/pengzhanbo/vuepress-theme-plume/issues/332\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#332</a>)","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/0c53be8f10bec3e943a493111b321be89a5952cf"},{"hash":"f655249b07998d9137990b50a661ac15c66c2e41","date":1728554789000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/f655249b07998d9137990b50a661ac15c66c2e41"},{"hash":"89b2601ec706b75dc438178c4226fa1650cc5aa5","date":1726666421000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: improve docs (<a href=\\"https://github.com/pengzhanbo/vuepress-theme-plume/issues/192\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">#192</a>)","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/89b2601ec706b75dc438178c4226fa1650cc5aa5"},{"hash":"03b4daab3c28f1fdc361554be704ecf3eab5db70","date":1725812312000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/03b4daab3c28f1fdc361554be704ecf3eab5db70"},{"hash":"bf9ef6372a7c1ffa8a378b81e60ed05cf2623caa","date":1725206595000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/bf9ef6372a7c1ffa8a378b81e60ed05cf2623caa"},{"hash":"1ff7796d57246388619451291c9dcba90a2be5f0","date":1723578965000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/1ff7796d57246388619451291c9dcba90a2be5f0"},{"hash":"bf4b8dcb061102deaa1ba8a93b5a3b91e32f6aa8","date":1722397571000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/bf4b8dcb061102deaa1ba8a93b5a3b91e32f6aa8"},{"hash":"69d1b0f2d94b1eb36c8709d67884ec735c47d90c","date":1718985907000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update docs","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/69d1b0f2d94b1eb36c8709d67884ec735c47d90c"},{"hash":"5af709a7623f698a1630054ee8ffda8f1544b753","date":1716098807000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"perf: 优化部分正则校验规则","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/5af709a7623f698a1630054ee8ffda8f1544b753"},{"hash":"4349ab023ca3762f521c33a04301aae39b6c102d","date":1712247346000,"email":"volodymyr@foxmail.com","author":"pengzhanbo","message":"docs: update doc","commitUrl":"https://github.com/pengzhanbo/vuepress-theme-plume/commit/4349ab023ca3762f521c33a04301aae39b6c102d"}]},"autoDesc":true,"filePathRelative":"notes/theme/guide/编写文章.md","bulletin":false}');export{M as comp,T as data};