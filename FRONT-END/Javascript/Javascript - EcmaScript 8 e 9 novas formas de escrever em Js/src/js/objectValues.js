// antes
const cursosChave = Object.keys(cursos).map(chave => cursos[chave]);
// document.getElementById('cursosChave').innerHTML = `<ul>${cursosChave.map(curso => `<li>${curso}</li>`)}</ul>`;
renderizarLista("cursosChave", cursosChave);

// depois
const cursosKeys = Object.values(cursos);
// document.getElementById("cursosValues").innerHTML = `<ul>${cursosKeys.map(cursos => `<li>${cursos}</li>`)}</ul>`
renderizarLista("cursosValues", cursosKeys);