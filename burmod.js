var _=Object.defineProperty;var V=($,x)=>{for(var w in x)_($,w,{get:x[w],enumerable:!0,configurable:!0,set:(f)=>x[w]=()=>f})};var q="burmod";function W($){console.log(`[${q}] ${$}`)}function H($){ModAPI.displayToChat({msg:`\xA75[${q}]\xA7r ${$}`})}var J={};V(J,{settings:()=>{{return k}},init:()=>{{return C}}});function C($){$.onUpdate=function(){if($.getEnabled()){if(!ModAPI.player.capabilities.isFlying)ModAPI.player.capabilities.isFlying=!0,ModAPI.player.reload()}},$.onEnable=function(){ModAPI.player.capabilities.isFlying=!0,ModAPI.player.reload()},$.onDisable=function(){ModAPI.player.capabilities.isFlying=!1,ModAPI.player.reload()}}var k=[{name:"Mode",type:"List",modes:["Abilities","Packet"],current:0}];var K={};V(K,{init:()=>{{return L}}});function L(){}var X=function($){this.enabledDONOTUSE=!1,this.init=function(){},this.onEnable=function(){},this.onDisable=function(){},this.enable=function(){this.enabledDONOTUSE=!0,this.onEnable(),D()},this.disable=function(){this.enabledDONOTUSE=!1,this.onDisable(),D()},this.getEnabled=function(){return this.enabledDONOTUSE},this.toggle=function(){if(this.enabledDONOTUSE=!this.enabledDONOTUSE,this.enabledDONOTUSE)this.onEnable();else this.onDisable()},this.onUpdate=function(){},this.alert=function(){alert()},this.settings=[],$.init(this)},F={movement:"Movement",player:"Player",render:"Render"},I={flight:{name:"Flight",function:new X(J),category:"Movement",description:"Allows you to fly",key:0},fullbright:{name:"Fullbright",function:new X(K),category:"Render",description:"No more darkness",key:0}};function P(){if(document.getElementById("ui")!=null)document.getElementById("ui").remove()}function Q(){if(document.getElementById("ui")==null)return!1;else return!0}function Z(){document.exitPointerLock();var $=q;const x=document.createElement("div");x.id="ui",x.style.position="fixed",x.style.width="66%",x.style.height="66%",x.style.top=document.body.clientHeight*0.165+"px",x.style.left=document.body.clientWidth*0.165+"px",x.style.color="white",x.style.backdropFilter="blur(8px)",x.style.background="rgba(0,0,0,0.75)",x.style.borderRadius="15px",x.style.padding="15px",x.style.boxShadow="0px 0px 40px rgba(0, 195, 255,0.5)",x.style.fontFamily="monospace",x.style.overflowY="hidden",x.style.animation="rgb 4s linear infinite";const w=document.styleSheets[0];w.insertRule(`
  ::-webkit-scrollbar {
    width: 10px;
  }`),w.insertRule(`
  ::-webkit-scrollbar-track {
    background: rgba(0,0,0,0);
  }`),w.insertRule(`
  ::-webkit-scrollbar-thumb {
  background: rgba(100,100,100,0.5);
  filter: blur(4px);
  }`),w.insertRule(`@keyframes rgb {
    0% { box-shadow: 0px 0px 40px rgba(255, 0, 0,0.75); }
    16% { box-shadow: 0px 0px 40px rgba(255, 255, 0,0.75); }
    33% { box-shadow: 0px 0px 40px rgba(0, 255, 0,0.75); }
    50% { box-shadow: 0px 0px 40px rgba(0, 255, 255,0.75); }
    66% { box-shadow: 0px 0px 40px rgba(0, 0, 255,0.75); }
    83% { box-shadow: 0px 0px 40px rgba(255, 0, 255,0.75); }
    100% { box-shadow: 0px 0px 40px rgba(255, 0, 0,0.75); }
  }`),document.body.appendChild(x);const f=document.createElement("div");f.innerText=$,f.style.fontSize="24px",f.style.margin="5px",x.appendChild(f);var z=document.createElement("input");z.style.width="33%",z.type="text",z.style.border="solid 2px rgba(200,200,200,0.5)",z.style.borderRadius="10px",z.style.color="rgba(255,255,255,1)",z.style.display="inline-block",z.style.padding="8px",z.style.marginLeft="20px",z.style.fontSize="22px",z.style.background="rgba(50,50,50,.24)",z.placeholder="\uD83D\uDD0E\uFE0E Search",z.style.backdropFilter="blur(8px)",f.appendChild(z);const R=document.createElement("div");R.innerText="X",R.style.fontSize="28px",R.style.position="absolute",R.style.right="15px",R.style.top="10px",R.style.cursor="pointer",R.onclick=function(){P()},x.appendChild(R);var G=document.createElement("div");G.style.overflowX="scroll",x.appendChild(G);for(let U in F)if(F.hasOwnProperty(U)){const E=document.createElement("div");E.innerText=F[U],E.style.fontSize="18px",E.style.cursor="pointer",E.style.display="inline-block",E.style.padding="10px",E.style.margin="5px",E.style.background="rgba(100,100,100,0.5)",E.style.borderRadius="5px",E.onclick=function(){},G.appendChild(E)}A=document.createElement("center"),A.style.height="100%",A.style.overflowY="scroll",x.appendChild(A),D()}function D(){if(Q()){A.innerHTML="";for(let w in I)if(I.hasOwnProperty(w)){var $=document.createElement("div"),x=document.createElement("div");if(x.innerText=`${I[w].name}`,x.style.fontSize="22px",x.style.fontWeight="bold",$.appendChild(x),$.style.textAlign="left",$.style.display="inline-block",$.style.width="25%",$.style.height="25%",$.style.padding="5px",$.style.borderRadius="15px",$.style.margin="10px",$.style.cursor="pointer",$.style.background="rgba(100,100,100,0.5)",I[w].function.getEnabled())$.style.borderLeft="2px solid rgba(0, 255, 0,1)";$.onclick=function(){I[w].function.toggle(),D()},A.appendChild($)}}}var A;W("Init...");H("Init...");H("Loading modules...");var B=document.createElement("div");B.style.position="fixed";B.style.width="100%";B.style.height="100%";B.style.pointerEvents="none";B.style.zIndex="1";document.body.appendChild(B);ModAPI.require("player");ModAPI.addEventListener("key",function($){if($.key==54&&!Q())Z();else P()});ModAPI.addEventListener("update",function(){for(let $ in I)if(I.hasOwnProperty($))I[$].function.onUpdate()});

//# debugId=506AD19DF3A7036864756e2164756e21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3V0aWwvY2xpZW50TmFtZS50cyIsICIuLi9zcmMvdXRpbC9jb25zb2xlTG9nZ2VyLnRzIiwgIi4uL3NyYy91dGlsL2NoYXRMb2dnZXIudHMiLCAiLi4vc3JjL2NoZWF0cy9mbGlnaHQudHMiLCAiLi4vc3JjL2NoZWF0cy9mdWxsYnJpZ2h0LnRzIiwgIi4uL3NyYy91dGlsL2FjdHVhbE1vZHVsZXMudHMiLCAiLi4vc3JjL2d1aS50cyIsICIuLi9zcmMvZ3VpLnRzIiwgIi4uL3NyYy9tYWluLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWwogICAgIi8vIGdsb2JhbCB2YXJpYWJsZSBmb3IgdGhlIGNsaWVudCdzIG5hbWVcblxuZXhwb3J0IHZhciBjbGllbnROYW1lID0gXCJidXJtb2RcIjsiLAogICJpbXBvcnQgeyBjbGllbnROYW1lIH0gZnJvbSBcIi4vY2xpZW50TmFtZS50c1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBsb2dUb0NvbnNvbGUobXNnKSB7XG4gIGNvbnNvbGUubG9nKGBbJHtjbGllbnROYW1lfV0gJHttc2d9YCk7XG59IiwKICAiaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL2NsaWVudE5hbWUudHNcIlxuXG5leHBvcnQgZnVuY3Rpb24gbG9nVG9DaGF0KG1zZykge1xuICAvL0B0cy1pZ25vcmVcbiAgTW9kQVBJLmRpc3BsYXlUb0NoYXQoe21zZzogYMKnNVske2NsaWVudE5hbWV9XcKnciAke21zZ31gfSk7XG59IiwKICAiZXhwb3J0IHZhciBzZXR0aW5ncyA9IFtcbiAge1xuICAgIG5hbWU6XCJNb2RlXCIsXG4gICAgdHlwZTogXCJMaXN0XCIsXG4gICAgbW9kZXM6IFtcIkFiaWxpdGllc1wiLCBcIlBhY2tldFwiXSxcbiAgICBjdXJyZW50OiAwXG4gIH1cbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQocGFyZW50KSB7XG4gIHBhcmVudC5vblVwZGF0ZSA9ICBmdW5jdGlvbigpe1xuICAgIGlmIChwYXJlbnQuZ2V0RW5hYmxlZCgpKSB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgICBpZighTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMuaXNGbHlpbmcpIHtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIE1vZEFQSS5wbGF5ZXIuY2FwYWJpbGl0aWVzLmlzRmx5aW5nID0gdHJ1ZTtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcGFyZW50Lm9uRW5hYmxlID0gIGZ1bmN0aW9uKCl7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMuaXNGbHlpbmcgPSB0cnVlO1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIE1vZEFQSS5wbGF5ZXIucmVsb2FkKCk7XG4gIH1cblxuICBwYXJlbnQub25EaXNhYmxlID0gIGZ1bmN0aW9uKCl7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgTW9kQVBJLnBsYXllci5jYXBhYmlsaXRpZXMuaXNGbHlpbmcgPSBmYWxzZTtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICBNb2RBUEkucGxheWVyLnJlbG9hZCgpO1xuICB9XG4gICAgXG59XG4gIFxuIiwKICAidmFyIHNldHRpbmdzID0gW1xuICB7XG4gICAgdHlwZTogXCJOdW1iZXJcIixcbiAgICBtaW46IDEwMCxcbiAgICBtYXg6IDEwMDAsXG4gICAgY3VycmVudDogMVxuICB9XG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0KCkge1xuXG59XG5cbiIsCiAgImltcG9ydCAqIGFzIGZsaWdodE1PRCBmcm9tIFwiLi4vY2hlYXRzL2ZsaWdodC50c1wiO1xuaW1wb3J0ICogYXMgZnVsbGJyaWdodE1PRCBmcm9tIFwiLi4vY2hlYXRzL2Z1bGxicmlnaHQudHNcIjtcbmltcG9ydCAqIGFzIHVpIGZyb20gXCIuLi9ndWlcIjtcblxuZnVuY3Rpb24gdGVtcGxhdGUobW9kKSAge1xuICAvLyBtb2R1bGUgZnVuY3Rpb25zXG4gIFxuICB0aGlzLmVuYWJsZWRET05PVFVTRSA9IGZhbHNlO1xuICB0aGlzLmluaXQgPSBmdW5jdGlvbigpIHt9O1xuICB0aGlzLm9uRW5hYmxlID0gZnVuY3Rpb24oKSB7fTtcbiAgdGhpcy5vbkRpc2FibGUgPSBmdW5jdGlvbigpIHt9O1xuICB0aGlzLmVuYWJsZSA9IGZ1bmN0aW9uKCkgeyB0aGlzLmVuYWJsZWRET05PVFVTRSA9IHRydWU7IHRoaXMub25FbmFibGUoKTsgdWkucmVmcmVzaE1vZHVsZXMoKSB9O1xuICB0aGlzLmRpc2FibGUgPSBmdW5jdGlvbigpIHsgdGhpcy5lbmFibGVkRE9OT1RVU0UgPSBmYWxzZTsgdGhpcy5vbkRpc2FibGUoKTsgdWkucmVmcmVzaE1vZHVsZXMoKSB9O1xuICB0aGlzLmdldEVuYWJsZWQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuZW5hYmxlZERPTk9UVVNFOyB9O1xuICB0aGlzLnRvZ2dsZSA9IGZ1bmN0aW9uKCkgeyB0aGlzLmVuYWJsZWRET05PVFVTRSA9ICF0aGlzLmVuYWJsZWRET05PVFVTRTsgaWYodGhpcy5lbmFibGVkRE9OT1RVU0UpIHsgdGhpcy5vbkVuYWJsZSgpIH1lbHNleyB0aGlzLm9uRGlzYWJsZSgpOyB9IH07XG4gIC8vbWMgZnVuY3Rpb25zXG4gIHRoaXMub25VcGRhdGUgPSBmdW5jdGlvbigpIHt9O1xuXG4gIHRoaXMuYWxlcnQgPSBmdW5jdGlvbigpIHthbGVydCgpfTtcblxuICB0aGlzLnNldHRpbmdzID0gW1xuICAgIFxuICBdXG4gIFxuICBtb2QuaW5pdCh0aGlzKTtcbn1cblxuZXhwb3J0IHZhciBjYXRlZ29yaWVzID0ge1xuICBtb3ZlbWVudCA6IFwiTW92ZW1lbnRcIixcbiAgcGxheWVyIDogXCJQbGF5ZXJcIixcbiAgcmVuZGVyIDogXCJSZW5kZXJcIlxufVxuXG5leHBvcnQgdmFyIG1vZHVsZXMgPSB7XG4gIGZsaWdodDoge1xuICAgIG5hbWU6XCJGbGlnaHRcIixcbiAgICBmdW5jdGlvbjogbmV3IHRlbXBsYXRlKGZsaWdodE1PRCksXG4gICAgY2F0ZWdvcnk6IFwiTW92ZW1lbnRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJBbGxvd3MgeW91IHRvIGZseVwiLFxuICAgIGtleTogMFxuICB9LFxuICBcbiAgZnVsbGJyaWdodDoge1xuICAgIG5hbWU6XCJGdWxsYnJpZ2h0XCIsXG4gICAgZnVuY3Rpb246IG5ldyB0ZW1wbGF0ZShmdWxsYnJpZ2h0TU9EKSxcbiAgICBjYXRlZ29yeTogXCJSZW5kZXJcIixcbiAgICBkZXNjcmlwdGlvbjogXCJObyBtb3JlIGRhcmtuZXNzXCIsXG4gICAga2V5OiAwXG4gIH0sXG59IiwKICAiaW1wb3J0IHsgY2xpZW50TmFtZSB9IGZyb20gXCIuL3V0aWwvY2xpZW50TmFtZVwiO1xuaW1wb3J0IHsgbW9kdWxlcywgY2F0ZWdvcmllcyB9IGZyb20gXCIuL3V0aWwvYWN0dWFsTW9kdWxlc1wiO1xuXG5cbi8vIGRlbGV0ZSB0aGUgdWlcbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95KCkge1xuICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1aVwiKSAhPSBudWxsKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1aVwiKS5yZW1vdmUoKTtcbiAgfVxufVxuXG52YXIgY29udGFpbmVyO1xuXG5cbi8vIGNoZWNrIGlmIG9wZW5cbmV4cG9ydCBmdW5jdGlvbiBpc09wZW4oKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVpXCIpID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuXG4vLyBvcGVuIGEgc2V0dGluZyBtZW51XG5leHBvcnQgZnVuY3Rpb24gc2V0dGluZyhtb2R1bGUpIHtcbiAgdmFyIGxzdCA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIk1vZGVcIixcbiAgICAgIHR5cGU6IFwiTGlzdFwiLFxuICAgICAgbW9kZXM6IFtcIkFiaWxpdGllc1wiLCBcIlBhY2tldFwiXSxcbiAgICAgIGN1cnJlbnQ6IDBcbiAgICB9XG4gIF1cbiAgY29uc3QgcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHMuY2xhc3NOYW1lID0gXCJzZXR0aW5nXCI7XG4gIHMuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIHMuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gIHMuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuICBzLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMCwwLDAsMC41KVwiO1xuICBzLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTVweFwiO1xuICBzLnN0eWxlLnBhZGRpbmcgPSBcIjE1cHhcIjtcbiAgcy5zdHlsZS5mb250RmFtaWx5ID0gXCJtb25vc3BhY2VcIjtcbiAgcy5zdHlsZS5vdmVyZmxvd1kgPSBcImhpZGRlblwiO1xuICBzLnN0eWxlLmFuaW1hdGlvbiA9IFwicmdiIDRzIGxpbmVhciBpbmZpbml0ZVwiO1xuICBzLnN0eWxlLndpZHRoID0gXCIxNSVcIjtcbiAgcy5zdHlsZS5oZWlnaHQgPSBcIjUwJVwiO1xuICBzLnN0eWxlLnRvcCA9IFwiMTAwcHhcIlxuICBzLnN0eWxlLmxlZnQgPSBcIjEwMHB4XCJcblxuICBzLnN0eWxlLnpJbmRleCA9IFwiMTAwMFwiO1xuICBzLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDhweClcIjtcblxuICBjb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNsb3NlLmlubmVyVGV4dCA9IFwiWFwiO1xuICBjbG9zZS5zdHlsZS5mb250U2l6ZSA9IFwiMjhweFwiO1xuICBjbG9zZS5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgY2xvc2Uuc3R5bGUucmlnaHQgPSBcIjE1cHhcIjtcbiAgY2xvc2Uuc3R5bGUudG9wID0gXCIxMHB4XCI7XG4gIGNsb3NlLnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICBjbG9zZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgcy5yZW1vdmUoKTtcbiAgfTtcbiAgcy5hcHBlbmRDaGlsZChjbG9zZSk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKTtcblxuICBzLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblxuICB9XG5cbiAgZm9yIChsZXQgaSBpbiBsc3QpIHtcbiAgICBpZiAobHN0Lmhhc093blByb3BlcnR5KGkpKSB7XG5cbiAgICAgIGlmIChsc3RbaV0udHlwZSA9PSBcIkxpc3RcIikge1xuICAgICAgICB2YXIgc2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsLm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbHN0W2ldLmN1cnJlbnQgPSBwYXJzZUludChzZWwudmFsdWUpO1xuICAgICAgICAgIGFsZXJ0KGxzdFtpXS5jdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBqIGluIGxzdFtpXS5tb2Rlcykge1xuICAgICAgICAgIGlmIChsc3RbaV0ubW9kZXMuaGFzT3duUHJvcGVydHkoaikpIHtcbiAgICAgICAgICAgIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuXG4gICAgICAgICAgICBzZWwuYXBwZW5kQ2hpbGQob3B0KTtcbiAgICAgICAgICAgIG9wdC5pbm5lclRleHQgPSBsc3RbaV0ubW9kZXNbal07XG4gICAgICAgICAgICBvcHQudmFsdWUgPSBqICsgXCJcIjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcy5hcHBlbmRDaGlsZChzZWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLy9jcmVhdGUgdGhlIGd1aVxuZXhwb3J0IGZ1bmN0aW9uIG9wZW4oKSB7XG4gIGRvY3VtZW50LmV4aXRQb2ludGVyTG9jaygpO1xuICB2YXIgY24gPSBjbGllbnROYW1lO1xuXG4gIGNvbnN0IHVpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICB1aS5pZCA9IFwidWlcIjtcbiAgdWkuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gIHVpLnN0eWxlLndpZHRoID0gXCI2NiVcIjtcbiAgdWkuc3R5bGUuaGVpZ2h0ID0gXCI2NiVcIjtcbiAgdWkuc3R5bGUudG9wID0gZG9jdW1lbnQuYm9keS5jbGllbnRIZWlnaHQgKiAwLjE2NSArIFwicHhcIjtcbiAgdWkuc3R5bGUubGVmdCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggKiAwLjE2NSArIFwicHhcIjtcbiAgdWkuc3R5bGUuY29sb3IgPSBcIndoaXRlXCI7XG4gIHVpLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDhweClcIjtcbiAgdWkuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLDAsMCwwLjc1KVwiO1xuICB1aS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjE1cHhcIjtcbiAgdWkuc3R5bGUucGFkZGluZyA9IFwiMTVweFwiO1xuICB1aS5zdHlsZS5ib3hTaGFkb3cgPSBcIjBweCAwcHggNDBweCByZ2JhKDAsIDE5NSwgMjU1LDAuNSlcIjtcbiAgdWkuc3R5bGUuZm9udEZhbWlseSA9IFwibW9ub3NwYWNlXCI7XG4gIHVpLnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG4gIHVpLnN0eWxlLmFuaW1hdGlvbiA9IFwicmdiIDRzIGxpbmVhciBpbmZpbml0ZVwiO1xuXG4gIGNvbnN0IHN0eWxlU2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1swXTtcblxuICBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoYFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTBweDtcbiAgfWApO1xuXG4gIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XG4gIH1gKTtcblxuICBzdHlsZVNoZWV0Lmluc2VydFJ1bGUoYFxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxMDAsMTAwLDEwMCwwLjUpO1xuICBmaWx0ZXI6IGJsdXIoNHB4KTtcbiAgfWApO1xuXG4gIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyByZ2Ige1xuICAgIDAlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAwLCAwLDAuNzUpOyB9XG4gICAgMTYlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAyNTUsIDAsMC43NSk7IH1cbiAgICAzMyUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAyNTUsIDAsMC43NSk7IH1cbiAgICA1MCUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLCAyNTUsIDI1NSwwLjc1KTsgfVxuICAgIDY2JSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDAsIDAsIDI1NSwwLjc1KTsgfVxuICAgIDgzJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMCwgMjU1LDAuNzUpOyB9XG4gICAgMTAwJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDI1NSwgMCwgMCwwLjc1KTsgfVxuICB9YCk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodWkpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuaW5uZXJUZXh0ID0gY247XG4gIHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIyNHB4XCI7XG4gIHRpdGxlLnN0eWxlLm1hcmdpbiA9IFwiNXB4XCI7XG4gIHVpLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICB2YXIgc2VhcmNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBzZWFyY2guc3R5bGUud2lkdGggPSBcIjMzJVwiO1xuICBzZWFyY2gudHlwZSA9IFwidGV4dFwiO1xuICBzZWFyY2guc3R5bGUuYm9yZGVyID0gXCJzb2xpZCAycHggcmdiYSgyMDAsMjAwLDIwMCwwLjUpXCI7XG4gIHNlYXJjaC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjEwcHhcIjtcbiAgc2VhcmNoLnN0eWxlLmNvbG9yID0gXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCJcbiAgc2VhcmNoLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICBzZWFyY2guc3R5bGUucGFkZGluZyA9IFwiOHB4XCI7XG4gIHNlYXJjaC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCIyMHB4XCI7XG4gIHNlYXJjaC5zdHlsZS5mb250U2l6ZSA9IFwiMjJweFwiO1xuICBzZWFyY2guc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSg1MCw1MCw1MCwuMjQpXCI7XG4gIHNlYXJjaC5wbGFjZWhvbGRlciA9IFwi8J+Uju+4jiBTZWFyY2hcIlxuICBzZWFyY2guc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuICB0aXRsZS5hcHBlbmRDaGlsZChzZWFyY2gpO1xuXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvc2UuaW5uZXJUZXh0ID0gXCJYXCI7XG4gIGNsb3NlLnN0eWxlLmZvbnRTaXplID0gXCIyOHB4XCI7XG4gIGNsb3NlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBjbG9zZS5zdHlsZS5yaWdodCA9IFwiMTVweFwiO1xuICBjbG9zZS5zdHlsZS50b3AgPSBcIjEwcHhcIjtcbiAgY2xvc2Uuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gIGNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBkZXN0cm95KCk7XG4gIH07XG4gIHVpLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuXG5cbiAgdmFyIGJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJhci5zdHlsZS5vdmVyZmxvd1ggPSBcInNjcm9sbFwiO1xuICB1aS5hcHBlbmRDaGlsZChiYXIpO1xuXG4gIGZvciAobGV0IGkgaW4gY2F0ZWdvcmllcykge1xuICAgIGlmIChjYXRlZ29yaWVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjYXRlZ29yeS5pbm5lclRleHQgPSBjYXRlZ29yaWVzW2ldO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuZm9udFNpemUgPSBcIjE4cHhcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5wYWRkaW5nID0gXCIxMHB4XCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5tYXJnaW4gPSBcIjVweFwiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgxMDAsMTAwLDEwMCwwLjUpXCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjVweFwiO1xuICAgICAgY2F0ZWdvcnkub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICB9O1xuXG4gICAgICBiYXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjZW50ZXJcIik7XG4gIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9IFwic2Nyb2xsXCI7XG4gIHVpLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cblxuICByZWZyZXNoTW9kdWxlcygpO1xufVxuXG5cbi8vIFJlbG9hZCBtb2R1bGUgbGlzdFxuZXhwb3J0IGZ1bmN0aW9uIHJlZnJlc2hNb2R1bGVzKCkge1xuICBpZiAoaXNPcGVuKCkpIHtcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcbiAgICBmb3IgKGxldCBpIGluIG1vZHVsZXMpIHtcbiAgICAgIGlmIChtb2R1bGVzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgIHZhciBtb2RsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG1vZGx0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1vZGx0aXRsZS5pbm5lclRleHQgPSBgJHttb2R1bGVzW2ldLm5hbWV9YDtcbiAgICAgICAgbW9kbHRpdGxlLnN0eWxlLmZvbnRTaXplID0gXCIyMnB4XCI7XG4gICAgICAgIG1vZGx0aXRsZS5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgIG1vZGwuYXBwZW5kQ2hpbGQobW9kbHRpdGxlKTtcblxuICAgICAgICBtb2RsLnN0eWxlLnRleHRBbGlnbiA9IFwibGVmdFwiO1xuICAgICAgICBtb2RsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXG4gICAgICAgIG1vZGwuc3R5bGUud2lkdGggPSBcIjI1JVwiO1xuICAgICAgICBtb2RsLnN0eWxlLmhlaWdodCA9IFwiMjUlXCI7XG4gICAgICAgIG1vZGwuc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XG4gICAgICAgIG1vZGwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxNXB4XCI7XG4gICAgICAgIG1vZGwuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XG4gICAgICAgIG1vZGwuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG5cbiAgICAgICAgbW9kbC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEwMCwxMDAsMTAwLDAuNSlcIjtcbiAgICAgICAgaWYgKG1vZHVsZXNbaV0uZnVuY3Rpb24uZ2V0RW5hYmxlZCgpKSB7XG4gICAgICAgICAgbW9kbC5zdHlsZS5ib3JkZXJMZWZ0ID0gXCIycHggc29saWQgcmdiYSgwLCAyNTUsIDAsMSlcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vZGwub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIG1vZHVsZXNbaV0uZnVuY3Rpb24udG9nZ2xlKCk7XG4gICAgICAgICAgcmVmcmVzaE1vZHVsZXMoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLAogICJpbXBvcnQgeyBjbGllbnROYW1lIH0gZnJvbSBcIi4vdXRpbC9jbGllbnROYW1lXCI7XG5pbXBvcnQgeyBtb2R1bGVzLCBjYXRlZ29yaWVzIH0gZnJvbSBcIi4vdXRpbC9hY3R1YWxNb2R1bGVzXCI7XG5cblxuLy8gZGVsZXRlIHRoZSB1aVxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVpXCIpICE9IG51bGwpIHtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVpXCIpLnJlbW92ZSgpO1xuICB9XG59XG5cbnZhciBjb250YWluZXI7XG5cblxuLy8gY2hlY2sgaWYgb3BlblxuZXhwb3J0IGZ1bmN0aW9uIGlzT3BlbigpIHtcbiAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidWlcIikgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5cbi8vIG9wZW4gYSBzZXR0aW5nIG1lbnVcbmV4cG9ydCBmdW5jdGlvbiBzZXR0aW5nKG1vZHVsZSkge1xuICB2YXIgbHN0ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiTW9kZVwiLFxuICAgICAgdHlwZTogXCJMaXN0XCIsXG4gICAgICBtb2RlczogW1wiQWJpbGl0aWVzXCIsIFwiUGFja2V0XCJdLFxuICAgICAgY3VycmVudDogMFxuICAgIH1cbiAgXVxuICBjb25zdCBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcy5jbGFzc05hbWUgPSBcInNldHRpbmdcIjtcbiAgcy5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgcy5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgcy5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig4cHgpXCI7XG4gIHMuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLDAsMCwwLjUpXCI7XG4gIHMuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxNXB4XCI7XG4gIHMuc3R5bGUucGFkZGluZyA9IFwiMTVweFwiO1xuICBzLnN0eWxlLmZvbnRGYW1pbHkgPSBcIm1vbm9zcGFjZVwiO1xuICBzLnN0eWxlLm92ZXJmbG93WSA9IFwiaGlkZGVuXCI7XG4gIHMuc3R5bGUuYW5pbWF0aW9uID0gXCJyZ2IgNHMgbGluZWFyIGluZmluaXRlXCI7XG4gIHMuc3R5bGUud2lkdGggPSBcIjE1JVwiO1xuICBzLnN0eWxlLmhlaWdodCA9IFwiNTAlXCI7XG4gIHMuc3R5bGUudG9wID0gXCIxMDBweFwiXG4gIHMuc3R5bGUubGVmdCA9IFwiMTAwcHhcIlxuXG4gIHMuc3R5bGUuekluZGV4ID0gXCIxMDAwXCI7XG4gIHMuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuXG4gIGNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2xvc2UuaW5uZXJUZXh0ID0gXCJYXCI7XG4gIGNsb3NlLnN0eWxlLmZvbnRTaXplID0gXCIyOHB4XCI7XG4gIGNsb3NlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICBjbG9zZS5zdHlsZS5yaWdodCA9IFwiMTVweFwiO1xuICBjbG9zZS5zdHlsZS50b3AgPSBcIjEwcHhcIjtcbiAgY2xvc2Uuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gIGNsb3NlLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBzLnJlbW92ZSgpO1xuICB9O1xuICBzLmFwcGVuZENoaWxkKGNsb3NlKTtcblxuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpO1xuXG4gIHMub25jbGljayA9IGZ1bmN0aW9uKCkge1xuXG4gIH1cblxuICBmb3IgKGxldCBpIGluIGxzdCkge1xuICAgIGlmIChsc3QuaGFzT3duUHJvcGVydHkoaSkpIHtcblxuICAgICAgaWYgKGxzdFtpXS50eXBlID09IFwiTGlzdFwiKSB7XG4gICAgICAgIHZhciBzZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBzZWwub25jaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsc3RbaV0uY3VycmVudCA9IHBhcnNlSW50KHNlbC52YWx1ZSk7XG4gICAgICAgICAgYWxlcnQobHN0W2ldLmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGogaW4gbHN0W2ldLm1vZGVzKSB7XG4gICAgICAgICAgaWYgKGxzdFtpXS5tb2Rlcy5oYXNPd25Qcm9wZXJ0eShqKSkge1xuICAgICAgICAgICAgdmFyIG9wdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5cbiAgICAgICAgICAgIHNlbC5hcHBlbmRDaGlsZChvcHQpO1xuICAgICAgICAgICAgb3B0LmlubmVyVGV4dCA9IGxzdFtpXS5tb2Rlc1tqXTtcbiAgICAgICAgICAgIG9wdC52YWx1ZSA9IGogKyBcIlwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzLmFwcGVuZENoaWxkKHNlbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vL2NyZWF0ZSB0aGUgZ3VpXG5leHBvcnQgZnVuY3Rpb24gb3BlbigpIHtcbiAgZG9jdW1lbnQuZXhpdFBvaW50ZXJMb2NrKCk7XG4gIHZhciBjbiA9IGNsaWVudE5hbWU7XG5cbiAgY29uc3QgdWkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIHVpLmlkID0gXCJ1aVwiO1xuICB1aS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgdWkuc3R5bGUud2lkdGggPSBcIjY2JVwiO1xuICB1aS5zdHlsZS5oZWlnaHQgPSBcIjY2JVwiO1xuICB1aS5zdHlsZS50b3AgPSBkb2N1bWVudC5ib2R5LmNsaWVudEhlaWdodCAqIDAuMTY1ICsgXCJweFwiO1xuICB1aS5zdHlsZS5sZWZ0ID0gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCAqIDAuMTY1ICsgXCJweFwiO1xuICB1aS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgdWkuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoOHB4KVwiO1xuICB1aS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDAsMCwwLDAuNzUpXCI7XG4gIHVpLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTVweFwiO1xuICB1aS5zdHlsZS5wYWRkaW5nID0gXCIxNXB4XCI7XG4gIHVpLnN0eWxlLmJveFNoYWRvdyA9IFwiMHB4IDBweCA0MHB4IHJnYmEoMCwgMTk1LCAyNTUsMC41KVwiO1xuICB1aS5zdHlsZS5mb250RmFtaWx5ID0gXCJtb25vc3BhY2VcIjtcbiAgdWkuc3R5bGUub3ZlcmZsb3dZID0gXCJoaWRkZW5cIjtcbiAgdWkuc3R5bGUuYW5pbWF0aW9uID0gXCJyZ2IgNHMgbGluZWFyIGluZmluaXRlXCI7XG5cbiAgY29uc3Qgc3R5bGVTaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzWzBdO1xuXG4gIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xuICB9YCk7XG5cbiAgc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwKTtcbiAgfWApO1xuXG4gIHN0eWxlU2hlZXQuaW5zZXJ0UnVsZShgXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwxMDAsMTAwLDAuNSk7XG4gIGZpbHRlcjogYmx1cig0cHgpO1xuICB9YCk7XG5cbiAgc3R5bGVTaGVldC5pbnNlcnRSdWxlKGBAa2V5ZnJhbWVzIHJnYiB7XG4gICAgMCUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgyNTUsIDAsIDAsMC43NSk7IH1cbiAgICAxNiUgeyBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgyNTUsIDI1NSwgMCwwLjc1KTsgfVxuICAgIDMzJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDAsIDI1NSwgMCwwLjc1KTsgfVxuICAgIDUwJSB7IGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDAsIDI1NSwgMjU1LDAuNzUpOyB9XG4gICAgNjYlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwgMCwgMjU1LDAuNzUpOyB9XG4gICAgODMlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAwLCAyNTUsMC43NSk7IH1cbiAgICAxMDAlIHsgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAwLCAwLDAuNzUpOyB9XG4gIH1gKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh1aSk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5pbm5lclRleHQgPSBjbjtcbiAgdGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjI0cHhcIjtcbiAgdGl0bGUuc3R5bGUubWFyZ2luID0gXCI1cHhcIjtcbiAgdWkuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIHZhciBzZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIHNlYXJjaC5zdHlsZS53aWR0aCA9IFwiMzMlXCI7XG4gIHNlYXJjaC50eXBlID0gXCJ0ZXh0XCI7XG4gIHNlYXJjaC5zdHlsZS5ib3JkZXIgPSBcInNvbGlkIDJweCByZ2JhKDIwMCwyMDAsMjAwLDAuNSlcIjtcbiAgc2VhcmNoLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICBzZWFyY2guc3R5bGUuY29sb3IgPSBcInJnYmEoMjU1LDI1NSwyNTUsMSlcIlxuICBzZWFyY2guc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG4gIHNlYXJjaC5zdHlsZS5wYWRkaW5nID0gXCI4cHhcIjtcbiAgc2VhcmNoLnN0eWxlLm1hcmdpbkxlZnQgPSBcIjIwcHhcIjtcbiAgc2VhcmNoLnN0eWxlLmZvbnRTaXplID0gXCIyMnB4XCI7XG4gIHNlYXJjaC5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDUwLDUwLDUwLC4yNClcIjtcbiAgc2VhcmNoLnBsYWNlaG9sZGVyID0gXCLwn5SO77iOIFNlYXJjaFwiXG4gIHNlYXJjaC5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cig4cHgpXCI7XG4gIHRpdGxlLmFwcGVuZENoaWxkKHNlYXJjaCk7XG5cbiAgY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjbG9zZS5pbm5lclRleHQgPSBcIlhcIjtcbiAgY2xvc2Uuc3R5bGUuZm9udFNpemUgPSBcIjI4cHhcIjtcbiAgY2xvc2Uuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gIGNsb3NlLnN0eWxlLnJpZ2h0ID0gXCIxNXB4XCI7XG4gIGNsb3NlLnN0eWxlLnRvcCA9IFwiMTBweFwiO1xuICBjbG9zZS5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcbiAgY2xvc2Uub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIGRlc3Ryb3koKTtcbiAgfTtcbiAgdWkuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuXG5cblxuICB2YXIgYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmFyLnN0eWxlLm92ZXJmbG93WCA9IFwic2Nyb2xsXCI7XG4gIHVpLmFwcGVuZENoaWxkKGJhcik7XG5cbiAgZm9yIChsZXQgaSBpbiBjYXRlZ29yaWVzKSB7XG4gICAgaWYgKGNhdGVnb3JpZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNhdGVnb3J5LmlubmVyVGV4dCA9IGNhdGVnb3JpZXNbaV07XG4gICAgICBjYXRlZ29yeS5zdHlsZS5mb250U2l6ZSA9IFwiMThweFwiO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuY3Vyc29yID0gXCJwb2ludGVyXCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLm1hcmdpbiA9IFwiNXB4XCI7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZ2JhKDEwMCwxMDAsMTAwLDAuNSlcIjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNXB4XCI7XG4gICAgICBjYXRlZ29yeS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgIH07XG5cbiAgICAgIGJhci5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgfVxuICB9XG5cbiAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNlbnRlclwiKTtcbiAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gXCJzY3JvbGxcIjtcbiAgdWkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuXG4gIHJlZnJlc2hNb2R1bGVzKCk7XG59XG5cblxuLy8gUmVsb2FkIG1vZHVsZSBsaXN0XG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaE1vZHVsZXMoKSB7XG4gIGlmIChpc09wZW4oKSkge1xuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuICAgIGZvciAobGV0IGkgaW4gbW9kdWxlcykge1xuICAgICAgaWYgKG1vZHVsZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgdmFyIG1vZGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbW9kbHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbW9kbHRpdGxlLmlubmVyVGV4dCA9IGAke21vZHVsZXNbaV0ubmFtZX1gO1xuICAgICAgICBtb2RsdGl0bGUuc3R5bGUuZm9udFNpemUgPSBcIjIycHhcIjtcbiAgICAgICAgbW9kbHRpdGxlLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICAgICAgbW9kbC5hcHBlbmRDaGlsZChtb2RsdGl0bGUpO1xuXG4gICAgICAgIG1vZGwuc3R5bGUudGV4dEFsaWduID0gXCJsZWZ0XCI7XG4gICAgICAgIG1vZGwuc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cbiAgICAgICAgbW9kbC5zdHlsZS53aWR0aCA9IFwiMjUlXCI7XG4gICAgICAgIG1vZGwuc3R5bGUuaGVpZ2h0ID0gXCIyNSVcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5wYWRkaW5nID0gXCI1cHhcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjE1cHhcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5tYXJnaW4gPSBcIjEwcHhcIjtcbiAgICAgICAgbW9kbC5zdHlsZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgICAgICBtb2RsLnN0eWxlLmJhY2tncm91bmQgPSBcInJnYmEoMTAwLDEwMCwxMDAsMC41KVwiO1xuICAgICAgICBpZiAobW9kdWxlc1tpXS5mdW5jdGlvbi5nZXRFbmFibGVkKCkpIHtcbiAgICAgICAgICBtb2RsLnN0eWxlLmJvcmRlckxlZnQgPSBcIjJweCBzb2xpZCByZ2JhKDAsIDI1NSwgMCwxKVwiO1xuICAgICAgICB9XG5cbiAgICAgICAgbW9kbC5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbW9kdWxlc1tpXS5mdW5jdGlvbi50b2dnbGUoKTtcbiAgICAgICAgICByZWZyZXNoTW9kdWxlcygpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsCiAgImltcG9ydCB7IGNsaWVudE5hbWUgfSBmcm9tIFwiLi91dGlsL2NsaWVudE5hbWUudHNcIjtcbmltcG9ydCB7IGxvZ1RvQ29uc29sZSB9IGZyb20gXCIuL3V0aWwvY29uc29sZUxvZ2dlclwiO1xuaW1wb3J0IHsgbG9nVG9DaGF0IH0gZnJvbSBcIi4vdXRpbC9jaGF0TG9nZ2VyXCI7XG5pbXBvcnQgKiBhcyB1aSBmcm9tIFwiLi9ndWkudHNcIjtcblxubG9nVG9Db25zb2xlKFwiSW5pdC4uLlwiKTtcbmxvZ1RvQ2hhdChcIkluaXQuLi5cIik7XG5cblxuXG5cbmxvZ1RvQ2hhdChcIkxvYWRpbmcgbW9kdWxlcy4uLlwiKTtcblxuaW1wb3J0IHsgbW9kdWxlcyB9IGZyb20gXCIuL3V0aWwvYWN0dWFsTW9kdWxlc1wiO1xuXG5cbnZhciBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbm92ZXJsYXkuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG5vdmVybGF5LnN0eWxlLndpZHRoID0gXCIxMDAlXCJcbm92ZXJsYXkuc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG5vdmVybGF5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbm92ZXJsYXkuc3R5bGUuekluZGV4ID0gXCIxXCI7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG5cbi8vQHRzLWlnbm9yZVxuTW9kQVBJLnJlcXVpcmUoXCJwbGF5ZXJcIik7XG5cblxuLy9AdHMtaWdub3JlXG5Nb2RBUEkuYWRkRXZlbnRMaXN0ZW5lcihcImtleVwiLCBmdW5jdGlvbihlKSB7IFxuICBpZihlLmtleSA9PSA1NCAmJiAhdWkuaXNPcGVuKCkpIHtcbiAgICB1aS5vcGVuKCk7XG4gIH0gZWxzZSB7XG4gICAgdWkuZGVzdHJveSgpO1xuICB9XG59KVxuXG4vL0B0cy1pZ25vcmVcbk1vZEFQSS5hZGRFdmVudExpc3RlbmVyKFwidXBkYXRlXCIsIGZ1bmN0aW9uKCkgeyBcbiAgZm9yIChsZXQga2V5IGluIG1vZHVsZXMpIHtcbiAgICBpZiAobW9kdWxlcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBtb2R1bGVzW2tleV0uZnVuY3Rpb24ub25VcGRhdGUoKTtcbiAgICB9XG4gIH1cbn0pXG4iCiAgXSwKICAibWFwcGluZ3MiOiAiQUFFTyxJQUFJLEVBQWFBQ0FqQixTQUFTLENBQVksQ0FBQyxFQUFLLENBQ2hDLFFBQVEsSUFBSSxJQUFJLE1BQWUsR0FBS0FDRC9CLFNBQVMsQ0FBUyxDQUFDLEVBQUssQ0FFN0IsT0FBTyxjQUFjLENBQUMsSUFBSyxTQUFLLFdBQWlCLEdBQUssQ0FBQ2dFQ0tsRCxTQUFTLENBQUksQ0FBQyxFQUFRLENBQzNCLEVBQU8saUJBQW9CLEVBQUUsQ0FDM0IsR0FBSSxFQUFPLFdBQVcsR0FFcEIsSUFBSSxPQUFPLE9BQU8sYUFBYSxTQUU3QixPQUFPLE9BQU8sYUFBYSxTQUFXLEdBRXRDLE9BQU8sT0FBTyxPQUFPLElBSzNCLEVBQU8saUJBQW9CLEVBQUUsQ0FFM0IsT0FBTyxPQUFPLGFBQWEsU0FBVyxHQUV0QyxPQUFPLE9BQU8sT0FBTyxHQUd2QixFQUFPLGtCQUFxQixFQUFFLENBRTVCLE9BQU8sT0FBTyxhQUFhLFNBQVcsR0FFdEMsT0FBTyxPQUFPLE9BQU8sR0FqQ2xCLElBQUksRUFBVyxDQUNwQixDQUNFLEtBQUssT0FDTCxLQUFNLE9BQ04sTUFBTyxDQUFDLFlBQWEsUUFBUSxFQUM3QixRQUFTLENBQ1gsQ0FDRnNDQ0VPLFNBQVMsQ0FBSSxFQUFHQUNMdkIsSUFBUyxVQUFRLENBQUMsRUFBTSxDQUd0QixLQUFLLGdCQUFrQixHQUN2QixLQUFLLGFBQWUsRUFBRyxHQUN2QixLQUFLLGlCQUFtQixFQUFHLEdBQzNCLEtBQUssa0JBQW9CLEVBQUcsR0FDNUIsS0FBSyxlQUFpQixFQUFHLENBQUUsS0FBSyxnQkFBa0IsR0FBTSxLQUFLLFNBQVMsRUFBTSxFQUFlLEdBQzNGLEtBQUssZ0JBQWtCLEVBQUcsQ0FBRSxLQUFLLGdCQUFrQixHQUFPLEtBQUssVUFBVSxFQUFNLEVBQWUsR0FDOUYsS0FBSyxtQkFBcUIsRUFBRyxDQUFFLE9BQU8sS0FBSyxpQkFDM0MsS0FBSyxlQUFpQixFQUFHLENBQWdELEdBQTlDLEtBQUssaUJBQW1CLEtBQUssZ0JBQW9CLEtBQUssZ0JBQW1CLEtBQUssU0FBUyxNQUFTLE1BQUssVUFBVSxHQUUxSSxLQUFLLGlCQUFtQixFQUFHLEdBRTNCLEtBQUssY0FBZ0IsRUFBRyxDQUFDLE1BQU0sR0FFL0IsS0FBSyxTQUFXLENBRWhCLEVBRUEsRUFBSSxLQUFLLElBQUksR0FHSixFQUFhLENBQ3RCLFNBQVcsV0FDWCxPQUFTLFNBQ1QsT0FBUyxRQUNYLEVBRVcsRUFBVSxDQUNuQixPQUFRLENBQ04sS0FBSyxTQUNMLFNBQVUsSUFBSSxFQUFTLENBQVMsRUFDaEMsU0FBVSxXQUNWLFlBQWEsb0JBQ2IsSUFBSyxDQUNQLEVBRUEsV0FBWSxDQUNWLEtBQUssYUFDTCxTQUFVLElBQUksRUFBUyxDQUFhLEVBQ3BDLFNBQVUsU0FDVixZQUFhLG1CQUNiLElBQUssQ0FDUCxDQUNGQUM1Q08sU0FBUyxDQUFPLEVBQUcsQ0FDeEIsR0FBSSxTQUFTLGVBQWUsSUFBSSxHQUFLLEtBQ25DLFNBQVMsZUFBZSxJQUFJLEVBQUUsT0FBTyxFQVFsQyxTQUFTLENBQU0sRUFBRyxDQUN2QixHQUFJLFNBQVMsZUFBZSxJQUFJLEdBQUssS0FDbkMsTUFBTyxPQUVQLE9BQU9BQ2RYLEVBQWEsU0FBUyxFQUN0QixFQUFVLFNBQVMsRUFLbkIsRUFBVSxvQkFBb0IsRUFLOUIsSUFBSSxFQUFVLFNBQVMsY0FBYyxLQUFLLEVBQzFDLEVBQVEsTUFBTSxTQUFXLFFBQ3pCLEVBQVEsTUFBTSxNQUFRLE9BQ3RCLEVBQVEsTUFBTSxPQUFTLE9BQ3ZCLEVBQVEsTUFBTSxjQUFnQixPQUM5QixFQUFRLE1BQU0sT0FBUyxJQUN2QixTQUFTLEtBQUssWUFBWSxDQUFPLEVBSWpDLE9BQU8sUUFBUSxRQUFRLEVBSXZCLE9BQU8saUJBQWlCLGNBQWUsQ0FBQyxFQUFHLENBQ3pDLEdBQUcsRUFBRSxLQUFPLEtBQVUsRUFBTyxFQUMzQixBQUFHLEVBQUssTUFFUixDQUFHLEVBQVEsRUFFZCxFQUdELE9BQU8saUJBQWlCLGlCQUFrQixFQUFHLENBQzNDLFFBQVMsS0FBTyxFQUNkLEdBQUksRUFBUSxlQUFlLENBQUcsRUFDNUIsRUFBUSxHQUFLLFNBQVMsU0FBUyxFQUdwQyIsCiAgImRlYnVnSWQiOiAiNTA2QUQxOURGM0E3MDM2ODY0NzU2ZTIxNjQ3NTZlMjEiLAogICJuYW1lcyI6IFtdCn0=
