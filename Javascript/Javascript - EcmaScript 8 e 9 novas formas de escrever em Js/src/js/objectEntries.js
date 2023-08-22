const cursos = {
    node : 50,
    angular : 70,
    react : 90,
    backbone : 80,
};
// antes
const cursosChaves = Object.keys(cursos);
document.getElementById("cursos").innerHTML = `<ul>${cursosChaves.map(curso => `<li>${curso}</li>`)}</ul>`;

// depois
const cursosEntries = Object.entries(cursos);
document.getElementById("cursosEntries").innerHTML = `<ul>${cursosEntries.map(curso => `<li>${curso[0]} - ${curso[1]} alunos</li>`)}</ul>`;

const cursosMap = new Map(cursosEntries);
console.log(cursosMap.get('node'));
console.log(cursosMap.has('java'));