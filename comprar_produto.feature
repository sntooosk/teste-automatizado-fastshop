Feature: Comprar produto no site Fast Shop

  Scenario: Comprar produto disponível
    Given que estou na página de um produto disponível
    When eu clicar no botão "Comprar"
    Then o produto deve ir para o carrinho

  Scenario: Comprar produto indisponível
    Given que estou na página de um produto indisponível
    When o produto não estiver disponível para compra
    Then o site deve mostrar a mensagem "No momento este produto não está disponível para compra."
    And o botão de comprar deve ficar desabilitado
