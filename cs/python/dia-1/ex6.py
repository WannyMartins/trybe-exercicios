# Crie uma função que receba os três lado de um triângulo
# e informe qual o tipo de triângulo formado ou "não é triangulo",
# caso não seja possível formar um triângulo.


# 🦜 Dica:

# Copiar
#   Três lados formam um triângulo quando a soma de quaisquer dois lados
# for maior que o terceiro;
#   Triângulo Equilátero: três lados iguais;
#   Triângulo Isósceles: quaisquer dois lados iguais;
#   Triângulo Escaleno: três lados diferentes.


def triangulo(a, b, c):

    triangle = (
        a + b > c
        and b + c > a
        and a + c > b
    )

    EQUILATERO = a == b and b == c and c == a
    ISOSCELES = a == b or b == c or c == a
    ESCALENO = a != b and b != c and c != a

    if not triangle:
        print("não é um triângulo")
    elif EQUILATERO:
        print("equilátero")
    elif ISOSCELES:
        print("isósceles")
    elif ESCALENO:
        print("escaleno")


triangulo(2, 10, 10)
