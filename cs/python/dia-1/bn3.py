#  Crie uma função que receba um número inteiro N
#  e retorne o somatório de todos os números de 1 até N.
#  Por exemplo, para N = 5, o valor esperado será 15.


def soma(n):
    total = 0
    for i in range(n + 1):
        total += i
    return total
