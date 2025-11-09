// main.js - navbar mobile + reveal animations + small niceties
document.addEventListener('DOMContentLoaded', () => {
  // mobile nav toggle
  const burger = document.getElementById('burger');
  const nav = document.getElementById('nav');
  burger && burger.addEventListener('click', () => {
    if(nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });

  // smooth scroll for internal anchors (covers nav links as well)
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // reveal on scroll (IntersectionObserver)
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
      }
    });
  },{threshold:0.12});

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
});
