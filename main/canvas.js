const canvas = document.getElementById('canvas') //creates the document 
const ctx = canvas.getContext('2d') //sets the canvas as 2d
ctx.fillRect(0,0,500,500) //creates the black background square

let pathX = 0 //starts path at X axis 0 
let pathY = 250 //starts path at Y axis 250

drawPath(pathX, pathY) //draws shape at listed x and y axis
addEventListener('keydown', movePath) //calls movePath when key is pressed

function drawPath(x, y) { //creates the function drawPath
    ctx.strokeStyle = 'red' //sets stroke style to red
    ctx.beginPath() //starts drawing path
    ctx.rect(x,y,10,10) //creates rectangle at x and y axis of size 10 by 10 pixels
    ctx.stroke() // sets it as just an outline

}

function movePath(event) { //creates function movePath
    switch (event.key) {
        case '1': //if key 1 is pressed
            ctx.clearRect(0,0,500,500) //clears the canvas
            ctx.fillRect(0,0,500,500) //refills the background
            break //breaks code
        case 'ArrowLeft': //if left arrow is pressed
            pathX -=10 // subtracts 10 from x axis
            break //breaks codes
        case 'ArrowRight': //if right arrow is pressed
            pathX +=10 //adds 10 to x axis
            break //breaks code
        case 'ArrowUp': //if up arrow is pressed
            pathY -=10 //subtracts 10 from y axis
            break //breaks code
        case 'ArrowDown': //if down arrow is pressed
            pathY +=10 //adds 10 to y axis
            break //breaks code
    }
    pathX = Math.max(0, Math.min(490,pathX)) //sets max and min x axis
    pathY = Math.max(0, Math.min(490,pathY)) //sets max and min y axis
    
    drawPath(pathX, pathY) //draws square at position x, y on axis
}
