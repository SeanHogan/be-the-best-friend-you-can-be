// Make a bookmark with this as the URL

javascript:var s=document.getElementById('happyScript');
if(s){s.parentNode.removeChild(s);} s=document.createElement('script');
s.setAttribute('src','https://raw.github.com/SeanHogan/be-the-best-friend-you-can-be/master/script.js'); 
s.setAttribute('type','text/javascript');s.setAttribute('id','happyScript');
document.body.appendChild(s);void(0);