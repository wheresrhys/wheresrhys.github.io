(function(){var e=!1,t=window,n=document,r=function(){return t.pageYOffset||n.compatMode==="CSS1Compat"&&n.documentElement.scrollTop||n.body.scrollTop||0},i=function(){!location.hash&&e!==!1&&t.scrollTo(0,e===1?0:1)},s=function(){var s;!location.hash&&t.addEventListener&&(window.scrollTo(0,1),e=1,s=setInterval(function(){n.body&&(clearInterval(s),e=r(),i())},15),t.addEventListener("load",function(){setTimeout(function(){r()<20&&i()},0)}))};s();var o=document.querySelectorAll(".fake-json dd, .fake-json li");o=Array.prototype.filter.call(o,function(e){return!e.childElementCount}),o.forEach(function(e){e.innerHTML=e.innerHTML.replace(/(\sor\s|\sand\s|\(|\))/g,function(e,t){switch(t){case" or ":return' <b class="operator">||</b> ';case" and ":return' <b class="operator">&&</b> ';default:return'<b class="plain">'+t+"</b>"}})});var u=document.getElementById("age");u.innerHTML="0."+((new Date).getFullYear()-1981)/10;var a=document.querySelectorAll(".fake-json")[0],f=document.querySelectorAll(".accordion>li>span>a"),l=function(e){var t=document.createElement("a");return t.setAttribute("href",e.href),t.textContent=e.textContent,t},c=window.innerWidth>0?window.innerWidth:screen.width;if(c>320){var h=document.getElementsByTagName("img");Array.prototype.forEach.call(h,function(e){e.setAttribute("src",e.getAttribute("data-src"))})}Array.prototype.forEach.call(f,function(e){var t=e.parentNode.nextElementSibling;if(!t)return!1;var n=document.createElement("h2"),r=function(){var e=t.firstChild;while(e.nodeType===3)e=e.nextSibling;return e}();n.appendChild(l(e)),t.insertBefore(n,r)}),a.addEventListener("click",function(e){var t=e.target;li=t.parentNode.parentNode;if(t.nodeName==="A"&&li.parentNode.className.indexOf("accordion")>-1){var n=a.querySelectorAll(".expanded");return n.length&&n[0]!==li&&(n[0].className=""),li.className=li.className==="expanded"?"":"expanded",e.cancelBubble=!0,e.preventDefault(),e.stopPropagation(),!1}})})();