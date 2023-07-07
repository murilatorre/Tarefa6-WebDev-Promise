function dark_mode(){
 let background=document.querySelector('body');
  background.classList.toggle('dm_background');
 let headers=document.querySelectorAll('.headers_1_2');
  headers[0].classList.toggle('dm_headers_1_2');
  headers[1].classList.toggle('dm_headers_1_2');
  headers[2].classList.toggle('dm_headers_1_2');
 let h4=document.querySelectorAll('h4');
  for(let i=0;i<=6;i++){
    h4[i].classList.toggle('dm_h4');
  }
 let atalhos=document.querySelectorAll('.atalhos');
  for(let j=0;j<=6;j++){
    atalhos[j].classList.toggle('dm_atalhos');
  }
 let mim=document.querySelector('.mim');
  mim.classList.toggle('dm_mim_web');
 let web=document.querySelector('.web');
  web.classList.toggle('dm_mim_web');
 let link=document.querySelectorAll('.link');
  link[0].classList.toggle('dm_link');
 let button=document.querySelectorAll('button')
  if (button[0].innerText=='Dark Mode'){
    button[0].innerText='Light Mode';
    button[0].classList.add('lm_button');
  }
  else{
    button[0].innerText='Dark Mode';
    button[0].classList.remove('lm_button');
  }
  button[1].classList.toggle('dm_git')
 return
}

/*código da API GitHub*/
let username_span = document.querySelector('#username')
let link_span = document.querySelector('#link')
let imagem = document.querySelector('#imagem_github')
async function github(){
  let res = await fetch("https://api.github.com/users/murilatorre");
  let json = await res.json();
  username_span.innerText=json.login
  link_span.innerHTML=json.html_url
  link_span.href=json.html_url
  imagem.src = json.avatar_url
  await new Promise(resolve => setTimeout(resolve, 10));
  imagem.style.height = '200px';
}