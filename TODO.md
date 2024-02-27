[X] CONECTAR COM O SERVIÇO DE ENVIAR EMAIL PARA O FORGET

[X] ESTRAIR ID DO TOKEN PARA O RESET PASSWORD

[X] VERIFICAR O FORGET PARA DESATIVAÇÃO DO TOKEN APOS RESETAR

[X] CRIAÇÃO DOS ROLE DA APLICAÇÃO

[X] CRIAR ESTRATEGIA DE ATIVAÇÃO DE CONTA COM A MUDANÇA DO PARAMETRO ```STATUS ACCOUNT``` Confir Account

[X] CRIAR OS METODOS INICIAIS DE WAREHOUSE

[X] CRIAR OS METODOS INICIAIS ASSOCIAÇÃO DE USER/WAREHOUSE

[X] ADICIONAR METODO DE PERMISÃO PARA USUARIOS

[X] ADD LINK NO EMAIL PARA CONFIRMAR CONTA

[ ] MELHORAR A NOMECLATURA DAS FUNCÕES, VARIAVEIS ETC..

[ ] ADD FOTOS NO PERFIL DO USUARIO NO METODO UPDATE

function gerarSku(tipoProduto, idProduto, tamanho, cor) {
  // Validação de parâmetros
  if (!tipoProduto || !idProduto) {
    throw new Error("Parâmetros inválidos: tipoProduto e idProduto são obrigatórios.");
  }

  // Geração do prefixo
  const prefixo = tipoProduto.substring(0, 3).toUpperCase();

  // Formatação do ID do produto
  const idFormatado = String(idProduto).padStart(4, "0");

  // Geração do SKU
  const sku = `${prefixo}-${idFormatado}-${tamanho}-${cor}`;

  return sku;
}

// Exemplo de uso
const sku = gerarSku("Camiseta", 1234, "M", "Preto");
console.log(`SKU gerado: ${sku}`);

============================================================================================================

// Importa a biblioteca EAN13
const EAN13 = require('jsbarcode').EAN13;

// Função para gerar código de barras
function generateBarcode(productId) {
  // Validação do parâmetro
  if (!productId || isNaN(productId)) {
    throw new Error("Parâmetro inválido: productId deve ser um número inteiro.");
  }

  // Geração do código de barras
  const barcode = new EAN13(productId.toString());
  return barcode.getBarcode();
}

// Exemplo de uso
const productId = 1234;
const barcode = generateBarcode(productId);

console.log(`Código de barras gerado: ${barcode}`);
