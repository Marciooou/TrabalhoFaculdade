// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('registrationForm');
//     const emailInput = document.getElementById('email');
//     const output = document.getElementById('output');
//     form.addEventListener('submit', function (e) {
//         e.preventDefault();
//         const email = emailInput.value.trim();
//         if (!isValidEmail(email)) {
//             output.textContent = 'E-mail inválido. Preencha corretamente.';
//             return;
//         }
//         // Aqui você pode enviar os dados para o servidor ou fazer outras ações necessárias
//         output.textContent = 'Formulário enviado com sucesso!';
//     });
//     function isValidEmail(email) {
//         const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i;
//         return regex.test(email);
//     }
// });
const inputsTexts = document.querySelectorAll(".input-form")
console.log("input", inputsTexts);

const form = document.getElementById('registrationForm');
const btn = document.getElementById("btn")
btn.addEventListener("click", (e) => {
    e.preventDefault()

    inputsTexts.forEach(input => {
        // console.log("value",input.value);
        let allFilled = true;

        if (!input.value) {
            input.classList.remove("preenchido")
            input.classList.add("no-preenchido")
            input.nextElementSibling.classList.remove('obrigatorio')
            input.nextElementSibling.classList.add('obrigatorio-ativo')
            console.log("oi");
            allFilled = false
        } else {
            input.classList.remove("no-preenchido")
            input.classList.add("preenchido")
            input.nextElementSibling.classList.add('obrigatorio')
            input.nextElementSibling.classList.remove('obrigatorio-ativo')
            
        }

        if (allFilled) {
            window.location.href = "validar.html"; // Substitua pelo caminho desejado
        }
    })
})