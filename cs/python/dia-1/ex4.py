# Crie uma função que receba uma lista de nomes e retorne o nome com a
# maior quantidade de caracteres. Por exemplo,
# para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".

# 🦜 Uma dica: Utilize a função len() para verificar o tamanho do nome.


def bigger(names):
    name_big = names[0]
    for name in names:
        if len(name) > len(name_big):
            name_big = name
    print(name_big)


bigger(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"])
