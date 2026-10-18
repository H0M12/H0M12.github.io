(() => { const c=window.SITE_CONTENT; const strings={en:{skip:'Skip to content',menuLabel:'Open menu',gameType:'GAME',webType:'WEB PROJECT',formHelp:'This form opens a draft in your email app. Review and send it there.',whatsapp:'Chat on WhatsApp',photo:'Portrait of Hamdi',navLabel:'Main navigation',artLabel:'Abstract metallic sculpture',navAbout:'About',navSkills:'Skills',navProjects:'Projects',navContact:'Contact',theme:'Graphite',eyebrow:'ENGINEER / WEB DEVELOPER',heroTitle:'Engineering the<br><em>digital experience.</em>',heroText:'I’m Hamdi, an engineer and web developer interested in building modern, elegant, and functional digital experiences.',explore:'Explore my work',contactMe:'Contact me',cv:'CV · Coming soon',artCaption:'Original CSS study · metallic form',scroll:'Scroll to explore',aboutEyebrow:'01 / ABOUT',aboutTitle:'Building ideas<br><em>into reality.</em>',aboutText:'I’m Hamdi, an engineer and web developer interested in technology, modern web experiences, and creating digital products that combine thoughtful design with practical functionality.',editable:'Thoughtful interfaces. Practical functionality. A clear purpose behind every detail.',skillsEyebrow:'02 / CAPABILITIES',skillsTitle:'A focused<br><em>toolkit.</em>',projectsEyebrow:'03 / SELECTED WORK',projectsTitle:'Made with<br><em>intention.</em>',illustrative:'Illustrative cover · not a screenshot',abstract:'Abstract CSS cover · not a screenshot',expiry:'Download links valid until 18 October 2027 — not permanent.',apk:'Android APK',exe:'Windows EXE',visit:'Visit project ↗',contactEyebrow:'04 / CONTACT',contactTitle:'Let’s build<br><em>something great.</em>',name:'Name',email:'Email',subject:'Subject',message:'Message',send:'Open email draft',footer:'A considered digital practice by Hamdi.',back:'Back to top ↑',required:'Please complete every field with valid information.',draft:'Your email app should now contain a draft. Nothing was sent automatically.'},ar:{skip:'انتقل إلى المحتوى',menuLabel:'فتح القائمة',gameType:'لعبة',webType:'مشروع ويب',formHelp:'هذا النموذج يفتح مسودة في تطبيق بريدك. راجعها وأرسلها من هناك.',whatsapp:'تواصل عبر واتساب',photo:'صورة حمدي الشخصية',navLabel:'التنقل الرئيسي',artLabel:'شكل معدني تجريدي',navAbout:'نبذة',navSkills:'المهارات',navProjects:'المشاريع',navContact:'تواصل',theme:'جرافيت',eyebrow:'مهندس / مطوّر ويب',heroTitle:'هندسة<br><em>التجربة الرقمية.</em>',heroText:'أنا حمدي، مهندس ومطوّر ويب مهتم ببناء تجارب رقمية حديثة وأنيقة وعملية.',explore:'استكشف أعمالي',contactMe:'تواصل معي',cv:'السيرة الذاتية · قريبًا',artCaption:'دراسة CSS أصلية · شكل معدني',scroll:'مرّر للاستكشاف',aboutEyebrow:'٠١ / نبذة',aboutTitle:'نحوّل الأفكار<br><em>إلى واقع.</em>',aboutText:'أنا حمدي، مهندس ومطوّر ويب مهتم بالتقنية وتجارب الويب الحديثة وصناعة منتجات رقمية تجمع بين التصميم المدروس والوظيفة العملية.',editable:'واجهات مدروسة. وظائف عملية. وهدف واضح وراء كل تفصيلة.',skillsEyebrow:'٠٢ / القدرات',skillsTitle:'عدة عمل<br><em>مركّزة.</em>',projectsEyebrow:'٠٣ / أعمال مختارة',projectsTitle:'صُنعت<br><em>بقصد.</em>',illustrative:'غلاف توضيحي · ليس لقطة شاشة',abstract:'غلاف CSS تجريدي · ليس لقطة شاشة',expiry:'روابط التحميل صالحة حتى ١٨ أكتوبر ٢٠٢٧ — وليست دائمة.',apk:'APK لأندرويد',exe:'EXE لويندوز',visit:'زيارة المشروع ↗',contactEyebrow:'٠٤ / تواصل',contactTitle:'لنبنِ<br><em>شيئًا رائعًا.</em>',name:'الاسم',email:'البريد الإلكتروني',subject:'الموضوع',message:'الرسالة',send:'فتح مسودة بريد',footer:'ممارسة رقمية مدروسة من حمدي.',back:'العودة للأعلى ↑',required:'يرجى إكمال الحقول ببيانات صحيحة.',draft:'يفترض أن يحتوي تطبيق البريد لديك على مسودة الآن. لم يتم الإرسال تلقائيًا.'}};
const $=s=>document.querySelector(s);
const storage={get(k){try{return localStorage.getItem(k)}catch{return null}},set(k,v){try{localStorage.setItem(k,v)}catch{}}};
let lang=storage.get('eng-lang')||(navigator.language.startsWith('ar')?'ar':'en');
if(!strings[lang])lang='en';
let graphite=storage.get('eng-theme')==='graphite';
function render(){
 const t=strings[lang],g=c.projects.game,w=c.projects.wallpapers;
 document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 document.body.classList.toggle('graphite',graphite);
 document.querySelectorAll('[data-i18n]').forEach(e=>{if(t[e.dataset.i18n]!==undefined)e.innerHTML=t[e.dataset.i18n]});
 document.querySelectorAll('[data-i18n-aria]').forEach(e=>e.setAttribute('aria-label',t[e.dataset.i18nAria]));
 $('#langToggle').textContent=lang==='en'?'عربي':'English';
 $('#themeToggle').textContent=graphite?(lang==='en'?'Titanium':'فضي'):(lang==='en'?'Graphite':'جرافيت');
 $('#gameTitle').textContent=lang==='en'?g.titleEn:g.title;
 $('#gameDescription').textContent=lang==='en'?g.descriptionEn:g.description;
 $('#wallpaperTitle').textContent=lang==='en'?w.titleEn:w.title;
 $('#wallpaperDescription').textContent=lang==='en'?w.descriptionEn:w.description;
 $('.profile').alt=t.photo;
 $('#formStatus').textContent='';
}
function fill(){
 const g=c.projects.game,w=c.projects.wallpapers;
 $('#gameVersion').textContent=g.version;$('#apkLink').href=g.apk;$('#exeLink').href=g.exe;$('#wallpaperLink').href=w.url;
 $('.profile').src=c.profileImage;
 $('#skillList').innerHTML=c.skills.map(x=>`<div class="skill">${x}</div>`).join('');
 const names={facebook:'Facebook',whatsapp:'WhatsApp',github:'GitHub',telegram:'Telegram'},marks={facebook:'f',whatsapp:'◉',github:'⌘',telegram:'➤'};
 $('#socials').innerHTML=Object.entries(c.socials).map(([k,v])=>`<a href="${v}" aria-label="${names[k]}" target="_blank" rel="noopener noreferrer"><b aria-hidden="true">${marks[k]}</b> ${names[k]}</a>`).join('');
 $('#year').textContent=new Date().getFullYear();
}
$('#themeToggle').onclick=()=>{graphite=!graphite;storage.set('eng-theme',graphite?'graphite':'titanium');render()};
$('#langToggle').onclick=()=>{lang=lang==='en'?'ar':'en';storage.set('eng-lang',lang);render()};
const menu=$('.menu-toggle');
menu.onclick=()=>{const open=$('#menu').classList.toggle('open');menu.setAttribute('aria-expanded',String(open))};
document.querySelectorAll('.nav-links a').forEach(a=>a.onclick=()=>{$('#menu').classList.remove('open');menu.setAttribute('aria-expanded','false')});
$('#contactForm').onsubmit=e=>{
 e.preventDefault();const f=new FormData(e.currentTarget),t=strings[lang];
 if(!f.get('name').trim()||!f.get('subject').trim()||!f.get('message').trim()||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.get('email'))){$('#formStatus').textContent=t.required;return}
 const body=`Name: ${f.get('name')}\nEmail: ${f.get('email')}\n\n${f.get('message')}`;
 location.href=`mailto:${c.email}?subject=${encodeURIComponent(f.get('subject'))}&body=${encodeURIComponent(body)}`;
 $('#formStatus').textContent=t.draft;
};
fill();render();})();
