const inputvalue = document.querySelector('.inputvalue')
const add = document.querySelector('.add')
const listbody = document.querySelector('.listbody')

add.addEventListener('click',()=>{
  if(inputvalue.value == ''){
    alert("Please Input a list")
  }else{
    let list = document.createElement('div')
    list.classList.add('list')
  
    let item = document.createElement('input')
    item.classList.add('item')
    item.setAttribute('type', 'text')
    item.setAttribute('readonly', 'readonly')
    item.value = inputvalue.value
  
    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')



    let edit = document.createElement('button')
    edit.classList.add('edit')
    edit.innerHTML = 'Edit'
   
    let deleteList = document.createElement('button')
    deleteList.classList.add('delete')
    deleteList.innerHTML = 'Delete'
  
  
    listbody.appendChild(list)
    list.appendChild(checkbox)
    list.appendChild(item)
    list.appendChild(edit)
    list.appendChild(deleteList)
    inputvalue.value = ''


    checkbox.addEventListener('click', ()=>{
        if(checkbox.checked){
            item.style = 'text-decoration: line-through;'
        }else{
            item.style = 'text-decoration: none;'
        }
    })

    deleteList.addEventListener('click',()=>{
        list.remove()
    })

    edit.addEventListener('click',()=>{
        if(edit.innerHTML == "Edit"){
            item.removeAttribute('readonly', 'readonly')
            edit.innerHTML = 'Save'
        }else{
            item.setAttribute('readonly', 'readonly')
            edit.innerHTML = 'Edit'

        }
    })
  }
})