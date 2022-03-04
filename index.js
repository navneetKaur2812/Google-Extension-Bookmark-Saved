
let values = []



const inputFieldBtn = document.getElementById("save-input-el")
const inputField = document.getElementById("input-el")
const ulField = document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-input-el")

const leadsFromLoaclStorage = JSON.parse(localStorage.getItem('values'))
// console.log(leadsFromLoaclStorage)

if (leadsFromLoaclStorage) {
    values=leadsFromLoaclStorage
    renderList(values)

}

    inputFieldBtn.addEventListener("click", function () {
      //  ulField.innerHTML += "<li>" + inputField.value + "</li>";   
        values.push(inputField.value);
        inputField.value = " "
        localStorage.setItem('values', JSON.stringify(values))
        renderList(values)

    })

    deleteBtn.addEventListener("click", function () {
        //  ulField.innerHTML += "<li>" + inputField.value + "</li>";   
        
        inputField.value = " "
         localStorage.clear()
        values=[]
        ulField.innerHTML=""
  
      })

function renderList(values) {
    for (let i of values)
{
     
    ulField.innerHTML += "<li><a target='_blank' href='"+i+"'>"+i+"</a></li>"
}
}
