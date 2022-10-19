#  Calcule a média aritmética dos valores contidos em uma lista.


def media(list):
    result = 0
    for num in list:
        result += num
    return result / len(list)
