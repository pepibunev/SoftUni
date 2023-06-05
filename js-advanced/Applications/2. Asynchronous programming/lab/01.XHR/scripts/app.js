async function loadRepos() {
   const url = `https://api.github.com/users/pepibunev/repos`;

   httpRequest = new XMLHttpRequest();
   httpRequest.addEventListener('readystatechange', reposLoad);
   httpRequest.open('GET', url);
   httpRequest.send();
   
   function reposLoad() {
      if (httpRequest.readyState === 4 && httpRequest.status === 200){
         document.getElementById('res').textContent = httpRequest.responseText;
      }
   }
}