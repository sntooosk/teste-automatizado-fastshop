Feature: Comprar produto no site Fast Shop

  Scenario: Comprar produto disponível
    Given que estou na página de um produto disponível
    When eu clicar no botão de Comprar Agora
    Then o produto deve ir para o carrinho

