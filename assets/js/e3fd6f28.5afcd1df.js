"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61923],{15680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>h});var i=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,n=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},y=i.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(o),y=n,h=p["".concat(s,".").concat(y)]||p[y]||g[y]||a;return o?i.createElement(h,r(r({ref:t},u),{},{components:o})):i.createElement(h,r({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,r=new Array(a);r[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,r[1]=l;for(var d=2;d<a;d++)r[d]=o[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}y.displayName="MDXCreateElement"},95498:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>g,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=o(9668),n=(o(96540),o(15680));const a={description:"XIAO Round Dislay Basic Tutorial",title:"Getting Started with Seeed Studio Round Display for XIAO",keywords:["XIAO","Round Dislay"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/get_start_round_display",last_update:{date:"07/11/2024",author:"Spencer"}},r="Getting Started with Seeed Studio Round Display for XIAO",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Round-display-for-XIAO/SeeedStudio_Round_Display_for_XIAO",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Round-display-for-XIAO/SeeedStudio_Round_Display_for_XIAO",title:"Getting Started with Seeed Studio Round Display for XIAO",description:"XIAO Round Dislay Basic Tutorial",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Round-display-for-XIAO/SeeedStudio_Round_Display_for_XIAO.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Round-display-for-XIAO",slug:"/get_start_round_display",permalink:"/get_start_round_display",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Round-display-for-XIAO/SeeedStudio_Round_Display_for_XIAO.md",tags:[],version:"current",lastUpdatedBy:"Spencer",lastUpdatedAt:1720656e3,formattedLastUpdatedAt:"Jul 11, 2024",frontMatter:{description:"XIAO Round Dislay Basic Tutorial",title:"Getting Started with Seeed Studio Round Display for XIAO",keywords:["XIAO","Round Dislay"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/get_start_round_display",last_update:{date:"07/11/2024",author:"Spencer"}},sidebar:"ProductSidebar",previous:{title:"ESP-NOW protocol on XIAO ESP32 Series",permalink:"/xiao_esp32s3_espnow"},next:{title:"Hardware Usage",permalink:"/seeedstudio_round_display_usage"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Specification",id:"specification",level:3},{value:"Features",id:"features",level:3},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Step 1. Download and Install the stable version of Arduino IDE according to your operating system.",id:"step-1-download-and-install-the-stable-version-of-arduino-ide-according-to-your-operating-system",level:4},{value:"Step 2. Launch the Arduino application.",id:"step-2-launch-the-arduino-application",level:4},{value:"Step 3. Configure the Arduino IDE for the XIAO you are using.",id:"step-3-configure-the-arduino-ide-for-the-xiao-you-are-using",level:4},{value:"Step 4. Add the library of Round Display to Arduino.",id:"step-4-add-the-library-of-round-display-to-arduino",level:4},{value:"Step 5. (Optional) Configure the usage environment",id:"step-5-optional-configure-the-usage-environment",level:4},{value:"Arduino Library Overview",id:"arduino-library-overview",level:3},{value:"Light up your Round Display",id:"light-up-your-round-display",level:2},{value:"Calibration Firmware Update",id:"calibration-firmware-update",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Q1: Why doesn&#39;t the display show anything after I upload the program?",id:"q1-why-doesnt-the-display-show-anything-after-i-upload-the-program",level:3},{value:"Q2: If I want to connect Seeed Studio XIAO ESP32S3 Sense to this extension screen, will there be a conflict with two TF card slots?",id:"q2-if-i-want-to-connect-seeed-studio-xiao-esp32s3-sense-to-this-extension-screen-will-there-be-a-conflict-with-two-tf-card-slots",level:3},{value:"Q3: Why does my XIAO RP2040 get a very strange C++ error when using the code for HardwareTest with Round Display?",id:"q3-why-does-my-xiao-rp2040-get-a-very-strange-c-error-when-using-the-code-for-hardwaretest-with-round-display",level:3},{value:"Q4: I have followed the tutorial and still can&#39;t get the TFT or LVGL program to compile properly, what should I do?",id:"q4-i-have-followed-the-tutorial-and-still-cant-get-the-tft-or-lvgl-program-to-compile-properly-what-should-i-do",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d},p="wrapper";function g(e){let{components:t,...o}=e;return(0,n.yg)(p,(0,i.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"getting-started-with-seeed-studio-round-display-for-xiao"},"Getting Started with Seeed Studio Round Display for XIAO"),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/rounddisplay.jpg",style:{width:600,height:"auto"}})),(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"Seeed Studio Round Display for XIAO is an expansion board compatible with all XIAO development boards. It features a fully covered touch screen on one side, designed as a 39mm disc. It contains onboard RTC, charge chip, TF card slot within its compact size, perfect for interactive displays in smart home, wearables and more."),(0,n.yg)("table",{align:"center"},(0,n.yg)("tr",null,(0,n.yg)("th",null,"REV"),(0,n.yg)("th",null,"Description"),(0,n.yg)("th",null,"DATE"),(0,n.yg)("th",null,"BY")),(0,n.yg)("tr",null,(0,n.yg)("td",null,"v1.0"),(0,n.yg)("td",null,"Initial Version"),(0,n.yg)("td",null,"2023/1/29"),(0,n.yg)("td",null,"Linus.Liao")),(0,n.yg)("tr",null,(0,n.yg)("td",null,"v1.1"),(0,n.yg)("td",null,"1.Change Li Battery Charge IC",(0,n.yg)("br",null),"2.Add a switch to A0 and D6"),(0,n.yg)("td",null,"2023/4/7"),(0,n.yg)("td",null,"Linus.Liao"))),(0,n.yg)("h3",{id:"specification"},"Specification"),(0,n.yg)("table",{align:"center"},(0,n.yg)("tr",null,(0,n.yg)("th",null,"Item"),(0,n.yg)("th",null,"Detail")),(0,n.yg)("tr",null,(0,n.yg)("th",null,"Power Supply"),(0,n.yg)("td",null,"USB Type-C: 5V @35 mA ",(0,n.yg)("br",null)," Battery Charge: 3.7V @37mA")),(0,n.yg)("tr",null,(0,n.yg)("th",null,"Charge current"),(0,n.yg)("td",null,"~ 485 mA")),(0,n.yg)("tr",null,(0,n.yg)("th",null,"Expandable memory"),(0,n.yg)("td",null,"TF Card Slot for up to 32GB FAT")),(0,n.yg)("tr",null,(0,n.yg)("th",null,"Screen"),(0,n.yg)("td",null,"1.28-inch touch screen ",(0,n.yg)("br",null)," 240\xd7240 resolution ",(0,n.yg)("br",null)," 65K colors")),(0,n.yg)("tr",null,(0,n.yg)("th",null,"Other External Equipment"),(0,n.yg)("td",null,"JST 1.25 connector")),(0,n.yg)("tr",null,(0,n.yg)("th",null,"Dimension"),(0,n.yg)("td",null,"39mm x 39mm"))),(0,n.yg)("h3",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Capacitive Touch Screen Expansion Board"),": Display with 1.28-inch round, 240\xd7240 resolution, 65K colors, providing clear and colorful images exhibition"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"High Compatibility"),": Highly compatible with all XIAO series products, easily integrated into your current projects"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Rich Peripheral"),": Feature onboard RTC, battery charge chip, TF card slot, JST 1.25 connector, all within its compact size"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Watch-sized Design"),": Come with 39 mm circular design, suitable for wearable and space-limited projects"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Plug and Play"),": All pins are led out, no soldering is needed")),(0,n.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.yg)("p",null,"Before we start, we can refer to the following pictures to understand the pin design of the Round Display to facilitate our understanding of the function of the Round Display."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/round-pinout.png",style:{width:800,height:"auto"}})),(0,n.yg)("h2",{id:"getting-started"},"Getting Started"),(0,n.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,n.yg)("p",null,"If you want to take advantage of the full capabilities of the Round Display and have a great experience, we highly recommend that you purchase our XIAO series as the motherboard for the Round Display."),(0,n.yg)("table",{align:"center"},(0,n.yg)("tr",null,(0,n.yg)("th",null,"Seeed Studio XIAO SAMD21"),(0,n.yg)("th",null,"Seeed Studio XIAO RP2040"),(0,n.yg)("th",null,"Seeed Studio XIAO nRF52840 (Sense)"),(0,n.yg)("th",null,"Seeed Studio XIAO ESP32C3"),(0,n.yg)("th",null,"Seeed Studio XIAO ESP32S3 (Sense)")),(0,n.yg)("tr",null,(0,n.yg)("td",null,(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg",style:{width:400,height:"auto"}}))),(0,n.yg)("td",null,(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg",style:{width:500,height:"auto"}}))),(0,n.yg)("td",null,(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg",style:{width:500,height:"auto"}}))),(0,n.yg)("td",null,(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg",style:{width:450,height:"auto"}}))),(0,n.yg)("td",null,(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg",style:{width:500,height:"auto"}})))),(0,n.yg)("tr",null,(0,n.yg)("td",null,(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,n.yg)("td",null,(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,n.yg)("td",null,(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,n.yg)("td",null,(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,n.yg)("td",null,(0,n.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))))),(0,n.yg)("p",null,"The row of pins on the back of Round Display is designed for XIAO series. If you have XIAO on hand, you don't need to prepare any additional cables, just align the pins of XIAO and plug them directly into Round Display."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/50.jpg",style:{width:500,height:"auto"}})),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Please note that when connecting the XIAO, ",(0,n.yg)("strong",{parentName:"p"},"the Type-C connector of the XIAO should be facing the outside of the Round Display"),". If you accidentally reversed polarity, don't worry too much, the Round Display has a power protection circuit that won't be easily damaged, but we don't recommend you to stay in the reverse connection for a long time.")),(0,n.yg)("p",null,"The recommended orientation for Round Display is: when you face Round Display, the XIAO's Type-C connector faces to the right, so that the on/off button of Round Display is in the lower left corner."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/51.jpg",style:{width:700,height:"auto"}})),(0,n.yg)("h3",{id:"software-preparation"},"Software Preparation"),(0,n.yg)("p",null,"To use the Round Display, we need to program the XIAO series. The recommended programming tool is the Arduino IDE, and you need to configure the Arduino environment for the XIAO and add the on-board package."),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"If this is your first time using Arduino, we highly recommend you to refer to ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino"),".")),(0,n.yg)("h4",{id:"step-1-download-and-install-the-stable-version-of-arduino-ide-according-to-your-operating-system"},"Step 1. Download and Install the stable version of Arduino IDE according to your operating system."),(0,n.yg)("div",{class:"download_arduino_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"download_arduino_item",href:"https://www.arduino.cc/en/software"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"},"Download Arduino IDE"))))),(0,n.yg)("h4",{id:"step-2-launch-the-arduino-application"},"Step 2. Launch the Arduino application."),(0,n.yg)("h4",{id:"step-3-configure-the-arduino-ide-for-the-xiao-you-are-using"},"Step 3. Configure the Arduino IDE for the XIAO you are using."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"If you want to use ",(0,n.yg)("strong",{parentName:"p"},"Seeed Studio XIAO SAMD21")," for the later routines, please refer to ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO/#software"},"this tutorial"))," to finish adding.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"If you want to use ",(0,n.yg)("strong",{parentName:"p"},"Seeed Studio XIAO RP2040")," for the later routines, please refer to ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup"},"this tutorial"))," to finish adding.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"If you want to use ",(0,n.yg)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840")," for the later routines, please refer to ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/XIAO_BLE/#software-setup"},"this tutorial"))," to finish adding.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"If you want to use ",(0,n.yg)("strong",{parentName:"p"},"Seeed Studio XIAO ESP32C3")," for the later routines, please refer to ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup"},"this tutorial"))," to finish adding.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"If you want to use ",(0,n.yg)("strong",{parentName:"p"},"Seeed Studio XIAO ESP32S3")," for the later routines, please refer to ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation"},"this tutorial"))," to finish adding."))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"ESP32 development board package not compatible with TFT library when ESP32 development board package update to version 3.0.X\uff0cso we recommend you use ESP32 deveopment board package version 2.0.X to use XIAO Round Display."),(0,n.yg)("p",{parentName:"admonition"},"Besides, ESP32C6 is not support version 2.0.X package, so we not recommend you use XIAO ESP32C6 with XIAO Round Display.")),(0,n.yg)("h4",{id:"step-4-add-the-library-of-round-display-to-arduino"},"Step 4. Add the library of Round Display to Arduino."),(0,n.yg)("p",null,"First, you need to search and download the latest version ",(0,n.yg)("strong",{parentName:"p"},"TFT_eSPI")," and ",(0,n.yg)("strong",{parentName:"p"},"LVGL")," libraries in the Arduino IDE."),(0,n.yg)("table",{align:"center"},(0,n.yg)("tr",null,(0,n.yg)("td",null,(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/52.png",style:{width:1e3,height:"auto"}}))),(0,n.yg)("td",null,(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/53.png",style:{width:1e3,height:"auto"}}))))),(0,n.yg)("p",null,"If you want to use the RTC function on the expansion board, then you also need to search and install the ",(0,n.yg)("strong",{parentName:"p"},"I2C BM8563 RTC")," library."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/63.png",style:{width:800,height:"auto"}})),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"The ",(0,n.yg)("strong",{parentName:"p"},"TFT_eSPI")," library compatible with Round Display has been submitted for merge request, so when the next version is released, you can search and download ",(0,n.yg)("strong",{parentName:"p"},"TFT_eSPI")," in Arduino IDE to use it normally. Until then, if you need to use the ",(0,n.yg)("strong",{parentName:"p"},"TFT_eSPI")," library for Round Display, please download it from here."),(0,n.yg)("div",{class:"github_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"github_item",href:"https://github.com/Maxwelltoo/TFT_eSPI"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," Download the Libraries")))," ",(0,n.yg)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,n.yg)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})))),(0,n.yg)("br",null),(0,n.yg)("p",{parentName:"admonition"},"If you have previously installed the ",(0,n.yg)("strong",{parentName:"p"},"TFT_eSPI")," library, please remove the original library and install the new one.")),(0,n.yg)("p",null,"Then, we also need to download and import the configuration library for Round Display."),(0,n.yg)("div",{class:"github_container",style:{textAlign:"center"}},(0,n.yg)("a",{class:"github_item",href:"https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay"},(0,n.yg)("strong",null,(0,n.yg)("span",null,(0,n.yg)("font",{color:"FFFFFF",size:"4"}," Download the Libraries")))," ",(0,n.yg)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,n.yg)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})))),(0,n.yg)("br",null),(0,n.yg)("p",null,"Since you have downloaded the zip Library, open your Arduino IDE, click on ",(0,n.yg)("strong",{parentName:"p"},"Sketch > Include Library > Add .ZIP Library"),". Choose the zip file you just downloaded\uff0cand if the library install correct, you will see ",(0,n.yg)("strong",{parentName:"p"},"Library added to your libraries")," in the notice window. Which means the library is installed successfully."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png",style:{width:800,height:"auto"}})),(0,n.yg)("p",null,"Then, you need to take the ",(0,n.yg)("inlineCode",{parentName:"p"},"lv_conf.h")," file and cut it to the root directory of the Arduino library."),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("p",{parentName:"admonition"},"Note that the ",(0,n.yg)("inlineCode",{parentName:"p"},"lv_conf.h")," file here is from ",(0,n.yg)("strong",{parentName:"p"},"Seeed_Arduino_RoundDisplay"),", not from the ",(0,n.yg)("strong",{parentName:"p"},"LVGL")," library.")),(0,n.yg)("p",null,"On Windows, the root directory of the Arduino library is:"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"C:\\Users\\${UserName}\\Documents\\Arduino\\libraries")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/54.png",style:{width:800,height:"auto"}})),(0,n.yg)("h4",{id:"step-5-optional-configure-the-usage-environment"},"Step 5. (Optional) Configure the usage environment"),(0,n.yg)("p",null,"Round Display currently adapts two different library-based displays, one ",(0,n.yg)("strong",{parentName:"p"},"TFT_eSPI")," and the other ",(0,n.yg)("strong",{parentName:"p"},"Arduino GFX"),". On the nRF52840, the Arduino GFX will have significantly better performance."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"If you need to use the ",(0,n.yg)("strong",{parentName:"p"},"TFT_eSPI")," library, then proceed to ",(0,n.yg)("strong",{parentName:"p"},"step 5"),". If you are using the Arduino GFX, then you can skip this step."),(0,n.yg)("p",{parentName:"admonition"},"For the content of Round Display, our tutorial will focus on the use of ",(0,n.yg)("strong",{parentName:"p"},"TFT_eSPI"),".")),(0,n.yg)("p",null,"Please find the ",(0,n.yg)("strong",{parentName:"p"},"TFT_eSPI")," folder in the root directory of the Arduino library, and then modify the ",(0,n.yg)("inlineCode",{parentName:"p"},"User_Setup_Select.h")," file in the ",(0,n.yg)("strong",{parentName:"p"},"TFT_eSPI")," directory."),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"C:\\Users\\${UserName}\\Documents\\Arduino\\libraries\\TFT_eSPI\\User_Setup_Select.h")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/55.png",style:{width:800,height:"auto"}})),(0,n.yg)("p",null,"If you want to use the ",(0,n.yg)("strong",{parentName:"p"},"TFT_eSPI")," library for display driving, you must ",(0,n.yg)("strong",{parentName:"p"},"comment")," out the line ",(0,n.yg)("inlineCode",{parentName:"p"},"#include <User_Setup.h>")," and ",(0,n.yg)("strong",{parentName:"p"},"uncomment")," the line ",(0,n.yg)("inlineCode",{parentName:"p"},"#include <User_Setups/Setup66_Seeed_XIAO_RoundDisplay.h>")," in the ",(0,n.yg)("inlineCode",{parentName:"p"},"User_Setup_Select.h")," file."),(0,n.yg)("table",{align:"center"},(0,n.yg)("tr",null,(0,n.yg)("td",null,(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/56.png",style:{width:1e3,height:"auto"}})))),(0,n.yg)("tr",null,(0,n.yg)("td",null,(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/57.png",style:{width:1e3,height:"auto"}}))))),(0,n.yg)("h3",{id:"arduino-library-overview"},"Arduino Library Overview"),(0,n.yg)("p",null,"As we can probably tell from the above tutorial, Round Display mainly uses ",(0,n.yg)("strong",{parentName:"p"},"LVGL"),", ",(0,n.yg)("strong",{parentName:"p"},"TFT_eSPI")," and ",(0,n.yg)("strong",{parentName:"p"},"Arduino GFX")," libraries. For the sake of space, we will introduce the use of ",(0,n.yg)("strong",{parentName:"p"},"LVGL")," and ",(0,n.yg)("strong",{parentName:"p"},"TFT_eSPI")," libraries separately with the example of drawing a dial."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"You can learn about the interface and use of the ",(0,n.yg)("strong",{parentName:"p"},"TFT_eSPI")," library by clicking ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display#common-interfaces-for-tft-library"},"here")),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"You can learn about the interface and use of the ",(0,n.yg)("strong",{parentName:"p"},"LVGL")," library by clicking ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/using_lvgl_and_tft_on_round_display#common-interfaces-for-lvgl-library"},"here")),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"You can learn about the interface and use of the ",(0,n.yg)("strong",{parentName:"p"},"Arduino GFX")," library by clicking ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("a",{parentName:"strong",href:"https://github.com/moononournation/Arduino_GFX"},"here")),"."))),(0,n.yg)("h2",{id:"light-up-your-round-display"},"Light up your Round Display"),(0,n.yg)("p",null,"Once the hardware and software are ready, we start uploading our first example program. This sample program can be used to check if the Round Display's RTC clock, SD card and touch functions are working properly."),(0,n.yg)("p",null,"You can find this sample program in the Arduino IDE under ",(0,n.yg)("strong",{parentName:"p"},"File -> Examples -> Seeed Arduino Round display -> HardwareTest"),"."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/58.png",style:{width:600,height:"auto"}})),(0,n.yg)("p",null,"Just select the XIAO you are using and the port number where the XIAO is located, compile and upload it."),(0,n.yg)("p",null,"Make sure the Round Display switch is toggled to the ON position."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/59.jpg",style:{width:400,height:"auto"}})),(0,n.yg)("p",null,"If the program runs smoothly, you will see the following effect."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/60.gif",style:{width:600,height:"auto"}})),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("p",{parentName:"admonition"},"This sample program will test all the functional items of the expansion board, including the RTC function. If you do not have the I2C BM8563 RTC library installed, then an error may be reported, you can comment out the function ",(0,n.yg)("inlineCode",{parentName:"p"},"lv_hardware_test()"),", then the functional detection of the SD card will also be turned off.")),(0,n.yg)("h2",{id:"calibration-firmware-update"},"Calibration Firmware Update"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"If you find that the touch is sometimes unresponsive, you can follow the steps below to update the calibration firmware for the screen.")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Download codes from this ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_RoundDisplay/tree/main/examples/TP_firmware_update"},"link"))),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/c1.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Put them in the same directory and run this firmware.")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/c3.png",style:{width:600,height:"auto"}})),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"Open serial monitor and you will see successful message like this image below, which means update successfully and you can upload your program to try it!")),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/c2.png",style:{width:600,height:"auto"}})),(0,n.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,n.yg)("h3",{id:"q1-why-doesnt-the-display-show-anything-after-i-upload-the-program"},"Q1: Why doesn't the display show anything after I upload the program?"),(0,n.yg)("p",null,"A: Please check that the Round Display switch is turned on. If you are using the XIAO ESP32C3, you may also need to press Reset after uploading the program to make it work."),(0,n.yg)("h3",{id:"q2-if-i-want-to-connect-seeed-studio-xiao-esp32s3-sense-to-this-extension-screen-will-there-be-a-conflict-with-two-tf-card-slots"},"Q2: If I want to connect Seeed Studio XIAO ESP32S3 Sense to this extension screen, will there be a conflict with two TF card slots?"),(0,n.yg)("p",null,"A: This does not create a conflict. The different SD card slots are controlled via chip select, if you want to use the microSD card slot on Sense, the chip select pin should be ",(0,n.yg)("strong",{parentName:"p"},"21"),", if you want to use the microSD card slot on Round Display, the chip select pin should be ",(0,n.yg)("strong",{parentName:"p"},"D2"),"."),(0,n.yg)("p",null,"We have ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/xiao_esp32s3_camera_usage/#project-i-making-a-handheld-camera"},"examples")," of using both hardware and microSD cards in the S3 Sense camera tutorial."),(0,n.yg)("h3",{id:"q3-why-does-my-xiao-rp2040-get-a-very-strange-c-error-when-using-the-code-for-hardwaretest-with-round-display"},"Q3: Why does my XIAO RP2040 get a very strange C++ error when using the code for HardwareTest with Round Display?"),(0,n.yg)("p",null,"A: This may be caused by you not selecting the appropriate compile option for the XIAO RP2040. Please refer to the diagram below to set and re-upload the program."),(0,n.yg)("div",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/100.png",style:{width:1e3,height:"auto"}})),(0,n.yg)("h3",{id:"q4-i-have-followed-the-tutorial-and-still-cant-get-the-tft-or-lvgl-program-to-compile-properly-what-should-i-do"},"Q4: I have followed the tutorial and still can't get the TFT or LVGL program to compile properly, what should I do?"),(0,n.yg)("p",null,"Updates to the TFT library and the LVGL library may cause the procedures in the tutorial to fail. We recommend that you use our ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/limengdu/Seeed-Studio-XIAO-Round-Display-lvgl8.3.5/tree/main/libraries"},"tested and stable versions of the libraries"),", which you can use without even having to change the configuration in them yourself."),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/round_display_for_xiao/charge-IC-datasheet.pdf"},"Charge IC datasheet")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/round_display_for_xiao/ETA3410-datasheet.pdf"},"ETA3410 datasheet")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/round_display_for_xiao/RTC-PCF8563-datasheet.pdf"},"RTC PCF8563 datasheet")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf"},"1.28'' a-Si TFT Liquid Crystal Display datasheet")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH_230308.pdf"},"Seeed Studio Round Display for XIAO SCH")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH_230407.pdf"},"Seeed Studio Round Display for XIAO SCH v1.1")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/round_display_for_xiao/GJX0128A4-15HY_Datasheet.pdf"},"GJX0128A4-15HY Datasheet")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[ZIP]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.0_SCH&PCB_230308.zip"},"Seeed Studio Round Display for XIAO SCH&PCB")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[ZIP]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/round_display_for_xiao/SeeedStudio_Round_Display_for_XIAO_v1.1_SCH&PCB_230407.zip"},"Seeed Studio Round Display for XIAO SCH&PCB v1.1")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[3DM]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl"},"The 3D model of the Round Display for XIAO")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[STL]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/round_display_for_xiao/Round-Display-shell-3D-Model.stl"},"The 3D model diagram of the shell for Round Display")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[STL]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/round_display_for_xiao/Seeed_Studio-XIAO-ESP32-S3-Sense-Case-With-Round-Screen.stl"},"Seeed Studio XIAO ESP32 S3 Sense Case With Round Screen"))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);