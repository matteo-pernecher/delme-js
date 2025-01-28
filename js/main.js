//bisogna legare il this a document
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//NON Funziona per problema con this
//const $ = document.querySelector;
//const $$ = document.querySelectorAll;

function test (){
    console.log("test")
}

const t = test;

const paragrafo = $('p');

paragrafo.classList.add('red');

console.log(paragrafo);


const nuovoParagrafo = document.createElement('p');
console.log(nuovoParagrafo);
//aggiunta con appendchild
const testo = document.createTextNode('Testo del paragrafo');
console.log(testo);
nuovoParagrafo.appendChild(testo);
nuovoParagrafo.textContent = 'testo del paragrafo con text content';


const mioTesto = 'ciao';
nuovoParagrafo.innerHTML= `<strong>Testo del paragrafo con innerHTML ${mioTesto}</strong>`;

const parent = $('header');
parent.appendChild(nuovoParagrafo);


const paragreafi = document.querySelectorAll('p');

console.log(paragreafi);
test();
t();



const myDom = {
    type: "div",
    id: "container",
    className: "container",
    children: [
      {
        type: "h1",
        children: [{ type: "text", value: "My DOM Framework" }],
      },
      {
        type: "p",
        children: [
          {
            type: "text",
            children: [
              { type: "text", value: "This is a" },
              {
                type: "span",
                className: "bold",
                children: [{ type: "text", value: " DOM Framework" }],
              },
            ],
          },
        ],
      },
    ],
  };
  
  function render(dom, parent){
   
    const element = document.createElement(dom.type);
    if(dom.className){
     element.className = dom.className;
    }
    if(dom.id){
     element.id = dom.id;
    }
    if (dom.value){
     element.textContent = dom.value;
     parent.appendChild(elemnt);
     return;
    }

    if(dom.children){
        dom.children.forEach(child => {
         render(child,element);   
        });
    }
  }

  function contoallarovescia(num) {
     
    console.log(num);
    if(num === 0){
        return;
    }

     contoallarovescia(num-1);
  }
  contoallarovescia(10);