// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//global variables
let btn = document.getElementById("action"),
    cw = document.getElementById('inputWidth'),
    ch = document.getElementById('inputHeight'),    
    table = document.getElementById('pixelCanvas'),
    color = document.getElementById('colorPicker');

//**********************************************************

    //start drawing when submitting query
    btn.addEventListener('click', function(e){
        e.preventDefault();
        clearDraw(); // function is defined below
        makeGrid(); // function is defined below
    });


/*  This function makeGrid() sets the dynamics
    of creating the whole grid
*/
function makeGrid() {

    //alert("Hello! I am an alert box!!"); // just for test    
    
    for (let h = 0; h < ch.value; h++) {
        let row = table.insertRow(h);       
    
        for (let w = 0; w < cw.value; w++) {
            let newCell = row.insertCell(w);
            
            // controll color fill
            newCell.addEventListener('click', function(){
                this.style.backgroundColor = color.value;
            });
        }
    }
}

// function that removes and resets everything
function clearDraw() {
    while (table.firstChild) {
        table.removeChild(table.firstChild);
    }
}