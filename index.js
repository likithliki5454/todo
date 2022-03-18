function Add(){
    let li=document.createElement('li')
    let data=document.getElementById('text').value
    li.append(data);
    if(data!="")
    {
         document.getElementById('text').value="";
         document.getElementById('lists').append(li);
         li.addEventListener('click',a=>{
         li.remove(data);
         }) 
        }
    else{
      alert("please enter data")
    
    }
}