print("***********************************")
print("Bem vindo no jogo de adivinhação!")
print("***********************************")

numero_secreto = 43
total_de_tentativas = 3
# rodada = 1

# while(rodada <= total_de_tentativas):
for rodada in range(1,total_de_tentativas + 1) :
    # INPUT - ESPERA O USUÁRIO DIGITAR UM INFORMAÇÃO
    print("Tentativa {} de {}".format(rodada,total_de_tentativas))
    # interpolação de strings

    chute = input("Digite o seu número: ")
    print("Você digitou", chute)

    # arquitetura if
    # if(condicao):
    # *4espacos algo a ser feito
    # else:
    #     outra coisa a ser feita

    # int() converte para numero int

    chuteInt = int(chute)

    acertou = numero_secreto == chuteInt
    maior = chuteInt > numero_secreto
    menor = chuteInt < numero_secreto
        
    if (acertou):
        print("Você acertou")
    else:
        if(maior):
            print("Você errou! o seu chute foi maior que o número secreto.")
        elif(menor):
            print("Você errou! o seu chute foi menor que o número secreto.")
    # rodada = rodada + 1
    print(" ")

# elif - ELSE E IF JUNTOS
print("Fim de Jogo")
