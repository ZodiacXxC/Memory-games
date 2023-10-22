var numSelected1 = null;
var g1 = 0;
var num1 = [];
var num2 = [];
while(g1 < 10){

  var x = Math.floor(Math.random() * 10);
  if(!num1.includes(x)){
        
    num1.push(x);
    g1++;
        
  }
}
g1 = 0;
while(g1 < 10){

  var x = Math.floor(Math.random() * 10);
  if(!num2.includes(x)){
        
    num2.push(x);
    g1++;
        
  }
}
var num1 = num1.concat(num2);
console.log(num1);
$(document).ready(function(){
  $(".start1").click(function() {
    $('.start1').prop('disabled', true)
    let i = 0;
    let h = 1;
    while(i < 18){
      let f = "#m" + h.toString();
      $(f).html(num1[i]);
      i++;
      h++;
    }
    setTimeout(function(){
      let k = 1;
      while(k < 19){
        let f = "#m" + k.toString();
        $(f).html('');
        k++;
      }
    },10000)
  });
})
for (let i = 0; i <= 9; i++) {
        //<div id="1" class="number">1</div>
  let number = document.createElement("div");
  number.id = "cl" + i;
  number.innerText = i;
  number.addEventListener("click", selectNumber1);
  number.classList.add("number1");
  document.getElementById("digits1").appendChild(number);
}
function selectNumber1(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}
function Check1(){
  var sel_num = [];
  var x = document.getElementsByClassName('cell1');
  var i = 0;
  var win = 0;
  while(i < x.length){
    sel_num.push(x[i].innerHTML);
    i++;
  }
  i = 0;
  while(i < sel_num.length){
    if(num1[i] == sel_num[i]){
      win++;
    }
    i++;
  }
  if(win == 18){
    $(".notify").toggleClass("active");
    $("#notifyType").toggleClass("success");
    setTimeout(function(){
      $(".notify").removeClass("active");
      $("#notifyType").removeClass("success");
      location.reload();
    },3000);
    
  }
  else{
    $(".notify").addClass("active");
    $("#notifyType").addClass("failure");
        
    setTimeout(function(){
      $(".notify").removeClass("active");
      $("#notifyType").removeClass("failure");
    },2000);
  }
}