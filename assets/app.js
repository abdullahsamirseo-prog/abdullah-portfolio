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

(()=>{document.querySelectorAll('img[data-lg]').forEach(im=>{const go=()=>{const p=im.parentElement;try{const c=document.createElement('canvas'),x=c.getContext('2d');c.width=c.height=48;x.drawImage(im,0,0,48,48);const d=x.getImageData(0,0,48,48).data;let s=0,n=0;for(let i=0;i<d.length;i+=4)if(d[i+3]>40){s+=.2126*d[i]+.7152*d[i+1]+.0722*d[i+2];n++}p.classList.toggle('dk',n>0&&s/n/255>.62)}catch(e){}};im.complete?go():im.addEventListener('load',go)})})();
