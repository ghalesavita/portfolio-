// Wait for DOM
document.addEventListener('DOMContentLoaded', function(){
  // Populate the copyright year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('nav');
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Close mobile nav on link click
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> nav.classList.remove('open')));

  // Theme toggle (dark / light)
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  // Load saved theme
  const saved = localStorage.getItem('theme');
  if(saved) root.setAttribute('data-theme', saved);
  themeToggle.addEventListener('click', ()=>{
    const cur = root.getAttribute('data-theme');
    const next = cur === 'dark' ? '' : 'dark';
    if(next) root.setAttribute('data-theme', next); else root.removeAttribute('data-theme');
    localStorage.setItem('theme', next);
  });

  // Contact form basic handler (no backend) - show success and reset
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Thanks! Your message has been captured locally. Replace this with a real backend or EmailJS.');
    form.reset();
  });

 
  const back = document.getElementById('back-to-top');
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 600) back.classList.remove('hidden'); else back.classList.add('hidden');
  });

 
  const typedEl = document.getElementById('typed');
  const phrases = ['Web Developer', 'Frontend Engineer', 'UI Enthusiast'];
  let pi = 0, ci = 0, deleting = false;
  function tick(){
    const full = phrases[pi];
    if(!deleting){
      typedEl.textContent = full.slice(0, ci+1);
      ci++;
      if(ci === full.length){ deleting = true; setTimeout(tick, 900); return; }
    } else {
      typedEl.textContent = full.slice(0, ci-1);
      ci--;
      if(ci === 0){ deleting = false; pi = (pi+1) % phrases.length; }
    }
    setTimeout(tick, deleting ? 80 : 120);
  }
  tick();

});
