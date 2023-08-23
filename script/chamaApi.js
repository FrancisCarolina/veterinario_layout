const pergunta = document.getElementById("piada");
const resposta = document.getElementById("resposta");
const imagem = document.getElementById("imagemReação");
let piada = {};

function testeApi() {
    axios.get('https://v2.jokeapi.dev/joke/Any?lang=pt')
    .then(response =>{
        console.log(response.data);
        pergunta.textContent = response.data.setup;
        resposta.textContent = response.data.delivery;
        
        
    })
    .catch(error=>{
        console.log("deu ruim!: ", error);
    })
    axios.get('https://api.thecatapi.com/v1/images/search')
    .then(response =>{
        console.log(response.data[0]);
        imagem.innerHTML = '';
        var img = document.createElement("IMG");
        img.src = response.data[0].url;
        img.style.width = "300px";
        imagem.appendChild(img);
    })
    .catch(error=>{
        console.log("deu ruim!: ", error);
    })
}

const botaoChamaApi = document.getElementById("btChamaApi");

botaoChamaApi.addEventListener("click", ()=>{
    testeApi();
})
