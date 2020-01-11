var M = 5;
var N = 5;

function floodFillUtil(screen, x, y, prevC, newC , newB) {
    if (x < 0 || x >= M || y < 0 || y >= N)
        return;
    if (screen[x][y] <= prevC && prevC != 0 ) {
       // console.log("screen",prevC)
        prevC = screen[x][y];
        screen[x][y] = newC; //1
      //  console.log("show newc",newC)
        //bottom
        floodFillUtil(screen, x + 1, y, prevC, newC);
        //top
        floodFillUtil(screen, x - 1, y, prevC, newC);
        //right
        floodFillUtil(screen, x, y + 1, prevC, newC);
        //left
        floodFillUtil(screen, x, y - 1, prevC, newC);

        //top right
        floodFillUtil(screen, x - 1, y + 1, prevC, newC);
        //top left
        floodFillUtil(screen, x - 1, y - 1, prevC, newC);
        //bottom right
        floodFillUtil(screen, x + 1, y + 1, prevC, newC);
        //bottom left
        floodFillUtil(screen, x + 1, y - 1, prevC, newC);

    }
}

function floodFill(screen, x, y, newC) {
    var prevC = screen[x][y];
    floodFillUtil(screen, x, y, prevC, newC);

}


//-----------------------------------------old---------------------------------------------------------------
// function main() {
//     var screen =
       
//         [
//             [51.2, 49, 46.6, 44.1, 41.6 ],
//             [51.8, 49.4, 47.1, 44.7, 42.4 ],
//             [51.3, 48.8, 46.3, 44.1, 42 ],
//             [50.7, 48.1, 45.5, 43.5, 41.5 ],
//             [50.5, 47.8, 45.1, 43.2, 41.4]
            
//         ];

//     var x = 0, y = 0, newC = 0 ;
//     floodFill(screen, x, y, newC);
//     console.log("Vector Field and floodFill: ");
//     console.log( screen);
// }

// main();






//--------------------------------------------new not complete------------------------------------------------------------


function main() {
    console.log("Vector Field and floodFill: ");
    setInterval(function (newC){ 
        var screen =   
            [
                [51.2, 49, 46.6, 44.1, 41.6 ],
                [51.8, 49.4, 47.1, 44.7, 42.4 ],
                [51.3, 48.8, 46.3, 44.1, 42 ],
                [50.7, 48.1, 45.5, 43.5, 41.5 ],
                [50.5, 47.8, 45.1, 43.2, 41.4]           
            ];
    
        var x = 0, y = 0;
        console.log ('0',newC);
        floodFill(screen, x, y, newC);
        console.log(screen);
        // console.log('-----------------');
      
       
     }, 500);
  }

main();