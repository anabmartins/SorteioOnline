function sortear(){
    
    min = document.getElementById("min").value
    max = document.getElementById("max").value
    result = document.getElementById("result")

    sort = Math.floor(Math.random()*Math.floor(max))
        
    while(sort<min){

        sort = Math.floor(Math.random()*Math.floor(max));
      }

      result.innerHTML = sort
}