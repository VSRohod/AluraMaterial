import random

def jogar():
    print("***********************************")
    print("Bem vindo no jogo de adivinhação!")
    print("***********************************")

    # numero_secreto = round(random.random() * 100)
    numero_secreto = random.randrange(1,101)
    total_de_tentativas = 3
    pontos = 1000
    # rodada = 1

    print("Qual é o nível de dificuldade?")
    print("(1) Fácil (2) Médio (3) Difícil")

    nivel = int(input("Define o nível: "))

    if(nivel == 1):
        total_de_tentativas = 20
    elif(nivel == 2):
        total_de_tentativas = 20
    else:
        total_de_tentativas = 5

    # while(rodada <= total_de_tentativas):
    for rodada in range(1,total_de_tentativas + 1) :
        # INPUT - ESPERA O USUÁRIO DIGITAR UM INFORMAÇÃO
        print("Tentativa {} de {}".format(rodada,total_de_tentativas))
        # interpolação de strings

        chute = input("Digite o seu número entre 1 e 100: ")
        print("Você digitou", chute)

        # arquitetura if
        # if(condicao):
        # *4espacos algo a ser feito
        # else:
        #     outra coisa a ser feita

        # int() converte para numero int

        chuteInt = int(chute)
        
        if(chuteInt < 1 or chuteInt > 100):
            print("Você deve digitar um número entre 1 e 100")

        acertou = numero_secreto == chuteInt
        maior = chuteInt > numero_secreto
        menor = chuteInt < numero_secreto
            
        if (acertou):
            print("Você acertou e fez {} pontos!".format)
            break
        else:
            pontos_perdidos = abs(numero_secreto - chuteInt)
            pontos = pontos - pontos_perdidos
            if(maior):
                print("O seu chute foi maior que o número secreto")
                if (rodada == total_de_tentativas):
                    print("O número secreto era {}. Você fez {}".format(numero_secreto, pontos))
            elif(menor):
                print("Você errou! O seu chute foi menor do que o número secreto.")
                if (rodada == total_de_tentativas):
                    print("O número secreto era {}. Você fez {}".format(
                        numero_secreto, pontos))
            
        # rodada = rodada + 1
        print(" ")

    # elif - ELSE E IF JUNTOS
    print("Fim de Jogo")

if(__name__ == "__main__"):
    jogar()
