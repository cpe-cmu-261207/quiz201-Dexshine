const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  // your code here
  var id = 620610786
  console.log(author.innerHTML.length)
  if(author.innerHTML.length > 10){
    author.innerHTML = id + parseInt(length.value)
  }else{
    author.innerHTML = '620610786 NATTAPON TANCHO'
  }
}

// more codes for Search and Reset buttons here
