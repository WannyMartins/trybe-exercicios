# Um posto está vendendo combustíveis com a seguinte tabela de descontos:

#   Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.

#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.

# Escreva uma função que receba o número de litros vendidos,
# o tipo de combustível (codificado da seguinte forma:

# A - álcool,
# G - gasolina),

# e retorne o valor a ser pago pelo cliente,

# sabendo-se que o preço do litro da
# gasolina é R$ 2,50,
# álcool é R$ 1,90.


def combustivel(litros, tipo):
    if tipo == "A":
        price = 1.90
        desconto = 0.03
        if litros > 20:
            desconto = 0.05
    elif tipo == "G":
        price = 2.50
        desconto = 0.04
        if litros > 20:
            desconto = 0.06
    total = price * litros
    total -= total * desconto
    return total
