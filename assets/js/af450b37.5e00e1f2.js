"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85391],{15680:(e,t,o)=>{o.d(t,{xA:()=>p,yg:()=>g});var n=o(96540);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=l(o),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||s;return o?n.createElement(g,a(a({ref:t},p),{},{components:o})):n.createElement(g,a({ref:t},p))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<s;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},49759:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=o(58168),r=(o(96540),o(15680));const s={description:"This article mainly introduces how to use the 485 communication function of reComputer R1000, and tests the rs485 and Modbus communication functions.",title:"How to use rs485 and modbus with reComputer R1000",keywords:["Edge","reComputer R1000","Modbus RTU","rs485"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_r1000_use_rs485_modbus_rtu",last_update:{date:"06/24/2024",author:"ShuishengPeng"}},a=void 0,i={unversionedId:"Edge/Raspberry_Pi_Devices/reComputer_R1000/recomputer_r1000_how_to_use_rs485_modbus",id:"Edge/Raspberry_Pi_Devices/reComputer_R1000/recomputer_r1000_how_to_use_rs485_modbus",title:"How to use rs485 and modbus with reComputer R1000",description:"This article mainly introduces how to use the 485 communication function of reComputer R1000, and tests the rs485 and Modbus communication functions.",source:"@site/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/recomputer_r1000_how_to_use_rs485_modbus.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reComputer_R1000",slug:"/reComputer_r1000_use_rs485_modbus_rtu",permalink:"/reComputer_r1000_use_rs485_modbus_rtu",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/recomputer_r1000_how_to_use_rs485_modbus.md",tags:[],version:"current",lastUpdatedBy:"ShuishengPeng",lastUpdatedAt:1719187200,formattedLastUpdatedAt:"Jun 24, 2024",frontMatter:{description:"This article mainly introduces how to use the 485 communication function of reComputer R1000, and tests the rs485 and Modbus communication functions.",title:"How to use rs485 and modbus with reComputer R1000",keywords:["Edge","reComputer R1000","Modbus RTU","rs485"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_r1000_use_rs485_modbus_rtu",last_update:{date:"06/24/2024",author:"ShuishengPeng"}},sidebar:"ProductSidebar",previous:{title:"recomputer_r1000 Warranty",permalink:"/recomputer_r1000_warranty"},next:{title:"reComputer R1000 use bacnet MS/TP",permalink:"/reComputer_r1000_use_bacnet_mstp"}},u={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Software",id:"software",level:3},{value:"Hardware Configuration",id:"hardware-configuration",level:3},{value:"Steps to use the RS485 interface normally and perform Modbus RTU testing",id:"steps-to-use-the-rs485-interface-normally-and-perform-modbus-rtu-testing",level:2},{value:"Steps to use the  Modbus TCP testing",id:"steps-to-use-the--modbus-tcp-testing",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:l},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.yg)(c,(0,n.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"This article mainly introduces how to use the 485 communication function of reComputer R1000, and tests the RS485 and Modbus communication functions.\nThe work to use the RS485 function mainly lies in two points:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Turn on power to the 485 transceiver. By default the r1000 does not have the power pin turned on, so turn it on when needed"),(0,r.yg)("li",{parentName:"ul"},"Controls the DE pin of the 485 transceiver, which is used by the device to switch between data sending mode and receiving mode. By default, R1000 does not control the DE pin, so when the user does not control this pin, the 485 can only communicate in one direction.")),(0,r.yg)("p",null,"We wrote a ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-linux-dtoverlays/tree/master/tools/rs485_control_DE"},(0,r.yg)("strong",{parentName:"a"},"C program"))," to turn on the power and manage the DE pin, If your application is only responsible for receiving/sending data, you can use this program to ensure that the sending and receiving of the RS485 interface is normal."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"In addition to the methods mentioned in this article, we also provide a script that you can execute using the following command. This script can automatically create a new /dev/ttyx and then use the newly created device number to perform rs485/modbus rtu communication is enough",(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"curl -sSL https://raw.githubusercontent.com/Seeed-Projects/R1000-RS485-Util/main/setup_rs485.sh | sudo bash\n")))),(0,r.yg)("h2",{id:"getting-start"},"Getting Start"),(0,r.yg)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,r.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("table",{class:"table-nobg"},(0,r.yg)("tr",{class:"table-trnobg"},(0,r.yg)("th",{class:"table-trnobg"},"reComputer R1000")),(0,r.yg)("tr",{class:"table-trnobg"}),(0,r.yg)("tr",{class:"table-trnobg"},(0,r.yg)("td",{class:"table-trnobg"},(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",style:{width:300,height:"auto"}})))),(0,r.yg)("tr",{class:"table-trnobg"}),(0,r.yg)("tr",{class:"table-trnobg"},(0,r.yg)("td",{class:"table-trnobg"},(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,r.yg)("h3",{id:"software"},"Software"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Using ",(0,r.yg)("a",{parentName:"li",href:"https://www.modbustools.com/modbus_poll.html"},"modbus poll")," on your W10 PC.You can also use other modbus testing tools"),(0,r.yg)("li",{parentName:"ul"},"Using ",(0,r.yg)("a",{parentName:"li",href:"https://modbusmechanic.scifidryer.com/"},"modbusmechanic")," on reComputer R1000 and W10 PC.You can also use other modbus testing tools"),(0,r.yg)("li",{parentName:"ul"},"Using ",(0,r.yg)("a",{parentName:"li",href:"https://mobaxterm.mobatek.net/"},"mobaxterm")," on your W10 PC.You can also use other serial port testing tools"),(0,r.yg)("li",{parentName:"ul"},"You need to download the ",(0,r.yg)("strong",{parentName:"li"},"minicom")," tool using the following command on the reComputer R1000:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install minicom\n")),(0,r.yg)("h3",{id:"hardware-configuration"},"Hardware Configuration"),(0,r.yg)("p",null,"This test uses an RS485 to USB module to connect reComputer R1000 and W10 PC."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png",alt:"pir",width:"700",height:"auto"})),(0,r.yg)("p",null,"For ModbusTCP, we use Ethernet cables to connect the W10 PC and reComputer R1000 to a switch to ensure that they are on the same network segment."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/r1000_connection.png",alt:"pir",width:"500",height:"auto"})),(0,r.yg)("h2",{id:"steps-to-use-the-rs485-interface-normally-and-perform-modbus-rtu-testing"},"Steps to use the RS485 interface normally and perform Modbus RTU testing"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 1"),": First, you need to download the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-linux-dtoverlays/tree/master/tools/rs485_control_DE"},(0,r.yg)("strong",{parentName:"a"},"C program"))," provided by us, and then refer to the contents of the ReadMe. Compile and run. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays\ncd seeed-linux-dtoverlays/tools/rs485_control_DE/\nsudo apt-get install libgpiod-dev\ngcc -o rs485_DE rs485_DE.c -lgpiod\nsudo ./rs485_DE /dev/ttyAMA2 /dev/gpiochip0 6 /dev/ttyAMA10 /dev/gpiochip2 12\n")),(0,r.yg)("p",null,"This program will create a new ttyAMAx device, where the device number depends on the parameters you enter when running the program."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/cfg_c.gif"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 2"),": After completing the first step, you can use the functions of RS485. Enter the following script on reComputer R1000 to open the minicom software"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"minicom -D /dev/ttyAMAx -b 9600\n")),(0,r.yg)("p",null,"Among them, ",(0,r.yg)("inlineCode",{parentName:"p"},"-D")," is followed by the device number you want to open, ",(0,r.yg)("inlineCode",{parentName:"p"},"-b")," refers to the baud rate, and the device number needs to be the newly created device number in the first step.Then open MobaXterm on the W10 PC, create a new serial port terminal, select the serial port number, and the baud rate is 9600; finally, you can perform two-way communication with RS485. As shown in the figure, the content entered on the reComputer R1000 can be sent to via RS485. In W10 PC, the content entered on W10 PC can also be sent to reComputer R1000, and the two-way communication is normal."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/RS485_test.gif"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 3"),": After testing the RS485 function, you can perform the Modbus function test. This step allows the reComputer R1000 to be tested as a Modbus slave.Open the ModbusMechanic software on reComputer R1000, select the device number and baud rate, then click on the simulated slave function in the upper left corner to add two coils; then open Modbus poll in W10 as the master station to read the coils of the slave station. Then open the display window of Modbus poll, and you can see that the sending and receiving messages of Modbus RTU are normal."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_RTU_test.gif"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 4"),":This step allows the reComputer R1000 to be tested as a Modbus master. Open the ModbusMechanic software on both reComputer R1000 and W10 PC, and select the device number and baud rate. W10 PC refers to the third step of setting. Select ",(0,r.yg)("inlineCode",{parentName:"p"},"Read Coils(0x01)")," on reComputer R1000 to read the coil of the slave, set ",(0,r.yg)("inlineCode",{parentName:"p"},"Slave Node")," to 1, ",(0,r.yg)("inlineCode",{parentName:"p"},"Register")," select the address you want to read, and finally click ",(0,r.yg)("inlineCode",{parentName:"p"},"Transmit packet"),"."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Modbus_master_test.gif"})),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"The above example shows how to use one RS485 interface. If you want to use three 485 interfaces, you can use the following script to achieve it:")),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"sudo ./rs485_DE /dev/ttyAMA2 /dev/gpiochip0 6 /dev/ttyAMA10 /dev/gpiochip2 12 &\nsudo ./rs485_DE /dev/ttyAMA3 /dev/gpiochip0 17 /dev/ttyAMA11 &\nsudo ./rs485_DE /dev/ttyAMA5 /dev/gpiochip0 24 /dev/ttyAMA12 &\n")),(0,r.yg)("p",{parentName:"admonition"},"ttyAMA10~ttyAMA12 corresponds to ttyAMA2~ttyAMA5 one-to-one. Use ttyAMA10~ttyAMA12 in your application for normal communication (ttyAMA2~ttyAMA5 cannot be used, you need to use the device number newly created by the script)"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"If you just want to power on the RS485 transceiver, you can do it using the following script:")),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"echo 590 > /sys/class/gpio/export\necho out > /sys/class/gpio/gpio590/direction\necho 1 > /sys/class/gpio/gpio590/value\n")),(0,r.yg)("p",{parentName:"admonition"},"At this time, the RS485 transceiver is turned on normally, but the DE pin is not controlled.If you want to use our c program to control the DE pin after executing these three commands, please restart or execute the following script:"),(0,r.yg)("pre",{parentName:"admonition"},(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"echo 590 > /sys/class/gpio/unexport\n")),(0,r.yg)("p",{parentName:"admonition"},"This is because they use different file systems and there will be conflicts when accessing the same resource.")),(0,r.yg)("h2",{id:"steps-to-use-the--modbus-tcp-testing"},"Steps to use the  Modbus TCP testing"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 1"),": Open modbusmechanic on Win10 PC and R1000"),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/modbusmac_two.png"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 2"),": R1000 acts as the modbus TCP host. Click ",(0,r.yg)("inlineCode",{parentName:"p"},"Tool => Start Slave Simulator")," on W10 PC, select ",(0,r.yg)("inlineCode",{parentName:"p"},"TCP")," for TYPE, select ",(0,r.yg)("inlineCode",{parentName:"p"},"1")," for Slave ID, and then add ",(0,r.yg)("inlineCode",{parentName:"p"},"Coils"),"; then enter ",(0,r.yg)("inlineCode",{parentName:"p"},"IP")," in R1000, and select ",(0,r.yg)("inlineCode",{parentName:"p"},"Read Coil")," for Scan group. Enter ",(0,r.yg)("inlineCode",{parentName:"p"},"Slave Node")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"Register"),", and finally click ",(0,r.yg)("inlineCode",{parentName:"p"},"Transmit packet"),". You can see that the slave data has been successfully read."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_MASTER_MODBUS_TCP.gif"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 3"),": R1000 acts as a modbus TCP slave. Refer to the second step for configuration. You can see that R1000 can read data normally as a slave."),(0,r.yg)("center",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/fuxa/R1000_SLAVE_MODBUS_TCP.gif"})),(0,r.yg)("p",null,"Running the Modbus TCP slave program in R1000 needs to listen to the ",(0,r.yg)("inlineCode",{parentName:"p"},"502")," port, which may require ",(0,r.yg)("inlineCode",{parentName:"p"},"sudo")," permissions. If your application cannot listen to the ",(0,r.yg)("inlineCode",{parentName:"p"},"502")," port, please try to add permissions to it."),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);