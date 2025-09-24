// Este array es para almacenar los nombres
let amigos = [];

/** Se agrega un nombre al array 'amigos' si el input es válido
 * y luego sw actualiza la lista en pantalla */

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === '') {
    alert('No ingresaste ningún nombre');
    return;
  }

  amigos.push(nombre);
  actualizarLista();

  // Esto limpia y devuelve el foco al input
  input.value = '';
  input.focus();
}

/** Aquí recorre el array 'amigos' y renderiza cada nombre
 * dentro del contenedor de lista en el DOM */
function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

/** Se elige un nombre al azar del array 'amigos' y lo muestra,
 * pero si la lista está vacía, avisa con una alerta
 */
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No ingresaste ningún nombre');
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const seleccionado = amigos[indice];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  const li = document.createElement('li');
  li.textContent = `El amigo secreto es: ${seleccionado}`;
  resultado.appendChild(li);
}
