let list = [].slice.call(document.querySelectorAll('#minhaLista a'));
list.forEach(function (element) {
  element.addEventListener('click', function (event) {
    event.preventDefault();

    if(document.querySelector(`#${event.target.name}`).classList.contains("active")){
      document.querySelector(`#${event.target.name}`).classList.remove("active");
      return;
    }

    document.querySelector(`#${event.target.name}`).classList.add("active");

  })
})