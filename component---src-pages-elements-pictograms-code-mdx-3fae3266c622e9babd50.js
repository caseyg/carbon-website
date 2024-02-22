"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[881295],{43159:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return y}});var a=t(145987),r=(t(667294),t(603905)),o=t(503624);const l=["components"],p={},i=e=>function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",n)},s=i("PageDescription"),c=i("AnchorLinks"),m=i("AnchorLink"),u=i("Row"),d=i("Column"),k=i("ResourceCard"),g=i("MdxIcon"),b={_frontmatter:p},h=o.Z;function y(e){let{components:n}=e,t=(0,a.Z)(e,l);return(0,r.kt)(h,Object.assign({},b,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(s,{mdxType:"PageDescription"},(0,r.kt)("p",null,"Carbon pictograms are provided through a set of packages allowing the use of\npictograms in multiple frameworks. Pictograms are supported in vanilla, React,\nAngular, and Vue.")),(0,r.kt)(c,{mdxType:"AnchorLinks"},(0,r.kt)(m,{mdxType:"AnchorLink"},"Get started"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Usage"),(0,r.kt)(m,{mdxType:"AnchorLink"},"Resources")),(0,r.kt)("h2",null,"Get started"),(0,r.kt)("p",null,"To install ",(0,r.kt)("inlineCode",{parentName:"p"},"@carbon/pictograms-react")," in your project, you will need to run the\nfollowing command using ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -S @carbon/pictograms-react\n")),(0,r.kt)("p",null,"If you prefer ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/"},"Yarn"),", use the following command\ninstead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @carbon/pictograms-react\n")),(0,r.kt)("h2",null,"Usage"),(0,r.kt)("p",null,"You can import a pictogram component into your project by referring to its name:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Airplane } from '@carbon/pictograms-react';\n")),(0,r.kt)("p",null,"We also provide CommonJS and UMD files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"umd")," directories,\nrespectively."),(0,r.kt)("p",null,"To import using CommonJS, you can do the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { Airplane } = require('@carbon/pictograms-react');\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: if you would like to find the import path for a pictogram, you can\nreference our\n",(0,r.kt)("a",{parentName:"em",href:"https://www.carbondesignsystem.com/guidelines/pictograms/library"},"Pictogram Library"))),(0,r.kt)("h3",null,"Icon fill"),(0,r.kt)("p",null,"All icons from the library support being styled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"fill")," property. You can\nchange the color of an icon by passing in a custom class name that sets this\nproperty (preferred), or by passing in an inline style. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"// CSS custom class name to set the fill of the icon to `rebeccapurple`\nsvg.my-custom-class {\n  fill: rebeccapurple;\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Airplane } from \'@carbon/pictograms-react\';\n\nfunction MyComponent() {\n  return (\n    <button>\n      <Airplane aria-label="Add" className="my-custom-class" />\n    </button>\n  );\n}\n')),(0,r.kt)("h3",null,"Focus and ",(0,r.kt)("inlineCode",{parentName:"h3"},"aria-label")),(0,r.kt)("p",null,"By default, the icon components from ",(0,r.kt)("inlineCode",{parentName:"p"},"@carbon/pictograms-react")," are treated as\ndecorative content. This means that we set ",(0,r.kt)("inlineCode",{parentName:"p"},'aria-hidden="true"')," unless certain\nprops are passed to the component."),(0,r.kt)("p",null,"If you would like the icon to be announced by a screen reader, you can supply an\n",(0,r.kt)("inlineCode",{parentName:"p"},"aria-label")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-labelledby"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Airplane } from '@carbon/pictograms-react';\n\nfunction MyComponent() {\n  return (\n    <button>\n      <Airplane aria-label=\"Add\" />\n    </button>\n  );\n}\n")),(0,r.kt)("p",null,"Doing this will add the appropriate ",(0,r.kt)("inlineCode",{parentName:"p"},"role")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<svg>")," node, as well."),(0,r.kt)("p",null,"If you would like the ",(0,r.kt)("inlineCode",{parentName:"p"},"<svg>")," to receive focus, you will need to pass in a\n",(0,r.kt)("inlineCode",{parentName:"p"},"tabIndex")," value. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Airplane } from \'@carbon/pictograms-react\';\n\nfunction MyComponent() {\n  return <Airplane aria-label="Add" tabIndex="0" />;\n}\n')),(0,r.kt)("p",null,"Including ",(0,r.kt)("inlineCode",{parentName:"p"},"tabIndex")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-label")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"aria-labelledby"),") will set the\ncorresponding ",(0,r.kt)("inlineCode",{parentName:"p"},"tabindex")," on the underlying ",(0,r.kt)("inlineCode",{parentName:"p"},"<svg>")," and verify support in older\nbrowsers like Internet Explorer 11 by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"focusable")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h2",null,"Resources"),(0,r.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,r.kt)(d,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(k,{subTitle:"Carbon pictograms package",href:"https://github.com/carbon-design-system/carbon/blob/v10/packages/pictograms-react",mdxType:"ResourceCard"},(0,r.kt)(g,{name:"bee",mdxType:"MdxIcon"})))))}y.isMDXComponent=!0}}]);