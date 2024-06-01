(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[978],{9538:function(e,t,r){Promise.resolve().then(r.bind(r,704))},1846:function(e,t,r){"use strict";r.d(t,{K:function(){return O}});var a=r(7437),s=r(2265),l=r(9343),n=r(1014),i=r(6460),d=r(4241),o=r(9772),c=r(7700),u=r(6360),m=r(518),g=r(7592),f=r(3045);function h(e){let{className:t,classNames:r,showOutsideDays:s=!0,...l}=e;return(0,a.jsx)(f._W,{showOutsideDays:s,className:(0,c.cn)("p-3",t),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-md font-medium",nav:"space-x-1 flex items-center",nav_button:(0,c.cn)((0,u.d)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1 text-muted-foreground",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-muted/50 [&:has([aria-selected])]:bg-muted first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:"h-9 w-9 p-0 font-normal aria-selected:opacity-100",day_range_end:"day-range-end",day_selected:"bg-[#E95816] rounded-md text-primary-foreground hover:bg-[#E95816] hover:text-primary-foreground focus:bg-[#E95816] focus:text-primary-foreground",day_today:"text-black font-bold text-base rounded-full",day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-muted/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-secondary aria-selected:text-muted-foreground",day_hidden:"invisible",...r},components:{IconLeft:e=>{let{...t}=e;return(0,a.jsx)(m.Z,{className:"h-6 w-6 text-muted-foreground border-none"})},IconRight:e=>{let{...t}=e;return(0,a.jsx)(g.Z,{className:"h-6 w-6 text-muted-foreground"})}},...l})}h.displayName="Calendar";var x=r(1538),p=r(8364);let y=(0,r(2218).j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),b=s.forwardRef((e,t)=>{let{className:r,...s}=e;return(0,a.jsx)(p.f,{ref:t,className:(0,c.cn)(y(),r),...s})});b.displayName=p.f.displayName;let v=l.RV,w=s.createContext({}),j=e=>{let{...t}=e;return(0,a.jsx)(w.Provider,{value:{name:t.name},children:(0,a.jsx)(l.Qr,{...t})})},N=()=>{let e=s.useContext(w),t=s.useContext(_),{getFieldState:r,formState:a}=(0,l.Gc)(),n=r(e.name,a);if(!e)throw Error("useFormField should be used within <FormField>");let{id:i}=t;return{id:i,name:e.name,formItemId:"".concat(i,"-form-item"),formDescriptionId:"".concat(i,"-form-item-description"),formMessageId:"".concat(i,"-form-item-message"),...n}},_=s.createContext({}),I=s.forwardRef((e,t)=>{let{className:r,...l}=e,n=s.useId();return(0,a.jsx)(_.Provider,{value:{id:n},children:(0,a.jsx)("div",{ref:t,className:(0,c.cn)("space-y-2",r),...l})})});I.displayName="FormItem",s.forwardRef((e,t)=>{let{className:r,...s}=e,{error:l,formItemId:n}=N();return(0,a.jsx)(b,{ref:t,className:(0,c.cn)(l&&"text-destructive",r),htmlFor:n,...s})}).displayName="FormLabel";let k=s.forwardRef((e,t)=>{let{...r}=e,{error:s,formItemId:l,formDescriptionId:n,formMessageId:i}=N();return(0,a.jsx)(x.g7,{ref:t,id:l,"aria-describedby":s?"".concat(n," ").concat(i):"".concat(n),"aria-invalid":!!s,...r})});k.displayName="FormControl",s.forwardRef((e,t)=>{let{className:r,...s}=e,{formDescriptionId:l}=N();return(0,a.jsx)("p",{ref:t,id:l,className:(0,c.cn)("text-sm text-muted-foreground",r),...s})}).displayName="FormDescription";let C=s.forwardRef((e,t)=>{let{className:r,children:s,...l}=e,{error:n,formMessageId:i}=N(),d=n?String(null==n?void 0:n.message):s;return d?(0,a.jsx)("p",{ref:t,id:i,className:(0,c.cn)("text-sm font-medium text-destructive",r),...l,children:d}):null});C.displayName="FormMessage";var D=r(5569);let M=D.fC,z=D.xz,L=s.forwardRef((e,t)=>{let{className:r,align:s="center",sideOffset:l=4,...n}=e;return(0,a.jsx)(D.h_,{children:(0,a.jsx)(D.VY,{ref:t,align:s,sideOffset:l,className:(0,c.cn)("fixed w-full z-50 bg-popover text-popover-foreground shadow-md outline-none animate-fade-in-up",r),...n})})});L.displayName=D.VY.displayName;let E=o.z.object({arrival:o.z.date({required_error:"Arrival date is required."}),departure:o.z.date({required_error:"Departure date is required."})});function O(){let[e,t]=(0,s.useState)(new Date),[r,o]=(0,s.useState)(new Date),m=e=>{t(e.selection.startDate),o(e.selection.endDate)},g={startDate:e,endDate:r,key:"selection"},f=new Date;f.setDate(f.getDate()+1);let x=(0,l.cI)({resolver:(0,n.F)(E)}),p=async e=>{let{arrival:t,departure:r}=e,a=(0,i.WU)(t,"yyyy-MM-dd"),s=(0,i.WU)(r,"yyyy-MM-dd"),l="https://hotels.cloudbeds.com/es/reservation/lLxxdq?checkin=".concat(a,"&checkout=").concat(s);try{if(!(await fetch(l,{method:"POST",body:i.WU})).ok)throw Error("Error al enviar el formulario")}catch(e){console.error("Error:",e.message)}window.open(l,"_blank")};return(0,a.jsx)(v,{...x,children:(0,a.jsxs)("form",{onSubmit:x.handleSubmit(p),className:"flex justify-center gap-5",children:[(0,a.jsx)(j,{control:x.control,name:"arrival",render:e=>{let{field:t}=e;return(0,a.jsxs)(I,{className:"flex flex-col",children:[(0,a.jsxs)(M,{children:[(0,a.jsx)(z,{asChild:!0,children:(0,a.jsx)(k,{children:(0,a.jsxs)(u.z,{variant:"ghost",className:(0,c.cn)("w-[240px] px-8 text-muted-foreground text-lg font-light",!t.value),children:[t.value?(0,i.WU)(t.value,"dd/MM/yyyy"):(0,i.WU)(new Date,"dd/MM/yyyy"),(0,a.jsx)(d.Z,{className:"ml-auto h-6 w-6 opacity-80"})]})})}),(0,a.jsx)(L,{className:"w-auto p-0",align:"start",children:(0,a.jsx)(h,{ranges:[g],onChange:m,mode:"single",selected:t.value,onSelect:e=>{t.onChange(e)},disabled:e=>e<new Date,fromYear:2023,initialFocus:!0,className:"rounded-md border shadow"})})]}),(0,a.jsx)(C,{})]})}}),(0,a.jsx)(j,{control:x.control,name:"departure",render:e=>{let{field:t}=e;return(0,a.jsxs)(I,{className:"flex flex-col",children:[(0,a.jsxs)(M,{children:[(0,a.jsx)(z,{asChild:!0,children:(0,a.jsx)(k,{children:(0,a.jsxs)(u.z,{variant:"ghost",className:(0,c.cn)("w-[240px] px-8 text-muted-foreground text-lg font-light",!t.value),children:[t.value?(0,i.WU)(t.value,"dd/MM/yyyy"):(0,i.WU)(f,"dd/MM/yyyy"),(0,a.jsx)(d.Z,{className:"ml-auto h-6 w-6 opacity-80"})]})})}),(0,a.jsx)(L,{className:"w-auto p-0",align:"start",children:(0,a.jsx)(h,{mode:"single",selected:t.value,onSelect:t.onChange,disabled:e=>e<x.watch("arrival")||e<new Date,initialFocus:!0})})]}),(0,a.jsx)(C,{})]})}}),(0,a.jsx)(u.z,{variant:"secondary",type:"submit",children:"BOOK NOW"})]})})}},704:function(e,t,r){"use strict";var a=r(7437);r(2265);var s=r(7507);r(3767),r(8443),r(2323),r(906),r(3435),r(4885),r(3034);var l=r(6648),n=r(1846),i=r(6360),d=r(1412),o=r(5514),c=r(7138);(0,d.z2)(),t.default=()=>(0,a.jsxs)("section",{className:"overflow-y-auto",children:[(0,a.jsxs)("section",{className:"bg-center bg-cover w-full h-screen flex flex-col justify-center",style:{backgroundImage:"url(/images/habitacionLarge/largeprincipal.jpg)"},children:[(0,a.jsxs)("div",{className:"items-center text-center flex flex-col gap-3 text-white",children:[(0,a.jsx)("span",{className:"parrafo-light-24 md:w-1/2 lg:w-2/3 xl:w-2/4 lg:text-center lg:float-center",children:"HOTEL HEISS MEDELL\xcdN"}),(0,a.jsx)("h2",{className:"h2",children:"MEDIUM"})]}),(0,a.jsx)("div",{className:"mt-5",children:(0,a.jsx)(n.K,{})})]}),(0,a.jsx)("div",{className:"text-white h-3/4 text-center flex items-center w-full",children:(0,a.jsxs)(s.tq,{slidesPerView:1,className:"w-full h-[70%]",pagination:{clickable:!0,bulletActiveClass:"swiper-pagination-bullet-active",bulletClass:"swiper-pagination-bullet",modifierClass:"swiper-pagination"},modules:[o.tl],children:[(0,a.jsx)(s.o5,{children:(0,a.jsx)("div",{className:"bg-cover bg-right",style:{backgroundImage:"url(/images/habitacionLarge/largecarrousel1.jpg)",width:"100%",height:"70vh"}})}),(0,a.jsx)(s.o5,{children:(0,a.jsx)("div",{className:"bg-cover bg-right",style:{backgroundImage:"url(/images/habitacionLarge/largecarrousel2.jpg)",width:"100%",height:"70vh"}})}),(0,a.jsx)(s.o5,{children:(0,a.jsx)("div",{className:"bg-cover bg-right",style:{backgroundImage:"url(/images/habitacionLarge/largecarrousel3.jpg)",width:"100%",height:"70vh"}})})]})}),(0,a.jsxs)("div",{className:"text-white text-center flex items-center w-full",children:[(0,a.jsxs)(s.tq,{slidesPerView:1,className:"w-[55%] h-screen",pagination:{clickable:!0,bulletActiveClass:"swiper-pagination-bullet-active",bulletClass:"swiper-pagination-bullet",modifierClass:"swiper-pagination"},modules:[o.tl],children:[(0,a.jsx)(s.o5,{children:(0,a.jsx)("div",{className:"bg-cover bg-right",style:{backgroundImage:"url(/images/habitacionLarge/largedetalles.jpg)",width:"100%",height:"100%",display:"flex"}})}),(0,a.jsx)(s.o5,{children:(0,a.jsx)("div",{className:"bg-cover bg-right",style:{backgroundImage:"url(/images/habitacionLarge/largedetalles2.jpg)",width:"100%",height:"100%",display:"flex"}})}),(0,a.jsx)(s.o5,{children:(0,a.jsx)("div",{className:"bg-cover bg-center",style:{backgroundImage:"url(/images/habitacionLarge/largedetalles3.jpg)",width:"100%",height:"100%",display:"flex"}})})]}),(0,a.jsxs)("div",{className:"flex flex-col w-[45%] gap-10 h-full p-8 md:p-16 items-end justify-end text-right",children:[(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("h2",{className:"h5",children:"MEDIUM"}),(0,a.jsx)("p",{className:"parrafo-light-24 pl-12",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since."})]}),(0,a.jsxs)("div",{className:"flex gap-5 md:gap-9 lg:gap-10 xl:gap-10 justify-end",children:[(0,a.jsx)(l.default,{src:"/icons/camas.svg",alt:"Camas Queen",width:40,height:29.1,className:"md:w-[40px] lg:w-[50px]"}),(0,a.jsx)(l.default,{src:"/icons/wifi.svg",alt:"Wifi",width:40,height:29.1,className:"md:w-[40px] lg:w-[50px]"}),(0,a.jsx)(l.default,{src:"/icons/armario.svg",alt:"Armario",width:40,height:29.1,className:"md:w-[40px] lg:w-[50px]"}),(0,a.jsx)(l.default,{src:"/icons/ducha.svg",alt:"Ducha",width:40,height:62.42,className:"md:w-[40px] lg:w-[50px]"})]}),(0,a.jsx)(i.z,{as:!0,child:!0,children:(0,a.jsx)(c.default,{href:"https://hotels.cloudbeds.com/es/reservation/lLxxdq",target:"_blank",children:"BOOK NOW"})})]})]})]})},6360:function(e,t,r){"use strict";r.d(t,{d:function(){return d},z:function(){return o}});var a=r(7437),s=r(2265),l=r(1538),n=r(2218),i=r(7700);let d=(0,n.j)("inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:border-none",{variants:{variant:{default:"border border-input hover:bg-secondary text-primary-foreground",destructive:"border border-input hover:bg-secondary text-primary-foreground",outline:"border border-input hover:bg-accent text-primary-foreground",secondary:"bg-secondary rounded-lg hover:bg-accent text-primary-foreground",ghost:"bg-muted text-muted-foreground rounded-lg",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-14 py-2 text-sm",sm:"h-16 w-16 lg:h-20 lg:w-20 rounded-lg text-3xl lg:text-4xl",lg:"px-8 py-3.5 rounded-xl",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),o=s.forwardRef((e,t)=>{let{className:r,variant:s,size:n,asChild:o=!1,...c}=e,u=o?l.g7:"button";return(0,a.jsx)(u,{className:(0,i.cn)(d({variant:s,size:n,className:r})),ref:t,...c})});o.displayName="Button"},7700:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var a=r(4839),s=r(6164);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,a.W)(t))}},6648:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var a=r(5601),s=r.n(a)},7138:function(e,t,r){"use strict";r.d(t,{default:function(){return s.a}});var a=r(231),s=r.n(a)},5601:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return d},getImageProps:function(){return i}});let a=r(9920),s=r(497),l=r(8173),n=a._(r(1241));function i(e){let{props:t}=(0,s.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let d=l.Image},2323:function(){},4885:function(){}},function(e){e.O(0,[604,770,447,231,173,971,23,744],function(){return e(e.s=9538)}),_N_E=e.O()}]);