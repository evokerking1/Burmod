var T=Object.defineProperty;var C=($,x)=>{for(var f in x)T($,f,{get:x[f],enumerable:!0,configurable:!0,set:(I)=>x[f]=()=>I})};var z="burmod";function L($){console.log(`[${z}] ${$}`)}function V($){ModAPI.displayToChat({msg:`\xA75[${z}]\xA7r ${$}`})}var W={};C(W,{settings:()=>{{return M}},init:()=>{{return S}}});function S($){$.onUpdate=function(){if($.getEnabled()){if(!ModAPI.player.capabilities.isFlying)ModAPI.player.capabilities.isFlying=!0,ModAPI.player.reload()}},$.onEnable=function(){ModAPI.player.capabilities.isFlying=!0,ModAPI.player.reload()},$.onDisable=function(){ModAPI.player.capabilities.isFlying=!1,ModAPI.player.reload()}}var M=[{name:"Mode",type:"List",modes:["Abilities","Packet"],current:0}];var Y={};C(Y,{init:()=>{{return N}}});function N($){$.settings=[{name:"Height",type:"Slider",min:1,max:6,step:0.5,current:1.5}],$.onUpdate=function(){if($.getEnabled()){if(ModAPI.player.stepHeight!=$.settings[0].current)ModAPI.player.stepHeight=$.settings[0].current,ModAPI.player.reload()}},$.onEnable=function(){ModAPI.player.stepHeight=$.settings[0].current,ModAPI.player.reload()},$.onDisable=function(){ModAPI.player.stepHeight=0.6000000238418579,ModAPI.player.reload()}}var O=function($){this.enabledDONOTUSE=!1,this.init=function(){},this.onEnable=function(){},this.onDisable=function(){},this.enable=function(){this.enabledDONOTUSE=!0,this.onEnable(),J()},this.disable=function(){this.enabledDONOTUSE=!1,this.onDisable(),J()},this.getEnabled=function(){return this.enabledDONOTUSE},this.toggle=function(){if(this.enabledDONOTUSE=!this.enabledDONOTUSE,this.enabledDONOTUSE)this.onEnable();else this.onDisable()},this.onUpdate=function(){},this.alert=function(){alert()},this.settings=[],$.init(this)},R={movement:"Movement",player:"Player",render:"Render",fun:"Fun"},X={flight:{name:"Flight",function:new O(W),category:"Movement",description:"Allows you to fly",key:0},step:{name:"Step",function:new O(Y),category:"Movement",description:"Allows you to step",key:0}};function Z(){if(document.getElementById("ui")!=null)document.getElementById("ui").remove()}function _(){if(document.getElementById("ui")==null)return!1;else return!0}function y($){var x=$.function.settings;console.log(x);var f=document.createElement("div");f.className="setting",f.style.position="absolute",f.style.color="white",f.style.backdropFilter="blur(8px)",f.style.background="rgba(0,0,0,0.5)",f.style.borderRadius="15px",f.style.padding="15px",f.style.fontFamily="monospace",f.style.overflowY="hidden",f.style.animation="rgb 4s linear infinite",f.style.width="15%",f.style.height="50%",f.style.top="100px",f.style.left="100px",f.style.zIndex="1000",f.style.backdropFilter="blur(8px)",f.style.resize="both";const I=document.createElement("div");I.innerText=$.name,I.style.fontSize="22px",f.appendChild(I);var B=document.createElement("div");B.innerText="X",B.style.fontSize="28px",B.style.position="absolute",B.style.right="15px",B.style.top="10px",B.style.cursor="pointer",B.onclick=function(){f.remove()},f.appendChild(B),document.body.appendChild(f);for(let A in x)if(x.hasOwnProperty(A)){var H=document.createElement("div");if(H.style.background="rgba(100,100,100,0.5)",H.style.margin="5px",H.style.padding="5px",H.style.borderRadius="10px",f.appendChild(H),x[A].type=="List"){var k=document.createElement("div");k.style.fontSize="20px",k.innerText=`${x[A].name} - ${x[A].current}`,H.appendChild(k);var w=document.createElement("select");w.onchange=function(){x[A].current=parseInt(w.value),k.innerText=`${x[A].name} - ${x[A].current}`};for(let U in x[A].modes){if(x[A].modes.hasOwnProperty(U)){var P=document.createElement("option");P.innerText=x[A].modes[U],P.value=U+""}H.appendChild(w)}}else if(x[A].type=="Slider"){var K=document.createElement("div");K.style.fontSize="20px",K.innerText=`${x[A].name} - ${x[A].current}`,H.appendChild(K);var q=document.createElement("input");q.type="range",q.step=x[A].step,q.min=x[A].min,q.max=x[A].max,q.value=x[A].current,q.onchange=function(){x[A].current=parseFloat(q.value),K.innerText=`${x[A].name} - ${x[A].current}`},H.appendChild(q)}else if(x[A].type=="Boolean"){var Q=document.createElement("div");Q.style.fontSize="20px",Q.innerText=`${x[A].name} - ${x[A].toggled}`,H.appendChild(Q);var G=document.createElement("input");G.type="checkbox",G.checked=x[A].toggled,G.onchange=function(){x[A].toggled=G.checked,Q.innerText=`${x[A].name} - ${x[A].toggled}`},H.appendChild(G)}}}function v(){document.exitPointerLock();var $=z;const x=document.createElement("div");x.id="ui",x.style.position="fixed",x.style.width="66%",x.style.height="66%",x.style.top=document.body.clientHeight*0.165+"px",x.style.left=document.body.clientWidth*0.165+"px",x.style.color="white",x.style.backdropFilter="blur(8px)",x.style.background="rgba(0,0,0,0.75)",x.style.borderRadius="15px",x.style.padding="15px",x.style.boxShadow="0px 0px 40px rgba(0, 195, 255,0.5)",x.style.fontFamily="monospace",x.style.overflowY="hidden",x.style.animation="rgb 4s linear infinite";const f=document.styleSheets[0];f.insertRule(`
  ::-webkit-scrollbar {
    width: 10px;
  }`),f.insertRule(`
  ::-webkit-scrollbar-track {
    background: rgba(0,0,0,0);
  }`),f.insertRule(`
  ::-webkit-scrollbar-thumb {
  background: rgba(100,100,100,0.5);
  filter: blur(4px);
  }`),f.insertRule(`@keyframes rgb {
    0% { box-shadow: 0px 0px 40px rgba(255, 0, 0,0.75); }
    16% { box-shadow: 0px 0px 40px rgba(255, 255, 0,0.75); }
    33% { box-shadow: 0px 0px 40px rgba(0, 255, 0,0.75); }
    50% { box-shadow: 0px 0px 40px rgba(0, 255, 255,0.75); }
    66% { box-shadow: 0px 0px 40px rgba(0, 0, 255,0.75); }
    83% { box-shadow: 0px 0px 40px rgba(255, 0, 255,0.75); }
    100% { box-shadow: 0px 0px 40px rgba(255, 0, 0,0.75); }
  }`),document.body.appendChild(x);const I=document.createElement("div");I.innerText=$,I.style.fontSize="24px",I.style.margin="5px",x.appendChild(I);var B=document.createElement("input");B.style.width="33%",B.type="text",B.style.border="solid 2px rgba(200,200,200,0.5)",B.style.borderRadius="10px",B.style.color="rgba(255,255,255,1)",B.style.display="inline-block",B.style.padding="8px",B.style.marginLeft="20px",B.style.fontSize="22px",B.style.background="rgba(50,50,50,.24)",B.placeholder="\uD83D\uDD0E\uFE0E Search",B.style.backdropFilter="blur(8px)",I.appendChild(B);const H=document.createElement("div");H.innerText="X",H.style.fontSize="28px",H.style.position="absolute",H.style.right="15px",H.style.top="10px",H.style.cursor="pointer",H.onclick=function(){Z()},x.appendChild(H);var k=document.createElement("div");k.style.overflowX="scroll",x.appendChild(k);for(let w in R)if(R.hasOwnProperty(w)){const P=document.createElement("div");P.innerText=R[w],P.style.fontSize="18px",P.style.cursor="pointer",P.style.display="inline-block",P.style.padding="10px",P.style.margin="5px",P.style.background="rgba(100,100,100,0.5)",P.style.borderRadius="5px",P.onclick=function(){},k.appendChild(P)}E=document.createElement("center"),E.style.height="100%",E.style.overflowY="scroll",x.appendChild(E),J()}function J(){if(_()){E.innerHTML="";for(let f in X)if(X.hasOwnProperty(f)){var $=document.createElement("div"),x=document.createElement("div");if(x.innerText=`${X[f].name}`,x.style.fontSize="22px",x.style.fontWeight="bold",$.appendChild(x),$.style.textAlign="left",$.style.display="inline-block",$.style.width="25%",$.style.height="25%",$.style.padding="5px",$.style.borderRadius="15px",$.style.margin="10px",$.style.cursor="pointer",$.style.background="rgba(100,100,100,0.5)",X[f].function.getEnabled())$.style.boxShadow="0px 0px 15px rgba(0, 255, 0,1)";$.onclick=function(I){X[f].function.toggle(),J()},$.oncontextmenu=function(I){new y(X[f]),console.log(X[f])},E.appendChild($)}}}var E;L("Init...");V("Init...");V("Loading modules...");var F=document.createElement("div");F.style.position="fixed";F.style.width="100%";F.style.height="100%";F.style.pointerEvents="none";F.style.zIndex="1";document.body.appendChild(F);ModAPI.require("player");addEventListener("keydown",function($){if($.location==KeyboardEvent.DOM_KEY_LOCATION_RIGHT&&$.key=="Shift"&&!_())v()});ModAPI.addEventListener("key",function($){if($.key==54)Z});ModAPI.addEventListener("update",function(){for(let $ in X)if(X.hasOwnProperty($))X[$].function.onUpdate()});

//# debugId=9B1DEB75BC17EEA564756e2164756e21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3V0aWwvY2xpZW50TmFtZS50cyIsICIuLi9zcmMvdXRpbC9jb25zb2xlTG9nZ2VyLnRzIiwgIi4uL3NyYy91dGlsL2NoYXRMb2dnZXIudHMiLCAiLi4vc3JjL2NoZWF0cy9mbGlnaHQudHMiLCAiLi4vc3JjL2NoZWF0cy9zdGVwLnRzIiwgIi4uL3NyYy91dGlsL2FjdHVhbE1vZHVsZXMudHMiLCAiLi4vc3JjL2d1aS50cyIsICIuLi9zcmMvbWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICIvLyBnbG9iYWwgdmFyaWFibGUgZm9yIHRoZSBjbGllbnQncyBuYW1lXG5cbmV4cG9ydCB2YXIgY2xpZW50TmFtZSA9IFwiYnVybW9kXCI7IiwKICAiaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL2NsaWVudE5hbWUudHNcIlxuXG5leHBvcnQgZnVuY3Rpb24gbG9nVG9Db25zb2xlKG1zZykge1xuICBjb25zb2xlLmxvZyhgWyR7Y2xpZW50TmFtZX1dICR7bXNnfWApO1xufSIsCiAgImltcG9ydCB7IGNsaWVudE5hbWUgfSBmcm9tIFwiLi9jbGllbnROYW1lLnRzXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGxvZ1RvQ2hhdChtc2cpIHtcbiAgLy9AdHMtaWdub3JlXG4gIE1vZEFQSS5kaXNwbGF5VG9DaGF0KHttc2c6IGDCpzVbJHtjbGllbnROYW1lfV3Cp3IgJHttc2d9YH0pO1xufSIsCiAgImV4cG9ydCB2YXIgc2V0dGluZ3MgPSBbXG4gIHtcbiAgICBuYW1lOlwiTW9kZVwiLFxuICAgIHR5cGU6IFwiTGlzdFwiLFxuICAgIG1vZGVzOiBbXCJBYmlsaXRpZXNcIiwgXCJQYWNrZXRcIl0sXG4gICAgY3VycmVudDogMFxuICB9XG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KHBhcmVudCkge1xuICBwYXJlbnQub25VcGRhdGUgPSAgZnVuY3Rpb24oKXtcbiAgICBpZiAocGFyZW50LmdldEVuYWJsZWQoKSkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgICAgaWYoIU1vZEFQSS5wbGF5ZXIuY2FwYWJpbGl0aWVzLmlzRmx5aW5nKSB7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBNb2RBUEkucGxheWVyLmNhcGFiaWxpdGllcy5pc0ZseWluZyA9IHRydWU7XG4gICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICBNb2RBUEkucGxheWVyLnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBhcmVudC5vbkVuYWJsZSA9ICBmdW5jdGlvbigpe1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIE1vZEFQSS5wbGF5ZXIuY2FwYWJpbGl0aWVzLmlzRmx5aW5nID0gdHJ1ZTtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBNb2RBUEkucGxheWVyLnJlbG9hZCgpO1xuICB9XG5cbiAgcGFyZW50Lm9uRGlzYWJsZSA9ICBmdW5jdGlvbigpe1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIE1vZEFQSS5wbGF5ZXIuY2FwYWJpbGl0aWVzLmlzRmx5aW5nID0gZmFsc2U7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgfVxuICAgIFxufVxuICBcbiIsCiAgImV4cG9ydCBmdW5jdGlvbiBpbml0KHBhcmVudCkge1xuICBwYXJlbnQuc2V0dGluZ3MgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJIZWlnaHRcIixcbiAgICAgIHR5cGU6IFwiU2xpZGVyXCIsXG4gICAgICBtaW46IDEsXG4gICAgICBtYXg6IDYsXG4gICAgICBzdGVwOiAwLjUsXG4gICAgICBjdXJyZW50OiAxLjVcbiAgICB9XG4gIF1cbiAgXG4gIHBhcmVudC5vblVwZGF0ZSA9ICBmdW5jdGlvbigpe1xuICAgIGlmIChwYXJlbnQuZ2V0RW5hYmxlZCgpKSB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgICBpZihNb2RBUEkucGxheWVyLnN0ZXBIZWlnaHQgIT0gcGFyZW50LnNldHRpbmdzWzBdLmN1cnJlbnQpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IHBhcmVudC5zZXR0aW5nc1swXS5jdXJyZW50O1xuICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgTW9kQVBJLnBsYXllci5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwYXJlbnQub25FbmFibGUgPSAgZnVuY3Rpb24oKXtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBNb2RBUEkucGxheWVyLnN0ZXBIZWlnaHQgPSBwYXJlbnQuc2V0dGluZ3NbMF0uY3VycmVudDtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBNb2RBUEkucGxheWVyLnJlbG9hZCgpO1xuICB9XG5cbiAgcGFyZW50Lm9uRGlzYWJsZSA9ICBmdW5jdGlvbigpe1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIE1vZEFQSS5wbGF5ZXIuc3RlcEhlaWdodCA9IDAuNjAwMDAwMDIzODQxODU3OTtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBNb2RBUEkucGxheWVyLnJlbG9hZCgpO1xuICB9XG5cbn1cblxuIiwKICAiaW1wb3J0ICogYXMgZmxpZ2h0TU9EIGZyb20gXCIuLi9jaGVhdHMvZmxpZ2h0LnRzXCI7XG5pbXBvcnQgKiBhcyBmdWxsYnJpZ2h0TU9EIGZyb20gXCIuLi9jaGVhdHMvZnVsbGJyaWdodC50c1wiO1xuaW1wb3J0ICogYXMgc3RlcE1PRCBmcm9tIFwiLi4vY2hlYXRzL3N0ZXAudHNcIjtcbmltcG9ydCAqIGFzIHVpIGZyb20gXCIuLi9ndWlcIjtcblxuZnVuY3Rpb24gdGVtcGxhdGUobW9kKSB7XG4gIC8vIG1vZHVsZSBmdW5jdGlvbnNcblxuICB0aGlzLmVuYWJsZWRET05PVFVTRSA9IGZhbHNlO1xuICB0aGlzLmluaXQgPSBmdW5jdGlvbigpIHsgfTtcbiAgdGhpcy5vbkVuYWJsZSA9IGZ1bmN0aW9uKCkgeyB9O1xuICB0aGlzLm9uRGlzYWJsZSA9IGZ1bmN0aW9uKCkgeyB9O1xuICB0aGlzLmVuYWJsZSA9IGZ1bmN0aW9uKCkgeyB0aGlzLmVuYWJsZWRET05PVFVTRSA9IHRydWU7IHRoaXMub25FbmFibGUoKTsgdWkucmVmcmVzaE1vZHVsZXMoKSB9O1xuICB0aGlzLmRpc2FibGUgPSBmdW5jdGlvbigpIHsgdGhpcy5lbmFibGVkRE9OT1RVU0UgPSBmYWxzZTsgdGhpcy5vbkRpc2FibGUoKTsgdWkucmVmcmVzaE1vZHVsZXMoKSB9O1xuICB0aGlzLmdldEVuYWJsZWQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuZW5hYmxlZERPTk9UVVNFOyB9O1xuICB0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uKCkgeyB0aGlzLmVuYWJsZWRET05PVFVTRSA9ICF0aGlzLmVuYWJsZWRET05PVFVTRTsgaWYgKHRoaXMuZW5hYmxlZERPTk9UVVNFKSB7IHRoaXMub25FbmFibGUoKSB9IGVsc2UgeyB0aGlzLm9uRGlzYWJsZSgpOyB9IH07XG4gIC8vbWMgZnVuY3Rpb25zXG4gIHRoaXMub25VcGRhdGUgPSBmdW5jdGlvbigpIHsgfTtcblxuICB0aGlzLmFsZXJ0ID0gZnVuY3Rpb24oKSB7IGFsZXJ0KCkgfTtcblxuICB0aGlzLnNldHRpbmdzID0gW11cblxuICBtb2QuaW5pdCh0aGlzKTtcbn1cblxuZXhwb3J0IHZhciBjYXRlZ29yaWVzID0ge1xuICBtb3ZlbWVudDogXCJNb3ZlbWVudFwiLFxuICBwbGF5ZXI6IFwiUGxheWVyXCIsXG4gIHJlbmRlcjogXCJSZW5kZXJcIixcbiAgZnVuOiBcIkZ1blwiXG59XG5cbmV4cG9ydCB2YXIgbW9kdWxlcyA9IHtcbiAgZmxpZ2h0OiB7XG4gICAgbmFtZTogXCJGbGlnaHRcIixcbiAgICBmdW5jdGlvbjogbmV3IHRlbXBsYXRlKGZsaWdodE1PRCksXG4gICAgY2F0ZWdvcnk6IFwiTW92ZW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbGxvd3MgeW91IHRvIGZseVwiLFxuICAgIGtleTogMFxuICB9LFxuICBzdGVwOiB7XG4gICAgbmFtZTogXCJTdGVwXCIsXG4gICAgZnVuY3Rpb246IG5ldyB0ZW1wbGF0ZShzdGVwTU9EKSxcbiAgICBjYXRlZ29yeTogXCJNb3ZlbWVudFwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFsbG93cyB5b3UgdG8gc3RlcFwiLFxuICAgIGtleTogMFxuICB9XG59IiwKICAiaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL3V0aWwvY2xpZW50TmFtZVwiO1xuaW1wb3J0IHsgbW9kdWxlcywgY2F0ZWdvcmllcyB9IGZyb20gXCIuL3V0aWwvYWN0dWFsTW9kdWxlc1wiO1xuXG5cbi8vIGRlbGV0ZSB0aGUgdWlcbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95KCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1aVwiKSAhPSBudWxsKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1aVwiKS5yZW1vdmUoKTtcbiAgfVxufVxuXG52YXIgY29udGFpbmVyO1xuXG5cbi8vIGNoZWNrIGlmIG9wZW5cbmV4cG9ydCBmdW5jdGlvbiBpc09wZW4oKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVpXCIpID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuXG4vLyBvcGVuIGEgc2V0dGluZyBtZW51XG5leHBvcnQgZnVuY3Rpb24gc2V0dGluZyhtb2R1bGUpIHtcbiAgLyp2YXIgbHN0ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTW9kZVwiLFxuICAgICAgdHlwZTogXCJMaXN0XCIsXG4gICAgICBtb2RlczogW1wiQWJpbGl0aWVzXCIsIFwiUGFja2V0XCJdLFxuICAgICAgY3VycmVudDogMFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJTcGVlZFwiLFxuICAgICAgdHlwZTogXCJTbGlkZXJcIixcbiAgICAgIG1pbjogMSxcbiAgICAgIG1heDogNCxcbiAgICAgIGN1cnJlbnQ6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiVGVzdFwiLFxuICAgICAgdHlwZTogXCJCb29sZWFuXCIsXG4gICAgICB0b2dnbGVkOiB0cnVlXG4gICAgfSxcbiAgXSovXG4gIHZhciBsc3QgPSBtb2R1bGUuZnVuY3Rpb24uc2V0dGluZ3M7XG4gIGNvbnNvbGUubG9nKGxzdCk7XG4gIHZhciBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcy5jbGFzc05hbWUgPSBcInNldHRpbmdcIjtcbiAgcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgcy5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgcy5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig4cHgpXCI7XG4gIHMuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gIHMuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxNXB4XCI7XG4gIHMuc3R5bGUucGFkZGluZyA9IFwiMTVweFwiO1xuICBzLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuICBzLnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG4gIHMuc3R5bGUuYW5pbWF0aW9uID0gXCJyZ2IgNHMgbGluZWFyIGluZmluaXRlXCI7XG4gIHMuc3R5bGUud2lkdGggPSBcIjE1JVwiO1xuICBzLnN0eWxlLmhlaWdodCA9IFwiNTAlXCI7XG4gIHMuc3R5bGUudG9wID0gXCIxMDBweFwiXG4gIHMuc3R5bGUubGVmdCA9IFwiMTAwcHhcIlxuXG4gIHMuc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XG4gIHMuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuXG4gIHMuc3R5bGUucmVzaXplID0gXCJib3RoXCI7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBtb2R1bGUubmFtZTtcbiAgdGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjIycHhcIjtcbiAgcy5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgdmFyIGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvc2UuaW5uZXJUZXh0ID0gXCJYXCI7XG4gIGNsb3NlLnN0eWxlLmZvbnRTaXplID0gXCIyOHB4XCI7XG4gIGNsb3NlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBjbG9zZS5zdHlsZS5yaWdodCA9IFwiMTVweFwiO1xuICBjbG9zZS5zdHlsZS50b3AgPSBcIjEwcHhcIjtcbiAgY2xvc2Uuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gIGNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBzLnJlbW92ZSgpO1xuICB9O1xuICBzLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocyk7XG5cbiAgZm9yIChsZXQgaSBpbiBsc3QpIHtcbiAgICBpZiAobHN0Lmhhc093blByb3BlcnR5KGkpKSB7XG5cbiAgICAgIHZhciBiZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBiZy5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEwMCwxMDAsMTAwLDAuNSlcIjtcbiAgICAgIGJnLnN0eWxlLm1hcmdpbiA9IFwiNXB4XCI7XG4gICAgICBiZy5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcbiAgICAgIGJnLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICAgICAgcy5hcHBlbmRDaGlsZChiZyk7XG4gICAgICBpZiAobHN0W2ldLnR5cGUgPT0gXCJMaXN0XCIpIHtcbiAgICAgICAgdmFyIHNlbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBzZWxEZXNjLnN0eWxlLmZvbnRTaXplID0gXCIyMHB4XCI7XG4gICAgICAgIHNlbERlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0uY3VycmVudH1gO1xuICAgICAgICBiZy5hcHBlbmRDaGlsZChzZWxEZXNjKTtcbiAgICAgICAgdmFyIHNlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHNlbC5vbmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxzdFtpXS5jdXJyZW50ID0gcGFyc2VJbnQoc2VsLnZhbHVlKTtcbiAgICAgICAgICBzZWxEZXNjLmlubmVyVGV4dCA9IGAke2xzdFtpXS5uYW1lfSAtICR7bHN0W2ldLmN1cnJlbnR9YDtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqIGluIGxzdFtpXS5tb2Rlcykge1xuICAgICAgICAgIGlmIChsc3RbaV0ubW9kZXMuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICAgIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3B0LmlubmVyVGV4dCA9IGxzdFtpXS5tb2Rlc1tqXTtcbiAgICAgICAgICAgIG9wdC52YWx1ZSA9IGogKyBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBiZy5hcHBlbmRDaGlsZChzZWwpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxzdFtpXS50eXBlID09IFwiU2xpZGVyXCIpIHtcbiAgICAgICAgdmFyIHNsaWRlRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNsaWRlRGVzYy5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgICBzbGlkZURlc2MuaW5uZXJUZXh0ID0gYCR7bHN0W2ldLm5hbWV9IC0gJHtsc3RbaV0uY3VycmVudH1gO1xuICAgICAgICBiZy5hcHBlbmRDaGlsZChzbGlkZURlc2MpO1xuICAgICAgICB2YXIgc2xpZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHNsaWRlLnR5cGUgPSBcInJhbmdlXCI7XG4gICAgICAgIHNsaWRlLnN0ZXAgPSBsc3RbaV0uc3RlcDtcbiAgICAgICAgc2xpZGUubWluID0gbHN0W2ldLm1pbjtcbiAgICAgICAgc2xpZGUubWF4ID0gbHN0W2ldLm1heDtcbiAgICAgICAgc2xpZGUudmFsdWUgPSBsc3RbaV0uY3VycmVudDtcbiAgICAgICAgc2xpZGUub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsc3RbaV0uY3VycmVudCA9IHBhcnNlRmxvYXQoc2xpZGUudmFsdWUpO1xuICAgICAgICAgIHNsaWRlRGVzYy5pbm5lclRleHQgPSBgJHtsc3RbaV0ubmFtZX0gLSAke2xzdFtpXS5jdXJyZW50fWA7XG4gICAgICAgIH1cbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuICAgICAgfSBlbHNlIGlmIChsc3RbaV0udHlwZSA9PSBcIkJvb2xlYW5cIikge1xuICAgICAgICB2YXIgYm9vbERlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib29sRGVzYy5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgICBib29sRGVzYy5pbm5lclRleHQgPSBgJHtsc3RbaV0ubmFtZX0gLSAke2xzdFtpXS50b2dnbGVkfWA7XG4gICAgICAgIGJnLmFwcGVuZENoaWxkKGJvb2xEZXNjKTtcbiAgICAgICAgdmFyIGJvb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGJvb2wudHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgYm9vbC5jaGVja2VkID0gbHN0W2ldLnRvZ2dsZWQ7XG4gICAgICAgIGJvb2wub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsc3RbaV0udG9nZ2xlZCA9IGJvb2wuY2hlY2tlZDtcbiAgICAgICAgICBib29sRGVzYy5pbm5lclRleHQgPSBgJHtsc3RbaV0ubmFtZX0gLSAke2xzdFtpXS50b2dnbGVkfWA7XG4gICAgICAgIH1cbiAgICAgICAgYmcuYXBwZW5kQ2hpbGQoYm9vbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLy9jcmVhdGUgdGhlIGd1aVxuZXhwb3J0IGZ1bmN0aW9uIG9wZW4oKSB7XG4gIGRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuICB2YXIgY24gPSBjbGllbnROYW1lO1xuXG4gIGNvbnN0IHVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICB1aS5pZCA9IFwidWlcIjtcbiAgdWkuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gIHVpLnN0eWxlLndpZHRoID0gXCI2NiVcIjtcbiAgdWkuc3R5bGUuaGVpZ2h0ID0gXCI2NiVcIjtcbiAgdWkuc3R5bGUudG9wID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgKiAwLjE2NSArIFwicHhcIjtcbiAgdWkuc3R5bGUubGVmdCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggKiAwLjE2NSArIFwicHhcIjtcbiAgdWkuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gIHVpLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDhweClcIjtcbiAgdWkuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLDAsMCwwLjc1KVwiO1xuICB1aS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjE1cHhcIjtcbiAgdWkuc3R5bGUucGFkZGluZyA9IFwiMTVweFwiO1xuICB1aS5zdHlsZS5ib3hTaGFkb3cgPSBcIjBweCAwcHggNDBweCByZ2JhKDAsIDE5NSwgMjU1LDAuNSlcIjtcbiAgdWkuc3R5bGUuZm9udEZhbWlseSA9IFwibW9ub3NwYWNlXCI7XG4gIHVpLnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG4gIHVpLnN0eWxlLmFuaW1hdGlvbiA9IFwicmdiIDRzIGxpbmVhciBpbmZpbml0ZVwiO1xuXG4gIGNvbnN0IHN0eWxlU2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1swXTtcblxuICBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoYFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTBweDtcbiAgfWApO1xuXG4gIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XG4gIH1gKTtcblxuICBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoYFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMDAsMTAwLDEwMCwwLjUpO1xuICBmaWx0ZXI6IGJsdXIoNHB4KTtcbiAgfWApO1xuXG4gIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyByZ2Ige1xuICAgIDAlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAwLCAwLDAuNzUpOyB9XG4gICAgMTYlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAyNTUsIDAsMC43NSk7IH1cbiAgICAzMyUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAyNTUsIDAsMC43NSk7IH1cbiAgICA1MCUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAyNTUsIDI1NSwwLjc1KTsgfVxuICAgIDY2JSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDAsIDAsIDI1NSwwLjc1KTsgfVxuICAgIDgzJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMCwgMjU1LDAuNzUpOyB9XG4gICAgMTAwJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMCwgMCwwLjc1KTsgfVxuICB9YCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodWkpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gY247XG4gIHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIyNHB4XCI7XG4gIHRpdGxlLnN0eWxlLm1hcmdpbiA9IFwiNXB4XCI7XG4gIHVpLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICB2YXIgc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzZWFyY2guc3R5bGUud2lkdGggPSBcIjMzJVwiO1xuICBzZWFyY2gudHlwZSA9IFwidGV4dFwiO1xuICBzZWFyY2guc3R5bGUuYm9yZGVyID0gXCJzb2xpZCAycHggcmdiYSgyMDAsMjAwLDIwMCwwLjUpXCI7XG4gIHNlYXJjaC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgc2VhcmNoLnN0eWxlLmNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcbiAgc2VhcmNoLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICBzZWFyY2guc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XG4gIHNlYXJjaC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIyMHB4XCI7XG4gIHNlYXJjaC5zdHlsZS5mb250U2l6ZSA9IFwiMjJweFwiO1xuICBzZWFyY2guc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSg1MCw1MCw1MCwuMjQpXCI7XG4gIHNlYXJjaC5wbGFjZWhvbGRlciA9IFwi8J+Uju+4jiBTZWFyY2hcIlxuICBzZWFyY2guc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuICB0aXRsZS5hcHBlbmRDaGlsZChzZWFyY2gpO1xuXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvc2UuaW5uZXJUZXh0ID0gXCJYXCI7XG4gIGNsb3NlLnN0eWxlLmZvbnRTaXplID0gXCIyOHB4XCI7XG4gIGNsb3NlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBjbG9zZS5zdHlsZS5yaWdodCA9IFwiMTVweFwiO1xuICBjbG9zZS5zdHlsZS50b3AgPSBcIjEwcHhcIjtcbiAgY2xvc2Uuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gIGNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBkZXN0cm95KCk7XG4gIH07XG4gIHVpLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuXG5cbiAgdmFyIGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhci5zdHlsZS5vdmVyZmxvd1ggPSBcInNjcm9sbFwiO1xuICB1aS5hcHBlbmRDaGlsZChiYXIpO1xuXG4gIGZvciAobGV0IGkgaW4gY2F0ZWdvcmllcykge1xuICAgIGlmIChjYXRlZ29yaWVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjYXRlZ29yeS5pbm5lclRleHQgPSBjYXRlZ29yaWVzW2ldO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5wYWRkaW5nID0gXCIxMHB4XCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5tYXJnaW4gPSBcIjVweFwiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxMDAsMTAwLDEwMCwwLjUpXCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgICAgY2F0ZWdvcnkub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB9O1xuXG4gICAgICBiYXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjZW50ZXJcIik7XG4gIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCI7XG4gIHVpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cblxuICByZWZyZXNoTW9kdWxlcygpO1xufVxuXG5cbi8vIFJlbG9hZCBtb2R1bGUgbGlzdFxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hNb2R1bGVzKCkge1xuICBpZiAoaXNPcGVuKCkpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBpIGluIG1vZHVsZXMpIHtcbiAgICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHZhciBtb2RsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG1vZGx0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1vZGx0aXRsZS5pbm5lclRleHQgPSBgJHttb2R1bGVzW2ldLm5hbWV9YDtcbiAgICAgICAgbW9kbHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIyMnB4XCI7XG4gICAgICAgIG1vZGx0aXRsZS5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgIG1vZGwuYXBwZW5kQ2hpbGQobW9kbHRpdGxlKTtcblxuICAgICAgICBtb2RsLnN0eWxlLnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICBtb2RsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXG4gICAgICAgIG1vZGwuc3R5bGUud2lkdGggPSBcIjI1JVwiO1xuICAgICAgICBtb2RsLnN0eWxlLmhlaWdodCA9IFwiMjUlXCI7XG4gICAgICAgIG1vZGwuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XG4gICAgICAgIG1vZGwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxNXB4XCI7XG4gICAgICAgIG1vZGwuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XG4gICAgICAgIG1vZGwuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cbiAgICAgICAgbW9kbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEwMCwxMDAsMTAwLDAuNSlcIjtcbiAgICAgICAgaWYgKG1vZHVsZXNbaV0uZnVuY3Rpb24uZ2V0RW5hYmxlZCgpKSB7XG4gICAgICAgICAgbW9kbC5zdHlsZS5ib3hTaGFkb3cgPSBcIjBweCAwcHggMTVweCByZ2JhKDAsIDI1NSwgMCwxKVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kbC5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgIG1vZHVsZXNbaV0uZnVuY3Rpb24udG9nZ2xlKCk7XG4gICAgICAgICAgcmVmcmVzaE1vZHVsZXMoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBtb2RsLm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgbmV3IHNldHRpbmcobW9kdWxlc1tpXSk7XG4gICAgICAgICAgY29uc29sZS5sb2cobW9kdWxlc1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLAogICJpbXBvcnQgeyBjbGllbnROYW1lIH0gZnJvbSBcIi4vdXRpbC9jbGllbnROYW1lLnRzXCI7XG5pbXBvcnQgeyBsb2dUb0NvbnNvbGUgfSBmcm9tIFwiLi91dGlsL2NvbnNvbGVMb2dnZXJcIjtcbmltcG9ydCB7IGxvZ1RvQ2hhdCB9IGZyb20gXCIuL3V0aWwvY2hhdExvZ2dlclwiO1xuaW1wb3J0ICogYXMgdWkgZnJvbSBcIi4vZ3VpLnRzXCI7XG5cbmxvZ1RvQ29uc29sZShcIkluaXQuLi5cIik7XG5sb2dUb0NoYXQoXCJJbml0Li4uXCIpO1xuXG5cblxuXG5sb2dUb0NoYXQoXCJMb2FkaW5nIG1vZHVsZXMuLi5cIik7XG5cbmltcG9ydCB7IG1vZHVsZXMgfSBmcm9tIFwiLi91dGlsL2FjdHVhbE1vZHVsZXNcIjtcblxuXG52YXIgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5vdmVybGF5LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xub3ZlcmxheS5zdHlsZS53aWR0aCA9IFwiMTAwJVwiXG5vdmVybGF5LnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xub3ZlcmxheS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG5vdmVybGF5LnN0eWxlLnpJbmRleCA9IFwiMVwiO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuXG4vL0B0cy1pZ25vcmVcbk1vZEFQSS5yZXF1aXJlKFwicGxheWVyXCIpO1xuXG5cblxuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkgeyBcbiAgaWYoZS5sb2NhdGlvbiA9PSBLZXlib2FyZEV2ZW50LkRPTV9LRVlfTE9DQVRJT05fUklHSFQgJiYgZS5rZXkgPT0gXCJTaGlmdFwiICYmICF1aS5pc09wZW4oKSkge1xuICAgIHVpLm9wZW4oKTtcbiAgfVxufSlcblxuLy9AdHMtaWdub3JlXG5Nb2RBUEkuYWRkRXZlbnRMaXN0ZW5lcihcImtleVwiLCBmdW5jdGlvbihlKXtcbiAgaWYoZS5rZXkgPT0gNTQpe1xuICAgIHVpLmRlc3Ryb3lcbiAgfVxufSlcblxuLy9AdHMtaWdub3JlXG5Nb2RBUEkuYWRkRXZlbnRMaXN0ZW5lcihcInVwZGF0ZVwiLCBmdW5jdGlvbigpIHsgXG4gIGZvciAobGV0IGtleSBpbiBtb2R1bGVzKSB7XG4gICAgaWYgKG1vZHVsZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgbW9kdWxlc1trZXldLmZ1bmN0aW9uLm9uVXBkYXRlKCk7XG4gICAgfVxuICB9XG59KVxuIgogIF0sCiAgIm1hcHBpbmdzIjogIkFBRU8sSUFBSSxFQUFhQUNBakIsU0FBUyxDQUFZLENBQUMsRUFBSyxDQUNoQyxRQUFRLElBQUksSUFBSSxNQUFlLEdBQUtBQ0QvQixTQUFTLENBQVMsQ0FBQyxFQUFLLENBRTdCLE9BQU8sY0FBYyxDQUFDLElBQUssU0FBSyxXQUFpQixHQUFLLENB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RUFBVSxTQUFTLGNBQWMsS0FBSyxFQUMxQyxFQUFRLE1BQU0sU0FBVyxRQUN6QixFQUFRLE1BQU0sTUFBUSxPQUN0QixFQUFRLE1BQU0sT0FBUyxPQUN2QixFQUFRLE1BQU0sY0FBZ0IsT0FDOUIsRUFBUSxNQUFNLE9BQVMsSUFDdkIsU0FBUyxLQUFLLFlBQVksQ0FBTyxFQUlqQyxPQUFPLFFBQVEsUUFBUSxFQUl2QixpQkFBaUIsa0JBQW1CLENBQUMsRUFBRyxDQUN0QyxHQUFHLEVBQUUsVUFBWSxjQUFjLHdCQUEwQixFQUFFLEtBQU8sVUFBZSxFQUFPLEVBQ3RGLEFBQUcsRUFBSyxFQUVYLEVBR0QsT0FBTyxpQkFBaUIsY0FBZSxDQUFDLEVBQUUsQ0FDeEMsR0FBRyxFQUFFLEtBQU8sR0FDVixBQUFHLEVBRU4sRUFHRCxPQUFPLGlCQUFpQixpQkFBa0IsRUFBRyxDQUMzQyxRQUFTLEtBQU8sRUFDZCxHQUFJLEVBQVEsZUFBZSxDQUFHLEVBQzVCLEVBQVEsR0FBSyxTQUFTLFNBQVMsRUFHcEMiLAogICJkZWJ1Z0lkIjogIjlCMURFQjc1QkMxN0VFQTU2NDc1NmUyMTY0NzU2ZTIxIiwKICAibmFtZXMiOiBbXQp9