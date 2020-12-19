export const Users = ()=>{
const body = document.querySelector('.main');
fetch('https://jsonplaceholder.typicode.com/users')
.then( res => res.json())
.then( data =>{
body.innerHTML ="";
body.innerHTML += '<h1 class="titulo">All users from jsonplaceholder</h1><br>';
data.forEach( data =>{
  // console.log(data)
  
  body.innerHTML += `
  <div class="carduser animated fadeIn">
  <p>${data.name}</p>
  <p>${data.username}</p>
  <p>${data.email}</p>
  <p>${data.phone}</p>
  <p><a href="http://${data.website}">${data.website}</a></p>
  </div>`;
})

})


}