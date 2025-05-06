# Teste Automatizado Fast Shop 🛒

Este projeto automatiza o processo de compra de um produto na Fast Shop utilizando **Puppeteer** e **Cucumber** com **Gherkin** 🥒.

## Requisitos

* **Node.js**
* **Google Chrome**

## Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/sntooosk/teste-automatizado-fastshop.git
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Executando os Testes

Para rodar os testes automatizados, basta executar o seguinte comando:

```bash
npm test
```

O teste acessará a página do produto na Fast Shop, clicará no botão "Comprar Agora" e verificará se o produto foi corretamente adicionado ao carrinho de compras.

### Saída Esperada

Após a execução dos testes, você verá a seguinte saída no terminal:

```
1 scenario (1 passed)
3 steps (3 passed)
0m00.003s
```

Isso significa que o cenário foi executado com sucesso e todas as etapas passaram sem problemas.
