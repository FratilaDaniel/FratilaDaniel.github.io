(this.webpackJsonpdani_landing_page=this.webpackJsonpdani_landing_page||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},46:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(4),s=n.n(a),r=(n(29),n(30),n(31),n(0));var l=function(e){var t=e.proficiencyPercentage;return Object(r.jsx)("div",{className:"proficiency-bar",style:{width:t}})},o=n(18),j=[{language:"english",alternative:Object(r.jsx)("img",{className:"language-flag-img",src:"./languages/en.png",alt:"EN"}),proficiency:"90%"},{language:"french",alternative:Object(r.jsx)("img",{className:"language-flag-img",src:"./languages/fr.png",alt:"FR"}),proficiency:"45%"},{language:"greek",alternative:Object(r.jsx)("img",{className:"language-flag-img",src:"./languages/gr.jpg",alt:"GR"}),proficiency:"25%"},{language:"romanian",alternative:Object(r.jsx)("img",{className:"language-flag-img",src:"./languages/ro.png",alt:"RO"}),proficiency:"100%"}],g=[{level:"Basic",alternative:Object(r.jsx)("img",{className:"language-level-img",src:"./levels/low.png",alt:"v"})},{level:"Intermediate",alternative:Object(r.jsx)("img",{className:"language-level-img",src:"./levels/tilda.png",alt:"~"})},{level:"Advanced",alternative:Object(r.jsx)("img",{className:"language-level-img",src:"./levels/high.png",alt:"^"})},{level:"Proficient",alternative:Object(r.jsx)("img",{className:"language-level-img",src:"./levels/star.png",alt:"+"})}];var d=function(){return Object(r.jsx)(o.SizeMe,{children:function(e){var t=e.size;return Object(r.jsxs)("div",{className:"language-section-container",children:[Object(r.jsx)("div",{className:t.width<350?"language-bar-legend":"language-bar-legend-wide",children:g.map((function(e,n){return Object(r.jsx)("span",{children:t.width<350?e.alternative:e.level},n)}))}),j.map((function(e,n){return Object(r.jsx)("div",{className:"grid-language",style:{gridRow:n+2},children:t.width<500?e.alternative:e.language},n)})),j.map((function(e,t){return Object(r.jsx)("div",{className:"grid-proficiency",style:{gridRow:t+2},children:Object(r.jsx)(l,{proficiencyPercentage:e.proficiency})},t)}))]})}})};var h=function(e){var t=e.title,n=e.content;return Object(r.jsxs)("section",{className:"section-container",children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("div",{className:"content-wrapper",children:n})]})};n(46);var m=function(){return Object(r.jsxs)("section",{id:"education-container",children:[Object(r.jsx)("p",{className:"faculty-container",children:"Faculty of Computer Science at"}),Object(r.jsx)("img",{src:"./SVG/sigla_utcluj_white.svg",alt:"Technical University of Cluj Napoca"}),Object(r.jsx)("p",{className:"diploma-container",children:"Engineer Diploma"}),Object(r.jsx)("p",{className:"year-container",children:"2016 - 2020"})]})},b=n(19),p=n.n(b),u=n(20),O=n.n(u);var x=function(){return Object(r.jsxs)("div",{className:"contact-container",id:"contact",children:[Object(r.jsx)("h2",{children:"Contact"}),Object(r.jsxs)("p",{className:"contact-info-p",children:["You can contact me anytime via ",Object(r.jsx)("a",{href:"https://www.linkedin.com/in/daniel-fratila-369910149/",children:"LinkedIn"})]}),Object(r.jsxs)("p",{className:"contact-info-p",children:["Or email: ",Object(r.jsx)("span",{children:"danfratila1997@gmail.com"})]}),Object(r.jsxs)("p",{className:"contact-info-p",children:["Check out my ",Object(r.jsx)("a",{href:"https://github.com/FratilaDaniel",children:"Github"})," profile for more awesome projects!"]}),Object(r.jsxs)("p",{className:"git-link-images-container",children:[Object(r.jsx)("a",{href:"https://github.com/FratilaDaniel","aria-label":"Github",children:Object(r.jsx)(p.a,{fontSize:"large"})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/daniel-fratila-369910149/","aria-label":"LinkedIn",children:Object(r.jsx)(O.a,{fontSize:"large"})})]})]})};var f=function(){return Object(r.jsxs)("footer",{className:"footer-container",children:["\xa9",(new Date).getFullYear()," Daniel Fratila"]})};n(51);var v=function(){return Object(r.jsxs)("div",{className:"work-container",children:[Object(r.jsxs)("div",{className:"workplace-container",children:[Object(r.jsx)("img",{src:"./bosch.png",alt:"Robert Bosch GMBH"}),Object(r.jsx)("p",{children:"June 2018 - June 2021"}),Object(r.jsx)("p",{children:"Software Engineer - Radar team"}),Object(r.jsx)("p",{children:"Multi-sensor fusion research and development team"}),Object(r.jsx)("p",{children:"Radar development team"}),Object(r.jsx)("p",{children:"Tooling"}),Object(r.jsxs)("p",{children:["Main technologies used: ",Object(r.jsx)("span",{className:"used-tech-span",children:"C++, Python3, Git"})]})]}),Object(r.jsxs)("div",{className:"workplace-container",children:[Object(r.jsx)("img",{src:"./bcr.png",alt:"BCR"}),Object(r.jsx)("p",{children:"July 2017 - September 2017"}),Object(r.jsx)("p",{children:"Intern - Data analyst"}),Object(r.jsx)("p",{children:"Data analysis and reporting"}),Object(r.jsxs)("p",{children:["Main technologies used: ",Object(r.jsx)("span",{className:"used-tech-span",children:"MySQL, Excel"})]})]})]})},N=(n(52),[{title:"Self-timing application",image:Object(r.jsx)("img",{src:"./projects/clock.jpg",alt:"Clock"}),description:"Web application useful for timing activities, statistics included",technologies:"React",herokuLink:"https://self-timing-app.herokuapp.com/",githubLink:"https://github.com/FratilaDaniel/ActivityTimer"},{title:"Mona Divsa",image:Object(r.jsx)("img",{src:"./projects/monalisa.jpg",alt:"Mona Divsa"}),description:"Web application that transforms a given image into a series of DIVs",technologies:"React",herokuLink:"https://mona-divsa.herokuapp.com/",githubLink:"https://github.com/FratilaDaniel/MonaDivsa"},{title:"Snake",image:Object(r.jsx)("img",{src:"./projects/snake.jpg",alt:"Snake"}),description:"A simple game of snake",technologies:"React",herokuLink:"https://singleplayer-snake.herokuapp.com/",githubLink:"https://github.com/FratilaDaniel/SinglePlayersSnek"},{title:"Ines Simonica Landing Page",image:Object(r.jsx)("img",{src:"./projects/lion.jpg",alt:"Lion"}),description:"CV page for 3D artist Ines Simonica",technologies:"React, Threejs",herokuLink:"https://ines-simonica.herokuapp.com/",githubLink:"https://github.com/FratilaDaniel/CV-Ines"}]);var k,y,S=function(){return Object(r.jsx)("div",{className:"projects-section",id:"projects",children:N.map((function(e,t){return Object(r.jsxs)("div",{className:"project-container",children:[Object(r.jsx)("h3",{children:e.title}),Object(r.jsxs)("div",{className:t%2?"project-container-content":"project-container-content-reverse",children:[e.image,Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:e.description}),Object(r.jsxs)("p",{children:["Technologies used: ",Object(r.jsx)("span",{className:"used-tech-span",children:e.technologies})]}),Object(r.jsxs)("p",{children:["View this application deployed on ",Object(r.jsx)("a",{href:e.herokuLink,children:"Heroku"})]}),Object(r.jsxs)("p",{children:["View this application's code on ",Object(r.jsx)("a",{href:e.githubLink,children:"Github"})]})]})]})]},t)}))})},w=(n(53),n(3)),D=n(23),I=n(10),R=(n(54),n(11)),C=["HTML     ","CSS      ","JS     ","React     "],L=function(){return Object(R.b)(k||(k=Object(I.a)(["50% {opacity: 0;}"])))},F=R.a.span(y||(y=Object(I.a)(['\n    :after{\n        content: "";\n        position: absolute;\n        top: 0; bottom: 0; right: -2px;\n        width: 2px;\n        background-color: white;\n        animation: ',";\n        animation-iteration-count: infinite;\n        animation-duration: 1s;\n    }\n    position: relative;\n"])),(function(e){return"running"===e.animationState?L:"none"}));var T=function(){var e=Object(c.useState)({currentTechIndex:0,currentCharIndex:0,direction:1,animationState:"paused"}),t=Object(D.a)(e,2),n=t[0],i=n.currentTechIndex,a=n.currentCharIndex,s=n.direction,l=n.animationState,o=t[1];return Object(c.useEffect)((function(){setTimeout((function(){1===s?a>=C[i].trimRight().length&&o((function(e){return Object(w.a)(Object(w.a)({},e),{},{animationState:"running"})})):a<=C[i].trimRight().length&&o((function(e){return Object(w.a)(Object(w.a)({},e),{},{animationState:"paused"})})),a>=C[i].length&&1===s?o({currentTechIndex:i,currentCharIndex:a-1,direction:-1,animationState:"running"}):o(0===a&&-1===s?{currentTechIndex:(i+1)%C.length,currentCharIndex:a+1,direction:1,animationState:"paused"}:function(e){return Object(w.a)(Object(w.a)({},e),{},{currentCharIndex:a+s})})}),500)}),[i,a,s,l]),Object(r.jsxs)("div",{className:"profession-container",children:[Object(r.jsxs)("p",{className:"tag-container",children:["<",Object(r.jsx)(F,{delay:C[i].trimRight().length,animationState:l,children:C[i].substring(0,a).trimRight()}),">"]}),Object(r.jsx)("p",{id:"prof-container",children:"Frontend Dev"}),Object(r.jsxs)("p",{className:"tag-container",children:["</",Object(r.jsx)(F,{delay:C[i].trimRight().length,animationState:l,children:C[i].substring(0,a).trimRight()}),">"]})]})};n(56);var M=function(){function e(e){document.querySelector(e).scrollIntoView()}return Object(r.jsxs)("section",{id:"about-me-section",children:[Object(r.jsx)("h2",{className:"about-me-title",children:"About me"}),Object(r.jsx)("p",{className:"about-me-p",children:"Hello! I am a web developer specialized in frontend technologies. I am also interested in learning backend and deployment in the near future. My passions are playing the guitar, cooking, entrepreneurship and coding."}),Object(r.jsxs)("p",{className:"about-me-p",children:["You can check out some of my ",Object(r.jsx)("button",{onClick:function(){return e("#projects")},children:"projects"})," and you can ",Object(r.jsx)("button",{onClick:function(){return e("#contact")},children:"contact"})," me anytime."]})]})};var P=function(){return Object(r.jsxs)("div",{className:"banner-me-section",children:[Object(r.jsx)("div",{className:"first-name-container",children:Object(r.jsx)("p",{className:"first-name-p",children:"Daniel"})}),Object(r.jsxs)("div",{className:"name-details-container",children:[Object(r.jsxs)("div",{className:"last-name-container",children:[Object(r.jsx)("p",{className:"last-name-p",children:"Fratila"}),Object(r.jsx)(T,{}),Object(r.jsx)(M,{})]}),Object(r.jsxs)("div",{className:"profile-image-section",children:[Object(r.jsx)("div",{className:"profile-image-container",children:Object(r.jsx)("img",{src:"./dani.png",alt:"Daniel Fratila"})}),Object(r.jsx)("div",{id:"remaining-space-div"})]})]})]})};n(57);var E=function(){return Object(r.jsxs)("div",{id:"technologies-section",children:[Object(r.jsx)("h3",{children:"Specialized in"}),Object(r.jsxs)("div",{className:"tech-display",children:[Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:"./technologies/html5.png",alt:"HTML5"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:"./technologies/css3.png",alt:"CSS3"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:"./technologies/js.png",alt:"Javascript"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:"./technologies/react.png",alt:"React"})})]}),Object(r.jsx)("h3",{children:"Interested in"}),Object(r.jsxs)("div",{className:"tech-display",children:[Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:"./technologies/threejs.png",alt:"Three JS"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:"./technologies/rtl.png",alt:"React testing library"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:"./technologies/django.png",alt:"Django"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:"./technologies/node.png",alt:"Node"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:"./technologies/python.png",alt:"Python"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:"./technologies/mysql.png",alt:"MySQL"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:"./technologies/mongo.png",alt:"MongoDB"})})]}),Object(r.jsx)("h3",{children:"Helpful tools"}),Object(r.jsxs)("div",{className:"tech-display",children:[Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:"./technologies/figma.png",alt:"Figma"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:"./technologies/docker.png",alt:"Docker"})}),Object(r.jsx)("div",{className:"tech-image-container",children:Object(r.jsx)("img",{src:"./technologies/git.png",alt:"Git"})})]})]})},G=[{title:"Languages",content:Object(r.jsx)(d,{})},{title:"Education",content:Object(r.jsx)(m,{})},{title:"Work Experience",content:Object(r.jsx)(v,{})},{title:"Projects",content:Object(r.jsx)(S,{})},{title:"Technologies",content:Object(r.jsx)(E,{})}];var J=function(){return Object(r.jsxs)("div",{className:"general-container",children:[Object(r.jsx)(P,{}),Object(r.jsx)("div",{className:"sections-container",children:G.map((function(e,t){return Object(r.jsx)(h,{title:e.title,content:e.content},t)}))}),Object(r.jsx)(x,{}),Object(r.jsx)(f,{})]})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(J,{})}),document.getElementById("root")),B()}},[[59,1,2]]]);
//# sourceMappingURL=main.31640faf.chunk.js.map