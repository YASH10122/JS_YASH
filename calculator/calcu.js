let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button)=>{

    button.addEventListener('click',   (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string )
        }
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    })
})