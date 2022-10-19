# Faça um programa que, dado um valor n qualquer, tal que n > 1,
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n.


# 🦜Dica: Python sabe multiplicar sequências! Por exemplo, 3 * 'bla'
# resulta em blablabla. Isso se aplica a listas também, caso você precise.


def square(n):
    for row in range(n):
        print(n * "*")


square(3)
