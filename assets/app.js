(()=>{const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)],nav=$('.nav'),lb=$('#lb');
$('.burger').onclick=()=>nav.classList.toggle('open');$$('.links a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
$$('[data-zoom]').forEach(e=>e.onclick=()=>{lb.querySelector('img').src=e.dataset.zoom;lb.classList.add('on')});
lb.onclick=()=>lb.classList.remove('on');addEventListener('keydown',e=>e.key==='Escape'&&lb.classList.remove('on'));
let r=0;const st=$$('.stars button');st.forEach((b,i)=>b.onclick=()=>{r=i+1;st.forEach((x,j)=>x.classList.toggle('on',j<r))});
const f=$('#rf');$$('[data-send]').forEach(b=>b.onclick=()=>{const n=f.elements.n.value.trim(),x=f.elements.x.value.trim(),er=f.querySelector('.err');
if(!r||x.length<5){er.hidden=false;return}er.hidden=true;
const m=`${f.dataset.t}\n${'★'.repeat(r)}${'☆'.repeat(5-r)} (${r}/5)\n${n}\n${x}`,e=encodeURIComponent(m);
location.href=b.dataset.send==='wa'?`${f.dataset.wa}?text=${e}`:`${f.dataset.mail}?subject=${encodeURIComponent(f.dataset.t)}&body=${e}`});
const esc=s=>String(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])),box=$('#rvl');
box.innerHTML=(window.REVIEWS||[]).map(v=>`<div class="card"><div class="sr">${'★'.repeat(v.stars||5)}</div><p>${esc(v.text)}</p><b>${esc(v.name)}</b><small>${esc(v.role)}</small></div>`).join('')})();

(()=>{const cls=im=>{const p=im.parentElement;try{const c=document.createElement('canvas'),x=c.getContext('2d');c.width=c.height=48;x.drawImage(im,0,0,48,48);const d=x.getImageData(0,0,48,48).data;let s=0,n=0,t=0;for(let i=0;i<d.length;i+=4){if(d[i+3]>40){s+=.2126*d[i]+.7152*d[i+1]+.0722*d[i+2];n++}else t++}p.classList.toggle('dk',n>0&&t/(d.length/4)>.03&&s/n/255>.62)}catch(e){}};
document.querySelectorAll('img[data-lg]').forEach(im=>{im.addEventListener('load',()=>cls(im));if(im.complete&&im.naturalWidth)cls(im);
const m=(im.getAttribute('src')||'').match(/client-(.+)\.png$/);if(!m)return;const n=m[1],c=['../assets/clients/'+n+'.png','../assets/'+n+'.png','../assets/logo-'+n+'.png','../assets/clients/'+n+'.jpg','../assets/clients/'+n+'.svg','../assets/clients/'+n+'.webp'];let i=0;
const f=()=>{if(i<c.length)im.src=c[i++];else im.parentElement.style.display='none'};im.addEventListener('error',f);if(im.complete&&!im.naturalWidth)f()})})();

(()=>{const mq=document.querySelector('.mq');if(!mq)return;
const build=()=>{const seen=new Set(),set=[];[...mq.children].forEach(t=>{const i=t.querySelector('img');if(i&&i.complete&&i.naturalWidth&&!seen.has(i.alt)){seen.add(i.alt);set.push(t)}});
if(!set.length)return;mq.innerHTML='';mq.style.animation='none';set.forEach(t=>mq.appendChild(t));
const g=parseFloat(getComputedStyle(mq).columnGap)||16,w=mq.getBoundingClientRect().width+g,n=Math.ceil(innerWidth*2/w)+1;
for(let k=0;k<n;k++)set.forEach(t=>mq.appendChild(t.cloneNode(true)));
mq.style.setProperty('--d',w+'px');mq.style.animation='';mq.style.animationDuration=(w/60)+'s'};
addEventListener('load',()=>setTimeout(build,500))})();
