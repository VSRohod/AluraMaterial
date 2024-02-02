from modelos.restaurante import Restaurante

restaurante_praca = Restaurante('Praça','Gourmet')
restaurante_pizza_express = Restaurante('Pizza Express','Italiana')
restaurante_mexican_food = Restaurante('Mexican Food','Mexicana')

restaurante_mexican_food.alternar_estado()
restaurante_mexican_food.receber_avaliacao('Gui', 10)
restaurante_pizza_express.receber_avaliacao('Lais', 8)
restaurante_pizza_express.receber_avaliacao('Emy', 5)

def main():
    Restaurante.listar_restaurantes()

if __name__ == '__main__':
    main()