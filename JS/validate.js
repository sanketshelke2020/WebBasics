
console.log(document.getElementsByTagName('input'))
let ss = document.getElementsByTagName('input')

let er = []
for(let i =0;i<7;i++){
  er[i] = document.getElementById(`error${i}`)
}


function validate1() {
  er[0].innerHTML = " "
  let regex = new RegExp("^[A-Za-z]*$")


  if(ss[0].value === ''){
    er[0].innerText = "Please enter the value"
    er[0].style.color = 'red';
  }
  else if(regex.test(ss[0].value)){
    er[0].innerHTML = "<small>Firt name should not be Numbers</small>"
    ss[0].style.border = "2px solid red"
  }
}
function validate2() {
  er[1].innerHTML = " "
  if(ss[1].value === ''){
    er[1].innerText = "Please enter the value"
    er[1].style.color = 'red';
  }
}
function validate3() {
  er[2].innerHTML = " "
  if(ss[2].value === ''){
    er[2].innerText = "Please enter the value"
    er[2].style.color = 'red';
  }
}
function validate4() {
  er[3].innerHTML = " "
  if(ss[3].value === ''){
    er[3].innerText = "Please enter the value"
    er[3].style.color = 'red';
  }
}
function validate5() {
  er[4].innerHTML = " "

  if(ss[4].value === ''){
    er[4].innerText = "Please enter the value"
    er[4].style.color = 'red';
  }
  
}
function validate6() {
  er[5].innerHTML = " "
  let regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")

  if(ss[5].value === ''){
    er[5].innerText = "Please enter the value"
    er[5].style.color = 'red';
  }
  else if(!regex.test(ss[5].value)){
    let olNode = document.createElement('ul')
    let ar = ['Capital', 'Small Letter', "Digit", "Special Symbol"]
    for(let f of ar){
      let liNode = document.createElement('li')
      liNode.textContent = f
      olNode.append(liNode  )
      
    }
    er[5].append(olNode)

  }
}
function validate7() {
  er[6].innerHTML = " "
  if(ss[6].value === ''){
    er[6].innerText = "Please enter the value"
    er[6].style.color = 'red';
  }
}