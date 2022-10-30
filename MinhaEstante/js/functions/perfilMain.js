const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const btnInsert = document.querySelector('#btn-insert')

btnInsert.addEventListener('click',function(){
  loadBookSugestion();
  
  

})

function loadBookSugestion(){
  console.log("salve")
  const nameInput = document.querySelector('#inputNameBook').value;
  const urlInput = document.querySelector('#inputUrlBook').value;
  console.log(urlInput);
  console.log(nameInput);
  insertBook(nameInput,urlInput);
}


function insertBook(name,url) {
  const bookView = `
         <div class="carousel-item">
      <img src="${url}" class="w-25 p-3 rounded mx-auto "style="min-width: 31%;"min-height:25%;"  alt="${name}">
      
    </div>
      `;

  const carroselSugestion = document.querySelector('#carousel-sugetion');

  carroselSugestion.insertAdjacentHTML('afterbegin', bookView);
}
// funçoes para inserir livros




