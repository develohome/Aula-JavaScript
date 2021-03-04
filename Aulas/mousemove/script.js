var bxDemo = document.querySelector('.bxDemo');
var criarElemento = document.createElement('div');
        
    bxDemo.addEventListener("mousemove", (event)=>{
        criarElemento.classList.add('box');
        bxDemo.appendChild(criarElemento);
        myFunction(event);
      });
      bxDemo.addEventListener("mouseleave", (event)=>{
        var node = document.querySelector(".box");
        node.parentNode.removeChild(node);
      });  
      function myFunction(e) {
        var x = e.clientX;
        var y = e.clientY;
        let box = document.querySelector('.box');
        box.style.left = `${x}px`
        box.style.top = `${y}px`
        var coor = "Coordinates: (" + x + "," + y + ")";
        console.log(coor)
      }