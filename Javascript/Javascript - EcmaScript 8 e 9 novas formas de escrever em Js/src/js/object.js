const cursos = {
    node : 90,
    angular : 90,
    react : 90,
    backbone : 90,
}

const cursosChaves = Object.keys(cursos);
document.getElementById("cursos").innerHTML = `<ul>${cursosChaves.map(curso => `<li>${curso}</li>`)}</ul>`;

console.log(Object.entries(cursos))