let input = document.querySelector('#inputBox')
let list = document.querySelector('#list')

input.oninput = function(){
    this.value = this.value.substr(0, 25);
  }

input.addEventListener('keyup', function(event){
    if(event.key === 'Enter'){
        addItem(this.value)
        this.value = ''
    }
})

let addItem = (inp) => {
    if(inp !== ""){
        let li = document.createElement('li')
        li.innerHTML = `${inp}<i></i>`


        li.addEventListener('click', function(){
            this.classList.toggle('done');
        })

        li.querySelector("i").addEventListener('click',function(){
            li.remove()
        })
    
        list.appendChild(li)
    }

}