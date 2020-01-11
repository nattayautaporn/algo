<script>
  // Full list options at "leaflet-elevation.js"
  var elevation_options = {

    // Default chart colors: theme lime-theme, magenta-theme, ...
    theme: "lightblue-theme",

    // Chart container outside/inside map container
    detached: true,

    // if (detached), the elevation chart container
    elevationDiv: "#elevation-div",

    // if (!detached) autohide chart profile on chart mouseleave
    autohide: false,

    // if (!detached) initial state of chart profile control
    collapsed: false,

    // if (!detached) control position on one of map corners
    position: "topright",

    // Autoupdate map center on chart mouseover.
    followMarker: true,

    // Chart distance/elevation units.
    imperial: false,

    // [Lat, Long] vs [Long, Lat] points. (leaflet default: [Lat, Long])
    reverseCoords: false,

    // Summary track info style: "line" || "multiline" || false,
    summary: 'multiline',

  };

  //Instantiate map (leaflet-ui).
  var map = new L.Map('map', { mapTypeId: 'terrain', center: [41.4583, 12.7059], zoom: 5 });

  // Instantiate elevation control.
  var controlElevation = L.control.elevation(elevation_options).addTo(map);

  // Load track from url (allowed data types: "*.geojson", "*.gpx")
  controlElevation.load("https://raruto.github.io/examples/leaflet-elevation/via-emilia.gpx");

</script>