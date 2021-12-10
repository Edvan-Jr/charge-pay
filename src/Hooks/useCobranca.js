const listarCobranca = async () => {
    const dadosCobranca = await (await fetch("https://charge-pay-back.herokuapp.com/cobrancas")).json();

    return dadosCobranca
}

export { listarCobranca };