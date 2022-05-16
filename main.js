const selector = document.querySelector(".selector")
const slider = document.querySelector(".slider")
const ball = slider.querySelector('.ball')
const backColor = slider.querySelector(".before-ball")
const year = document.querySelector(".month")


selector.addEventListener("click", changePlan)

function changePlan(e) {
     const el = e.target
     el.classList.toggle("circle-btn")
}

ball.onmousedown = function(event) {
    event.preventDefault(); 
    let shiftX = event.clientX - ball.getBoundingClientRect().left;
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;
     
      if (newLeft < 0) {
        newLeft = 0;
      }
      let rightEdge = slider.offsetWidth - ball.offsetWidth;
      if (newLeft > rightEdge) {
        newLeft = rightEdge;
      }
      backColor.style.width = newLeft + "px"
    }
    
    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }
  };
  ball.ondragstart = function() {
    return false;
  };






























