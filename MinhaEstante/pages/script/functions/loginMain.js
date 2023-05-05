 var btn = document.getElementById('btn-div');
var container = document.querySelector('.register-box');
// função para aparecer a página de cadastro
btn.addEventListener('click',function(){
    if(container.style.dysplay === 'none'){
        container.style.display = 'block';
        
    }
    else
    {
        container.style.display = 'block';
    }

    
});

// função para finalizar
var submit = document.getElementById('submit');
submit.addEventListener('click',function(){
    if(container.style.display === 'block'){
        container.style.display = 'none'
    }
    getDataUser()
});


// Armazenando os dados dos inputs 
function getDataUser(){
// obetnção dos dados do form de cadastro
const form = document.querySelector('#form-main')
const formData = new FormData(form);
const inputUsuario = formData.get("usuario");
const inputNome = formData.get("nome");
const inputEmail = formData.get("email");
const inputSenha = formData.get("senha");
console.log(formData)
form.reset();
// Função para colocar os valores do cadastro no form de login
const formLogin = new FormData(document.querySelector('#form-login'));
const loginUsuario = document.querySelector('#usuarioSpace').value = inputUsuario;
const loginSenha = document.querySelector('#senhaSpace').value = inputSenha;  
}