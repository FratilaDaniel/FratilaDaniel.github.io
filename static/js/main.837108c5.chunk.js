(this.webpackJsonpdani_landing_page=this.webpackJsonpdani_landing_page||[]).push([[0],{29:function(e,n,t){},30:function(e,n,t){},31:function(e,n,t){},46:function(e,n,t){},51:function(e,n,t){},52:function(e,n,t){},53:function(e,n,t){},54:function(e,n,t){},56:function(e,n,t){},57:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var i=t(1),a=t.n(i),c=t(4),s=t.n(c),r=(t(29),t(30),t(31),t(0));var l=function(e){var n=e.proficiencyPercentage;return Object(r.jsx)("div",{className:"proficiency-bar",style:{width:n}})},o=t(18),j=[{language:"english",alternative:Object(r.jsx)("img",{className:"language-flag-img",src:"./LandingPage/languages/en.png",alt:"EN"}),proficiency:"90%"},{language:"french",alternative:Object(r.jsx)("img",{className:"language-flag-img",src:"./LandingPage/languages/fr.png",alt:"FR"}),proficiency:"45%"},{language:"greek",alternative:Object(r.jsx)("img",{className:"language-flag-img",src:"./LandingPage/languages/gr.jpg",alt:"GR"}),proficiency:"25%"},{language:"romanian",alternative:Object(r.jsx)("img",{className:"language-flag-img",src:"./LandingPage/languages/ro.png",alt:"RO"}),proficiency:"100%"}],g=[{level:"Basic",alternative:Object(r.jsx)("img",{className:"language-level-img",src:"./LandingPage/levels/low.png",alt:"v"})},{level:"Intermediate",alternative:Object(r.jsx)("img",{className:"language-level-img",src:"./LandingPage/levels/tilda.png",alt:"~"})},{level:"Advanced",alternative:Object(r.jsx)("img",{className:"language-level-img",src:"./LandingPage/levels/high.png",alt:"^"})},{level:"Proficient",alternative:Object(r.jsx)("img",{className:"language-level-img",src:"./LandingPage/levels/star.png",alt:"+"})}];var d=function(){return Object(r.jsx)(o.SizeMe,{children:function(e){var n=e.size;return Object(r.jsxs)("div",{className:"language-section-container",children:[Object(r.jsx)("div",{className:n.width<350?"language-bar-legend":"language-bar-legend-wide",children:g.map((function(e,t){return Object(r.jsx)("span",{children:n.width<350?e.alternative:e.level},t)}))}),j.map((function(e,t){return Object(r.jsx)("div",{className:"grid-language",style:{gridRow:t+2},children:n.width<500?e.alternative:e.language},t)})),j.map((function(e,n){return Object(r.jsx)("div",{className:"grid-proficiency",style:{gridRow:n+2},children:Object(r.jsx)(l,{proficiencyPercentage:e.proficiency})},n)}))]})}})};var h=function(e){var n=e.title,t=e.content;return Object(r.jsxs)("section",{className:"section-container",children:[Object(r.jsx)("h2",{children:n}),Object(r.jsx)("div",{className:"content-wrapper",children:t})]})};t(46);var m=function(){return Object(r.jsxs)("section",{id:"education-container",children:[Object(r.jsx)("p",{className:"faculty-container",children:"Faculty of Computer Science at"}),Object(r.jsx)("img",{src:"./LandingPage/SVG/sigla_utcluj_white.svg",alt:"Technical University of Cluj Napoca"}),Object(r.jsx)("p",{className:"diploma-container",children:"Engineer Diploma"}),Object(r.jsx)("p",{className:"year-container",children:"2016 - 2020"})]})},b=t(19),p=t.n(b),u=t(20),O=t.n(u);var x=function(){return Object(r.jsxs)("div",{className:"contact-container",id:"contact",children:[Object(r.jsx)("h2",{children:"Contact"}),Object(r.jsxs)("p",{className:"contact-info-p",children:["You can contact me anytime via ",Object(r.jsx)("a",{href:"https://www.linkedin.com/in/daniel-fratila-369910149/",children:"LinkedIn"})]}),Object(r.jsxs)("p",{className:"contact-info-p",children:["Or email: ",Object(r.jsx)("span",{children:"danfratila1997@gmail.com"})]}),Object(r.jsxs)("p",{className:"contact-info-p",children:["Check out my ",Object(r.jsx)("a",{href:"https://github.com/FratilaDaniel",children:"Github"})," profile for more awesome projects!"]}),Object(r.jsxs)("p",{className:"git-link-images-container",children:[Object(r.jsx)("a",{href:"https://github.com/FratilaDaniel","aria-label":"Github",children:Object(r.jsx)(p.a,{fontSize:"large"})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/daniel-fratila-369910149/","aria-label":"LinkedIn",children:Object(r.jsx)(O.a,{fontSize:"large"})})]})]})};var f=function(){return Object(r.jsxs)("footer",{className:"footer-container",children:["\xa9",(new Date).getFullYear()," Daniel Fratila"]})};t(51);var v=function(){return Object(r.jsxs)("div",{className:"work-container",children:[Object(r.jsxs)("div",{className:"workplace-container",children:[Object(r.jsx)("img",{src:"./LandingPage/bosch.png",alt:"Robert Bosch GMBH"}),Object(r.jsx)("p",{children:"June 2018 - June 2021"}),Object(r.jsx)("p",{children:"Software Engineer - Radar team"}),Object(r.jsx)("p",{children:"Multi-sensor fusion research and development team"}),Object(r.jsx)("p",{children:"Radar development team"}),Object(r.jsx)("p",{children:"Tooling"}),Object(r.jsxs)("p",{children:["Main technologies used: ",Object(r.jsx)("span",{className:"used-tech-span",children:"C++, Python3, Git"})]})]}),Object(r.jsxs)("div",{className:"workplace-container",children:[Object(r.jsx)("img",{src:"./LandingPage/bcr.png",alt:"BCR"}),Object(r.jsx)("p",{children:"July 2017 - September 2017"}),Object(r.jsx)("p",{children:"Intern - Data analyst"}),Object(r.jsx)("p",{children:"Data analysis and reporting"}),Object(r.jsxs)("p",{children:["Main technologies used: ",Object(r.jsx)("span",{className:"used-tech-span",children:"MySQL, Excel"})]})]})]})},N=(t(52),[{title:"Self-timing application",image:Object(r.jsx)("img",{src:"./LandingPage/projects/clock.jpg",alt:"Clock"}),description:"Web application useful for timing activities, statistics included",technologies:"React",herokuLink:"https://self-timing-app.herokuapp.com/",githubLink:"https://github.com/FratilaDaniel/ActivityTimer"},{title:"Mona Divsa",image:Object(r.jsx)("img",{src:"./LandingPage/projects/monalisa.jpg",alt:"Mona Divsa"}),description:"Web application that transforms a given image into a series of DIVs",technologies:"React",herokuLink:"https://mona-divsa.herokuapp.com/",githubLink:"https://github.com/FratilaDaniel/MonaDivsa"},{title:"Snake",image:Object(r.jsx)("img",{src:"./LandingPage/projects/snake.jpg",alt:"Snake"}),description:"A simple game of snake",technologies:"React",herokuLink:"https://singleplayer-snake.herokuapp.com/",githubLink:"https://github.com/FratilaDaniel/SinglePlayersSnek"},{title:"Ines Simonica Landing Page",image:Object(r.jsx)("img",{src:"./LandingPage/projects/lion.jpg",alt:"Lion"}),description:"CV page for 3D artist Ines Simonica",technologies:"React, Threejs",herokuLink:"https://ines-simonica.herokuapp.com/",githubLink:"https://github.com/FratilaDaniel/CV-Ines"}]);var k,y,L=function(){return Object(r.jsx)("div",{className:"projects-section",id:"projects",children:N.map((function(e,n){return Object(r.jsxs)("div",{className:"project-container",children:[Object(r.jsx)("h3",{children:e.title}),Object(r.jsxs)("div",{className:n%2?"project-container-content":"project-container-content-reverse",children:[e.image,Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:e.description}),Object(r.jsxs)("p",{children:["Technologies used: ",Object(r.jsx)("span",{className:"used-tech-span",children:e.technologies})]}),Object(r.jsxs)("p",{children:["View this application deployed on ",Object(r.jsx)("a",{href:e.herokuLink,children:"Heroku"})]}),Object(r.jsxs)("p",{children:["View this application's code on ",Object(r.jsx)("a",{href:e.githubLink,children:"Github"})]})]})]})]},n)}))})},S=(t(53),t(3)),w=t(23),P=t(10),D=(t(54),t(11)),I=["HTML     ","CSS      ","JS     ","React     "],R=function(){return Object(D.b)(k||(k=Object(P.a)(["50% {opacity: 0;}"])))},C=D.a.span(y||(y=Object(P.a)(['\n    :after{\n        content: "";\n        position: absolute;\n        top: 0; bottom: 0; right: -2px;\n        width: 2px;\n        background-color: white;\n        animation: ',";\n        animation-iteration-count: infinite;\n        animation-duration: 1s;\n    }\n    position: relative;\n"])),(function(e){return"running"===e.animationState?R:"none"}));var F=function(){var e=Object(i.useState)({currentTechIndex:0,currentCharIndex:0,direction:1,animationState:"paused"}),n=Object(w.a)(e,2),t=n[0],a=t.currentTechIndex,c=t.currentCharIndex,s=t.direction,l=t.animationState,o=n[1];return Object(i.useEffect)((function(){setTimeout((function(){1===s?c>=I[a].trimRight().length&&o((function(e){return Object(S.a)(Object(S.a)({},e),{},{animationState:"running"})})):c<=I[a].trimRight().length&&o((function(e){return Object(S.a)(Object(S.a)({},e),{},{animationState:"paused"})})),c>=I[a].length&&1===s?o({currentTechIndex:a,currentCharIndex:c-1,direction:-1,animationState:"running"}):o(0===c&&-1===s?{currentTechIndex:(a+1)%I.length,currentCharIndex:c+1,direction:1,animationState:"paused"}:function(e){return Object(S.a)(Object(S.a)({},e),{},{currentCharIndex:c+s})})}),500)}),[a,c,s,l]),Object(r.jsxs)("div",{className:"profession-container",children:[Object(r.jsxs)("p",{className:"tag-container",children:["<",Object(r.jsx)(C,{delay:I[a].trimRight().length,animationState:l,children:I[a].substring(0,c).trimRight()}),">"]}),Object(r.jsx)("p",{id:"prof-container",children:"Frontend Dev"}),Object(r.jsxs)("p",{className:"tag-container",children:["</",Object(r.jsx)(C,{delay:I[a].trimRight().length,animationState:l,children:I[a].substring(0,c).trimRight()}),">"]})]})};t(56);var T=function(){function e(e){document.querySelector(e).scrollIntoView()}return Object(r.jsxs)("section",{id:"about-me-section",children:[Object(r.jsx)("h2",{className:"about-me-title",children:"About me"}),Object(r.jsx)("p",{className:"about-me-p",children:"Hello! I am a web developer specialized in frontend technologies. I am also interested in learning backend and deployment in the near future. My passions are playing the guitar, cooking, entrepreneurship and coding."}),Object(r.jsxs)("p",{className:"about-me-p",children:["You can check out some of my ",Object(r.jsx)("button",{onClick:function(){return e("#projects")},children:"projects"})," and you can ",Object(r.jsx)("button",{onClick:function(){return e("#contact")},children:"contact"})," me anytime."]})]})};var M=function(){return Object(r.jsxs)("div",{className:"banner-me-section",children:[Object(r.jsx)("div",{className:"first-name-container",children:Object(r.jsx)("p",{className:"first-name-p",children:"Daniel"})}),Object(r.jsxs)("div",{className:"name-details-container",children:[Object(r.jsxs)("div",{className:"last-name-container",children:[Object(r.jsx)("p",{className:"last-name-p",children:"Fratila"}),Object(r.jsx)(F,{}),Object(r.jsx)(T,{})]}),Object(r.jsxs)("div",{className:"profile-image-section",children:[Object(r.jsx)("div",{className:"profile-image-container",children:Object(r.jsx)("img",{src:"./LandingPage/dani.png",alt:"Daniel Fratila"})}),Object(r.jsx)("div",{id:"remaining-space-div"})]})]})]})},E=(t(57),"./LandingPage/technologies/");var G=function(){return Object(r.jsxs)("div",{id:"technologies-section",children:[Object(r.jsx)("h3",{children:"Specialized in"}),Object(r.jsxs)("div",{className:"tech-display",children:[Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:E+"html5.png",alt:"HTML5"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:E+"css3.png",alt:"CSS3"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:E+"js.png",alt:"Javascript"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:E+"react.png",alt:"React"})})]}),Object(r.jsx)("h3",{children:"Interested in"}),Object(r.jsxs)("div",{className:"tech-display",children:[Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:E+"threejs.png",alt:"Three JS"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:E+"rtl.png",alt:"React testing library"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:E+"django.png",alt:"Django"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:E+"node.png",alt:"Node"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:E+"python.png",alt:"Python"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:E+"mysql.png",alt:"MySQL"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:E+"mongo.png",alt:"MongoDB"})})]}),Object(r.jsx)("h3",{children:"Helpful tools"}),Object(r.jsxs)("div",{className:"tech-display",children:[Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:E+"figma.png",alt:"Figma"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:E+"docker.png",alt:"Docker"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:E+"git.png",alt:"Git"})})]})]})},J=[{title:"Languages",content:Object(r.jsx)(d,{})},{title:"Education",content:Object(r.jsx)(m,{})},{title:"Work Experience",content:Object(r.jsx)(v,{})},{title:"Projects",content:Object(r.jsx)(L,{})},{title:"Technologies",content:Object(r.jsx)(G,{})}];var B=function(){return Object(r.jsxs)("div",{className:"general-container",children:[Object(r.jsx)(M,{}),Object(r.jsx)("div",{className:"sections-container",children:J.map((function(e,n){return Object(r.jsx)(h,{title:e.title,content:e.content},n)}))}),Object(r.jsx)(x,{}),Object(r.jsx)(f,{})]})},V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,71)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,c=n.getLCP,s=n.getTTFB;t(e),i(e),a(e),c(e),s(e)}))};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(B,{})}),document.getElementById("root")),V()}},[[59,1,2]]]);
//# sourceMappingURL=main.837108c5.chunk.js.map