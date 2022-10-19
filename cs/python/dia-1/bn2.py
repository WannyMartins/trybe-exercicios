#  Faça um programa que, dado um valor n qualquer,
#  tal que n > 1, imprima na tela um triângulo retângulo com n asteriscos
#  de base. Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:


def print_triangulo(n):
    for i in range(n + 1):
        print(i * "*")
