class Algo
{ 
static int M = 5; 
static int N = 5; 
  

static void floodFillUtil(int screen[][], int x, int y,  
                                    int prevC, int newC) 
{ 
    // Base cases 
    if (x < 0 || x >= M || y < 0 || y >= N) 
        return;
    
   
    if (screen[x][y] <= prevC && prevC != 0) 
    {
        
        prevC = screen[x][y];
        screen[x][y] = newC;

        //bottom
        floodFillUtil(screen, x+1, y, prevC, newC); 
        //top
        floodFillUtil(screen, x-1, y, prevC, newC); 
        //right
        floodFillUtil(screen, x, y+1, prevC, newC); 
        //left
        floodFillUtil(screen, x, y-1, prevC, newC); 

        //top right
        floodFillUtil(screen, x-1, y+1, prevC, newC);
        //top left
        floodFillUtil(screen, x-1, y-1, prevC, newC);
        //bottom right
        floodFillUtil(screen, x+1, y+1, prevC, newC);
        //bottom left
        floodFillUtil(screen, x+1, y-1, prevC, newC);

    }
}

// calls floodFillUtil() 
static void floodFill(int screen[][], int x, int y, int newC) <!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Elevation Service</title>
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      #map {
        height: 100%;
      }
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 63.333, lng: -150.5},  // Denali.
          mapTypeId: 'terrain'
        });
        var elevator = new google.maps.ElevationService;
        var infowindow = new google.maps.InfoWindow({map: map});

        // Add a listener for the click event. Display the elevation for the LatLng of
        // the click inside the infowindow.
        map.addListener('click', function(event) {
          displayLocationElevation(event.latLng, elevator, infowindow);
        });
      }

      function displayLocationElevation(location, elevator, infowindow) {
        // Initiate the location request
        elevator.getElevationForLocations({
          'locations': [location]
        }, function(results, status) {
          infowindow.setPosition(location);
          if (status === 'OK') {
            // Retrieve the first result
            if (results[0]) {
              // Open the infowindow indicating the elevation at the clicked position.
              infowindow.setContent('The elevation at this point <br>is ' +
                  results[0].elevation + ' meters.');
            } else {
              infowindow.setContent('No results found');
            }
          } else {
            infowindow.setContent('Elevation service failed due to: ' + status);
          }
        });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
    </script>
  </body>
</html>
{ 
   int prevC = screen[x][y]; 
   
     floodFillUtil(screen, x, y, prevC, newC); 
   
} 

// Driver code 
public static void main(String[] args)  
{ 
    int screen[][] = 
                    {
                    {15, 14, 18, 19, 20},
                    {16, 10, 15, 20, 10},
                    {17, 8 , 6 , 9 , 11},
                    {18, 7 , 5 , 4 , 12},
                    {19, 6 , 6 , 10, 13},
                    };


    int x = 0, y = 0, newC = 0; 
    floodFill(screen, x, y, newC);   
    System.out.println("Updated screen after call to floodFill: "); 
    
    for (int i = 0; i < M; i++) 
    { 
        for (int j = 0; j < N; j++) 
        System.out.print(screen[i][j] + " "); 
        System.out.println(); 
    } 
    } 
} 



