'use strict';


// Custom Elements, Templates , Shadow DOM
// shadowRoot "lightweight iframe"

// const template = document.createElement('template');
// template.innerHTML = `<style>h2{color:red;}</style><h2></h2>`;
        
// class MyElement extends HTMLElement{
//     constructor(){
//         // if define a constructor, always call super() first !
//         super();
//         this.attachShadow({mode:'open'});
//         this.shadowRoot.appendChild(template.content.cloneNode(true));
//         this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
//     }
// }
// window.customElements.define('my-element', MyElement);

// Attributes , properties , events
function changeProduct(){
    document.querySelector('my-element').name = 'Calculator';
    document.querySelector('my-element').show();
}
function changeProductBack(){
    document.querySelector('my-element').setAttribute('name', 'Headphones')
        document.querySelector('my-element').hide();
}

const template = document.createElement('template');
template.innerHTML = `<style>h2{color:red;}</style><h2></h2>
<button style="display:none;>Buy</button>
`;
        
class MyElement extends HTMLElement{
    static get observedAttribute(){
        return ['name'];
    }
    constructor(){
        // if define a constructor, always call super() first !
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('name');
    }
    hide(){
        this.shadowRoot.querySelector('button').style.display = "none";
    }
    show(){
        this.shadowRoot.querySelector('button').style.display = "block";
    }
    get name(){
        return this.shadowRoot.querySelector('h2').innerText;
    }
    set name(value){
        this.shadowRoot.querySelector('h2').innerText = value;
    }
    attributeChanged(name, oldValue, newValue){
        if(name ==='name'){
            this.shadowRoot.querySelector('h2').innerHTML = newValue;
        }
    }
    connected(){
        this.shadowRoot.querySelector('button').addEventListener('click', ()=> this.dispatchEvent(new Event('buy', {} )));
    }
    disconected(){
        this.shadowRoot.querySelector('button').removeEventListener('click');
    }
}
window.customElements.define('my-element', MyElement);