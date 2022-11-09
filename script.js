
let inputs = document.querySelectorAll('.controls input')

function handleUpdates(){
document.documentElement.style.setProperty(`--${this.name}`,this.value + 'px')
    
}
    

inputs.forEach(input=>{

input.addEventListener('mousemove',handleUpdates)
    })
