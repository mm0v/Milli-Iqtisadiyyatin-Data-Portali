const form = document.querySelector('form');
const input = document.querySelector('input');
const add = document.querySelector('.add');
const ul = document.querySelector('ul');
const whiteBox = document.querySelector('.white-box');
const clearAll = document.createElement('button');
let p = document.createElement('p')
p.innerHTML = `You have 0 pending tasks`
clearAll.id = 'clear-all';
clearAll.innerHTML = 'Clear All';
p.id = 'p'

whiteBox.appendChild(clearAll);
whiteBox.appendChild(p)


form.onsubmit = (e) => {
    e.preventDefault();

    add.onclick = () => {
        if (!input.value) {
            alert('please fill input')
        } else {
            const li = document.createElement('li');
            const deleteItem = document.createElement('button');
            const i = document.createElement('i');
            let count = document.getElementsByTagName('li').length + 1
            p.innerHTML = `You have ${count} pending tasks`
            li.id = 'li';
            deleteItem.id = 'delete-item';
            i.className = "fa-solid fa-trash";

            li.innerHTML = input.value;
            li.appendChild(deleteItem);
            deleteItem.appendChild(i);
            ul.appendChild(li);
            input.value = "";
            deleteItem.onclick = () => {
                li.remove();
                let count = document.getElementsByTagName('li').length
                p.innerHTML = `You have ${count} pending tasks`

            }
            li.onclick = () => {
                li.style.textDecoration = 'line-through'
            }
            li.ondblclick = () => {
                li.style.textDecoration = 'none';

            }
           
        }
    }
   
}
clearAll.onclick = () => {
    ul.innerHTML = "";
    let count = document.getElementsByTagName('li').length
    p.innerHTML = `You have ${count} pending tasks`
   
}
