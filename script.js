document.addEventListener('DOMContentLoaded' , ()=>{
    document.querySelector("form").onsubmit = () =>{
        const inp = document.querySelector('input');
        const task = inp.value;
        const Li = localStorage.getItem(Li);

        Li = document.createElement('li');

        

        const Checkbox = document.createElement('input');
        Checkbox.type = 'checkbox';
        const taskText = document.createTextNode(" " + task);

        Li.append(taskText);
        Li.append(Checkbox);

        document.querySelector('#tasks').append(Li);

        inp.value ='';
        return false;
    }
    document.querySelector('#remove').onclick = () => {
        document.querySelector('#task').value ='';
    }
 });