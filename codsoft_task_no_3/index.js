let inputBox = document.getElementById("inputBox")
let buttond = document.querySelectorAll('button');

let string = ''

buttond.forEach(item => {
  item.addEventListener('click', (b)=>{
    if(b.target.innerText == '='){
      string = String(eval(string))
      inputBox.value = string;
    }
    else if(b.target.innerText == "AC"){
      string = ''
      inputBox.value = string;
    }

    else if(b.target.innerText == 'DEL'){
      string = string.substring(0,string.length-1)
      inputBox.value = string;
    }

    else if(b.target.id == "pludMinus"){
      string = string(-eval(string))
      inputBox.value = string;
    }


    else {
      string += b.target.innerText
      inputBox.value = string;
    }
  })
})