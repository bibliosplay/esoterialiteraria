'use strict';
/* ===== DATOS ===== */
const SEF=[
{n:'Keter',c:'#cfd4e6',x:180,y:34,t:'Voluntad, propósito y unidad',p:'Medita sobre tu propósito antes de actuar; simplifica.'},
{n:'Jojmá',c:'#8c93a8',x:265,y:100,t:'Chispa creativa e intuición',p:'Anota ideas sin juzgarlas durante diez minutos al día.'},
{n:'Biná',c:'#5b4a78',x:95,y:100,t:'Comprensión, forma y estructura',p:'Da forma a una idea: plan, calendario, límites claros.'},
{n:'Jésed',c:'#3f6fd1',x:265,y:210,t:'Amor, generosidad y expansión',p:'Da sin esperar nada a cambio: tiempo, escucha, ayuda.'},
{n:'Guevurá',c:'#d1453b',x:95,y:210,t:'Fuerza, límite y discernimiento',p:'Practica decir no y sostener decisiones con serenidad.'},
{n:'Tiféret',c:'#e3b52f',x:180,y:265,t:'Armonía, belleza y corazón',p:'Busca el punto medio entre dar y poner límites.'},
{n:'Nétsaj',c:'#3f9a63',x:265,y:360,t:'Perseverancia, deseo y victoria',p:'Elige una meta pequeña y sostenla treinta días.'},
{n:'Hod',c:'#e0802f',x:95,y:360,t:'Mente, palabra y humildad',p:'Escribe o explica en voz alta lo que sientes y piensas.'},
{n:'Yesod',c:'#8d5fc2',x:180,y:410,t:'Vínculos, emoción e inconsciente',p:'Cuida un vínculo y presta atención a tus sueños.'},
{n:'Malkut',c:'#a8923a',x:180,y:462,t:'Cuerpo, materia y acción concreta',p:'Ancla tu día en el cuerpo: movimiento, descanso, orden.'}];
const PAT=[ // [de,a,letra,hebreo,significado]
[0,1,'Alef','א','Aliento: el impulso inicial'],[0,2,'Bet','ב','Casa: dar forma a la palabra'],[0,5,'Guímel','ג','Travesía: cruzar el vacío'],
[1,2,'Dálet','ד','Puerta: abrirte a lo nuevo'],[1,5,'Hei','ה','Ventana: ver con claridad'],[1,3,'Vav','ו','Unión: conectar cielo y tierra'],
[2,5,'Zayin','ז','Espada: discernir lo esencial'],[2,4,'Jet','ח','Cerca: protegerte y contener'],[3,4,'Tet','ט','Serpiente: fuerza interior'],
[3,5,'Yud','י','Mano: voluntad en acción'],[3,6,'Kaf','כ','Palma: aceptar los ciclos'],[4,5,'Lámed','ל','Aguijada: aprender y equilibrar'],
[4,7,'Mem','מ','Agua: sumergirte y soltar'],[5,6,'Nun','נ','Pez: morir y renacer'],[5,8,'Sámej','ס','Sostén: confiar en el apoyo'],
[5,7,'Ayin','ע','Ojo: ver la verdad'],[6,7,'Pei','פ','Boca: romper lo viejo'],[6,8,'Tsadi','צ','Anzuelo: intuición profunda'],
[6,9,'Kof','ק','Nuca: soñar el futuro'],[7,8,'Resh','ר','Cabeza: claridad mental'],[7,9,'Shin','ש','Fuego: transformación'],[8,9,'Tav','ת','Marca: integrar en la vida']];
const PIL={Misericordia:[1,3,6],Rigor:[2,4,7],Equilibrio:[0,5,8,9]};
const FUENTES=[['Misión de vida',3],['Día',2],['Mes',1.5],['Año',1.5],['Alma (vocales)',2],['Personalidad (consonantes)',1.5],['Nombre completo',2]];
const MESES=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

/* ===== MOTOR (funciones puras) ===== */
const sumDig=n=>[...String(n)].reduce((a,d)=>a+ +d,0);
const red=n=>{while(n>10)n=sumDig(n);return n}; // 10 = Malkut, se conserva
const val=s=>[...s].reduce((a,c)=>a+((c.charCodeAt(0)-97)%9+1),0);
const limpiar=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z]/g,'');

function ruta(a,b){ // BFS sobre los 22 caminos
  if(a===b)return[];
  const prev={[a]:null},q=[a];
  while(q.length){const u=q.shift();if(u===b)break;
    PAT.forEach((p,i)=>{const v=p[0]===u?p[1]:p[1]===u?p[0]:-1;if(v>=0&&!(v in prev)){prev[v]=[u,i];q.push(v)}})}
  const r=[];for(let v=b;prev[v];v=prev[v][0])r.unshift({de:prev[v][0],a:v,p:prev[v][1]});return r;
}
function calcular(nombre,fecha){
  const [y,m,d]=fecha.split('-').map(Number);
  const t=limpiar(nombre),vo=t.replace(/[^aeiou]/g,''),co=t.replace(/[aeiou]/g,'');
  const nums=[red(sumDig(`${y}${m}${d}`)),red(d),red(m),red(y),red(val(vo)),red(val(co)),red(val(t))].map(n=>Math.max(n,1));
  const e=Array(10).fill(0);
  nums.forEach((n,i)=>e[n-1]+=FUENTES[i][1]);
  const b=e.slice();PAT.forEach(([a,c])=>{e[a]+=b[c]*.2;e[c]+=b[a]*.2});
  const mx=Math.max(...e),pct=e.map(v=>Math.round(100*v/mx));
  const dom=pct.indexOf(100),mn=Math.min(...pct);
  // desempate: entre las sefirot más bajas, la más lejana a la fortaleza (camino más largo)
  let def=-1,best=-1;
  pct.forEach((v,i)=>{if(v===mn&&i!==dom){const L=ruta(dom,i).length;if(L>best){best=L;def=i}}});
  if(def<0)def=(dom+5)%10;
  return{pct,dom,def,camino:ruta(dom,def),nums};
}

/* ===== PERFILES (localStorage con try/catch) ===== */
const K='sefirot:perfiles';
const cargar=()=>{try{return JSON.parse(localStorage.getItem(K))||[]}catch(e){return[]}};
const guardar=l=>{try{localStorage.setItem(K,JSON.stringify(l))}catch(e){}};
const esc=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const $=id=>document.getElementById(id);
let PCT=[],SEL=-1;

function chips(){
  $('chips').innerHTML=cargar().map((p,i)=>`<span><button class="g" data-o="${i}">${esc(p.nombre)}</button><button class="g" data-x="${i}" aria-label="Borrar ${esc(p.nombre)}">×</button></span>`).join('');
}

/* ===== VISTA ===== */
function seleccionar(i){
  SEL=i;
  document.querySelectorAll('#tree g.sef').forEach(g=>g.classList.toggle('sel',+g.dataset.i===i));
  $('det').innerHTML=`<strong>${SEF[i].n}: ${PCT[i]}%</strong><br>${SEF[i].t}.<br><span class="mut">Para fortalecerla: ${SEF[i].p}</span>`;
}
function mostrar(nombre,fecha){
  const r=calcular(nombre,fecha),{pct,dom,def,camino,nums}=r;
  PCT=pct;
  $('out').classList.remove('hide');
  $('tit').textContent=`${nombre.split(' ')[0]}, tu fortaleza es ${SEF[dom].n}`;
  $('sub').textContent=`${SEF[dom].t}. Tu área de crecimiento es ${SEF[def].n}: ${SEF[def].t.toLowerCase()}.`;

  let s=PAT.map((p,i)=>{const on=camino.some(c=>c.p===i),A=SEF[p[0]],B=SEF[p[1]];
    return `<line class="${on?'on':''}" x1="${A.x}" y1="${A.y}" x2="${B.x}" y2="${B.y}" stroke="${on?'var(--ac)':'var(--line)'}" stroke-width="${on?4:1.2}" ${on?'stroke-dasharray="12 12"':''}/>`}).join('');
  s+=SEF.map((f,i)=>{
    const R=11+pct[i]*.13,left=f.x<180,mid=f.x===180;
    const tx=mid?f.x+R+9:left?f.x-R-9:f.x+R+9,anc=left?'end':'start';
    const mark=i===dom?'var(--ink)':i===def?'var(--ink)':'none';
    return `<g class="sef" tabindex="0" role="button" data-i="${i}" aria-label="${f.n}, ${pct[i]}%"><circle class="halo" cx="${f.x}" cy="${f.y}" r="${R+6}" fill="${f.c}" opacity=".25"/><circle class="core" cx="${f.x}" cy="${f.y}" r="${R}" fill="${f.c}" stroke="${mark}" stroke-width="2.5" ${i===def?'stroke-dasharray="4 3"':''}/><text x="${tx}" y="${f.y+5}" text-anchor="${anc}">${f.n}</text></g>`}).join('');
  $('tree').innerHTML=s;

  $('bars').innerHTML=SEF.map((f,i)=>`<div class="bar"><span>${f.n}</span><i><b style="width:0;background:${f.c}" data-w="${pct[i]}"></b></i><span>${pct[i]}%</span></div>`).join('');
  const avg=ix=>Math.round(ix.reduce((a,i)=>a+pct[i],0)/ix.length);
  $('pillars').innerHTML=Object.entries(PIL).map(([k,ix])=>`<div class="bar"><span>${k}</span><i><b style="width:0;background:var(--ac)" data-w="${avg(ix)}"></b></i><span>${avg(ix)}%</span></div>`).join('');
  requestAnimationFrame(()=>document.querySelectorAll('#bars b,#pillars b').forEach(b=>b.style.width=b.dataset.w+'%'));

  $('pathIntro').textContent=`Del punto donde más te sostienes (${SEF[dom].n}) hacia donde más puedes crecer (${SEF[def].n}), atravesando ${camino.length} ${camino.length===1?'camino':'caminos'}. Toca un paso para ver su destino:`;
  $('steps').innerHTML=camino.map(c=>{const p=PAT[c.p];return `<button class="step" data-s="${c.a}"><strong>${p[3]} ${p[2]}</strong>: ${SEF[c.de].n} a ${SEF[c.a].n}<br><span class="mut">${p[4]}.</span></button>`}).join('')
    +`<div class="step"><strong>Práctica en ${SEF[def].n}</strong><br><span class="mut">${SEF[def].p}</span></div>`;

  $('src').innerHTML=`<table><tr><th>Fuente</th><th>Nº</th><th>Sefirá</th><th>Peso</th></tr>${FUENTES.map((f,i)=>`<tr><td>${f[0]}</td><td>${nums[i]}</td><td>${SEF[nums[i]-1].n}</td><td>${f[1]}</td></tr>`).join('')}</table><p class="mut small">Cada número se reduce sumando dígitos (máximo 10). Después, cada sefirá recibe un 20 % de la energía de las vecinas conectadas por los 22 caminos.</p>`;

  seleccionar(dom);
  $('out').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});
}

/* ===== EVENTOS ===== */
$('tree').addEventListener('click',e=>{const g=e.target.closest('[data-i]');if(g)seleccionar(+g.dataset.i)});
$('tree').addEventListener('keydown',e=>{const g=e.target.closest('[data-i]');if(g&&(e.key==='Enter'||e.key===' ')){e.preventDefault();seleccionar(+g.dataset.i)}});
$('steps').addEventListener('click',e=>{const b=e.target.closest('[data-s]');if(b){seleccionar(+b.dataset.s);$('tree').scrollIntoView({block:'center',behavior:'smooth'})}});

function error(msg,campo){
  $('err').textContent=msg;
  ['n','dd','mm','yy'].forEach(id=>$(id).removeAttribute('aria-invalid'));
  if(campo){$(campo).setAttribute('aria-invalid','true');$(campo).focus()}
}
$('f').addEventListener('submit',e=>{
  e.preventDefault();
  const nombre=$('n').value.trim().replace(/\s+/g,' '),D=+$('dd').value,M=+$('mm').value,Y=+$('yy').value,hoy=new Date();
  if(limpiar(nombre).length<2)return error('Escribe un nombre con al menos dos letras.','n');
  if(!M)return error('Elige el mes.','mm');
  if(!D||!Y)return error('Completa día y año.',D?'yy':'dd');
  if(Y<1900||Y>hoy.getFullYear())return error(`El año debe estar entre 1900 y ${hoy.getFullYear()}.`,'yy');
  const t=new Date(Y,M-1,D);
  if(t.getDate()!==D||t.getMonth()!==M-1)return error('Esa fecha no existe.','dd');
  if(t>hoy)return error('La fecha no puede estar en el futuro.','dd');
  error('');
  const fecha=`${Y}-${M}-${D}`,l=cargar().filter(p=>p.nombre!==nombre);
  l.push({nombre,fecha});guardar(l);chips();mostrar(nombre,fecha);
});
$('chips').addEventListener('click',e=>{
  const b=e.target.closest('button');if(!b)return;const l=cargar();
  if(b.dataset.x!==undefined){
    const p=l[+b.dataset.x];if(p&&confirm(`¿Borrar el perfil de ${p.nombre}?`)){l.splice(+b.dataset.x,1);guardar(l);chips()}
  }else{
    const p=l[+b.dataset.o];if(!p)return;const [y,m,d]=p.fecha.split('-').map(Number);
    $('n').value=p.nombre;$('dd').value=d;$('mm').value=m;$('yy').value=y;error('');mostrar(p.nombre,p.fecha);
  }
});
$('theme').addEventListener('click',()=>{
  const r=document.documentElement,dark=r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;
  r.dataset.theme=dark?'light':'dark';
});

/* ===== INICIO ===== */
$('mm').insertAdjacentHTML('beforeend',MESES.map((m,i)=>`<option value="${i+1}">${m}</option>`).join(''));
$('yy').max=new Date().getFullYear();
chips();
