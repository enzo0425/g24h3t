const url = "https://raw.githubusecontent.com/guilhermeonrails/api/main/dados-globais.json";

async function vizualizarInformacoesGlobais(){
    const res = await fetch(url);
    const dados = res.json();
    console.log(dados);
}

vizualizarInformacoesGlobais();