
document.addEventListener('DOMContentLoaded',()=>{
 const preloader=document.getElementById('sitePreloader');
 const hidePreloader=()=>{ if(preloader) preloader.classList.add('is-hidden'); };
 window.addEventListener('load',()=>setTimeout(hidePreloader,450));
 setTimeout(hidePreloader,4000);
 const top=document.getElementById('backTop');
 if(top){addEventListener('scroll',()=>top.style.display=scrollY>450?'grid':'none');top.onclick=()=>scrollTo({top:0,behavior:'smooth'});}
 document.querySelectorAll('.quote-form').forEach(form=>form.addEventListener('submit',e=>{
   e.preventDefault();
   const v=n=>form.querySelector(`[name="${n}"]`)?.value||'';
   const subject=encodeURIComponent('Request for Quote - TURQ DUMYAT Technical Contracting LLC');
   const body=encodeURIComponent(`Name: ${v('name')}\nCompany: ${v('company')}\nEmail: ${v('email')}\nPhone: ${v('phone')}\nService: ${v('service')}\n\nProject Details:\n${v('message')}`);
   location.href=`mailto:info@dumyat.ae?subject=${subject}&body=${body}`;
 }));
});
