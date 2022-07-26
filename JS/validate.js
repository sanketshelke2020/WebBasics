
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
    return false;
  }
  else if(!regex.test(ss[0].value)){
    er[0].innerHTML = "<small>Firt name should not be Numbers</small>"
    ss[0].style.border = "2px solid red"
    return false;
  }
  else{
    return true;
  }
}
function validate2() {
  er[1].innerHTML = " "
  if(ss[1].value === ''){
    er[1].innerText = "Please enter the value"
    er[1].style.color = 'red';
    return false;
  }
  else if(ss[1].value < 20 || ss[1].value >60){
    er[1].innerHTML = '<small>Age Should be greater than 20 and less than 60</small>'
    er[1].style.color = 'red';
    return false;
  }
  else{
    return true;
  }
}
function validate3() {
  er[2].innerHTML = " "
  let regex = new RegExp("^[0-9]{10}$")
  if(ss[2].value === ''){
    er[2].innerText = "Please enter the value"
    er[2].style.color = 'red';
    return false;
  }
  else if(!regex.test(ss[2].value)){
    er[2].innerHTML = "<small>10 digit only</small>"
    // ss[2].style.border = "2px solid red"
    return false;
    
  }
  else{
    return true;
  }
}
function validate4() {
  er[3].innerHTML = " "
  if(ss[3].value === ''){
    er[3].innerText = "Please enter the value"
    er[3].style.color = 'red';
    return false;

  }
}
function validate5() {
  er[4].innerHTML = " "

  if(ss[4].value === ''){
    er[4].innerText = "Please enter the value"
    er[4].style.color = 'red';
    return false;

  }
  else if(ss[4].value.length <3 || ss[4].value.length >10 ){
    er[4].innerText = "min 3 char and max 10 char"
    er[4].style.color = 'red'
    return false;

  }
  else{
    return true;
  }
}
function validate6() {
  er[5].innerHTML = " "
  let regex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")

  if(ss[5].value === ''){
    er[5].innerText = "Please enter the value"
    er[5].style.color = 'red';
    return false;

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
    return false;

  }
  else{
    return true;
  }
}
function validate7() {
  er[6].innerHTML = " "
  if(ss[6].value === ''){
    er[6].innerText = "Please enter the value"
    er[6].style.color = 'red';
    return false;

  }
  else if(ss[6].value!=ss[5].value){
    er[6].innerHTML = "<small>Password does not match</small>"
    er[6].style.color = 'red';
    return false;

  }
  else{
    return true;
  }
}


function validateForm(){
  let v1 =validate1();
  let v2 =validate2();
  let v3 =validate3();
  let v4 =validate4();
  let v5 =validate5();
  let v6 =validate6();
  let v7=validate7();
  console.log(validate6());
  return(v1 && v2 && v3 && v4 && v5 && v6 && v7);
}