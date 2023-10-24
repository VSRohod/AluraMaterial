const { angular, ...frameworks} = cursos;
console.log("Angular: ",angular );
console.log("Frameworks: ",frameworks );

const novosCursos = {angular, ...frameworks};
console.log("Novos: ", novosCursos);