// let list = [].slice.call(document.querySelectorAll('#minhaLista a'));
// list.forEach(function (element) {
//   element.addEventListener('click', function (event) {
//     event.preventDefault();

//     if(document.querySelector(`#${event.target.name}`).classList.contains("active")){
//       document.querySelector(`#${event.target.name}`).classList.remove("active");
//       return;
//     }

//     document.querySelector(`#${event.target.name}`).classList.add("active");

//   })
// })

butoesDuvida = Array.from(document.querySelectorAll('.list-group-item'));
butoesDuvida.forEach(element => {
  element.addEventListener('click',()=>{
    selecionaDuvida(element);
    let containerDuvida = element.parentElement.parentElement.children[1].children[0];
    ocultaDuvidas()
    if (containerDuvida.classList.contains('active')) {
      containerDuvida.classList.remove('active');      
    }else{
      containerDuvida.classList.add('active');
    }
  });
});

function selecionaDuvida(btnClicado) {
 butoesDuvida = Array.from(document.querySelectorAll('.list-group-item'));
 butoesDuvida.forEach(element => {
   element.classList.remove('active');
 });
 btnClicado.classList.add('active');
}

function ocultaDuvidas() {
  divsDuvida = Array.from(document.querySelectorAll('.tab-pane'));
  divsDuvida.forEach(element => {
    element.classList.remove('active');
  });
}