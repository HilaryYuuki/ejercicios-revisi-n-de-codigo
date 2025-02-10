const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// cambie nombre de las variables para que sean más descriptivas, ademas cambie el simbolo # debido a que es una clase y no un id
const name = document.querySelector('.name'); 
const blog = document.querySelector('.blog');
const location1 = document.querySelector('.location');

async function displayUser(username) {

  name.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const body = await response.json(); //agregue una variable que contuviera otro await y le puse .json
  console.log(body);
  //Cambie las comillas simples por apostrofe grave, y un pequeño texto para dar un mayor entendimiento 
  name.textContent = `Nombre: ${body.name}`;
  blog.textContent = `Blog: ${body.blog}`;// cambie el # por un punto ya que puse todas en clases y no id 
  location1.textContent = `Localización: ${body.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  name.textContent = `Algo salió mal: ${err}`;
}

displayUser('stolinski').catch(handleError);