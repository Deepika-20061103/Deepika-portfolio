const texts=['Data Science Student','AI Enthusiast','Future AI Engineer'];
let i=0,j=0,d=false;
function type(){
 let t=texts[i];
 document.getElementById('typing').textContent=t.substring(0,j);
 d?j--:j++;
 if(j>t.length){d=true}
 if(j<0){d=false;i=(i+1)%texts.length;j=0}
 setTimeout(type,d?60:120);
}
type();
function toggleTheme(){document.body.classList.toggle('dark');}
