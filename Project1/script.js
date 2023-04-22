const displayals = document.getElementById("n")


function inc(){
  const value = Number(displayals.innerText);
  if(value >=100){
    alert("100+ value is not allowed")
  }
  else{
    displayals.innerText = value + 1;
  }
}

function dec(){
  const value = Number(displayals.innerText);
  if(value < 1){
    alert("negative value is not allowed")
  }
  else{
    displayals.innerText = value - 1;
  }
}


function res(){
  const value = Number(displayals.innerText);
  displayals.innerText = 0;
}


