(function(e){function t(t){for(var n,i,c=t[0],s=t[1],u=t[2],l=0,m=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&m.push(r[i][0]),r[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);d&&d(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,c=1;c<o.length;c++){var s=o[c];0!==r[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=o[0]))}return e}var n={},r={app:0},a=[];function i(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=s;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"03e6":function(e,t,o){"use strict";o("770b")},"0538":function(e,t,o){"use strict";o("7b4f")},1343:function(e,t,o){"use strict";o("1890")},1890:function(e,t,o){},"30ad":function(e,t,o){},3496:function(e,t,o){},"36d8":function(e,t,o){"use strict";o("84f5")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r={id:"App",class:""},a=Object(n["g"])("div",{class:"nav-wrapper"},null,-1),i={class:"navbar navbar-expand-lg"},c={class:"container-fluid"},s=Object(n["g"])("h1",null,"K-Watch",-1),u=Object(n["g"])("span",{class:"navbar-toggler-icon"},[Object(n["g"])("i",{class:"fas fa-plus"})],-1),d={class:"collapse navbar-collapse justify-content-end",id:"navbarNav"},l=Object(n["g"])("hr",null,null,-1),m={class:"navbar-nav"},b={class:"nav-item"},p=Object(n["f"])("home"),f=Object(n["g"])("hr",null,null,-1),h={class:"nav-item input"},v={class:"nav-item"},j={class:"nav-item"},g=Object(n["f"])("create a room"),O=Object(n["g"])("hr",null,null,-1),y={class:"nav-item"},I=Object(n["f"])("Contact"),w={class:"content container"};function k(e,t,o,k,C,E){var x=Object(n["w"])("router-link"),A=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])("div",r,[a,Object(n["g"])("nav",i,[Object(n["g"])("div",c,[Object(n["g"])(x,{class:"navbar-brand",to:"/"},{default:Object(n["C"])((function(){return[s]})),_:1}),Object(n["g"])("button",{onClick:t[1]||(t[1]=function(e){return E.rot()}),class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[u]),Object(n["g"])("div",d,[l,Object(n["g"])("ul",m,[Object(n["g"])("li",b,[Object(n["g"])(x,{class:"link nav-link",to:"/"},{default:Object(n["C"])((function(){return[p]})),_:1})]),f,Object(n["g"])("li",h,[Object(n["D"])(Object(n["g"])("input",{class:"link nav-link","onUpdate:modelValue":t[2]||(t[2]=function(e){return C.roomCode=e}),type:"text",name:"joinRoom",id:"joinRoom",placeholder:"Room code..."},null,512),[[n["A"],C.roomCode]])]),Object(n["g"])("li",v,[Object(n["g"])("a",{onClick:t[3]||(t[3]=function(e){return E.joinRoom()}),class:"link nav-link"},"join a room")]),Object(n["g"])("li",j,[Object(n["g"])(x,{class:"link nav-link",to:"/room/roomAction=create/error=non/join=none"},{default:Object(n["C"])((function(){return[g]})),_:1})]),O,Object(n["g"])("li",y,[Object(n["g"])(x,{class:"link nav-link",to:"/contact"},{default:Object(n["C"])((function(){return[I]})),_:1})])])])])]),Object(n["g"])("div",w,[Object(n["g"])(A)])])}var C={name:"app",data:function(){return{roomCode:null,navToggled:!1}},methods:{joinRoom:function(){null!==this.roomCode?this.$router.push("/room/roomAction=join/error=room%20not%20found/join="+this.roomCode):this.$router.push("/room/roomAction=join/error=none/join=none")},rot:function(){var e=document.getElementsByClassName("navbar-toggler-icon")[0];this.navToggled?(e.style.transform="rotate(0deg)",this.navToggled=!1):(e.style.transform="rotate(45deg)",this.navToggled=!0)}}};o("36d8");C.render=k;var E=C,x=(o("b0c0"),o("6c02")),A=Object(n["E"])("data-v-57b979c3");Object(n["s"])("data-v-57b979c3");var V={id:"home"};Object(n["q"])();var T=A((function(e,t,o,r,a,i){return Object(n["p"])(),Object(n["d"])("div",V," Home page ")})),_={name:"Home",components:{}};_.render=T,_.__scopeId="data-v-57b979c3";var R=_,q=Object(n["E"])("data-v-121f9379");Object(n["s"])("data-v-121f9379");var S={class:"",id:"room"},U={class:"row"},B=Object(n["g"])("i",{class:"fas fa-chevron-left"},null,-1),$={class:"side-box"},H=Object(n["g"])("hr",null,null,-1),P={class:"video col-md-12"};Object(n["q"])();var N=q((function(e,t,o,r,a,i){var c=Object(n["w"])("attendees"),s=Object(n["w"])("queue"),u=Object(n["w"])("search"),d=Object(n["w"])("videoComp");return Object(n["p"])(),Object(n["d"])("div",S,[Object(n["g"])("div",U,[Object(n["g"])("div",{onClick:t[1]||(t[1]=function(e){return i.hideBtn()}),id:"arrow-btn",class:"arrow-btn"},[B]),Object(n["g"])("div",$,[Object(n["g"])(c,{io:a.io},null,8,["io"]),H,Object(n["g"])(s,{io:a.io,queue:a.settings.queue},null,8,["io","queue"])]),Object(n["g"])("div",null,[Object(n["g"])(u,{class:"search col-md-12",searchResults:e.searchQueue,io:a.io},null,8,["searchResults","io"])]),Object(n["g"])("div",P,[Object(n["g"])(d,{class:"video-comp",queue:e.roomQueue,io:a.io},null,8,["queue","io"])])])])})),D=o("f121"),Q=o.n(D),M=o("bc3a"),L=o.n(M),z=o("a11b"),Y=o.n(z),J=Object(n["E"])("data-v-046fe4e6");Object(n["s"])("data-v-046fe4e6");var W={class:"video"},F={class:"player-wrapper"},K={class:"player"},G=Object(n["g"])("div",{class:"top",id:"top"},null,-1),X={ref:"player",id:"player"};Object(n["q"])();var Z=J((function(e,t,o,r,a,i){var c=Object(n["w"])("videoCont");return Object(n["p"])(),Object(n["d"])("div",W,[Object(n["g"])("div",F,[Object(n["g"])("div",K,[G,Object(n["g"])("div",X,null,512)])]),Object(n["g"])(c,{id:"controller",player:a.player,io:o.io,vidDuration:a.vidDuration,vidTime:a.vidTime},null,8,["player","io","vidDuration","vidTime"])])})),ee=(o("96cf"),o("1da1")),te=Object(n["E"])("data-v-634a8684");Object(n["s"])("data-v-634a8684");var oe={id:"controller",class:"d-flex justify-content-between"},ne=Object(n["g"])("i",{class:"fas fa-pause"},null,-1),re=Object(n["g"])("i",{class:"fas fa-forward"},null,-1),ae=Object(n["g"])("i",{class:"fas fa-volume-up"},null,-1),ie={key:0,class:"sound-wrapper"};Object(n["q"])();var ce=te((function(e,t,o,r,a,i){return Object(n["p"])(),Object(n["d"])("div",oe,[Object(n["g"])("button",{id:"pause-btn",onClick:t[1]||(t[1]=function(){return i.togglePlay&&i.togglePlay.apply(i,arguments)})},[ne]),Object(n["g"])("button",{onClick:t[2]||(t[2]=function(){return i.nextVid&&i.nextVid.apply(i,arguments)}),class:"next-wrapper"},[re]),Object(n["D"])(Object(n["g"])("input",{onClick:t[3]||(t[3]=function(){return i.bar&&i.bar.apply(i,arguments)}),class:"slider",name:"videoBar",id:"bar",type:"range",min:"0",max:o.vidDuration,step:"1","onUpdate:modelValue":t[4]||(t[4]=function(e){return o.vidTime=e})},null,8,["max"]),[[n["A"],o.vidTime]]),Object(n["g"])("button",{id:"sound-btn",onClick:t[5]||(t[5]=function(){return i.sound&&i.sound.apply(i,arguments)})},[ae]),a.soundShow?(Object(n["p"])(),Object(n["d"])("div",ie,[Object(n["D"])(Object(n["g"])("input",{onClick:t[6]||(t[6]=function(){return i.setVolume&&i.setVolume.apply(i,arguments)}),class:"sound",type:"range",name:"volume",id:"volume",min:"0",max:"100","onUpdate:modelValue":t[7]||(t[7]=function(e){return a.volume=e})},null,512),[[n["A"],a.volume]])])):Object(n["e"])("",!0)])})),se={name:"vidControll",props:["player","io","vidDuration","vidTime"],data:function(){return{roomId:this.$route.params.roomId,soundShow:!1,volume:100}},methods:{togglePlay:function(){this.io.emit(this.roomId,{onStateChange:this.player.getPlayerState()}),1==this.player.getPlayerState()&&(document.getElementById("pause-btn").innerHTML='<i class="fas fa-play"></i>'),2==this.player.getPlayerState()&&(document.getElementById("pause-btn").innerHTML='<i class="fas fa-pause"></i>')},bar:function(){this.io.emit(this.roomId,{onBarChange:this.vidTime})},sound:function(){this.soundShow?this.soundShow=!1:this.soundShow=!0},setVolume:function(){this.player.setVolume(this.volume)},nextVid:function(){this.io.emit(this.roomId,{vidEnded:!0})}}};o("1343");se.render=ce,se.__scopeId="data-v-634a8684";var ue=se,de=o("fa57"),le=o.n(de),me=o("6753"),be=o.n(me),pe=o("f3a1"),fe=o.n(pe),he={name:"video",props:["queue","io"],components:{videoCont:ue},data:function(){return{roomId:this.$route.params.roomId,roomVideo:"89ppVWIint8",player:null,paused:!0,ready:!1,vidTime:0,vidDuration:0,roomInfo:!1,reConnectAttempts:0,windowHeight:window.innerHeight}},methods:{onReady:function(e){var t=this;this.barProgress(),this.ready=be()(this.player,this.paused,this.reConnectAttempts,this.io,this.$router,this.roomId),this.vidDuration=this.player.getDuration(),this.io.on(this.roomId,(function(e){fe()(e,t.player,t.io,t.roomId),e.loadVideoById&&(t.player.loadVideoById(e.loadVideoById),setTimeout((function(){return t.vidDuration=t.player.getDuration()}),1e3))}))},onStateChange:function(e){0==e.data&&this.io.emit(this.roomId,{vidEnded:!0})},init:function(){var e=this;return Object(ee["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=document.createElement("script"),o.src="https://www.youtube.com/iframe_api",n=document.getElementsByTagName("script")[0],n.parentNode.insertBefore(o,n),t.next=6,le()();case 6:e.player=new YT.Player("player",{width:"100%",height:window.innerHeight-200,videoId:e.roomVideo,events:{onReady:e.onReady,onStateChange:e.onStateChange},playerVars:{autoplay:1,showinfo:0,controls:0,rel:0}});case 7:case"end":return t.stop()}}),t)})))()},barProgress:function(){var e=this;setInterval((function(){e.vidTime=e.player.getCurrentTime()}),1e3)},myEventHandler:function(e){this.player.setSize("100%",window.innerHeight-200)}},created:function(){var e=this;window.addEventListener("resize",this.myEventHandler),this.io.on(this.roomId,(function(t){t.roomInfo&&(t.roomInfo.video.paused?e.paused=!0:e.paused=!1,e.roomVideo=t.roomInfo.video.id)}))},mounted:function(){this.init()},destroyed:function(){window.removeEventListener("resize",this.myEventHandler)}};o("03e6");he.render=Z,he.__scopeId="data-v-046fe4e6";var ve=he,je=(o("ac1f"),o("841c"),Object(n["E"])("data-v-4a53da64"));Object(n["s"])("data-v-4a53da64");var ge={class:"video-input d-flex"},Oe={class:"search-input"},ye=Object(n["g"])("i",{class:"fas fa-search"},null,-1),Ie=Object(n["g"])("i",{class:"fas fa-times-circle"},null,-1),we={id:"aUl",class:"d-flex justify-content-center flex-wrap"},ke={class:"item-wrapper"},Ce={class:"image"},Ee={class:"image-back d-flex justify-content-around"},xe=Object(n["g"])("i",{class:"fas fa-bookmark"},null,-1),Ae=Object(n["g"])("i",{class:"fas fa-play"},null,-1),Ve=Object(n["g"])("i",{class:"fas fa-plus"},null,-1);Object(n["q"])();var Te=je((function(e,t,o,r,a,i){return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])("div",ge,[Object(n["g"])("div",Oe,[Object(n["D"])(Object(n["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.searchMeta=e}),onKeyup:t[2]||(t[2]=function(){return i.search&&i.search.apply(i,arguments)}),type:"text",name:"videoInput",id:"videoInput",placeholder:"Search on Youtube"},null,544),[[n["A"],a.searchMeta]]),Object(n["g"])("button",{class:"searchBtn",onClick:t[3]||(t[3]=function(){return i.search&&i.search.apply(i,arguments)})},[ye])]),a.searchQueueEmpt?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("button",{key:0,class:"searchBtn",onClick:t[4]||(t[4]=function(e){return i.removeList()})},[Ie]))]),Object(n["g"])("ul",we,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(a.searchQueue,(function(e){return Object(n["p"])(),Object(n["d"])("li",{class:"one-item",key:e},[Object(n["g"])("div",ke,[Object(n["g"])("div",Ce,[Object(n["g"])("div",Ee,[(Object(n["p"])(),Object(n["d"])("div",{class:"vid-action-btn",key:e,onClick:function(t){return i.addFav(e)}},[xe],8,["onClick"])),(Object(n["p"])(),Object(n["d"])("div",{class:"vid-action-btn",key:e,onClick:function(t){return i.playVideo(e),i.removeList()}},[Ae],8,["onClick"])),(Object(n["p"])(),Object(n["d"])("div",{class:"vid-action-btn",key:e,onClick:function(t){return i.addQueue(e)}},[Ve],8,["onClick"]))]),Object(n["g"])("img",{src:e.snippet.thumbnails.medium.url,alt:"tumbnail",width:"200",height:"120"},null,8,["src"])]),Object(n["g"])("h3",null,Object(n["y"])(e.snippet.title),1)])])})),128))])])})),_e={name:"searchResult",props:["io"],data:function(){return{roomId:this.$route.params.roomId,searchMeta:"itzy",searchQueue:[],searchQueueEmpt:!0}},methods:{search:function(e){var t=this;"Enter"!=e.key&&"click"!=e.type||(document.getElementById("aUl").style.overflowY="scroll",this.searchQueueEmpt=!1,L.a.post(Q.a.apiEndpoint+"/findvideo",{search:this.searchMeta}).then((function(e){t.searchQueue=e.data,console.log(e.data)})).catch((function(e){return console.log(e)})))},addQueue:function(e){L.a.post(Q.a.apiEndpoint+"/addToQueue",{roomId:this.roomId,video:{title:e.snippet.title,id:e.id.videoId,thumbnail:e.snippet.thumbnails.medium}}).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))},playVideo:function(e){this.io.emit(this.roomId,{loadVid:e.id.videoId}),document.getElementById("aUl").style.overflowY="hidden"},addFav:function(e){console.log(e.id.videoId),console.log(e.snippet.thumbnails.medium),console.log(e.snippet.title)},removeList:function(){document.getElementById("aUl").style.overflowY="hidden",this.searchQueueEmpt=!0,this.searchQueue=[]},myEventHandler:function(e){var t=document.getElementById("aUl");t.style.maxHeight=window.innerHeight-208+"px"}},mounted:function(){var e=document.getElementById("aUl");e.style.maxHeight=window.innerHeight-208+"px"},created:function(){window.addEventListener("resize",this.myEventHandler)},destroyed:function(){window.removeEventListener("resize",this.myEventHandler)}};o("57bf");_e.render=Te,_e.__scopeId="data-v-4a53da64";var Re=_e,qe=Object(n["E"])("data-v-e2c744b8");Object(n["s"])("data-v-e2c744b8");var Se={class:"room-attendees"},Ue=Object(n["g"])("h1",null,"Attendees",-1),Be={key:0,class:"d-flex justify-content-around flex-wrap"},$e={class:"",key:"attendee"},He=Object(n["g"])("div",{class:"attendee-actions d-flex justify-content-around"},[Object(n["g"])("i",{class:"fas fa-user-times"}),Object(n["g"])("i",{class:"fas fa-ban"})],-1);Object(n["q"])();var Pe=qe((function(e,t,o,r,a,i){return Object(n["p"])(),Object(n["d"])("div",Se,[Ue,a.showUsers?(Object(n["p"])(),Object(n["d"])("ul",Be,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(a.roomAttendees,(function(e){return Object(n["p"])(),Object(n["d"])("li",$e,[Object(n["f"])(Object(n["y"])(e.username)+" ",1),He])})),128))])):Object(n["e"])("",!0)])})),Ne={name:"attendees",props:["io"],data:function(){return{showUsers:!0,roomAttendees:[],roomId:this.$route.params.roomId}},methods:{showHideUsers:function(){this.showUsers?this.showUsers=!1:this.showUsers=!0}},mounted:function(){var e=this;this.io.on(this.roomId,(function(t){t.roomInfo&&(e.roomAttendees=t.roomInfo.roomAttendees),t.roomUpdate&&(e.roomAttendees=t.roomUpdate)}))}};o("6b2f");Ne.render=Pe,Ne.__scopeId="data-v-e2c744b8";var De=Ne,Qe=Object(n["E"])("data-v-028205e7");Object(n["s"])("data-v-028205e7");var Me={id:"queue"},Le=Object(n["g"])("h1",null,"Queue",-1),ze={class:"d-flex justify-content-between"},Ye=Object(n["g"])("i",{class:"fas fa-times-circle"},null,-1);Object(n["q"])();var Je=Qe((function(e,t,o,r,a,i){return Object(n["p"])(),Object(n["d"])("div",Me,[Le,Object(n["g"])("ul",null,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(o.queue,(function(e){return Object(n["p"])(),Object(n["d"])("li",ze,[Object(n["g"])("div",{class:"d-flex",onClick:function(t){return i.playThisVid(e)}},[Object(n["g"])("img",{class:"",src:e.thumbnail.url,alt:"video"},null,8,["src"]),Object(n["g"])("h5",null,Object(n["y"])(e.title),1)],8,["onClick"]),Object(n["g"])("button",{onClick:function(t){return i.delItem(e.id)}},[Ye],8,["onClick"])])})),256))])])})),We={name:"queue",props:["io","queue"],data:function(){return{roomId:this.$route.params.roomId}},methods:{playThisVid:function(e){this.io.emit(this.roomId,{loadVid:e.id})},delItem:function(e){this.io.emit(this.roomId,{delQueueItem:e})}},mounted:function(){}};o("6d1b");We.render=Je,We.__scopeId="data-v-028205e7";var Fe=We,Ke={name:"room",components:{videoComp:ve,search:Re,attendees:De,queue:Fe},data:function(){return{io:null,searchMeta:"itzy",valid:!1,settings:{roomId:this.$route.params.roomId,roomName:"",queue:[]},username:sessionStorage.getItem("username"),toggled:!0}},methods:{buildRoom:function(){var e=this;console.log(Q.a.apiEndpoint+"/rooms/"+this.settings.roomId),L.a.get(Q.a.apiEndpoint+"/rooms/"+this.settings.roomId).then((function(t){t.data.valid?(e.valid=!0,e.settings=t.data.settings,e.settings.queue=t.data.queue):e.$router.push("/room/roomAction=join/error=room%20not%20found/join=none")})).catch((function(e){console.log("something went wrong"),console.log(e)}))},checkuser:function(){return!!sessionStorage.getItem("username")},asignUsername:function(){sessionStorage.setItem("username",this.username)},hideBtn:function(){this.toggled?(document.getElementsByClassName("side-box")[0].style.right="-1200px",setTimeout((function(){document.getElementsByClassName("side-box")[0].style.display="none"}),400),document.getElementsByClassName("fa-chevron-left")[0].style.transform="rotate(180deg)",this.toggled=!1):(document.getElementsByClassName("side-box")[0].style.display="block",setTimeout((function(){document.getElementsByClassName("side-box")[0].style.right="0px"}),400),document.getElementsByClassName("fa-chevron-left")[0].style.transform="rotate(0deg)",this.toggled=!0)}},created:function(){var e=this;this.buildRoom(),this.io=Y()(Q.a.apiEndpoint,{query:{roomId:this.settings.roomId,username:this.username}}),this.io.on(this.settings.roomId,(function(t){t.online&&e.io.emit(e.settings.roomId,{isOnline:{username:e.username,socketId:e.io.id}}),t.queueUpdate&&(e.settings.queue=t.queueUpdate)}))},mounted:function(){},beforeUnmount:function(){this.io.disconnect()}};o("b808");Ke.render=N,Ke.__scopeId="data-v-121f9379";var Ge=Ke,Xe=Object(n["E"])("data-v-191363cb");Object(n["s"])("data-v-191363cb");var Ze={id:"contact"};Object(n["q"])();var et=Xe((function(e,t,o,r,a,i){return Object(n["p"])(),Object(n["d"])("div",Ze," contact page ")})),tt={name:"contact"};tt.render=et,tt.__scopeId="data-v-191363cb";var ot=tt,nt=Object(n["E"])("data-v-4a84dc95");Object(n["s"])("data-v-4a84dc95");var rt={class:"button"},at={class:"form"};Object(n["q"])();var it=nt((function(e,t,o,r,a,i){var c=Object(n["w"])("joinRoom"),s=Object(n["w"])("createRoom");return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])("div",rt,[Object(n["g"])("button",{onClick:t[1]||(t[1]=function(t){return e.$router.push("/room/roomAction=join/error=none/join=none")})},"Join Room"),Object(n["g"])("button",{onClick:t[2]||(t[2]=function(t){return e.$router.push("/room/roomAction=create/error=none/join=none")})},"Create Room")]),Object(n["g"])("div",at,["join"==a.roomAction?(Object(n["p"])(),Object(n["d"])(c,{key:0})):Object(n["e"])("",!0),"create"==a.roomAction?(Object(n["p"])(),Object(n["d"])(s,{key:1})):Object(n["e"])("",!0)])])})),ct=Object(n["E"])("data-v-e0bd9918");Object(n["s"])("data-v-e0bd9918");var st=Object(n["g"])("div",null," join room component ",-1),ut={key:0};Object(n["q"])();var dt=ct((function(e,t,o,r,a,i){return Object(n["p"])(),Object(n["d"])("div",null,[st,Object(n["D"])(Object(n["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.roomId=e}),type:"text",name:"roomId",id:"roomId",placeholder:"room-id"},null,512),[[n["A"],a.roomId]]),"none"!==a.error?(Object(n["p"])(),Object(n["d"])("h5",ut,Object(n["y"])(a.error),1)):Object(n["e"])("",!0),Object(n["g"])("button",{onClick:t[2]||(t[2]=function(){return i.joinRoom&&i.joinRoom.apply(i,arguments)})},"join room")])})),lt={name:"joinRoom",data:function(){return{roomId:"",error:this.$route.params.error,redirect:this.$route.params.roomId}},methods:{joinRoom:function(){var e=this;L.a.get(Q.a.apiEndpoint+"/rooms/"+this.roomId).then((function(t){t.data.valid?e.$router.push("/room/roomId="+e.roomId):e.$router.push("/room/roomAction=join/error=room not found/join=none")})).catch((function(e){return console.log(e)}))}},created:function(){"none"!==this.redirect&&(this.roomId=this.redirect,this.joinRoom())},watch:{"$route.params.error":function(){this.error=this.$route.params.error}}};o("0538");lt.render=dt,lt.__scopeId="data-v-e0bd9918";var mt=lt,bt=Object(n["E"])("data-v-8488b90e");Object(n["s"])("data-v-8488b90e");var pt=Object(n["g"])("div",null," create room component ",-1);Object(n["q"])();var ft=bt((function(e,t,o,r,a,i){return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])("div",null,[pt,Object(n["D"])(Object(n["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.settings.roomName=e}),type:"text",name:"roomName",id:"roomName",placeholder:"Enter roomName..."},null,512),[[n["A"],a.settings.roomName]]),Object(n["g"])("button",{onClick:t[2]||(t[2]=function(e){return i.createRoom()})},"Create Room")])])})),ht={name:"HelloWorld",data:function(){return{settings:{roomId:"",roomName:"",roomAdmin:""}}},methods:{createRoom:function(){var e=this;this.settings.roomAdmin=this.username,L.a.post(Q.a.apiEndpoint+"/createRoom",this.settings).then((function(t){t.data.valid?(e.settings=t.data.settings,e.$router.push("/room/roomAction=join/error=none/join="+e.settings.roomId)):console.log("not valid"),console.log("a room has been created")})).catch((function(e){return console.log(e)}))}}};ht.render=ft,ht.__scopeId="data-v-8488b90e";var vt=ht,jt={name:"join / create room",components:{joinRoom:mt,createRoom:vt},data:function(){return{roomAction:this.$route.params.roomAction}},watch:{"$route.params.roomAction":function(e){this.roomAction=e}}};o("c807");jt.render=it,jt.__scopeId="data-v-4a84dc95";var gt=jt,Ot=Object(n["E"])("data-v-45c59eac"),yt=Ot((function(e,t,o,r,a,i){return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["D"])(Object(n["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.username=e}),type:"text",name:"username",id:"username",placeholder:"username..."},null,512),[[n["A"],a.username]]),Object(n["g"])("button",{onClick:t[2]||(t[2]=function(e){return i.useUsername()})},"join")])})),It={name:"username",data:function(){return{username:"",roomAction:this.$route.params.roomAction}},methods:{useUsername:function(){sessionStorage.setItem("username",this.username),"join"==this.roomAction||"create"==this.roomAction?this.$router.push("/room/roomAction="+this.roomAction+"/error=none/join=none"):this.$router.push("/room/roomAction=join/error=none/join="+this.roomAction)}}};It.render=yt,It.__scopeId="data-v-45c59eac";var wt=It,kt=[{path:"/",name:"Home",component:R},{path:"/room/roomAction=:roomAction/error=:error/join=:roomId",name:"join/create room",component:gt},{path:"/room/roomId=:roomId",name:"room",component:Ge},{path:"/username/to=:roomAction",name:"username",component:wt},{path:"/contact",name:"contact",component:ot}],Ct=Object(x["a"])({history:Object(x["b"])("/"),routes:kt});Ct.beforeEach((function(e,t,o){var n=sessionStorage.getItem("username");"join/create room"==e.name&&(n?o():o({path:"/username/to="+e.params.roomAction})),"room"==e.name?n?o():o({path:"/username/to="+e.params.roomId}):o()}));var Et=Ct,xt=Object(n["c"])(E);xt.use(Et),xt.mount("#app")},"57bf":function(e,t,o){"use strict";o("3496")},6753:function(e,t){var o=!1,n=function(e,t,n,r,a,i){setInterval((function(){o||(1==e.getPlayerState()||-1==e.getPlayerState()||5==e.getPlayerState()?(t?e.pauseVideo():e.playVideo(),o=!0,r.emit(i,{vidReady:o})):(o=!1,n++,console.log("reconnecting... "+n+"e attempt"),300==n&&(o=!0,a.push("/room/roomAction=join/error=room%20timed%20out/join=none"))))}),70),setInterval((function(){return 1==o}),70)};e.exports=n},"6b2f":function(e,t,o){"use strict";o("30ad")},"6d1b":function(e,t,o){"use strict";o("aeb1")},"770b":function(e,t,o){},"7b4f":function(e,t,o){},"84f5":function(e,t,o){},"9e52":function(e,t,o){},aeb1:function(e,t,o){},b808:function(e,t,o){"use strict";o("c2d3")},c2d3:function(e,t,o){},c807:function(e,t,o){"use strict";o("9e52")},f121:function(e,t){e.exports={apiEndpoint:"http://localhost:3000"}},f3a1:function(e,t){var o=function(e,t,o,n){e.pauseVideo&&t.pauseVideo(),e.playVideo&&t.playVideo(),e.seekTo&&t.seekTo(e.seekTo,!0),e.barChanged&&t.seekTo(e.barChanged,!0),e.sendVidTime&&o.emit(n,{seek:{time:t.getCurrentTime(),socketId:e.sendVidTime}})};e.exports=o},fa57:function(e,t,o){o("d3b7"),o("96cf");var n=o("c973"),r=function(){var e=n(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e,t){setTimeout((function(){e()}),1e3)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();e.exports=r}});
//# sourceMappingURL=app.bbc5a803.js.map