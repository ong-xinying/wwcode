webpackJsonp([1],{"/hJ8":function(e,t){},"7zck":function(e,t){},"982O":function(e,t){},"9QL+":function(e,t){},E8MS:function(e,t){},HghD:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("7+uW"),n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",[t("router-view",{attrs:{name:"layout"}},[t("router-view")],1)],1)},staticRenderFns:[]},s=a("VU/8")({data:function(){return{clipped:!1,drawer:!0,fixed:!1,items:[{icon:"bubble_chart",title:"Inspire"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},name:"App"},n,!1,null,null,null).exports,o=a("/ocq"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",[t("v-toolbar",{attrs:{app:""}},[t("v-toolbar-title",{domProps:{textContent:this._s(this.title)}})],1),this._v(" "),t("v-content",[this._t("default")],2),this._v(" "),t("v-footer",{attrs:{app:""}},[t("v-spacer"),t("span",[this._v("© 2018")]),t("v-spacer")],1)],1)},staticRenderFns:[]},l=a("VU/8")({data:function(){return{title:"Techforlios"}}},r,!1,null,null,null).exports,c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{dark:"",persistent:"","mini-variant":e.miniVariant,clipped:e.clipped,"enable-resize-watcher":"",fixed:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",e._l(e.items,function(t,i){return a("v-list-tile",{key:i,attrs:{value:"true",to:t.path}},[a("v-list-tile-action",[a("v-icon",{domProps:{innerHTML:e._s(t.icon)}})],1),e._v(" "),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"navtile",domProps:{textContent:e._s(t.title)}})],1)],1)}))],1),e._v(" "),a("v-toolbar",{attrs:{app:"","clipped-left":e.clipped}},[a("v-toolbar-side-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),e._v(" "),a("v-toolbar-title",{domProps:{textContent:e._s(e.title)}}),e._v(" "),a("v-spacer"),e._v(" "),a("v-toolbar-items",e._l(e.menu,function(t,i){return a("v-btn",{key:i,attrs:{flat:"",to:t.path}},[e._v(e._s(t.title))])})),e._v(" "),a("v-spacer"),e._v(" "),a("v-menu",{attrs:{"offset-y":""}},[a("v-btn",{attrs:{slot:"activator",icon:""},slot:"activator"},[a("v-icon",[e._v("person")])],1),e._v(" "),a("v-list",[a("v-list-tile",{attrs:{to:"/login"}},[a("v-list-tile-title",[e._v("Logout")])],1)],1)],1)],1),e._v(" "),a("v-content",[e._t("default")],2),e._v(" "),a("v-footer",{attrs:{fixed:e.fixed,app:""}},[a("v-spacer"),a("span",[e._v("© 2018")]),a("v-spacer")],1)],1)},staticRenderFns:[]};var v=a("VU/8")({data:function(){return{clipped:!0,drawer:!0,fixed:!1,items:[{icon:"settings",title:"Settings",path:"settings"}],menu:[{title:"Jobs Posted",path:"/"},{title:"Browse Job Seekers",path:"/seekers"}],miniVariant:!1,title:"Techforlios"}},name:"App"},c,!1,function(e){a("HghD")},"data-v-422ccf58",null).exports,d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{attrs:{width:"400"}},[a("v-toolbar",{staticClass:"headline white--text",attrs:{color:"primary"}},[e._v("Login")]),e._v(" "),a("v-card-text",[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.nameRules,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),a("v-text-field",{attrs:{rules:e.passwordRules,label:"Password",type:"password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{on:{click:e.submit}},[e._v("Login")])],1)],1)],1)],1)},staticRenderFns:[]},u=a("VU/8")({data:function(){return{valid:!1,name:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],password:"",passwordRules:[function(e){return!!e||"Password is required"}]}},methods:{submit:function(){this.$refs.form.validate()&&this.name===this.password&&this.$router.push("/")}}},d,!1,null,null,null).exports,p={data:function(){return{valid:!0,name:"My Company",nameRules:[function(e){return!!e||"Company name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],description:"This is a description.",descriptionRules:[function(e){return!!e||"Description is required"},function(e){return e&&e.length<=255||"Description must be less than 255 characters"}],email:"hr@mycompany.com",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],phone:"66666666",phoneRules:[function(e){return!!e||"Phone is required"},function(e){return e&&8===e.length||"Phone must be valid"}],checkbox:!1,snackbar:!1,snackText:"Saved"}},methods:{submit:function(){this.$refs.form.validate()&&axios.post("/api/submit",{name:this.name,email:this.email,select:this.select,checkbox:this.checkbox})},clear:function(){this.$router.go(-1)}}},h={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"ma-3"},[a("v-form",{ref:"form",staticClass:"pa-3",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.nameRules,counter:10,label:"Company Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),a("v-text-field",{attrs:{rules:e.descriptionRules,counter:255,label:"Description",required:""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),e._v(" "),a("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),a("v-text-field",{attrs:{rules:e.phoneRules,label:"Phone Number",required:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),a("v-checkbox",{attrs:{label:"Require Test"},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),e._v(" "),a("v-btn",{attrs:{disabled:!e.valid},on:{click:function(t){e.snackbar=!0}}},[e._v("\n        save\n      ")]),e._v(" "),a("v-btn",{on:{click:e.clear}},[e._v("cancel")])],1),e._v(" "),a("v-snackbar",{attrs:{bottom:"true",timeout:"2000"},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.snackText)+"\n    "),a("v-btn",{attrs:{color:"pink",flat:""},on:{click:function(t){e.snackbar=!1}}},[e._v("\n      Close\n    ")])],1)],1)},staticRenderFns:[]},m=a("VU/8")(p,h,!1,null,null,null).exports,f=a("Gu7T"),_=a.n(f),g={name:"jobDetails",data:function(){return{dialog:!1,date:"2018-08-02",menu:!1,job:{code:"001",headline:"Software Engineer (Java)",icon:"fab fa-java",newApplicants:18,positions:5,subtitle:"2 days ago",showDetails:!1,details:"Designing, implementing, and maintaining Java applications that are often high-volume and low-latency Applications Delivering high availability and performance Contributing in all phases of the development lifecycle Writing well-designed, efficient, and testable code"},chips:["Java","Spring Framework","REST Web Services","Version control"],items:["Java","Spring Framework","REST Web Services","Version control","MySQL","JUnit","JQuery","Hibernate","Eclipse IDE","SCRUM"]}},methods:{remove:function(e){this.chips.splice(this.chips.indexOf(e),1),this.chips=[].concat(_()(this.chips))}}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v(e._s(e.job.headline))])]),e._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",[a("v-text-field",{attrs:{label:"How many people are you hiring for this position",type:"number",required:"","prepend-icon":"face",value:e.job.positions}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,"return-value":e.date,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","min-width":"290px"},on:{"update:returnValue":function(t){e.date=t}},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Closing Date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),a("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.menu=!1}}},[e._v("Cancel")]),e._v(" "),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.menu.save(e.date)}}},[e._v("OK")])],1)],1)],1),e._v(" "),a("v-combobox",{attrs:{items:e.items,label:"Key Skills",chips:"",clearable:"","prepend-icon":"filter_list",solo:"",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[a("v-chip",{attrs:{selected:t.selected,close:""},on:{input:function(a){e.remove(t.item)}}},[a("strong",[e._v(e._s(t.item))]),e._v(" \n            ")])]}}]),model:{value:e.chips,callback:function(t){e.chips=t},expression:"chips"}})],1)],1),e._v(" "),a("small",[e._v("*indicates required field")])],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){e.$emit("showDialog",!1)}}},[e._v("Close")]),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){e.$emit("showDialog",!1)}}},[e._v("Save")])],1)],1)},staticRenderFns:[]};var k={components:{JobDetails:a("VU/8")(g,b,!1,function(e){a("Pd4d")},"data-v-63f9e04e",null).exports},data:function(){return{show:!1,dialog:!1,cardItems:[{code:"001",headline:"Software Engineer (Java)",icon:"fab fa-java",newApplicants:18,subtitle:"active for 2 days, closing in 15 days",showDetails:!1,details:"Designing, implementing, and maintaining Java applications that are often high-volume and low-latency Applications Delivering high availability and performance Contributing in all phases of the development lifecycle Writing well-designed, efficient, and testable code"},{code:"002",headline:"Front-End Developer",icon:"fab fa-js-square",newApplicants:25,subtitle:"active for 4 days, closing in 12 days",showDetails:!1,details:"Experienced in developing user-facing UI features for the web. Enjoys building reusable code and libraries UI components in the design system. Does not shy away from having your codes reviewed by your peers."},{code:"003",headline:"Database Administrator",icon:"fas fa-database",newApplicants:8,subtitle:"active for 5 days, closing in 11 days",showDetails:!1,details:"Designing, implementing, and maintaining Java applications that are often high-volume and low-latency Applications Delivering high availability and performance Contributing in all phases of the development lifecycle Writing well-designed, efficient, and testable code"},{code:"004",headline:"Android Engineer",icon:"fab fa-android",newApplicants:12,subtitle:"active for 5 days, closing in 10 days",showDetails:!1,details:"Designing, implementing, and maintaining Java applications that are often high-volume and low-latency Applications Delivering high availability and performance Contributing in all phases of the development lifecycle Writing well-designed, efficient, and testable code"},{code:"005",headline:"IOS Developer",newApplicants:3,icon:"fab fa-app-store-ios",subtitle:"active for 6 days, closing in 8 days",showDetails:!1,details:"Designing, implementing, and maintaining Java applications that are often high-volume and low-latency Applications Delivering high availability and performance Contributing in all phases of the development lifecycle Writing well-designed, efficient, and testable code"},{code:"006",headline:"Graduate Program",newApplicants:35,icon:"fas fa-graduation-cap",subtitle:"active for 15 days, closing in 20 days",showDetails:!1,details:"Develop, design and maintain technologies that improve the way our clients and the world works. Transform technology trends into solutions that meet client requirements from analysis to implementation."}]}},methods:{toggleDialog:function(e){this.dialog=e}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._l(e.cardItems,function(t){return a("div",[a("v-flex",[a("v-card",{staticClass:"ma-2"},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[a("i",{class:t.icon}),e._v(" "+e._s(t.headline))]),e._v(" "),a("span",{staticClass:"grey--text"},[e._v(e._s(t.subtitle))])])]),e._v(" "),a("v-card-actions",[a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-btn",{staticClass:"mr-3",attrs:{slot:"activator",color:"cyan",fab:"",small:"",dark:""},slot:"activator"},[a("v-icon",[e._v("edit")])],1),e._v(" "),a("job-details",{on:{showDialog:e.toggleDialog}})],1),e._v(" "),a("v-btn",{attrs:{color:"warning mr-2"},on:{click:function(t){e.$router.push({name:"JobDetailsPage"})}}},[e._v("Job Page")]),e._v(" "),a("v-badge",[a("span",{attrs:{slot:"badge"},slot:"badge"},[e._v(e._s(t.newApplicants))]),e._v(" "),a("v-btn",{attrs:{color:"success"},on:{click:function(t){e.$router.push({name:"Applicants"})}}},[e._v("View Applications")])],1),e._v(" "),a("v-spacer"),e._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){t.showDetails=!t.showDetails}}},[a("v-icon",[e._v(e._s(t.showDetails?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1),e._v(" "),a("v-slide-y-transition",[a("v-card-text",{directives:[{name:"show",rawName:"v-show",value:t.showDetails,expression:"job.showDetails"}]},[e._v("\n              "+e._s(t.details)+"\n            ")])],1)],1)],1)],1)}),e._v(" "),a("v-layout",{attrs:{row:""}})],2)},staticRenderFns:[]};var y=a("VU/8")(k,w,!1,function(e){a("E8MS")},null,null).exports,x={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("Details")])])}]};var S=a("VU/8")({name:"DetailsPage"},x,!1,function(e){a("/hJ8")},"data-v-7c28a452",null).exports,C={data:function(){return{valid:!1,item:{},dialog:!1,dialog_test:!1,dialog_interview:!1,dialog_message:!1,menu:!1,dateFormatted:null,select:["08:30","09:00","09.30"],StandardTestHeaders:[{text:"Name",align:"left",value:"name"},{text:"Score",value:"score"}]}},mounted:function(){var e=this;console.log(this.$route.params.id);[{id:1,TechnicalSkills:["C#","SQL","MongoDB","Azure","Linux","Jenkins"],OtherSkills:["Project Management","Six Sigma","Manufacturing Domain"],WriteUp:"Hi, I came across your job posting and find it interesting. I have worked with various projects in the past, feel free to contact me for further discussion of this role.",StandardTest:[{name:"Codify C# for professional",score:"30/50"},{name:"Hacker Rank SQL Challenge",score:"95/100"}]},{id:2,TechnicalSkills:["Java","HTML","CSS","React","Structs","Fortran"],OtherSkills:["Work Health Safety","Finance & Banking"],WriteUp:"I'm looking for opportunity to work in TechTech Pte Ltd, have experience working with teams of various capability. I have written a few open source technologies that have more than 100 000 users per month. Feel free to contact me for further discussion.",StandardTest:[{name:"Codify Java for professional",score:"42/50"},{name:"Hacker Rank SQL Challenge",score:"85/100"}]}].forEach(function(t){t.id==e.$route.params.id&&(e.item=t)})},methods:{returnApplicationList:function(){this.$router.push("/")}}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{attrs:{width:""}},[a("v-card-text",[a("div",[e._v("Application: "+e._s(e.item.id))]),e._v(" "),a("br"),e._v(" "),a("div",[a("h2",[e._v("Skill Sets")])]),e._v(" "),a("br"),e._v(" "),a("div",[e._v("Technical")]),e._v(" "),a("div",[a("ul",e._l(e.item.TechnicalSkills,function(t,i){return a("li",{key:i},[e._v("\r\n                    "+e._s(t)+"\r\n                 ")])}))]),e._v(" "),a("br"),e._v(" "),a("div",[e._v("Non-Technical")]),e._v(" "),a("div",[a("ul",e._l(e.item.OtherSkills,function(t,i){return a("li",{key:i},[e._v("\r\n                        "+e._s(t)+"\r\n                    ")])}))]),e._v(" "),a("br"),e._v(" "),a("v-divider"),e._v(" "),a("br"),e._v(" "),a("div",[a("h2",[e._v("Standardised Tests Taken")])]),e._v(" "),a("br"),e._v(" "),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.StandardTestHeaders,items:e.item.StandardTest,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",[e._v(e._s(t.item.name))]),e._v(" "),a("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.score))])]}}])}),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("v-divider"),e._v(" "),a("br"),e._v(" "),a("div",[a("h2",[e._v("Applicant Writeup")])]),e._v(" "),a("br"),e._v(" "),a("div",[e._v(e._s(e.item.WriteUp))])],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-dialog",{staticClass:"pa-1",attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog_message,callback:function(t){e.dialog_message=t},expression:"dialog_message"}},[a("v-btn",{attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[e._v("Send Message")]),e._v(" "),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Send Message")])]),e._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Message",hint:"Enter your message, avoid asking for applicants personal details",required:""}})],1)],1)],1)],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){e.dialog_message=!1}}},[e._v("Close")]),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){e.dialog_message=!1}}},[e._v("Send")])],1)],1)],1),e._v(" "),a("v-dialog",{staticClass:"pa-1",attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog_interview,callback:function(t){e.dialog_interview=t},expression:"dialog_interview"}},[a("v-btn",{attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[e._v("Arrange interview")]),e._v(" "),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Arrange interview")])]),e._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"nudge-right":40,lazy:"",transition:"scale-transition","offset-y":"","full-width":"","max-width":"290px","min-width":"290px"},model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[a("v-text-field",{attrs:{slot:"activator",label:"Date","prepend-icon":"event"},slot:"activator",model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),e._v(" "),a("v-date-picker",{attrs:{"no-title":""},on:{input:function(t){e.menu=!1}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-select",{attrs:{items:e.select,label:"Select time","item-value":"text"}}),e._v(" "),a("v-text-field",{attrs:{label:"Message (Optional)"}})],1)],1)],1)],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){e.dialog_interview=!1}}},[e._v("Close")]),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){e.dialog_interview=!1}}},[e._v("Send")])],1)],1)],1),e._v(" "),a("v-dialog",{staticClass:"pa-1",attrs:{scrollable:"","max-width":"500px"},model:{value:e.dialog_test,callback:function(t){e.dialog_test=t},expression:"dialog_test"}},[a("v-btn",{attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[e._v("Send Test(s)")]),e._v(" "),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Select test(s) to send")])]),e._v(" "),a("v-divider"),e._v(" "),a("v-card-text",[a("v-checkbox-group",{attrs:{column:""},model:{value:e.hello,callback:function(t){e.hello=t},expression:"hello"}},[a("v-checkbox",{attrs:{label:"Java Beginner",value:"JB1"}}),e._v(" "),a("v-checkbox",{attrs:{label:"Java Advanced",value:"JA1"}}),e._v(" "),a("v-checkbox",{attrs:{label:"React Beginner",value:"RA1"}})],1)],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){e.dialog_test=!1}}},[e._v("Close")]),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){e.dialog_test=!1}}},[e._v("Send")])],1)],1)],1),e._v(" "),a("v-dialog",{staticClass:"pa-1",attrs:{persistent:"","max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",color:"error",dark:""},slot:"activator"},[e._v("Reject Candidate")]),e._v(" "),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[e._v("Reject Candidate")])]),e._v(" "),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Message",hint:"Enter your message, avoid asking for applicants personal details",required:""}})],1)],1)],1)],1),e._v(" "),a("v-card-actions",[a("v-spacer"),e._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("Close")]),e._v(" "),a("v-btn",{attrs:{color:"error darken-1",flat:""},nativeOn:{click:function(t){e.dialog=!1}}},[e._v("Reject")])],1)],1)],1),e._v(" "),a("v-dialog",{staticClass:"pa-1",model:{value:e.placeholderForNothing,callback:function(t){e.placeholderForNothing=t},expression:"placeholderForNothing"}},[a("v-btn",{attrs:{slot:"activator",color:"primary"},on:{click:e.returnApplicationList},slot:"activator"},[e._v("Return to List")])],1)],1)],1)],1)],1)},staticRenderFns:[]},T=a("VU/8")(C,D,!1,null,null,null).exports,A={data:function(){return{chips:[],items:["Java","C#","Python"],applicants:[{id:1,skills:["Java","Node"],views:"Number of views : 10"},{id:2,skills:["C#","SQL"],views:"Number of views : 12"}]}},computed:{selectedItems:function(){var e=this;if(0==this.chips.length)return this.applicants;var t=[];return this.applicants.forEach(function(a){a.skills.forEach(function(i){e.chips.indexOf(i)&&t.push(a)})}),t}},methods:{remove:function(e){this.chips.splice(this.chips.indexOf(e),1),this.chips=[].concat(_()(this.chips))}}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-combobox",{attrs:{items:e.items,label:"Search Keywords",chips:"",clearable:"",solo:"",multiple:""},scopedSlots:e._u([{key:"selection",fn:function(t){return[a("v-chip",{attrs:{selected:t.selected,close:""},on:{input:function(a){e.remove(t.item)}}},[a("strong",[e._v(e._s(t.item))]),e._v(" \r\n      ")])]}}]),model:{value:e.chips,callback:function(t){e.chips=t},expression:"chips"}}),e._v(" "),a("v-card",[a("v-container",{attrs:{fluid:"","grid-list-lg":""}},[a("v-card",{staticClass:"white--text",attrs:{color:"blue-grey darken-2"}},[a("v-card-title",{attrs:{"primary-title":""}},e._l(e.selectedItems,function(t){return a("div",{key:t.id},[a("v-icon",[e._v("face")]),e._v(" "),a("div",{staticClass:"headline"},[e._v(e._s(t.id))]),e._v(" "),e._l(t.skills,function(t){return a("span",[e._v(e._s(t))])}),e._v(" "),a("div",[e._v(e._s(t.views))])],2)})),e._v(" "),a("v-card-actions",[a("v-btn",{attrs:{flat:"",dark:""}},[e._v("View Profile")])],1)],1)],1)],1)],1)},staticRenderFns:[]},R=a("VU/8")(A,E,!1,null,null,null).exports,F={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{attrs:{width:"800"}},[a("v-card-media",{attrs:{src:"https://cdn-images-1.medium.com/max/1600/1*8r6hvv5E-FOOdKOih4G7Hg.jpeg",height:"200px"}}),e._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("i",[a("small",[e._v("Applicant ID: 201807283716")])]),e._v(" "),a("h3",{staticClass:"headline mb-0"},[a("b",[e._v("Portfolio Projects")])]),e._v(" "),a("div",[a("ul",{staticStyle:{"list-style-type":"square"}},[a("li",[a("a",{attrs:{href:""}},[e._v("Blocks")]),e._v(" : An intuitive reporting platform used by political campaigns and issue advocacy organizations. Blocks organizes all of the program's data in one place; Data is synchronized dynamically so that people can spend less time connecting to data and more time producing critical insights about the program.")]),e._v(" "),a("br"),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Downbeat")]),e._v(" : A platform for artists to share their music with their fans. The web application allows artists to grow their audience through social media engagement. Users follow the artist on Twitter, SoundCloud, or Youtube, and in exchange they receive access to song downloads.")]),e._v(" "),a("br"),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Polling Location Lookup Tool")]),e._v(" : A responsively designed web app allowing voters to find the closest polling location to their current location or address. This tool uses geolocation and GIS to empower voters to locate the easiest site for them to use to cast their vote. This product was developed with Nevada in mind, and accommodates Nevada's unique early voting system. Even though early voting locations vary by day, the Polling Location Lookup always allows voters to find the closest open polling location to them each day. The functions of this tool are modular, and can operate as a stand alone site or they can be embedded in existing sites or resources. This tool was used in Nevada by President Barack Obama's Re-Election Campaign in 2012.")]),e._v(" "),a("br")])]),e._v(" "),a("h3",{staticClass:"headline mb-0"},[a("b",[e._v("Competitions")])]),e._v(" "),a("div",[a("div",[a("b",[e._v("Individual")])]),e._v(" "),a("ul",{staticStyle:{"list-style-type":"square"}},[a("li",[e._v(" Hacker Rank : "),a("a",{attrs:{href:"https://www.hackerrank.com/contests/openbracket-2017"}},[e._v("OpenBracket Delaware")]),e._v(" Top 120 (2811 contestants) ")]),e._v(" "),a("li",[e._v(" Hacker Rank : "),a("a",{attrs:{href:""}},[e._v("CodeAgon")]),e._v(" Top100 (1837 contestants) ")])]),e._v(" "),a("div",[a("b",[e._v("Team")])]),e._v(" "),a("ul",{staticStyle:{"list-style-type":"square"}},[a("li",[e._v(" Kaggle : "),a("a",{attrs:{href:"https://www.kaggle.com/c/avito-demand-prediction/leaderboard"}},[e._v("Avito Demand Prediction Challenge ")]),e._v(" Top25 (1917 teams) ")]),e._v(" "),a("li",[e._v(" Kaggle : "),a("a",{attrs:{href:"https://www.kaggle.com/c/talkingdata-adtracking-fraud-detection"}},[e._v(" TalkingData AdTracking Fraud Detection Challenge ")]),e._v(" Top180 (3967 teams) ")])]),e._v(" "),a("br")]),e._v(" "),a("h3",{staticClass:"headline mb-0"},[a("b",[e._v("Voluntary Works")])]),e._v(" "),a("div",[a("ul",{staticStyle:{"list-style-type":"square"}},[a("li",[a("a",{attrs:{href:"https://www.womenwhocode.com/singapore"}},[e._v("Women Who Code Singapore")]),e._v(" : Event & Meet-Ups coordinator")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.datakind.org/chapters/datakind-sg"}},[e._v("DataKind SG")]),e._v(" : Data Cleaning & Exploratory Analysis")]),e._v(" "),a("br")])])])]),e._v(" "),a("v-card-actions",[a("v-btn",{attrs:{flat:"",color:"orange"}},[e._v("Issuance of Take-Home Assignment")]),e._v(" "),a("v-btn",{attrs:{flat:"",color:"orange"}},[e._v("Schedule Online Test")]),e._v(" "),a("v-btn",{attrs:{flat:"",color:"orange"}},[e._v("Schedule On-Site Interview")])],1)],1)],1)},staticRenderFns:[]},O=a("VU/8")({data:function(){return{}}},F,!1,null,null,null).exports;i.default.use(o.a);var J=new o.a({base:"/wwcode/",mode:"history",routes:[{path:"/login",components:{default:u,layout:l}},{path:"/",components:{default:y,layout:v}},{path:"/jobs/details",name:"JobDetailsPage",components:{default:S,layout:v}},{path:"/jobs/:id",name:"Applicants",components:{default:T,layout:v}},{path:"/seekers",components:{default:R,layout:v}},{path:"/seekers/:id",components:{default:O,layout:v}},{path:"/settings",components:{default:m,layout:v}}]}),P=a("3EgV"),q=a.n(P),j=(a("7zck"),a("ao2D"),a("NYxO")),$=a("982O"),N=a.n($),V=a("d5hN"),L=a.n(V),U=a("9QL+"),H=a.n(U);i.default.use(j.a);var I=new j.a.Store({modules:{seekers:N.a,applicants:L.a,company:H.a},strict:!1,plugins:[]});i.default.use(q.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},iconfont:"fa"}),i.default.config.productionTip=!1,new i.default({el:"#app",router:J,store:I,components:{App:s},template:"<App/>"})},Pd4d:function(e,t){},ao2D:function(e,t){},d5hN:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6372046c1e6f4221a2a2.js.map