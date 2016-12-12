var screen = document.getElementById("screen")
var namespace = "http://www.w3.org/2000/svg"

// utility function
function transformPoint(event) {
  var pt = screen.createSVGPoint()
  pt.x = event.x
  pt.y = event.y
  var mousept =  pt.matrixTransform(screen.getScreenCTM().inverse())
  return mousept
}

// Step 2: drawSquare and drawCircle functions

Juan Yepez (yepezjuan6@gmail.com)
function drawSquare(xpos, ypos, size, color) {
 // square drawing code here


  var newSquare = document.createElementNS(namespace,"rect")
 newSquare.setAttribute("fill", color)
 newSquare.setAttribute("x", xpos)
 newSquare.setAttribute("y", ypos)
   newSquare.setAttribute("width", size)
     newSquare.setAttribute("height", size)
 screen.appendChild(newSquare)

}


function drawCircle(xpos, ypos, size, color) {
 // your code here
  var newCircle = document.createElementNS(namespace,"circle")
 newCircle.setAttribute("fill", color)
 newCircle.setAttribute("r" , size)
 newCircle.setAttribute("cx", xpos)
 newCircle.setAttribute("cy", ypos)
 screen.appendChild(newCircle)

}

// Step 3: Event listeners
document.addEventListener("mousedown", function(e) {
  // what do you want to do when the user presses down
  // on the mouse button?
})
