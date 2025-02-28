let classificaTriangulo = (lado1, lado2, lado3) =>{
    if(lado1 == lado2 && lado2 == lado3){
        return "É um Triangulo Equilatero"
    } else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1){
        return "É um Triângulo Escaleno";
    } else {
        return "É um Triangulo Isosceles";
    }
}

console.log(classificaTriangulo(4, 4, 4));
console.log(classificaTriangulo(3, 5, 6));
console.log(classificaTriangulo(3, 4, 3));