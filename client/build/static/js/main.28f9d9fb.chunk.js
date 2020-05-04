(this["webpackJsonpworkout-planner"]=this["webpackJsonpworkout-planner"]||[]).push([[0],{120:function(e,a,t){e.exports=t(257)},125:function(e,a,t){},126:function(e,a,t){},143:function(e,a,t){},148:function(e,a,t){},149:function(e,a,t){},150:function(e,a,t){},151:function(e,a,t){},152:function(e,a,t){},153:function(e,a,t){},154:function(e,a,t){},155:function(e,a,t){},156:function(e,a,t){},162:function(e,a){},164:function(e,a){},195:function(e,a){},196:function(e,a){},255:function(e,a,t){},256:function(e,a,t){},257:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(116),l=t.n(c),o=(t(125),t(126),t(16)),s=t(21),u=t(3),i=t(7),m=Object(r.createContext)(),d=m.Provider,p=function(e,a){switch(a.type){case"login":return Object(i.a)({},e,{isLoggedIn:!0,currentUser:a.user,test:a.test});case"consolelog":return console.log("STATE in reducer consolelog: ",e),e;case"setuser":var t=a.user;return delete t.password,Object(i.a)({},e,{currentUser:t,test:a.test,isLoggedIn:!0});case"setworkouts":return Object(i.a)({},e,{workoutsToRender:a.payload});case"logout":return Object(i.a)({},e,{isLoggedIn:!1,currentUser:null});case"showsignup":return Object(i.a)({},e,{showLogIn:!1,showSignUp:!0});case"showlogin":return Object(i.a)({},e,{showSignUp:!1,showLogIn:!0});case"updateUser":return Object(i.a)({},e,{currentUser:a.payload});case"addclickedworkout":return Object(i.a)({},e,{clickedWorkouts:a.payload});case"clearclickedworkouts":return Object(i.a)({},e,{clickedWorkouts:null});default:return console.log("STATE in reducer: ",e),e}},f=function(e){var a=Object.assign({},e),t=Object(r.useReducer)(p,{currentUser:null}),c=Object(u.a)(t,2),l=c[0],o=c[1];return n.a.createElement(d,Object.assign({value:[l,o]},a))},E=function(){return Object(r.useContext)(m)},b=t(12),v=t.n(b),h=function(){return v.a.get("/api/workouts")},g=function(e){return v.a.get("/api/workouts/regex/"+e)},N=function(e){return v.a.get("/api/workouts/equipment/"+e)},y=function(e){return v.a.get("/api/workouts/musclegroup/"+e)},k=function(e){return v.a.get("/api/workouts/category/"+e)},w=function(e){return v.a.post("/api/users",e)},O=function(e,a){return v.a.put("/api/users/".concat(a),e)},j=function(e){return v.a.post("/api/workouts",e)},q=function(e){return v.a.post("/api/users/login",e)},C=function(){return v.a.post("/api/users/logout")},D=function(){return v.a.post("/api/users/getloggedinuser")};t(143);var x=function(){var e=E(),a=Object(u.a)(e,2),t=a[0],r=a[1],c=function(){C().then((function(){r({type:"logout"})})).catch((function(e){return console.log(e)}))},l=function(e){e.preventDefault(),r({type:"showsignup"})},s=function(e){e.preventDefault(),r({type:"showlogin"})};return n.a.createElement("div",null,t.isLoggedIn?n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},n.a.createElement(o.b,{className:"navbar-brand",to:"/"},"Workout Tracker"),n.a.createElement(o.b,{className:"nav-link",to:"/calendar"},"Calendar"),n.a.createElement(o.b,{className:"nav-link",to:"/create"},"Create"),n.a.createElement(o.b,{className:"nav-link",to:"/search"},"Search"),n.a.createElement("button",{className:"nav-btns btn btn-warning",onClick:c},"Logout")):n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},n.a.createElement(o.b,{className:"navbar-brand",to:"/"}," Workout Tracker "),n.a.createElement("form",{className:"form-inline"},n.a.createElement("button",{className:"nav-btns btn btn-info left-btn",onClick:l},"Sign Up"),n.a.createElement("button",{className:"btn nav-btns btn-info right-btn",onClick:s},"Log In"))))};t(148);function M(){var e=E(),a=Object(u.a)(e,2)[1],t=Object(r.useRef)(),c=Object(r.useRef)();return n.a.createElement("form",{id:"login-form",className:"p-3 rounded",onSubmit:function(e){e.preventDefault();var r={email:t.current.value,password:c.current.value};q(r).then((function(e){console.log("ABOUT TO CALL DISPATACH, RES.DATA: ",e.data),a({type:"setuser",user:e.data,test:"we got us a user"})})).catch((function(e){return console.log(e)})),t.current.value="",c.current.value=""}},n.a.createElement("div",{className:"form-row text-left mb-2"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",null,"Email"),n.a.createElement("input",{className:"form-control",ref:t,placeholder:"Email"})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",null,"Password"),n.a.createElement("input",{className:"form-control",required:!0,ref:c,type:"password",placeholder:"Password"}))),n.a.createElement("button",{className:"btn btn-success",type:"submit"},"Sign In"))}t(149);var U=function(){var e=E(),a=Object(u.a)(e,2)[1],t=Object(r.useRef)(),c=Object(r.useRef)(),l=Object(r.useRef)(),o=Object(r.useRef)(),s=Object(r.useRef)(),i=null,m=function(e){return/[a-zA-Z0-9]{8,}/.test(e)},d=function(e){return/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)};return n.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r=o.current.value,n=s.current.value,u=t.current.value;if(function(e,a,t){if(a===t&&d(e)&&m(a)&&m(t))return console.log("valid inputs"),!0;if(a!==t)return console.log("Your passwords do not match"),!1;if(!m(a)||!m(t))return console.log("Your password does not meet the minimum requirements"),!1;if(!d(e))return console.log("You did not enter a valid email"),!1}(u,r,n)){var p={email:u,password:r,firstName:c.current.value,lastName:l.current.value};i=r,w(p).then((function(e){var t=e.data;e.data&&(q({email:p.email,password:i}).then((function(){i=null})).catch((function(e){return console.log(e)})),a({type:"setuser",user:t}),i=null)})).catch((function(e){return console.log(e)}))}t.current.value="",c.current.value="",l.current.value="",o.current.value="",s.current.value=""},id:"signup-form",className:"p-3 rounded"},n.a.createElement("div",{className:"form-row text-left mb-2"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",null,"First Name"),n.a.createElement("input",{className:"form-control",ref:c,placeholder:"First name"})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",null,"Last Name"),n.a.createElement("input",{className:"form-control",ref:l,placeholder:"Last name"}))),n.a.createElement("div",{className:"form-group text-left"},n.a.createElement("label",null,"Email"),n.a.createElement("input",{className:"form-control",required:!0,ref:t,placeholder:"Email"}),n.a.createElement("small",{class:"form-text"},"Don't worry.  We'll never share your email with anyone else.")),n.a.createElement("div",{className:"form-row text-left mb-2"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",null,"Password"),n.a.createElement("input",{className:"form-control",required:!0,ref:o,placeholder:"password",type:"password"})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",null,"Re-enter password"),n.a.createElement("input",{className:"form-control",required:!0,ref:s,placeholder:"re enter password",type:"password"}))),n.a.createElement("button",{className:"btn btn-success",type:"submit"},"Create User"))},T=t(19);t(150),t(151);var S=function(e){var a=e.day,t=e.workouts,r=(e.jsDate,t.map((function(e){return"strength"===e.category?n.a.createElement("li",{className:"list-group-item",key:Math.floor(1e5*Math.random())},n.a.createElement("strong",null,e.name)," - ",e.sets):n.a.createElement("li",{className:"list-group-item",key:Math.floor(1e5*Math.random())},n.a.createElement("strong",null,e.name)," - ",e.time)})));return n.a.createElement("div",{className:"card calendar-card border-dark mb-3"},n.a.createElement("div",{className:"card-header"},a),n.a.createElement("div",{className:"card-body text-dark"},n.a.createElement("ul",{className:"list-group list-group-flush"},r)))};var A=function(){var e=E(),a=Object(u.a)(e,2),t=a[0],c=a[1],l=t.currentUser;return Object(r.useEffect)((function(){D().then((function(e){var a=e.data;e.data&&c({type:"setuser",user:a})})).catch((function(e){return console.log(e)})),l.calendar&&l.calendar.map((function(e,a){var t=e.jsDate,r=T.DateTime.fromISO(t).toISODate(),n=T.DateTime.fromISO(r).toMillis(),o=T.DateTime.local().toISODate();if(n<T.DateTime.fromISO(o).toMillis()){var s=l._id;l.calendar.splice(a,1),c({type:"updateUser",payload:l}),O(l,s)}}))}),[]),n.a.createElement("div",null,n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"display-4"},"Welcome, ",l.firstName),n.a.createElement("h5",{className:"display-5 text-center"},"Here's what your day looks like:"))),n.a.createElement("div",{className:"container d-flex"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:"card user-card border-dark mb-3"},n.a.createElement("div",{className:"card-header"},"My Equipment"),n.a.createElement("div",{className:"card-body text-dark"},n.a.createElement("ul",{className:"list-group list-group-flush"},function(e,a){if(e!==l.goals)return e.length>0?n.a.createElement("div",null,e.map((function(e,a){return n.a.createElement("li",{className:"list-group-item",key:a},e)}))):n.a.createElement("p",null,"No ",a," Added")}(l.equipment,"Equipment"))))),n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("div",{className:"card user-card border-dark mb-3"},n.a.createElement("div",{className:"card-header"},"My Goal"),n.a.createElement("div",{className:"card-body text-dark"},n.a.createElement("ul",{className:"list-group list-group-flush"},l.goal?l.goal:n.a.createElement("p",null,"No goal set yet")))))),function(){if(t.currentUser.calendar&&t.currentUser.calendar.length>0){var e=l.calendar[0].workouts.map((function(e){return"strength"===e.category?n.a.createElement("li",{className:"list-group-item",key:Math.floor(1e5*Math.random())},n.a.createElement("strong",null,e.name)," - ",e.sets):n.a.createElement("li",{className:"list-group-item",key:Math.floor(1e5*Math.random())},n.a.createElement("strong",null,e.name)," - ",e.time)}));return n.a.createElement("div",{className:"card cal-card border-dark mb-3"},n.a.createElement("div",{className:"card-header"},"Up next on my calendar:"," "," ",l.calendar[0].day),n.a.createElement("div",{className:"card-body text-dark"},n.a.createElement("ul",{className:"list-group list-group-flush"},e)))}return n.a.createElement("div",{className:"card cal-card border-dark mb-3"},n.a.createElement("div",{className:"card-header"},"No calendar created yet.  Click the calendar tab to begin one."),n.a.createElement("div",{className:"card-body text-dark"}))}()))};t(152);var I=function(){return n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"display-4"},"Welcome to Workout Tracker"),n.a.createElement("p",{className:"lead"},"You made the first step towards achieving your fitness goals."),n.a.createElement("p",{className:"lead"},"Sign up or Log in to continue")))};t(153);var W=function(){var e=E(),a=Object(u.a)(e,2),t=a[0],c=a[1];return Object(r.useEffect)((function(){D().then((function(e){var a=e.data;e.data&&c({type:"setuser",user:a})})).catch((function(e){return console.log(e)}))}),[]),n.a.createElement("div",{className:"wrapper"},t.currentUser?n.a.createElement(A,null):n.a.createElement("div",{className:"wrapper"},n.a.createElement(I,null),t.showSignUp?n.a.createElement(U,null):n.a.createElement("p",null),t.showLogIn?n.a.createElement(M,null):n.a.createElement("p",null)))},L=t(119),R=t(26);t(154);var B=function(){var e=Object(r.useState)({goal:"",equipment:[]}),a=Object(u.a)(e,2),t=a[0],c=a[1],l=E(),o=Object(u.a)(l,2),s=o[0],m=o[1];function d(e){e.preventDefault();var a=e.target.dataset.type,r=e.target.innerText;if("goal"===a)c(Object(i.a)({},t,Object(R.a)({},a,r))),document.querySelectorAll(".goalsbtn").forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active");else if(e.target.classList.toggle("active"),e.target.classList.contains("active"))c(Object(i.a)({},t,Object(R.a)({},a,[].concat(Object(L.a)(t.equipment),[r]))));else{var n=t.equipment.indexOf(r),l=t.equipment;t.equipment.splice(n,1),c(Object(i.a)({},t,Object(R.a)({},a,l)))}}var p=function(){h().then((function(e){var a=[];s.currentUser.equipment.length>0?(s.currentUser.equipment.forEach((function(t){e.data.forEach((function(e){e.equipment.join("")===t.toLowerCase()&&a.push(e)}))})),e.data.forEach((function(e){""===e.equipment.join("")&&a.push(e)}))):e.data.forEach((function(e){""===e.equipment.join("")&&a.push(e)}));var t=f(a),r=b(t),n=v(r),c=s.currentUser;c.calendar=n,m({type:"updateUser",payload:c});var l=s.currentUser._id;O({calendar:n},l)}))},f=function(e){var a=[];e.forEach((function(e){a.push(e.muscleGroup.join(""))}));var t=a.filter((function(e,a,t){return a===t.indexOf(e)})),r=[],n=[],c=[],l=[];t.forEach((function(e){"chest"===e||"triceps"===e||"shoulders"===e||"forearms"===e?r.push(e):"hamstrings"===e||"quadriceps"===e||"calves"===e?n.push(e):"lats"===e||"biceps"===e||"middle back"===e||"traps"===e||"lower back"===e?c.push(e):l.push(e)}));var o=[],s=[],u=[],i=[];return e.forEach((function(e){r.includes(e.muscleGroup.join(""))?o.push(e):n.includes(e.muscleGroup.join(""))?s.push(e):c.includes(e.muscleGroup.join(""))?u.push(e):i.push(e)})),{chestAndBiceps:o,legs:s,backAndTriceps:u,cardio:i}};Date.prototype.nextDay=function(e){var a=new Date(this.valueOf());return a.setDate(a.getDate()+2),a};var b=function(e){for(var a=[],t=[e.chestAndBiceps,e.legs,e.backAndTriceps,e.cardio],r=new Date,n=0,c=0;n<30;){var l="";switch(r.getMonth()){case 0:l+="Jan";break;case 1:l+="Feb";break;case 2:l+="Mar";break;case 3:l+="Apr";break;case 4:l+="May";break;case 5:l+="Jun";break;case 6:l+="Jul";break;case 7:l+="Aug";break;case 8:l+="Sept";break;case 9:l+="Oct";break;case 10:l+="Nov";break;case 11:l+="Dec"}l+=" "+r.getDate();var o=t[c],s=[],u=0;if(3!==c)for(;u<5;){var i=Math.floor(Math.random()*t[c].length);s.push(o[i]),u++}else for(;u<3;){var m=Math.floor(Math.random()*t[c].length);s.push(o[m]),u++}var d={day:l,jsDate:r,workouts:s};a.push(d);var p=r.nextDay();r=p,c=(c+1)%t.length,n++}return a},v=function(e){return"Bulk up"===s.currentUser.goal?e.forEach((function(e){e.workouts.forEach((function(e){if("strength"===e.category){var a=Math.floor(2*Math.random()+3),t=Math.floor(4*Math.random()+8);e.sets="".concat(a," x ").concat(t)}else{var r=Math.floor(20*Math.random()+40);e.time="".concat(r," minutes")}}))})):e.forEach((function(e){e.workouts.forEach((function(e){if("strength"===e.category){var a=Math.floor(2*Math.random()+4),t=Math.floor(5*Math.random()+15);e.sets="".concat(a," x ").concat(t)}else{var r=Math.floor(20*Math.random()+50);e.time="".concat(r," minutes")}}))})),e};return n.a.createElement("div",{id:"content-container"},n.a.createElement("form",null,n.a.createElement("div",{className:"form-header"},n.a.createElement("h3",null,"Let us help you build a workout regimen.")),n.a.createElement("div",{className:"form-header"},n.a.createElement("h4",null,"What is your main goal?")),n.a.createElement("div",{className:"buttons-section"},n.a.createElement("button",{"data-type":"goal",onClick:d,className:"goalsbtn"},"Bulk up"),n.a.createElement("button",{"data-type":"goal",onClick:d,className:"goalsbtn"},"Cut weight")),n.a.createElement("div",{className:"form-header"},n.a.createElement("h4",null,"What equipment do you have available?")),n.a.createElement("div",{className:"buttons-section"},n.a.createElement("button",{"data-type":"equipment",onClick:d,className:"equipbtn"},"Barbell"),n.a.createElement("button",{"data-type":"equipment",onClick:d,className:"equipbtn"},"Dumbbell"),n.a.createElement("button",{"data-type":"equipment",onClick:d,className:"equipbtn"},"Exercise Ball"),n.a.createElement("button",{"data-type":"equipment",onClick:d,className:"equipbtn"},"Curl Bar"),n.a.createElement("button",{"data-type":"equipment",onClick:d,className:"equipbtn"},"Machine"),n.a.createElement("button",{"data-type":"equipment",onClick:d,className:"equipbtn"},"Bicycle")),n.a.createElement("div",{className:"buttons-section"},n.a.createElement("button",{className:"btn btn-primary",onClick:function(e){e.preventDefault(),document.querySelectorAll("button").forEach((function(e){e.classList.remove("active")}));var a=s.currentUser;a.goal=t.goal,a.equipment=t.equipment,m({type:"updateUser",payload:a});var r=s.currentUser._id;O(t,r),p()}},"Submit"))))};t(155);var G=function(){var e=E(),a=Object(u.a)(e,1)[0].currentUser.calendar.map((function(e){var a=e.day,t=e.workouts,r=e.jsDate,c=T.DateTime.fromISO(r).toISODate(),l=T.DateTime.fromISO(c).toMillis(),o=T.DateTime.local().toISODate();if(l>=T.DateTime.fromISO(o).toMillis())return n.a.createElement(S,{day:a,key:a,workouts:t,jsDate:r})}));return n.a.createElement("div",{className:"card-holder d-flex flex-wrap"},a)};t(156);var F=function(){var e=E(),a=Object(u.a)(e,2),t=a[0],c=a[1];return Object(r.useEffect)((function(){D().then((function(e){var a=e.data;e.data&&c({type:"setuser",user:a})})).catch((function(e){return console.log(e)}))}),[]),n.a.createElement("div",{className:"wrapper"},t.currentUser?t.currentUser.goal?n.a.createElement(G,null):n.a.createElement(B,null):n.a.createElement(s.a,{to:"/"}))};var _=function(){var e=Object(r.useRef)(),a=Object(r.useRef)(),t=Object(r.useRef)(),c=Object(r.useRef)();function l(e){return e.split(", ")}return n.a.createElement("form",{className:"form-group mt-5 mb-5",onSubmit:function(r){r.preventDefault();var n=function(){var r=l(c.current.value),n=l(a.current.value),o={name:t.current.value,category:e.current.value,muscleGroup:r,equipment:n};return console.log("NEWWORKOUT: ",o),o}();console.log("WTA: ",n),j(n).then((function(e){return console.log("Respone: ",e.data)})).catch((function(e){return console.log(e)})),e.current.value="",c.current.value="",a.current.value="",t.current.value=""}},n.a.createElement("input",{className:"form-control mb-5",required:!0,ref:t,placeholder:"Name"}),n.a.createElement("input",{className:"form-control mb-5",required:!0,ref:e,placeholder:"Category"}),n.a.createElement("input",{className:"form-control mb-5",ref:a,placeholder:"Equipement needed"}),n.a.createElement("input",{className:"form-control mb-5",required:!0,ref:c,placeholder:"Targeted Muscles"}),n.a.createElement("button",{className:"btn btn-success mt-3 mb-5",type:"submit"},"Create Workout"))};t(157),t(255);var H=function(){var e=E(),a=Object(u.a)(e,2),t=a[0],c=a[1];return Object(r.useEffect)((function(){D().then((function(e){var a=e.data;e.data&&c({type:"setuser",user:a})})).catch((function(e){return console.log(e)}))}),[]),n.a.createElement("div",null,t.currentUser?n.a.createElement("div",{className:"wrapper"},n.a.createElement("h1",null,"Create Workout"),n.a.createElement(_,null)):n.a.createElement(s.a,{to:"/"}))};var J=function(e){var a=e.display,t=e.type,r=e.keys,c=e.name,l=e.func;return n.a.createElement("div",null,n.a.createElement("button",{type:"button",className:"btn btn-".concat(t," dropdown-toggle btn-lg btn-block"),"data-toggle":"dropdown"},a.charAt(0).toUpperCase()+a.slice(1)),n.a.createElement("div",{className:"dropdown-menu"},r.map((function(e){return n.a.createElement("button",{className:"dropdown-item",type:"button",key:e,"data-name":c,"data-key":e,onClick:function(e){l(e)}},e.charAt(0).toUpperCase()+e.slice(1))}))))};t(256);var P=function(){var e,a=E(),t=Object(u.a)(a,2),c=t[0],l=t[1],o=[],i=Object(r.useRef)();Object(r.useEffect)((function(){m(),D().then((function(e){var a=e.data;e.data&&l({type:"setuser",user:a})})).catch((function(e){return console.log(e)}))}),[]),Object(r.useEffect)((function(){console.log("HIT THE NEW ONE ")}),[o.length]);var m=function(){h().then((function(e){l({type:"setworkouts",payload:e.data})})).catch((function(e){return console.log(e)}))},d=function(a){if(a.preventDefault(),clearTimeout(e),a.target.dataset){var t=a.target.dataset.name,r=a.target.dataset.key;p(t,r,50)}var n=a.target,c=n.name,l=n.value;"clear-filters"===c&&(m(),i.current.value=""),console.log("name, value ",c,typeof l),p(c,l,700)},p=function(a,t,r){e=setTimeout((function(){if(t)switch(a){case"equipment-search":N(t).then((function(e){console.log("resInDeBOUNCe, ",e.data),l({type:"setworkouts",payload:e.data})})).catch((function(e){return console.log(e)}));break;case"muscle-search":y(t).then((function(e){console.log("res.data ",e.data),l({type:"setworkouts",payload:e.data})})).catch((function(e){return console.log(e)}));break;case"category-search":k(t).then((function(e){console.log("res.data ",e.data),l({type:"setworkouts",payload:e.data})})).catch((function(e){return console.log(e)}));break;case"regex-search":g(t).then((function(e){console.log("res.data ",e.data),l({type:"setworkouts",payload:e.data})})).catch((function(e){return console.log(e)}));break;default:console.log("HIT DEFAULT")}}),r)},f=function(e){c.clickedWorkouts?(o=c.clickedWorkouts).push(e):o.push(e),console.log("clickedWorkouts ",o),l({type:"addclickedworkout",payload:o})},b=function(e){e.preventDefault(),l({type:"clearclickedworkouts"})},v=function(){console.log("coming soon")};return n.a.createElement("div",{className:"wrapper"},c.currentUser?n.a.createElement("form",null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement(J,{display:"Filter by equipment",type:"primary",keys:["barbell","dumbbell","exercise ball","curl bar","machine","bicycle"],name:"equipment-search",func:d})),n.a.createElement("div",{className:"col"},n.a.createElement(J,{display:"Filter by muscle group",type:"primary",keys:["chest","triceps","shoulders","forearms","hamstrings","quadriceps","calves","lats","biceps","middle back","lower back","traps"],name:"muscle-search",func:d})),n.a.createElement("div",{className:"col"},n.a.createElement(J,{display:"Filter by category",type:"primary",keys:["strength","cardio"],name:"category-search",func:d}))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("input",{placeholder:"Search",name:"regex-search",ref:i,onChange:d})),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"btn btn-info",name:"clear-filters",onClick:d},"Clear Filters")))):n.a.createElement(s.a,{to:"/"}),function(){var e={justifyContent:"space-evenly"};if(c.workoutsToRender)return c.clickedWorkouts?n.a.createElement("div",{className:"row",style:e},n.a.createElement("div",{className:"col-9"},c.workoutsToRender.map((function(e,a){return n.a.createElement("div",{key:e._id,className:"card border-dark mb-3 wo-card"},n.a.createElement("div",{className:"card-header",onClick:function(){return f(e)}},e.name),n.a.createElement("div",{className:"card-body text-dark"},n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"},"Category: ",e.category),n.a.createElement("li",{className:"list-group-item"},"Muscles: ",e.muscleGroup),n.a.createElement("li",{className:"list-group-item"},"Equipment: ",e.equipment))))}))),n.a.createElement("div",{className:"col-3 center-things"},n.a.createElement("div",{className:"row"},n.a.createElement("h5",null,"Selected Exercises"),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"btn btn-warning",onClick:b},"Clear selections")),n.a.createElement("div",{className:"col"},n.a.createElement("button",{className:"btn btn-success",onClick:v},"Add custom workout"))),c.clickedWorkouts.map((function(e,a){return n.a.createElement("div",{key:a,className:"card border-dark mb-3 wo-card"},n.a.createElement("div",{className:"card-header"},e.name),n.a.createElement("div",{className:"card-body text-dark"},n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"},"Category: ",e.category),n.a.createElement("li",{className:"list-group-item"},"Muscles: ",e.muscleGroup),n.a.createElement("li",{className:"list-group-item"},"Equipment: ",e.equipment))))})))):n.a.createElement("div",{className:"row",style:e},c.workoutsToRender.map((function(e,a){return n.a.createElement("div",{key:e._id,className:"card border-dark mb-3 col-3 wo-card"},n.a.createElement("div",{className:"card-header",onClick:function(){return f(e)}},e.name),n.a.createElement("div",{className:"card-body text-dark"},n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"},"Category: ",e.category),n.a.createElement("li",{className:"list-group-item"},"Muscles: ",e.muscleGroup),n.a.createElement("li",{className:"list-group-item"},"Equipment: ",e.equipment))))})))}())};var Y=function(){return n.a.createElement(o.a,null,n.a.createElement("div",null,n.a.createElement(f,null,n.a.createElement(x,null),n.a.createElement(s.d,null,n.a.createElement(s.b,{exact:!0,path:"/",component:W}),n.a.createElement(s.b,{exact:!0,path:"/calendar",component:F}),n.a.createElement(s.b,{exact:!0,path:"/create",component:H}),n.a.createElement(s.b,{exact:!0,path:"/search",component:P})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[120,1,2]]]);
//# sourceMappingURL=main.28f9d9fb.chunk.js.map