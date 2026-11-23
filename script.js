const subjects={matematica:{name:'Matemática',icon:'matematica-icon.png'},fisica:{name:'Física',icon:'fisica-icon.png'},quimica:{name:'Química',icon:'quimica-icon.png'},biologia:{name:'Biologia',icon:'biologia-icon.png'}};
const subjectIcon=(key,extra='')=>`<img class="${extra}" src="assets/icons/${subjects[key].icon}" alt="" aria-hidden="true" onerror="this.style.visibility='hidden'">`;
const $=s=>document.querySelector(s), app=$('#appView');
let activeView='journey', activeModule=1, activeLesson=0, qIndex=0, sessionXP=0, activeSubject='matematica', currentModules=window.mathModules, currentLessonsData=window.mathLessons;
const read=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}}, save=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
let progress=read('formula-progress',{completed:[],xp:0,streak:0,attempts:0,correct:0});
// Cada matéria mantém seu próprio progresso; o progresso antigo de Matemática é preservado.
function loadSubjectProgress(k){const fallback=k==='matematica'?read('formula-progress',{completed:[],xp:0,streak:0,attempts:0,correct:0}):{completed:[],xp:0,streak:0,attempts:0,correct:0};progress=read(`formula-progress-${k}`,fallback);progress.completed=(progress.completed||[]).map(x=>typeof x==='number'?`m1l${x}`:x);}
function saveProgress(){save(`formula-progress-${activeSubject}`,progress);if(activeSubject==='matematica')save('formula-progress',progress);markLocalProgressChanged()}

// Persistência offline + sincronização por conta. O navegador continua sendo a
// fonte imediata de leitura; o Supabase recebe as alterações quando há conexão.
const FORMULA_SUBJECTS=['matematica','quimica','fisica','biologia'];
const EMPTY_PROGRESS=()=>({completed:[],xp:0,streak:0,attempts:0,correct:0});
function markLocalProgressChanged(){try{localStorage.setItem('formula-local-updated-at',new Date().toISOString())}catch{};if(window.formulaSync)window.formulaSync.schedule()}
function readAllFormulaProgress(){const data={};for(const key of FORMULA_SUBJECTS){const fallback=key==='matematica'?read('formula-progress',EMPTY_PROGRESS()):EMPTY_PROGRESS();data[key]=read(`formula-progress-${key}`,fallback)}return data}
function writeAllFormulaProgress(data){for(const key of FORMULA_SUBJECTS){const value=data?.[key]||EMPTY_PROGRESS();save(`formula-progress-${key}`,value);if(key==='matematica')save('formula-progress',value)}}
function mergeFormulaProgress(local,remote){const merged={};for(const key of FORMULA_SUBJECTS){const a=local?.[key]||EMPTY_PROGRESS(),b=remote?.[key]||EMPTY_PROGRESS();merged[key]={completed:[...new Set([...(a.completed||[]),...(b.completed||[])])],xp:Math.max(a.xp||0,b.xp||0),streak:Math.max(a.streak||0,b.streak||0),attempts:Math.max(a.attempts||0,b.attempts||0),correct:Math.max(a.correct||0,b.correct||0)}}return merged}

function lessonsFor(moduleId){return currentLessonsData.filter(l=>l.moduleId===moduleId)}
function lessonKey(moduleId,lessonIndex){return `m${moduleId}l${lessonIndex}`}
function moduleDone(moduleId){const ls=lessonsFor(moduleId);return ls.length>0&&ls.every((_,i)=>progress.completed.includes(lessonKey(moduleId,i)))}
function moduleUnlocked(moduleId){return moduleId===1||moduleDone(moduleId-1)}
function unlockedCount(){let n=0;for(const m of currentModules){if(moduleUnlocked(m.id))n++;else break}return n}
function completedLessonsCount(){return progress.completed.length}
function totalLessonsCount(){return currentLessonsData.length}
function toast(t){const el=$('#toast');el.textContent=t;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2200)}
function updateStats(){$('#xpCount').textContent=progress.xp;$('#topStreak').textContent=progress.streak;$('#streakNumber').textContent=progress.streak+' dias'}
function subject(k){activeSubject=k;document.body.dataset.subject=k;$('#currentEmoji').src=`assets/icons/${subjects[k].icon}`;$('#currentSubject').textContent=subjects[k].name;document.querySelectorAll('.subject-option').forEach(x=>x.classList.toggle('selected',x.dataset.subject===k));$('#subjectDropdown').classList.remove('open');$('#subjectSwitcher').setAttribute('aria-expanded','false');localStorage.setItem('formula-subject',k);currentModules=k==='matematica'?window.mathModules:k==='biologia'?window.bioModules:k==='fisica'?window.physicsModules:window.chemModules;currentLessonsData=k==='matematica'?window.mathLessons:k==='biologia'?window.bioLessons:k==='fisica'?window.physicsLessons:window.chemLessons;loadSubjectProgress(k);activeModule=1;activeLesson=0;sessionXP=0;renderHome();updateStats()}
$('#subjectSwitcher').onclick=()=>{const d=$('#subjectDropdown');d.classList.toggle('open');$('#subjectSwitcher').setAttribute('aria-expanded',d.classList.contains('open'))};document.querySelectorAll('.subject-option').forEach(b=>b.onclick=()=>subject(b.dataset.subject));document.addEventListener('click',e=>{if(!e.target.closest('.subject-switcher-wrap'))$('#subjectDropdown').classList.remove('open')});
function renderHome(){activeView='journey';const unlocked=unlockedCount(),done=completedLessonsCount(),total=totalLessonsCount();const firstIncomplete=currentModules.find(m=>moduleUnlocked(m.id)&&!moduleDone(m.id));const moduleCards=currentModules.map(m=>{const ls=lessonsFor(m.id),completed=ls.filter((_,i)=>progress.completed.includes(lessonKey(m.id,i))).length,unlocked=moduleUnlocked(m.id),complete=moduleDone(m.id);return `<article class="module-card ${unlocked?'':'module-locked'} ${complete?'module-complete':''}"><div class="module-number">${String(m.id).padStart(2,'0')}</div><div class="module-info"><small>${complete?'MÓDULO CONCLUÍDO':unlocked?`MÓDULO ${String(m.id).padStart(2,'0')} · DISPONÍVEL`:'MÓDULO BLOQUEADO'}</small><h3>${m.title}</h3><p>${unlocked?`${ls.length} lições de memorização · ${completed}/${ls.length} concluídas`:'Conclua o módulo anterior para desbloquear.'}</p></div><div class="module-state">${complete?'🏆':unlocked?`<b>${completed}/${ls.length}</b><small>lições</small>`:'🔒'}</div>${unlocked?`<button class="module-open" data-open-module="${m.id}">${complete?'Revisar módulo':'Abrir módulo'} →</button>`:''}</article>`}).join('');app.innerHTML=`<div class="home-view"><div class="welcome-row"><div><div class="eyebrow"><span class="eyebrow-dot"></span> SUA TRILHA DE MEMORIZAÇÃO</div><h1>Aprender fórmulas<br><em>pode ser um jogo.</em></h1><p class="intro">Reconheça, complete e associe fórmulas até lembrar delas sem consultar o caderno.</p></div><div class="mascot"><div class="mascot-spark">✦</div><div class="mascot-face"><span class="eye"></span><span class="eye"></span><span class="mouth"></span></div><div class="mascot-base"></div></div></div><div class="course-banner"><div class="banner-copy"><span class="banner-tag">${subjects[activeSubject].name.toUpperCase()} · TRILHA COMPLETA</span><h2>${firstIncomplete?firstIncomplete.title:'Jornada concluída!'}</h2><p>${firstIncomplete?'Complete as lições para liberar o próximo módulo automaticamente.':'Você concluiu todos os módulos cadastrados nesta trilha.'}</p></div><div class="banner-progress"><div class="progress-ring"><span>${Math.round(done/total*100)}%</span></div><small>DA TRILHA</small></div></div><div class="path-heading"><div><span class="section-kicker">${subjects[activeSubject].name.toUpperCase()} · ${currentModules.length} MÓDULOS</span><h2>Sua jornada</h2></div><span class="module-counter">${unlocked}/${currentModules.length} liberados</span></div><div class="module-list">${moduleCards}</div></div><aside class="right-rail"><div class="rail-card daily-card"><div class="rail-card-heading">✦ <b>Missão de memorização</b></div><h3>Uma fórmula<br>de cada vez.</h3><p>Conclua lições para abrir novos módulos.</p><div class="mission-progress"><span style="width:${done/total*100}%"></span></div><small>${done} de ${total} lições concluídas</small></div><div class="rail-card weekly-card"><div class="rail-card-heading">▥ <b>Visão geral</b></div><div class="weekly-number">${progress.xp} <small>XP</small></div><p>Seus pontos acumulados</p></div><div class="rail-card tip-card"><div class="tip-icon">🧠</div><div><b>O foco é memorizar.</b><p>As atividades treinam o reconhecimento da fórmula, seus símbolos e quando ela deve ser escolhida.</p></div></div></aside></div>`;document.querySelectorAll('[data-open-module]').forEach(b=>b.onclick=()=>renderModule(Number(b.dataset.openModule)));updateStats()}
function renderModule(moduleId=activeModule){activeModule=moduleId;activeView='module';const module=currentModules.find(m=>m.id===moduleId);if(!moduleUnlocked(moduleId)){toast('Conclua o módulo anterior para liberar este.');renderHome();return}const ls=lessonsFor(moduleId);const done=ls.filter((_,i)=>progress.completed.includes(lessonKey(moduleId,i))).length;app.innerHTML=`<div class="module-view"><button class="back-button" id="backHome">← Minha jornada</button><div class="eyebrow">${subjects[activeSubject].name.toUpperCase()} · MÓDULO ${String(moduleId).padStart(2,'0')}</div><h1>${module.title.split(' ').slice(0,-1).join(' ')}<br><em>${module.title.split(' ').slice(-1).join(' ') }.</em></h1><p class="intro">Memorize cada relação, reconheça seus símbolos e saiba identificar quando ela se aplica. ${done}/${ls.length} lições concluídas.</p><div class="lesson-list">${ls.map((l,i)=>{const complete=progress.completed.includes(lessonKey(moduleId,i));return `<button class="lesson-row" data-lesson="${i}"><span class="lesson-index">${complete?'✓':String(i+1).padStart(2,'0')}</span><span class="lesson-row-copy"><small>FÓRMULA ${i+1}</small><b>${l.title}</b><em>${l.formula}</em></span><span class="lesson-arrow">${complete?'★':'→'}</span></button>`}).join('')}</div></div>`;$('#backHome').onclick=renderHome;document.querySelectorAll('[data-lesson]').forEach(b=>b.onclick=()=>startLesson(Number(b.dataset.lesson)))}
const types={recognize:'Reconheça a fórmula',fill:'Complete a fórmula',match:'Associe o significado',identify:'Identifique a fórmula',apply:'Escolha pela aplicação'};
function startLesson(i){activeLesson=i;qIndex=0;renderQuestion()}
function currentLessons(){return lessonsFor(activeModule)}
function renderQuestion(){const lesson=currentLessons()[activeLesson],q=lesson.questions[qIndex],pct=qIndex/lesson.questions.length*100;const options=q.options||[];let controls='';if(q.type==='fill')controls=`<div class="fill-wrap"><input id="fillAnswer" autocomplete="off" placeholder="Digite a fórmula completa"><span class="fill-hint">Você pode escrever por extenso se preferir. Ex.: 2 × 2 ou duas vezes dois.</span></div>`;else controls=`<div class="answer-options">${options.map(o=>`<button class="answer-option" data-answer="${String(o).replaceAll('&','&amp;').replaceAll('"','&quot;')}">${o}</button>`).join('')}</div>`;app.innerHTML=`<section class="exercise-screen"><div class="exercise-top"><button class="back-button" id="quitLesson">✕ Sair</button><div class="exercise-progress"><span style="width:${pct}%"></span></div><b>${qIndex+1}/${lesson.questions.length}</b></div><div class="exercise-content"><div class="exercise-meta">MÓDULO ${String(activeModule).padStart(2,'0')} · ${types[q.type].toUpperCase()}</div><h1>${q.prompt}</h1>${q.type==='recognize'?`<div class="formula-preview">${lesson.desc}</div>`:''}${controls}<button class="primary-btn check-btn" id="checkAnswer" ${q.type==='fill'?'disabled':''}>Verificar resposta</button><div class="feedback" id="feedback"></div></div><div class="exercise-foot">🧠 <span>O objetivo é lembrar a fórmula e reconhecer quando ela deve ser usada — não fazer contas longas.</span></div></section>`;$('#quitLesson').onclick=()=>renderModule(activeModule);document.querySelectorAll('.answer-option').forEach(b=>b.onclick=()=>{document.querySelectorAll('.answer-option').forEach(x=>x.classList.remove('chosen'));b.classList.add('chosen');$('#checkAnswer').disabled=false});if(q.type==='fill'){$('#fillAnswer').addEventListener('input',()=>$('#checkAnswer').disabled=!$('#fillAnswer').value.trim());$('#fillAnswer').addEventListener('keydown',e=>{if(e.key==='Enter'&&!$('#checkAnswer').disabled)checkAnswer()})}$('#checkAnswer').onclick=checkAnswer}
function normalize(s){
 let v=String(s??'').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'');
 const words={zero:'0',um:'1',uma:'1',dois:'2',duas:'2',tres:'3',quatro:'4',cinco:'5',seis:'6',sete:'7',oito:'8',nove:'9',dez:'10',onze:'11',doze:'12',vinte:'20',trinta:'30',cem:'100'};
 v=v.replace(/\b(mais ou menos)\b/g,'plusminus').replace(/\b(dividido por|dividida por|dividido|dividida|sobre)\b/g,'/').replace(/\b(igual a|igual|é igual a|equivale a)\b/g,'=').replace(/\b(vezes|multiplicado por|multiplicada por|multiplicar por)\b/g,'*').replace(/\b(mais)\b/g,'+').replace(/\b(menos)\b/g,'-').replace(/\b(elevado a|elevada a|elevado|elevada)\b/g,'^').replace(/\b(ao quadrado|elevado ao quadrado)\b/g,'^2').replace(/\b(ao cubo|elevado ao cubo)\b/g,'^3');
 v=v.replace(/\b(zero|um|uma|dois|duas|tres|quatro|cinco|seis|sete|oito|nove|dez|onze|doze|vinte|trinta|cem)\b/g,m=>words[m]);
 const replacements=[
  [/\b(delta)\b/g,'delta'],[/\b(pi)\b/g,'pi'],[/\b(raiz quadrada de|raiz de)\b/g,'sqrt'],
  [/√/g,'sqrt'],[/δ/g,'delta'],[/Δ/g,'delta'],[/²/g,'^2'],[/³/g,'^3'],[/×|·|⋅/g,'*'],[/÷/g,'/'],
  [/−|–|—/g,'-'],[/±/g,'plusminus'],[/α/g,'alfa'],[/π/g,'pi'],[/≥/g,'>=' ],[/≤/g,'<='],
  [/\b(cosseno)\b/g,'cos'],[/\b(seno)\b/g,'sen'],[/\b(tangente)\b/g,'tg'],
  [/\b(hipotenusa)\b/g,'hipotenusa'],[/\b(cateto adjacente)\b/g,'ca'],[/\b(cateto oposto)\b/g,'co'],
  [/\b(area da base|área da base)\b/g,'ab'],[/\b(altura)\b/g,'h'],[/\b(raio)\b/g,'r'],
  [/\b(lado)\b/g,'lado'],[/\b(base maior)\b/g,'basemaior'],[/\b(base menor)\b/g,'basemenor'],
  [/\b(geratriz)\b/g,'g'],[/\b(capital)\b/g,'c'],[/\b(taxa)\b/g,'i'],[/\b(tempo)\b/g,'t'],
  [/[\s]/g,'']
 ];
 for(const [re,to] of replacements)v=v.replace(re,to);
 return v.replace(/(?<=\d)x(?=\d)/g,'*').replace(/(?<=\d)\.(?=\d)/g,'*').replace(/([0-9])\*([a-z])/g,'$1$2').replace(/([a-z])\*([a-z])/g,'$1$2').replace(/[,]/g,'.').replace(/[{}[\]()]/g,'').replace(/=/g,'').replace(/\\+/g,'+');
}
function checkAnswer(){const lesson=currentLessons()[activeLesson],q=lesson.questions[qIndex];let chosen=q.type==='fill'?$('#fillAnswer').value:$('.answer-option.chosen')?.dataset.answer;if(chosen===undefined||chosen===''){toast('Escolha ou escreva uma resposta primeiro.');return}const correct=normalize(chosen)===normalize(q.answer);progress.attempts++;if(correct){progress.correct++;progress.xp+=10;sessionXP+=10}else{}saveProgress();document.querySelectorAll('.answer-option').forEach(b=>{b.disabled=true;if(normalize(b.dataset.answer)===normalize(q.answer))b.classList.add('correct');else if(b.classList.contains('chosen'))b.classList.add('wrong')});if(q.type==='fill')$('#fillAnswer').disabled=true;$('#checkAnswer').style.display='none';const f=$('#feedback');f.className='feedback show '+(correct?'good':'bad');f.innerHTML=`<b>${correct?'Muito bem! +10 XP':'Vamos fixar essa relação.'}</b><p>${q.explain}${correct?'':`<br><strong>Resposta correta:</strong> ${q.answer}`}</p><button class="primary-btn" id="nextQuestion">${qIndex===lesson.questions.length-1?'Concluir lição':'Continuar'}</button>`;$('#nextQuestion').onclick=()=>{if(qIndex<lesson.questions.length-1){qIndex++;renderQuestion()}else finishLesson()};updateStats()}
function finishLesson(){const key=lessonKey(activeModule,activeLesson);if(!progress.completed.includes(key))progress.completed.push(key);saveProgress();const justUnlocked=moduleDone(activeModule)&&activeModule<currentModules.length;const nextModule=currentModules.find(m=>m.id===activeModule+1);app.innerHTML=`<section class="finish-screen"><div class="finish-icon">🏆</div><div class="eyebrow">LIÇÃO CONCLUÍDA</div><h1>Mandou<br><em>bem!</em></h1><p>Você concluiu <b>${currentLessons()[activeLesson].title}</b> e ganhou ${sessionXP} XP nesta sessão.</p><div class="finish-stats"><div><b>${progress.correct}</b><small>acertos totais</small></div><div><b>${progress.xp}</b><small>XP acumulados</small></div></div>${justUnlocked?`<div class="feedback show good" style="margin:18px 0"><b>🔓 Novo módulo desbloqueado!</b><p>${nextModule.title} agora está disponível na sua jornada.</p></div>`:''}<button class="primary-btn" id="continuePath">${justUnlocked?'Ver próximo módulo':'Voltar às lições'}</button></section>`;$('#continuePath').onclick=()=>{sessionXP=0;if(justUnlocked)renderModule(nextModule.id);else renderModule(activeModule)}}
let practicePool=[],practicePosition=0,practiceLastId=null,practiceCurrent=null,practiceAnswered=false;
function shuffleArray(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}

function plainText(s){return String(s??'').replace(/<[^>]*>/g,'')}
const mathQuickCards=[
 {area:'Álgebra · Equação do 2º grau',title:'Fórmula de Bhaskara — discriminante',prompt:'Qual é a fórmula do discriminante (delta) na equação do 2º grau?',answer:'Δ = b² − 4ac',aliases:['delta = b ao quadrado menos quatro vezes a vezes c','b²-4ac','b^2-4*a*c'],explain:'O discriminante é calculado por Δ = b² − 4ac.'},
 {area:'Geometria plana',title:'Fórmula de Bhaskara — raízes',prompt:'Qual é a fórmula de Bhaskara para encontrar as raízes?',answer:'x = (−b ± √Δ) / 2a',aliases:['(-b mais ou menos raiz de delta) dividido por 2a','(-b ± raiz quadrada de delta)/(2a)','x1,2 = (-b ± √delta)/2a'],explain:'Use o discriminante Δ = b² − 4ac.'},
 {area:'Geometria plana',title:'Área do retângulo',prompt:'Qual é a fórmula da área do retângulo?',answer:'A = base × altura',aliases:['base vezes altura','b*h','b x h'],explain:'Multiplique a base pela altura.'},
 {area:'Geometria plana',title:'Área do quadrado',prompt:'Qual é a fórmula da área do quadrado?',answer:'A = lado²',aliases:['lado ao quadrado','lado vezes lado','l*l'],explain:'O lado é multiplicado por ele mesmo.'},
 {area:'Geometria plana',title:'Área do losango',prompt:'Qual é a fórmula da área do losango?',answer:'A = (diagonal maior × diagonal menor) / 2',aliases:['diagonal maior vezes diagonal menor dividido por dois','d vezes D sobre 2','D*d/2'],explain:'Multiplique as diagonais e divida o resultado por dois.'},
 {area:'Geometria plana',title:'Área do triângulo',prompt:'Qual é a fórmula da área do triângulo?',answer:'A = (base × altura) / 2',aliases:['base vezes altura dividido por dois','b*h/2'],explain:'Multiplique base e altura e divida por dois.'},
 {area:'Geometria plana',title:'Área do triângulo equilátero',prompt:'Qual é a fórmula da área do triângulo equilátero?',answer:'A = (√3 × lado²) / 4',aliases:['raiz de três vezes lado ao quadrado dividido por quatro','sqrt(3)*lado^2/4','lado ao quadrado vezes raiz de três sobre quatro'],explain:'Considere lado como a medida de qualquer um dos três lados iguais.'},
 {area:'Geometria plana',title:'Área do círculo',prompt:'Qual é a fórmula da área do círculo?',answer:'A = π × raio²',aliases:['pi vezes raio ao quadrado','pi*r^2','3,14 vezes raio ao quadrado'],explain:'O raio é elevado ao quadrado e multiplicado por π.'},
 {area:'Geometria plana',title:'Área do trapézio',prompt:'Qual é a fórmula da área do trapézio?',answer:'A = ((base maior + base menor) × altura) / 2',aliases:['base maior mais base menor vezes altura dividido por dois','(b+B)*h/2'],explain:'Some as duas bases, multiplique pela altura e divida por dois.'},
 {area:'Geometria plana',title:'Teorema de Pitágoras',prompt:'Como é escrita a relação do teorema de Pitágoras?',answer:'a² + b² = c²',aliases:['cateto ao quadrado mais cateto ao quadrado igual hipotenusa ao quadrado','cateto1^2 + cateto2^2 = hipotenusa^2'],explain:'A soma dos quadrados dos catetos é igual ao quadrado da hipotenusa.'},
 {area:'Geometria espacial',title:'Volume da esfera',prompt:'Qual é a fórmula do volume da esfera?',answer:'V = (4 × π × R³) / 3',aliases:['quatro pi raio ao cubo dividido por três','4*pi*r^3/3'],explain:'R representa o raio da esfera.'},
 {area:'Geometria espacial',title:'Área da esfera',prompt:'Qual é a fórmula da área da superfície da esfera?',answer:'A = 4 × π × R²',aliases:['quatro pi raio ao quadrado','4*pi*r^2'],explain:'R representa o raio da esfera.'},
 {area:'Geometria espacial',title:'Volume do cilindro',prompt:'Qual é a fórmula do volume do cilindro?',answer:'V = π × R² × h',aliases:['pi vezes raio ao quadrado vezes altura','pi*r^2*h'],explain:'R é o raio da base circular e h é a altura.'},
 {area:'Geometria espacial',title:'Área total do cilindro',prompt:'Qual é a fórmula da área total do cilindro?',answer:'A = 2πRh + 2πR²',aliases:['dois pi raio altura mais dois pi raio ao quadrado','2*pi*r*h+2*pi*r^2'],explain:'A fórmula soma a área lateral e as duas bases circulares.'},
 {area:'Geometria espacial',title:'Volume do cone',prompt:'Qual é a fórmula do volume do cone?',answer:'V = (π × R² × h) / 3',aliases:['pi vezes raio ao quadrado vezes altura dividido por três','pi*r^2*h/3'],explain:'R é o raio da base e h é a altura.'},
 {area:'Geometria espacial',title:'Área total do cone',prompt:'Qual é a fórmula da área total do cone?',answer:'A = πR(R + g)',aliases:['pi vezes raio vezes raio mais geratriz','pi*r*(r+g)'],explain:'R é o raio da base e g é a geratriz.'},
 {area:'Geometria espacial',title:'Volume do prisma',prompt:'Qual é a fórmula do volume de um prisma?',answer:'V = Ab × H',aliases:['area da base vezes altura','área da base multiplicada pela altura','ab*h'],explain:'Ab é a área do polígono da base e H é a altura do prisma.'},
 {area:'Geometria espacial',title:'Volume da pirâmide',prompt:'Qual é a fórmula do volume de uma pirâmide?',answer:'V = (Ab × H) / 3',aliases:['area da base vezes altura dividido por tres','ab*h/3'],explain:'Ab é a área do polígono da base e H é a altura da pirâmide.'},
 {area:'Trigonometria',title:'Cosseno',prompt:'No triângulo retângulo, como se calcula o cosseno de α?',answer:'cos α = cateto adjacente / hipotenusa',aliases:['cateto adjacente dividido pela hipotenusa','ca/hipotenusa'],explain:'Cosseno é cateto adjacente dividido pela hipotenusa.'},
 {area:'Trigonometria',title:'Seno',prompt:'No triângulo retângulo, como se calcula o seno de α?',answer:'sen α = cateto oposto / hipotenusa',aliases:['cateto oposto dividido pela hipotenusa','co/hipotenusa'],explain:'Seno é cateto oposto dividido pela hipotenusa.'},
 {area:'Trigonometria',title:'Tangente',prompt:'No triângulo retângulo, como se calcula a tangente de α?',answer:'tg α = cateto oposto / cateto adjacente',aliases:['cateto oposto dividido pelo cateto adjacente','sen alfa dividido por cos alfa','co/ca'],explain:'Tangente é cateto oposto dividido pelo adjacente.'},
 {area:'Trigonometria',title:'Relação fundamental',prompt:'Qual é a relação fundamental da trigonometria?',answer:'sen² α + cos² α = 1',aliases:['seno ao quadrado mais cosseno ao quadrado igual a um','sin^2+cos^2=1'],explain:'Essa identidade vale para qualquer ângulo.'},
 {area:'Trigonometria',title:'Lei dos senos',prompt:'Qual é a relação da lei dos senos?',answer:'a/sen A = b/sen B = c/sen C = 2R',aliases:['a dividido pelo seno de a igual b dividido pelo seno de b igual c dividido pelo seno de c igual dois r','a/sen(a)=b/sen(b)=c/sen(c)=2r'],explain:'a, b e c são lados opostos aos ângulos A, B e C; R é o raio da circunferência circunscrita.'},
 {area:'Trigonometria',title:'Lei dos cossenos',prompt:'Qual é a fórmula da lei dos cossenos para o lado a?',answer:'a² = b² + c² − 2bc cos A',aliases:['b ao quadrado mais c ao quadrado menos dois vezes b vezes c vezes cosseno de a','a^2=b^2+c^2-2*b*c*cos(a)'],explain:'A é o ângulo entre os lados b e c.'},
 {area:'Matemática financeira',title:'Juros simples',prompt:'Qual é a fórmula para calcular juros simples?',answer:'J = C × i × t',aliases:['capital vezes taxa vezes tempo','c*i*t'],explain:'C é capital, i é taxa por período e t é tempo.'},
 {area:'Matemática financeira',title:'Montante com juros simples',prompt:'Como calcular o montante usando juros simples?',answer:'M = C + J',aliases:['capital mais juros'],explain:'Montante é capital inicial mais juros.'},
 {area:'Matemática financeira',title:'Montante com juros compostos',prompt:'Qual é a fórmula do montante com juros compostos?',answer:'M = C(1 + i)^t',aliases:['capital vezes um mais taxa elevado ao tempo','c*(1+i)^t'],explain:'C é capital, i é taxa por período e t é número de períodos.'},
 {area:'Matemática financeira',title:'Juros pelo montante',prompt:'Como encontrar os juros a partir do montante e do capital?',answer:'J = M − C',aliases:['montante menos capital'],explain:'Subtraia o capital inicial do montante final.'},
 {area:'Análise combinatória',title:'Permutação simples',prompt:'Qual é a fórmula da permutação simples?',answer:'P(n) = n!',aliases:['n fatorial','p=n!'],explain:'Permutação organiza todos os n elementos.'},
 {area:'Análise combinatória',title:'Arranjo simples',prompt:'Qual é a fórmula do arranjo simples?',answer:'A(n,p) = n! / (n − p)!',aliases:['n fatorial dividido por n menos p fatorial','anp=n!/(n-p)!'],explain:'No arranjo, a ordem dos elementos importa.'},
 {area:'Análise combinatória',title:'Combinação simples',prompt:'Qual é a fórmula da combinação simples?',answer:'C(n,p) = n! / (p!(n − p)!)',aliases:['n fatorial dividido por p fatorial vezes n menos p fatorial','cnp=n!/(p!*(n-p)!)'],explain:'Na combinação, a ordem dos elementos não importa.'},
 {area:'Funções',title:'Função afim',prompt:'Qual é a forma geral de uma função afim?',answer:'f(x) = ax + b',aliases:['f de x igual a vezes x mais b','a*x+b'],explain:'a é o coeficiente angular e b é o coeficiente linear.'},
 {area:'Funções',title:'Função quadrática',prompt:'Qual é a forma geral de uma função quadrática?',answer:'f(x) = ax² + bx + c',aliases:['a x ao quadrado mais b x mais c','a*x^2+b*x+c'],explain:'a, b e c são coeficientes, com a diferente de zero.'},
 {area:'Funções',title:'Função modular',prompt:'Como é definida a função modular f(x) = |x|?',answer:'x, se x ≥ 0; −x, se x < 0',aliases:['x se x for maior ou igual a zero e menos x se x for menor que zero','x para x positivo e -x para x negativo'],explain:'O módulo representa a distância até zero, portanto nunca é negativo.'}
];
const chemistryOrganicCards=[
 ['Química orgânica · Funções oxigenadas','OH ligado a carbono saturado na cadeia é característico de qual função?','Álcool',['alcool'],'O grupo hidroxila (−OH) ligado a carbono saturado caracteriza álcool.'],
 ['Química orgânica · Funções oxigenadas','OH ligado diretamente a um anel aromático caracteriza qual função?','Fenol',['fenol'],'No fenol, a hidroxila está ligada diretamente ao anel aromático.'],
 ['Química orgânica · Funções oxigenadas','OH ligado a carbono de uma dupla ligação C=C caracteriza qual função?','Enol',['enol'],'Enóis possuem hidroxila ligada a carbono insaturado de uma dupla C=C.'],
 ['Química orgânica · Funções oxigenadas','O grupo −COOH (carboxila) identifica qual função?','Ácido carboxílico',['acido carboxilico','ácido orgânico'],'A carboxila é o grupo funcional dos ácidos carboxílicos.'],
 ['Química orgânica · Funções oxigenadas','O grupo −CHO na extremidade da cadeia caracteriza qual função?','Aldeído',['aldeido'],'A carbonila terminal ligada a hidrogênio caracteriza aldeído.'],
 ['Química orgânica · Funções oxigenadas','Uma carbonila (C=O) entre dois carbonos caracteriza qual função?','Cetona',['cetona'],'Na cetona, a carbonila fica no interior da cadeia carbônica.'],
 ['Química orgânica · Funções oxigenadas','O grupo −COO− entre dois radicais carbônicos caracteriza qual função?','Éster',['ester'],'Ésteres apresentam o grupo funcional −COO− entre cadeias carbônicas.'],
 ['Química orgânica · Funções oxigenadas','Um oxigênio ligado a dois carbonos (R−O−R’) caracteriza qual função?','Éter',['eter'],'Éteres apresentam um átomo de oxigênio entre dois grupos orgânicos.'],
 ['Química orgânica · Funções nitrogenadas','O grupo −NH₂ ligado à cadeia carbônica caracteriza qual função?','Amina',['amina'],'Aminas são derivadas da amônia pela substituição de hidrogênios por grupos orgânicos.'],
 ['Química orgânica · Funções nitrogenadas','O grupo −CONH₂ caracteriza qual função?','Amida',['amida'],'Amidas possuem carbonila ligada a nitrogênio.'],
 ['Química orgânica · Funções nitrogenadas','O grupo −C≡N caracteriza qual função?','Nitrila',['nitrila'],'Nitrilas apresentam o grupo ciano, com ligação tripla C≡N.'],
 ['Química orgânica · Funções nitrogenadas','O grupo −NO₂ ligado à cadeia carbônica caracteriza qual função?','Nitrocomposto',['nitrocomposto','composto nitro'],'Nitrocompostos apresentam o grupo nitro.'],
 ['Química orgânica · Outras funções','O grupo −SH ligado à cadeia carbônica caracteriza qual função?','Tiol',['tiol'],'Tióis são compostos orgânicos que apresentam o grupo sulfidrila.'],
 ['Química orgânica · Outras funções','Um halogênio (F, Cl, Br ou I) substituindo hidrogênio da cadeia caracteriza qual classe?','Haleto orgânico',['haleto','haleto de alquila'],'Haletos orgânicos possuem halogênio ligado a carbono.'],
 ['Química orgânica · Cadeias carbônicas','Uma cadeia com apenas ligações simples entre carbonos é classificada como?','Saturada',['cadeia saturada'],'Cadeias saturadas não apresentam ligações duplas ou triplas entre carbonos.'],
 ['Química orgânica · Cadeias carbônicas','Uma cadeia com pelo menos uma ligação dupla C=C é classificada como?','Insaturada',['cadeia insaturada'],'A presença de ligação dupla ou tripla entre carbonos torna a cadeia insaturada.'],
 ['Química orgânica · Cadeias carbônicas','Uma cadeia aberta, sem ramificações, é classificada como?','Normal',['cadeia normal','linear'],'Cadeias normais não apresentam ramificações.'],
 ['Química orgânica · Cadeias carbônicas','Uma cadeia que apresenta ramificações é classificada como?','Ramificada',['cadeia ramificada'],'A cadeia ramificada possui pelo menos um carbono fora do eixo principal.'],
 ['Química orgânica · Hidrocarbonetos','Hidrocarboneto com apenas ligações simples é chamado de?','Alcano',['alcano'],'Alcanos são hidrocarbonetos saturados de cadeia aberta.'],
 ['Química orgânica · Hidrocarbonetos','Hidrocarboneto com uma ligação dupla C=C é chamado de?','Alceno',['alceno'],'Alcenos apresentam pelo menos uma ligação dupla entre carbonos.'],
 ['Química orgânica · Hidrocarbonetos','Hidrocarboneto com uma ligação tripla C≡C é chamado de?','Alcino',['alcino'],'Alcinos apresentam pelo menos uma ligação tripla entre carbonos.'],
 ['Química orgânica · Hidrocarbonetos','Hidrocarboneto com anel benzênico é classificado como?','Aromático',['hidrocarboneto aromatico','aromático'],'Compostos aromáticos possuem sistema cíclico conjugado, como o benzeno.'],
 ['Química orgânica · Identificação','Qual é a função orgânica presente no etanol (CH₃CH₂OH)?','Álcool',['alcool'],'O grupo −OH do etanol está ligado a carbono saturado.'],
 ['Química orgânica · Identificação','Qual é a função orgânica presente no ácido acético (CH₃COOH)?','Ácido carboxílico',['acido carboxilico'],'O ácido acético apresenta o grupo carboxila −COOH.'],
 ['Química orgânica · Identificação','Qual é a função orgânica presente na propanona (acetona)?','Cetona',['cetona'],'A propanona possui carbonila entre dois carbonos.'],
 ['Química orgânica · Identificação','Qual é a função orgânica presente no metanal (formaldeído)?','Aldeído',['aldeido'],'O metanal apresenta carbonila na extremidade da cadeia.'],
 ['Química orgânica · Identificação','Qual é a função orgânica presente no acetato de etila?','Éster',['ester'],'O acetato de etila possui o grupo −COO−.'],
 ['Química orgânica · Reações orgânicas','A transformação de um álcool em aldeído ou cetona por perda de hidrogênio é chamada de?','Oxidação',['oxidacao'],'A oxidação de álcoois primários pode formar aldeídos; de secundários, cetonas.'],
 ['Química orgânica · Reações orgânicas','A reação entre ácido carboxílico e álcool que pode formar éster e água chama-se?','Esterificação',['esterificacao'],'A esterificação é uma reação típica entre ácido carboxílico e álcool.'],
 ['Química orgânica · Reações orgânicas','A quebra de uma molécula pela ação da água é chamada de?','Hidrólise',['hidrolise'],'Na hidrólise, a água participa da quebra de uma ligação química.']
];
function mathPracticePool(){return mathQuickCards.map((card,index)=>({subject:'matematica',custom:true,id:`math-${index}`,lesson:{moduleId:0,title:card.title,formula:card.answer,variables:card.explain},area:card.area,prompt:card.prompt,answer:card.answer,aliases:card.aliases||[]}))}
function chemistryPracticePool(){return chemistryOrganicCards.map((card,index)=>({subject:'quimica',custom:true,id:`chem-org-${index}`,lesson:{moduleId:0,title:card[1],formula:card[2],variables:card[4]},area:card[0],prompt:card[1],answer:card[2],aliases:card[3]}))}
function isFormulaForQuickPractice(lesson){return Boolean((lesson.formula||'').trim())}
function allSubjectLessons(){return {matematica:window.mathLessons,fisica:window.physicsLessons,quimica:window.chemLessons,biologia:window.bioLessons}}
function renderPractice(){
 const selected=read('formula-practice-subjects',['matematica','fisica','quimica','biologia']);
 app.innerHTML=`<section class="practice-setup"><h1>Treine fórmulas<br><em>sem parar.</em></h1><p class="intro">Escolha as matérias. Matemática terá somente as fórmulas selecionadas; Química também inclui reconhecimento de funções e conceitos de orgânica.</p><div class="practice-panel"><div class="practice-panel-head"><div><b>Quais matérias entram no treino?</b><small>Você pode misturar todas ou deixar apenas uma.</small></div><button class="text-button" id="toggleAllSubjects">${selected.length===4?'Desmarcar todas':'Selecionar todas'}</button></div><div class="practice-subjects">${Object.entries(subjects).map(([k,v])=>`<label class="practice-subject-option"><input type="checkbox" name="practiceSubject" value="${k}" ${selected.includes(k)?'checked':''}><span class="practice-subject-icon">${subjectIcon(k,'practice-subject-image')}</span><span>${v.name}</span><i></i></label>`).join('')}</div><div class="practice-note">🔀 <span>A ordem é embaralhada de verdade. Todas as fórmulas selecionadas passam antes de uma nova rodada começar.</span></div><button class="primary-btn" id="startPractice">Começar treino rápido →</button></div></section>`;
 const getChecks=()=>[...document.querySelectorAll('input[name="practiceSubject"]')];
 $('#toggleAllSubjects').onclick=()=>{const checks=getChecks(),all=checks.every(x=>x.checked);checks.forEach(x=>x.checked=!all);$('#toggleAllSubjects').textContent=all?'Selecionar todas':'Desmarcar todas'};
 getChecks().forEach(x=>x.addEventListener('change',()=>{$('#toggleAllSubjects').textContent=getChecks().every(c=>c.checked)?'Desmarcar todas':'Selecionar todas'}));
 $('#startPractice').onclick=()=>{const chosen=getChecks().filter(x=>x.checked).map(x=>x.value);if(!chosen.length){toast('Selecione pelo menos uma matéria.');return}save('formula-practice-subjects',chosen);startPractice(chosen)};
}
function startPractice(chosen){
 const all=allSubjectLessons();
 practicePool=chosen.flatMap(key=>{
  if(key==='matematica')return mathPracticePool();
  if(key==='quimica')return [...(all.quimica||[]).filter(isFormulaForQuickPractice).map((lesson,index)=>({subject:key,lesson,index,id:`${key}-${lesson.moduleId}-${index}`})),...chemistryPracticePool()];
  return (all[key]||[]).filter(isFormulaForQuickPractice).map((lesson,index)=>({subject:key,lesson,index,id:`${key}-${lesson.moduleId}-${index}`}));
 });
 if(!practicePool.length){toast('Não há conteúdos cadastrados nessas matérias.');return}
 practicePool=shuffleArray(practicePool);practicePosition=0;practiceLastId=null;renderPracticeQuestion();
}
function nextPracticeQuestion(){
 practicePosition++;
 if(practicePosition>=practicePool.length){practicePool=shuffleArray(practicePool);if(practicePool.length>1&&practicePool[0].id===practiceLastId)[practicePool[0],practicePool[1]]=[practicePool[1],practicePool[0]];practicePosition=0}
 renderPracticeQuestion();
}
function renderPracticeQuestion(){
 practiceCurrent=practicePool[practicePosition];practiceAnswered=false;
 const {subject:key,lesson}=practiceCurrent;practiceLastId=practiceCurrent.id;
 const prompt=practiceCurrent.prompt||`Qual é a relação de ${lesson.title.toLowerCase()}?`;
 const area=practiceCurrent.area||`Conteúdo de ${subjects[key].name}`;
 app.innerHTML=`<section class="practice-screen"><div class="practice-top"><button class="back-button" id="exitPractice">← Sair do treino</button><div class="practice-random-badge">🔀 ORDEM ALEATÓRIA</div></div><div class="practice-question-card"><div class="practice-question-meta">${subjectIcon(key,'practice-meta-icon')} ${subjects[key].name.toUpperCase()} · ${area.toUpperCase()}</div><h1>${prompt}</h1><div class="fill-wrap practice-answer-wrap"><input id="practiceAnswer" autocomplete="off" placeholder="Digite sua resposta"><span class="fill-hint">Você pode responder com símbolos ou por extenso. Ex.: delta, vezes, dividido por, ao quadrado.</span></div><button class="primary-btn" id="submitPractice">Verificar resposta</button><div class="feedback" id="practiceFeedback"></div></div><div class="practice-bottom"><span>Sem tempo limite</span><span>${practicePosition+1} nesta rodada · ${practicePool.length} conteúdos</span><span>Continue enquanto quiser</span></div></section>`;
 $('#exitPractice').onclick=renderPractice;$('#submitPractice').onclick=checkPracticeAnswer;$('#practiceAnswer').addEventListener('keydown',e=>{if(e.key==='Enter'&&!practiceAnswered)checkPracticeAnswer()});
}
function recordPracticeResult(key,correct){
 const oldActive=activeSubject,oldProgress=progress;
 const fallback=key==='matematica'?read('formula-progress',{completed:[],xp:0,streak:0,attempts:0,correct:0}):{completed:[],xp:0,streak:0,attempts:0,correct:0};
 const p=read(`formula-progress-${key}`,fallback);p.attempts=(p.attempts||0)+1;if(correct){p.correct=(p.correct||0)+1;p.xp=(p.xp||0)+10}save(`formula-progress-${key}`,p);if(key==='matematica')save('formula-progress',p);markLocalProgressChanged();
 activeSubject=oldActive;progress=key===oldActive?p:oldProgress;updateStats();
}
function checkPracticeAnswer(){
 if(practiceAnswered)return;
 const input=$('#practiceAnswer'),given=input.value.trim();if(!given){toast('Digite uma resposta primeiro.');return}
 const item=practiceCurrent,expected=item.answer||item.lesson.formula;
 const accepted=[expected,...(item.aliases||[])];
 const normalizedGiven=normalize(given);
 const correct=accepted.some(value=>normalize(value)===normalizedGiven);
 practiceAnswered=true;recordPracticeResult(item.subject,correct);input.disabled=true;$('#submitPractice').style.display='none';
 const f=$('#practiceFeedback');f.className='feedback show '+(correct?'good':'bad');
 f.innerHTML=`<b>${correct?'Isso! Resposta reconhecida. +10 XP':'Vamos fixar esse conceito.'}</b><p><strong>Resposta:</strong> ${expected}<br>${item.lesson.variables||item.lesson.desc||''}</p><button class="primary-btn" id="nextPractice">Próxima questão →</button>`;
 $('#nextPractice').onclick=nextPracticeQuestion;
}
function renderCollection(){const html=currentLessonsData.map((l,i)=>`<article class="collection-card"><small>MÓDULO ${String(l.moduleId).padStart(2,'0')} · ${l.title}</small><div class="formula-preview">${l.formula}</div><p>${l.variables}</p></article>`).join('');app.innerHTML=`<section class="module-view"><div class="eyebrow">SEU CADERNO · ${currentLessonsData.length} FÓRMULAS</div><h1>Relações para<br><em>memorizar.</em></h1><p class="intro">O caderno reúne as relações cadastradas na trilha de ${subjects[activeSubject].name}.</p><div class="collection-grid">${html}</div></section>`}
function renderProgress(){const done=completedLessonsCount();app.innerHTML=`<section class="module-view"><div class="eyebrow">SEU DESEMPENHO</div><h1>Olha só o<br><em>seu avanço.</em></h1><div class="progress-cards"><article><b>${progress.xp}</b><small>XP acumulados</small></article><article><b>${done}/${totalLessonsCount()}</b><small>fórmulas estudadas</small></article><article><b>${progress.attempts?Math.round(progress.correct/progress.attempts*100):0}%</b><small>taxa de acerto</small></article></div><p class="intro">${unlockedCount()} de ${currentModules.length} módulos liberados. O avanço é salvo neste dispositivo e continua disponível sem internet.</p><div class="backup-panel"><h2>Seu progresso, protegido</h2><p>Exporte um arquivo de backup para guardar seus avanços ou transferi-los para outro celular/computador. A exportação e a importação funcionam offline.</p><div class="backup-actions"><button class="primary-btn" id="exportBackup">↓ Exportar meu progresso</button><button class="secondary-btn" id="importBackup">↑ Importar backup</button><input type="file" id="backupFile" accept="application/json,.json" hidden></div><small>O backup inclui XP, lições concluídas, estatísticas e matérias selecionadas.</small></div></section>`;$('#exportBackup').onclick=exportProgressBackup;$('#importBackup').onclick=()=>$('#backupFile').click();$('#backupFile').onchange=importProgressBackup}
function exportProgressBackup(){const data={app:'formula',version:1,createdAt:new Date().toISOString(),storage:{}};for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i);if(key&&key.startsWith('formula-'))data.storage[key]=localStorage.getItem(key)}const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`formula-backup-${new Date().toISOString().slice(0,10)}.json`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);toast('Backup exportado! Guarde o arquivo em um lugar seguro.')}
function importProgressBackup(event){const file=event.target.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const data=JSON.parse(reader.result);if(data.app!=='formula'||!data.storage||typeof data.storage!=='object')throw new Error('invalid');if(!confirm('Importar este backup? Os dados Fórmula atuais neste navegador serão substituídos pelos dados do arquivo.'))return;Object.keys(data.storage).filter(k=>k.startsWith('formula-')).forEach(k=>localStorage.setItem(k,data.storage[k]));toast('Backup importado. Atualizando seus avanços...');setTimeout(()=>location.reload(),650)}catch{toast('Não foi possível ler esse backup do Fórmula.')}finally{event.target.value=''}};reader.readAsText(file)}
function navigateView(view){document.querySelectorAll('.nav-item,.mobile-nav-item').forEach(x=>x.classList.toggle('active',x.dataset.view===view));({journey:renderHome,practice:renderPractice,collection:renderCollection,progress:renderProgress})[view]?.()}
document.querySelectorAll('.nav-item,.mobile-nav-item').forEach(b=>b.onclick=()=>navigateView(b.dataset.view));$('#profileButton').onclick=()=>toast('Seu perfil está em construção.');$('#mobileMenuButton').onclick=()=>navigateView('journey');
function updateOfflineStatus(){const el=$('#offlineStatus');if(!el)return;const offline=!navigator.onLine;el.classList.toggle('is-offline',offline);const label=el.querySelector('span:last-child');if(label)label.textContent=offline?'Offline · conteúdo salvo':(navigator.serviceWorker?.controller?'Offline pronto':'Preparando offline')}
window.addEventListener('online',updateOfflineStatus);window.addEventListener('offline',updateOfflineStatus);
if('serviceWorker' in navigator && location.protocol!=='file:'){window.addEventListener('load',()=>{navigator.serviceWorker.register('./service-worker.js').then(reg=>{updateOfflineStatus();navigator.serviceWorker.ready.then(updateOfflineStatus);reg.addEventListener('updatefound',()=>{const worker=reg.installing;if(worker)worker.addEventListener('statechange',()=>{if(worker.state==='activated')updateOfflineStatus()})});navigator.serviceWorker.addEventListener('controllerchange',updateOfflineStatus)}).catch(()=>{const el=$('#offlineStatus');if(el){el.querySelector('span:last-child').textContent='Offline não configurado';el.classList.add('is-offline')}})});}
if(navigator.storage?.persist){navigator.storage.persist().catch(()=>false)}
const savedSubject=localStorage.getItem('formula-subject')||'matematica';subject(subjects[savedSubject]?savedSubject:'matematica');updateStats();


// Sincronizador: cada usuário possui uma linha própria na tabela formula_progress.
window.formulaSync={client:null,user:null,timer:null,running:false,
 schedule(){clearTimeout(this.timer);this.timer=setTimeout(()=>this.sync(),900)},
 async connect(client,user){this.client=client;this.user=user;if(!user)return;const owner=localStorage.getItem('formula-owner-id');if(owner&&owner!==user.id){FORMULA_SUBJECTS.forEach(k=>localStorage.removeItem(`formula-progress-${k}`));localStorage.removeItem('formula-progress');localStorage.removeItem('formula-local-updated-at')}
  // Sem marcador anterior, os dados locais existentes são migrados para a primeira conta usada neste aparelho.
  localStorage.setItem('formula-owner-id',user.id);await this.sync();},
 async sync(){if(this.running||!this.client||!this.user||!navigator.onLine)return;this.running=true;try{const userId=this.user.id;const local=readAllFormulaProgress();const {data:row,error:readError}=await this.client.from('formula_progress').select('data,updated_at').eq('user_id',userId).maybeSingle();if(readError)throw readError;let merged=local;if(row?.data){merged=mergeFormulaProgress(local,row.data);}
   writeAllFormulaProgress(merged);const stamp=new Date().toISOString();const {error:writeError}=await this.client.from('formula_progress').upsert({user_id:userId,data:merged,updated_at:stamp},{onConflict:'user_id'});if(writeError)throw writeError;localStorage.setItem('formula-local-updated-at',stamp);const current=merged[activeSubject]||EMPTY_PROGRESS();progress=current;updateStats();
   const status=$('#offlineStatus');if(status&&navigator.onLine){const label=status.querySelector('span:last-child');if(label)label.textContent='Progresso sincronizado';status.classList.remove('is-offline')}
  }catch(error){console.warn('Fórmula: sincronização pendente.',error);const status=$('#offlineStatus');if(status){const label=status.querySelector('span:last-child');if(label)label.textContent=navigator.onLine?'Sincronização pendente':'Offline · salvo neste aparelho'}}finally{this.running=false}},
};
window.addEventListener('online',()=>window.formulaSync?.schedule());
// Autenticação do Fórmula com Supabase Auth.
// A chave publishable é própria para uso no navegador; nunca colocar a secret key aqui.
(function setupSupabaseAuth(){
 const screen=document.getElementById('authScreen');
 if(!screen)return;
 const appShell=document.querySelector('.app-shell');
 const mobileNav=document.getElementById('mobileBottomNav');
 const feedback=document.getElementById('authFeedback');
 const loginForm=document.getElementById('loginForm');
 const signupForm=document.getElementById('signupForm');
 const tabs=[...screen.querySelectorAll('[data-auth-tab]')];
 const SUPABASE_URL='https://bugxqziosulqvriplrcf.supabase.co';
 const SUPABASE_PUBLISHABLE_KEY='sb_publishable_tqTJfh5HlY1NV09AuBWJ-g_Revu-iG_';
 const supabaseLib=window.supabase;
 let client=null;

 function showFeedback(message,type='info'){
  feedback.textContent=message;
  feedback.className='auth-feedback'+(type==='error'?' is-error':type==='success'?' is-success':'');
 }
 function setTab(tab){
  tabs.forEach(button=>{const active=button.dataset.authTab===tab;button.classList.toggle('active',active);button.setAttribute('aria-selected',String(active))});
  loginForm.hidden=tab!=='login';signupForm.hidden=tab!=='signup';
  feedback.textContent='';feedback.className='auth-feedback';
  document.getElementById('authTitle').innerHTML=tab==='login'?'Que bom ter você<br><em>de volta.</em>':'Seu próximo nível<br><em>começa aqui.</em>';
 }
 function setBusy(form,busy,label){
  const button=form.querySelector('button[type="submit"]');
  if(!button)return;
  if(busy){button.dataset.originalText=button.innerHTML;button.disabled=true;button.textContent=label}
  else{button.disabled=false;if(button.dataset.originalText)button.innerHTML=button.dataset.originalText}
 }
 function enterApp(){screen.hidden=true;if(appShell)appShell.hidden=false;if(mobileNav)mobileNav.hidden=false;}
 function requireLogin(){screen.hidden=false;if(appShell)appShell.hidden=true;if(mobileNav)mobileNav.hidden=true;}
 function friendlyError(error){
  const message=(error?.message||'').toLowerCase();
  if(message.includes('invalid login credentials'))return 'E-mail ou senha incorretos. Confira os dados e tente novamente.';
  if(message.includes('email not confirmed'))return 'Confirme seu e-mail pelo link enviado antes de entrar.';
  if(message.includes('user already registered'))return 'Este e-mail já possui uma conta. Entre ou use outro e-mail.';
  if(message.includes('password should be at least'))return 'A senha precisa ter pelo menos 8 caracteres.';
  if(message.includes('rate limit'))return 'Muitas tentativas em pouco tempo. Aguarde alguns minutos e tente novamente.';
  return error?.message||'Não foi possível concluir. Verifique sua conexão e tente novamente.';
 }
 tabs.forEach(button=>button.addEventListener('click',()=>setTab(button.dataset.authTab)));

 if(!supabaseLib?.createClient){
  // Se o app já foi autenticado neste aparelho, permite estudar offline usando o progresso local.
  const cachedAuthKey=Object.keys(localStorage).find(key=>key.startsWith('sb-')&&key.endsWith('-auth-token'));
  if(!navigator.onLine&&cachedAuthKey){enterApp();const status=$('#offlineStatus');if(status){const label=status.querySelector('span:last-child');if(label)label.textContent='Offline · progresso salvo neste aparelho';status.classList.add('is-offline')}window.addEventListener('online',()=>location.reload(),{once:true});return;}
  requireLogin();showFeedback('Não foi possível carregar o serviço de autenticação. Conecte-se à internet e atualize a página.','error');return;
 }
 client=supabaseLib.createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY,{
  auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}
 });
 window.formulaSupabaseClient=client;

 loginForm.addEventListener('submit',async event=>{
  event.preventDefault();
  const email=document.getElementById('loginEmail').value.trim();
  const password=document.getElementById('loginPassword').value;
  setBusy(loginForm,true,'Entrando...');showFeedback('');
  try{
   const {error}=await client.auth.signInWithPassword({email,password});
   if(error)throw error;
   showFeedback('Login realizado! Abrindo o Fórmula...','success');
  }catch(error){showFeedback(friendlyError(error),'error')}
  finally{setBusy(loginForm,false)}
 });

 signupForm.addEventListener('submit',async event=>{
  event.preventDefault();
  const name=document.getElementById('signupName').value.trim();
  const email=document.getElementById('signupEmail').value.trim();
  const password=document.getElementById('signupPassword').value;
  const confirm=document.getElementById('signupPasswordConfirm').value;
  if(password!==confirm){showFeedback('As senhas não coincidem. Confira os dois campos.','error');document.getElementById('signupPasswordConfirm').focus();return;}
  if(password.length<8){showFeedback('Use uma senha com pelo menos 8 caracteres.','error');return;}
  setBusy(signupForm,true,'Criando conta...');showFeedback('');
  try{
   const redirectTo=window.location.origin+window.location.pathname;
   const {data,error}=await client.auth.signUp({
    email,password,
    options:{emailRedirectTo:redirectTo,data:{full_name:name}}
   });
   if(error)throw error;
   if(data.session){showFeedback('Conta criada! Abrindo o Fórmula...','success')}
   else{showFeedback('Cadastro iniciado! Enviamos um link de confirmação para seu e-mail. Confirme o endereço e depois volte aqui para entrar.','success');setTab('login');document.getElementById('loginEmail').value=email;}
  }catch(error){showFeedback(friendlyError(error),'error')}
  finally{setBusy(signupForm,false)}
 });

 // Verifica a sessão salva neste dispositivo. Sem sessão válida, mantém a tela de acesso.
 requireLogin();
 client.auth.getSession().then(({data,error})=>{
  if(error){showFeedback('Não foi possível verificar sua sessão. Tente atualizar a página.','error');return;}
  if(data.session){enterApp();window.formulaSync.connect(client,data.session.user)}
 }).catch(()=>showFeedback('Não foi possível conectar ao Supabase. Verifique sua internet.','error'));
 client.auth.onAuthStateChange((event,session)=>{
  if(session && ['SIGNED_IN','TOKEN_REFRESHED','INITIAL_SESSION','USER_UPDATED'].includes(event)){enterApp();window.formulaSync.connect(client,session.user)}
  if(event==='SIGNED_OUT'){window.formulaSync.user=null;window.formulaSync.client=null;requireLogin();}
 });

 // O botão de perfil também oferece uma saída explícita da conta.
 const profileButton=document.getElementById('profileButton');
 if(profileButton){profileButton.onclick=async()=>{
  if(!client)return;
  const {data}=await client.auth.getSession();
  if(!data.session){requireLogin();return;}
  if(window.confirm('Deseja sair da sua conta do Fórmula neste dispositivo?')){
   const {error}=await client.auth.signOut();
   if(error)showFeedback(friendlyError(error),'error');
  }
 };}
})();
