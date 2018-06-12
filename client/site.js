let addBtn = document.getElementById("addBtn")
let tasktitle=$("#taskTitle")
let toDo=$("#toDoList")
let done=$("#doneList")

addBtn.addEventListener('click',function(){    
    let finish = $("<input>").attr("type","checkbox").addClass("doneBtn")
    let li = $("<li>").addClass("displayList")
    let itemTitle= $("<tasktitle>").addClass("textForm")
    let removeBtn =$("<button>Remove</button> ").addClass("removeBtn").click(function(){
        $(this).parent().remove()})
    itemTitle.html(tasktitle.val())
    li.prepend(finish)
    li.append(itemTitle)
    li.append(removeBtn)
    toDo.append(li)
    console.log (tasktitle.val()) 
    let pickle = tasktitle.val()
    console.log(pickle)
    document.getElementById("taskTitle").value = ""
    finish.change(function(){
        if($(this).is(":checked"))
            {done.append(li)}
        else
            {toDo.append(li)}})
    console.log (tasktitle.val())
    console.log (itemTitle)
    console.log (itemTitle.val())
  
  fetch('http://localhost:3000/tasks',{
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      title : pickle,
      priority : 'high',
      dateCreated : 'June 11th',
      dateCompleted : 'open ',
      isCompleted : false,
    })
  }).then(function(response){
     
    return response.text()
  }).then(function(text){
    
  })

})




toDo.sortable();
done.sortable();




