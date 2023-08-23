const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    const name = document.getElementById("name").value;
    const nameRequired = document.getElementById("nameRequired");
    const number = document.getElementById("number").value;
    const numberRequired = document.getElementById("numberRequired");
    const date = document.getElementById("date").value;
    const emailRequired = document.getElementById("emailRequired");
    const email = document.getElementById("email").value;
    const dateRequired = document.getElementById("dateRequired");
    const message = document.getElementById("message").value;
    const messageRequired = document.getElementById("messageRequired");

    // Realizar validações simples
    if (name !== "" || email !== "" || number !== ""|| date !== "" ||message!=="") {
        alert("Formulário enviado com sucesso!");
        // Aqui você pode enviar o formulário para o servidor
    }else{
        if(name === ""){
            nameRequired.style.color = 'red';
        }if(email === ""){
            emailRequired.style.color = 'red';
        }if(number === ""){
            numberRequired.style.color = 'red';
        }if(date === ""){
            dateRequired.style.color = 'red';
        }if(message=== ''){
            messageRequired.style.color = 'red';
        }
    }
});

const nameform = document.getElementById("name")
nameform.addEventListener("input", () => {
    const nameRequired = document.getElementById("nameRequired");
    if(nameform.value !== ""){
        nameRequired.style.color = 'white';
    }
})
const numberform = document.getElementById("number")
numberform.addEventListener("input", () => {
    const numberRequired = document.getElementById("numberRequired");
    if(numberform.value !== ""){
        numberRequired.style.color = 'white';
    }
})
const dateform = document.getElementById("date")
dateform.addEventListener("input", () => {
    const dateRequired = document.getElementById("dateRequired");
    if(dateform.value !== ""){
        dateRequired.style.color = 'white';
    }
})
const messageform = document.getElementById("message")
messageform.addEventListener("input", () => {
    const messageRequired = document.getElementById("messageRequired");
    if(messageform.value !== ""){
        messageRequired.style.color = 'white';
    }
})

const emailfomr = document.getElementById("email")
emailfomr.addEventListener("input", () => {
    const emailRequired = document.getElementById("emailRequired");
    if(emailfomr.value !== ""){
        emailRequired.style.color = 'white';
    }
})

