var g = 0;
var num = [];
while(g < 10){

  var x = Math.floor(Math.random() * 10);
  if(!num.includes(x)){
        
    num.push(x);
    g++;
        
  }
}
$(document).ready(function(){
  $(".start").click(function() {
     $('.start').prop('disabled', true)
    let i = 0;
    while(i < 10){
      let f = "#" + i.toString();
      $(f).html(num[i]);
      i++;
    }
    num.shift();
    setTimeout(function(){
      for(let i=0;i != 10;i++){
        let f = "#" + i.toString();
        $(f).html('');
      }
    },10000)
  });
})
var numSelected = null;
for (let i = 0; i <= 9; i++) {
        //<div id="1" class="number">1</div>
  let number = document.createElement("div");
  number.id = "cl" + i;
  number.innerText = i;
  number.addEventListener("click", selectNumber);
  number.classList.add("number");
  document.getElementById("digits").appendChild(number);
}
function selectNumber(){
    if (numSelected != null) {
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function choose(clicked_id){

  var x = document.getElementById(clicked_id);  
  x.innerHTML = numSelected.textContent;

  
}
function Check(){
  var sel_num = [];
  var x = document.getElementsByClassName('cell');
  var i = 0;
  var win = 0;
  while(i < x.length){
    sel_num.push(x[i].innerHTML);
    i++;
  }
  i = 0;
  while(i < sel_num.length){
    if(num[i] == sel_num[i]){
      win++;
    }
    i++;
  }
  if(win == 9){
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
