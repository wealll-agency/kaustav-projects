document.querySelectorAll('.faq button').forEach(btn=>{
  btn.addEventListener('click',()=>btn.classList.toggle('active'));
});

document.querySelectorAll('.counter').forEach(counter=>{
  const target=Number(counter.dataset.target);
  const obs=new IntersectionObserver(entries=>{
    if(!entries[0].isIntersecting) return;
    let n=0, step=Math.max(1,Math.ceil(target/45));
    const tick=()=>{
      n=Math.min(target,n+step);
      counter.textContent=n;
      if(n<target) requestAnimationFrame(tick);
    };
    tick();
    obs.disconnect();
  });
  obs.observe(counter);
});

document.getElementById('leadForm').addEventListener('submit', e=>{
  e.preventDefault();
  const status=document.getElementById('formStatus');
  status.textContent='Thank you! Your enquiry has been recorded.';
  status.style.color='#16834a';
  e.target.reset();
});
