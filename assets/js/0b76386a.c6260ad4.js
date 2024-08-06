"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40612],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(a),c=n,m=g["".concat(s,".").concat(c)]||g[c]||u[c]||i;return a?r.createElement(m,o(o({ref:t},d),{},{components:a})):r.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},91828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(58168),n=(a(96540),a(15680));const i={description:"balena is a versatile IoT platform that enables developers to build, deploy, and manage IoT applications across various device architectures with ease, leveraging containerized deployment for seamless updates and robust device management. The reComputer R1000 edge IoT controller, powered by the Raspberry Pi CM4, offers high-performance capabilities for demanding edge computing tasks. Together, balena and reComputer R1000 provide a powerful and scalable solution for efficient and secure IoT application deployment and management in diverse environments.",title:"reComputer R1000 with balena",keywords:["Edge","reComputer R1000","balena"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_r1000_balena",last_update:{date:"06/17/2024",author:"ShuishengPeng and Kasun Thushara"}},o=void 0,l={unversionedId:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/recomputer_r1000_balena",id:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/recomputer_r1000_balena",title:"reComputer R1000 with balena",description:"balena is a versatile IoT platform that enables developers to build, deploy, and manage IoT applications across various device architectures with ease, leveraging containerized deployment for seamless updates and robust device management. The reComputer R1000 edge IoT controller, powered by the Raspberry Pi CM4, offers high-performance capabilities for demanding edge computing tasks. Together, balena and reComputer R1000 provide a powerful and scalable solution for efficient and secure IoT application deployment and management in diverse environments.",source:"@site/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/recomputer_r1000_balena.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications",slug:"/reComputer_r1000_balena",permalink:"/reComputer_r1000_balena",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/recomputer_r1000_balena.md",tags:[],version:"current",lastUpdatedBy:"ShuishengPeng and Kasun Thushara",lastUpdatedAt:1718582400,formattedLastUpdatedAt:"Jun 17, 2024",frontMatter:{description:"balena is a versatile IoT platform that enables developers to build, deploy, and manage IoT applications across various device architectures with ease, leveraging containerized deployment for seamless updates and robust device management. The reComputer R1000 edge IoT controller, powered by the Raspberry Pi CM4, offers high-performance capabilities for demanding edge computing tasks. Together, balena and reComputer R1000 provide a powerful and scalable solution for efficient and secure IoT application deployment and management in diverse environments.",title:"reComputer R1000 with balena",keywords:["Edge","reComputer R1000","balena"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_r1000_balena",last_update:{date:"06/17/2024",author:"ShuishengPeng and Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Publishing Industrial Data to AWS Cloud Using N3uron, MQTT, and Modbus",permalink:"/recomputer_r1000_n3uron_modbus_mqtt_aws"},next:{title:"reComputer R1000 with Home Assistant",permalink:"/recomputer_r1000_home_automation"}},s={},p=[{value:"What is balena?",id:"what-is-balena",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Software",id:"software",level:3},{value:"Hardware Configuration",id:"hardware-configuration",level:3},{value:"Image File Acquisition",id:"image-file-acquisition",level:3},{value:"Steps for Flashing balena OS",id:"steps-for-flashing-balena-os",level:3},{value:"Change Configure",id:"change-configure",level:3},{value:"Deployment test",id:"deployment-test",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},g="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"what-is-balena"},"What is balena?"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.balena.io/"},"balena")," is an Internet of Things (IoT) platform designed to help developers build, deploy, and manage IoT  applications across a fleet of devices. It supports a wide range of device architectures and includes features for containerized application deployment, making it possible to easily update your IoT software and HostOS, fix bugs and introduce new features on your IoT applications. balena provides a unified way to push code updates, manage device configurations and ensure devices run reliably and securely in the field, regardless of their location or network conditions."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Edge_Box/balena/balena.png",alt:"pir",width:"700",height:"auto"})),(0,n.yg)("h2",{id:"getting-start"},"Getting Start"),(0,n.yg)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,n.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,n.yg)("div",{class:"table-center"},(0,n.yg)("table",{class:"table-nobg"},(0,n.yg)("tr",{class:"table-trnobg"},(0,n.yg)("th",{class:"table-trnobg"},"reComputer R1000")),(0,n.yg)("tr",{class:"table-trnobg"}),(0,n.yg)("tr",{class:"table-trnobg"},(0,n.yg)("td",{class:"table-trnobg"},(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",style:{width:300,height:"auto"}})))),(0,n.yg)("tr",{class:"table-trnobg"}),(0,n.yg)("tr",{class:"table-trnobg"},(0,n.yg)("td",{class:"table-trnobg"},(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,n.yg)("h3",{id:"software"},"Software"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"A ",(0,n.yg)("a",{parentName:"li",href:"https://balena.io"},"balenaCloud")," account (sign up here) and get the first 10 devices free."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://etcher.balena.io/"},"balenaEtcher")," to flash the CM4 memory.")),(0,n.yg)("h3",{id:"hardware-configuration"},"Hardware Configuration"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 1"),": You need to set the switch on the side of the R1000 to boot mode, then power on the device"),(0,n.yg)("div",{class:"table-center"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Switch Position"),(0,n.yg)("th",{parentName:"tr",align:null},"Mode"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"),(0,n.yg)("th",{parentName:"tr",align:null},"nRPI-BOOT"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig141.png",alt:"image",width:"80"})),(0,n.yg)("td",{parentName:"tr",align:null},"Normal mode"),(0,n.yg)("td",{parentName:"tr",align:null},"Boot from eMMC"),(0,n.yg)("td",{parentName:"tr",align:null},"Low")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/fig14.png",alt:"image",width:"80"})),(0,n.yg)("td",{parentName:"tr",align:null},"Flash mode"),(0,n.yg)("td",{parentName:"tr",align:null},"Boot from USB"),(0,n.yg)("td",{parentName:"tr",align:null},"High"))))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 2"),": Please use a USB Type-c cable to connect reComputer R1000 to your computer."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/balena/type-cport.png",alt:"pir",width:"250",height:"auto"})),(0,n.yg)("h3",{id:"image-file-acquisition"},"Image File Acquisition"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 1"),": Go to balenaCloud, create a free account, and then create a fleet,Default device type choose ",(0,n.yg)("inlineCode",{parentName:"p"},"Raspberry Pi CM4 IO Board")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/balena/create_fleet.gif",alt:"pir",width:"700",height:"auto"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 2"),': Click "Add device", select the version information and configuration information you want, and then download the balenaOS image file in the lower right corner.'),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dowload_img.gif",alt:"pir",width:"700",height:"auto"})),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},'It is recommended to download the balenaOS image file first and then burn it. If you directly click "Flash" in the lower right corner of the window to burn it, it may fail to burn.')),(0,n.yg)("h3",{id:"steps-for-flashing-balena-os"},"Steps for Flashing balena OS"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 1"),": Open the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe"},(0,n.yg)("strong",{parentName:"a"},"rpiboot"))," software, and then the system will show the new disk"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 2"),": Open the flash tool ",(0,n.yg)("a",{parentName:"p",href:"https://etcher.balena.io/"},"balenaEtcher"),", select the previously downloaded balena image file, then select the target disk, and finally click Burn."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/balena/burn_image.gif",alt:"pir",width:"700",height:"auto"})),(0,n.yg)("h3",{id:"change-configure"},"Change Configure"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 1"),":Copy the ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/reComputer-R1000/balena/reComputer-R100x.dtbo"},"reComputer-R100x.dtbo")," file to the ",(0,n.yg)("inlineCode",{parentName:"p"},"resin-boot => overlays")," folder"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/balena/dtbo_file.png",alt:"pir",width:"700",height:"auto"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 2"),":Add the following content to the ",(0,n.yg)("inlineCode",{parentName:"p"},"config.txt")," file:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"dtparam=i2c_arm=on\ndtoverlay=i2c1,pins_44_45\ndtoverlay=i2c3,pins_2_3\ndtoverlay=i2c6,pins_22_23\ndtoverlay=audremap,pins_18_19\ndtoverlay=reComputer-R100x,uart2\n")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/balena/change_config.png",alt:"pir",width:"700",height:"auto"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 3"),":Set the reComputer R1000 DIP switch to normal mode, then power on again. After a while, you can see the new device has been added successfully on balenaCloud."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/balena/device_online.png",alt:"pir",width:"700",height:"auto"})),(0,n.yg)("p",null,"If the device is ",(0,n.yg)("inlineCode",{parentName:"p"},"Online (Heartbeat only)"),". This is due to the firewall restrictions in my area. If you have the same problem, you can connect a VPN to the device so that it can be displayed normally",(0,n.yg)("inlineCode",{parentName:"p"},"Online"),"."),(0,n.yg)("h3",{id:"deployment-test"},"Deployment test"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 1"),":Enter the following command to download the resources and deploy them:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-shell"},"balena login\ngit clone https://github.com/mpous/seeed-recomputer-r100x.git\ncd seeed-recomputer-r100x\nbalena push recomputerR1000\n")),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/balena/push_program.png",alt:"pir",width:"700",height:"auto"})),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/balena/updating_two.png",alt:"pir",width:"700",height:"auto"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 2"),":After the deployment is completed, a unicorn will appear on the terminal and the status of all services will change to ",(0,n.yg)("inlineCode",{parentName:"p"},"Running"),"."),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/balena/unicorn.png",alt:"pir",width:"700",height:"auto"})),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/balena/Deployment_Complete.png",alt:"pir",width:"700",height:"auto"})),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);