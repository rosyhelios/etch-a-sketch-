function createGrid(size){
  const container=document.getElementById('container');
  container.innerHTML=" ";
  container.style.gridTemplateColumns=`repeat(${size},1fr)`;
  for(i=0;i<size*size;i++)
  {
    const square=document.createElement('div');
    square.classList.add('square');
    square.style.opacity='1';
    square.addEventListener('mouseover',()=>{
      square.style.backgroundColor=randomizeColor();
      darkenSquare(square);
    });
    container.appendChild(square);
  }
}

document.getElementById('grid-size').addEventListener('click',()=>{
  const gridsize=prompt('enter the number of squares')
  if(gridsize>0 && gridsize<=100)
  {createGrid(gridsize);}
  else{
    alert('invalid input . please input the a number within 0 to 100');
  }
});

createGrid(16);

function randomizeColor (){
  const r=Math.floor(Math.random()*256);
  const g=Math.floor(Math.random()*256);
  const b=Math.floor(Math.random()*256);
  return `rgb(${r},${g},${b})`; 
}

function darkenSquare(square){
  const currentopacity=square.style.opacity ;
  square.style.opacity=parseFloat(currentopacity)-0.1;
  if(parseFloat(square.style.opacity)<=0){
    square.style.opacity=0;
  }
}

