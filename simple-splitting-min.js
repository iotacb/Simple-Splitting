const defaultDelay=50,defaultTargetClass="ss-opacity",splittingTargets=document.querySelectorAll("*[ss-target]");for(let t=0;t<splittingTargets.length;t++){const e=splittingTargets[t],s=0==getAttribute(e,"ss-default")?"ss-transparent":getAttribute(e,"ss-default"),l=getSplit(e),n=e.textContent.split(l);e.textContent="";for(let t=0;t<n.length;t++){const r=n[t];e.innerHTML+=`<span>${r}</span>`;const i=e.querySelectorAll("span")[t];if(i.classList.add(s)," "==l){const s=n[t+1];if(null!=s&&null!=s){i.outerHTML+="<whitespace></whitespace>";e.querySelectorAll("whitespace")[t].style.padding="0 "+window.getComputedStyle(e,null).getPropertyValue("font-size").slice(0,-2)/10+"px"}}}let r=0;const i=getAttribute(e,"ss-delay"),a=setInterval(onTick,0==i?50:i);function onTick(){const t=e.querySelectorAll("span")[r];let l=getAttribute(e,"ss-class");0==l&&(l="ss-opacity"),t.classList.add(l),t.classList.contains(s)&&t.classList.remove(s),r++,r===n.length&&clearInterval(a)}}function getAttribute(t,e){const s=t.getAttribute(e);return null!=s&&null!=s&&s}function getSplit(t){let e=getAttribute(t,"ss-type");if(0==e)return"";switch(e){case"letter":return"";case"word":return" ";default:return e}}