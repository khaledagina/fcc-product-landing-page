const clock=document.getElementById('clock');
let t=25*60;
setInterval(()=>{t=t>0?t-1:25*60;clock.textContent=String(Math.floor(t/60)).padStart(2,'0')+':'+String(t%60).padStart(2,'0')},1000);
const els=document.querySelectorAll('.feature,.plan,.steps li,.video-wrap');
els.forEach(e=>e.classList.add('reveal'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
els.forEach(e=>io.observe(e));
