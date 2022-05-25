async function getlist(num){
     await fetch(`http://localhost:3000/api/list/${num}`)
           .then(response => response.json)
           .then( (data) => {
            let task = data.map(list => {
                return `<div>${list.task}</div>`
            }).join(' ')
            document.querySelector('.todolist').innerHTML = task

        })
}




fetch('http://localhost:3000/api/user')
.then(response => {
    if(!response.ok){
        throw Error('error')
     } return response.json()})
.then((data) => {
    console.log(data)
    
    let html = data.map(user =>{
        return `<option value=${user.id} class="opt">${user.username}</option>`
        
    }).join(' ')
    console.log(html)
     
    document.querySelector('#user').innerHTML = html;
    
    
})
.then(() =>{
    let btn = document.querySelector('.btn')
    let option = document.getElementById('user').value
    btn.addEventListener('click',getlist(option))

   
    })
    
    //  let btn = document.querySelector('.btn')
    //  let option = document.querySelectorAll('.opt')
    //  console.log(option.values())
    
    
    //  btn.addEventListener('click',()={
        
        //  })
        function change(){
            let option = document.getElementById('user').value
            console.log(option)
        }