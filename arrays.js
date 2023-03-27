const notas = [10, 6.5, 8, 7.5];

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

// adicionando nota

const notas1 = [10, 6, 8];

notas1.push(7);

const media1 = (notas1[0] + notas1[1] + notas1[2] + notas1[3]) / notas1.length;

console.log(media1);

//removendo nota

const notas2 = [10, 6, 8, 5.5, 10];

notas2.pop();

const media2 = (notas2[0] + notas2[1] + notas2[2] + notas2[3]) / notas2.length;

console.log(`A média é ${media2}.`);
