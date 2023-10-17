const filter= ["Aardbei",]

mapboxgl.accessToken = 'pk.eyJ1IjoiNjQzMDIiLCJhIjoiY2w0ZTN1bzJvMDBocDNrcnBibmY1OHI5diJ9.tfqvrMp3g0m-jqZjf7YcaA';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/64302/cl4e3ymuc00ac15p63upzojnt',
  center: [5.492066256167886,51.42778373948258],
  zoom: 12
});

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.492066256167886,51.45779373948258]
      },
      properties: {
        title: 'John Doe',
        button: 'Bestellen',
        stock:["Aardbei", "Komkommer", "Tomaat"]
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [5.4820988068812895,51.43282369553785]
      },
      properties: {
        title: 'John DOBY',
        button: 'Bestellen',
        stock:["Aardbei", "Komkommer"]
      }
    }
  ]
};

for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement('div');
  el.className = 'marker';


// make a marker for each feature and add it to the map
//if () {
  new mapboxgl.Marker(el)
.setLngLat(feature.geometry.coordinates)
.setPopup(
new mapboxgl.Popup({ offset: 25 }) // add popups
.setHTML(
`<h3>${feature.properties.title}</h3>
<p class="my-2">${feature.properties.stock}</p>
<a class="btn btn-success" href="mijncommunity.html">${feature.properties.button}</a>`
)
)
.addTo(map);
//} else {
  
//}

}
