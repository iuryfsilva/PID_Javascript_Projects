// URL da API de cotações
const url = 'https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL';

// Função para buscar e exibir os dados da API
async function exibirDadosAPI() {
    try {
        // Faz a solicitação GET para a API
        const response = await fetch(url);

        // Verifica se a solicitação foi bem-sucedida
        if (!response.ok) {
            throw new Error('Não foi possível obter os dados da API.');
        }

        // Converte a resposta para JSON
        const data = await response.json();

        // Exibe os dados das cotações
        console.log("Cotações:");
        console.log("USD-BRL:", data['USDBRL']);
        console.log("EUR-BRL:", data['EURBRL']);
        console.log("BTC-BRL:", data['BTCBRL']);
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

exibirDadosAPI();
