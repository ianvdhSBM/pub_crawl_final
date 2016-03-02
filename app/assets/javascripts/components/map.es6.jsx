class Map extends React.Component {
  constructor(props){
    super();
  }

  componentDidMount(){
    this.componentDidUpdate();
  }

  componentDidUpdate(){

    if(this.mapLat == this.props.lat && this.mapLng == this.props.lng && this.props.expanded != null){
      map.removeMarkers();
      map.cleanRoute();
      map.setZoom(14);
      var markers = this.props.markers;
      map.setCenter({lat: parseFloat(markers[0].lat), lng: parseFloat(markers[0].lng)})
      var waypoints = [];
      for(var i = 0; i < markers.length; i++){
        var image = 'http://www.googlemapsmarkers.com/v1/' + (i + 1).toString() + '/076CB7/FFFFFF/3C3C3C/';
        map.addMarker({
          lat: markers[i].lat,
          lng: markers[i].lng,
          icon: image,
          infoWindow: {
            content: "<p>" + markers[i].title + "</p>"
          }
        });
        waypoints.push({
          location: new google.maps.LatLng({
            lat: Number.parseFloat(markers[i].lat),
            lng: Number.parseFloat(markers[i].lng)
          })
        });
      }
      map.drawRoute({
        origin: [markers[0].lat, markers[0].lng],
        destination: [Number.parseFloat(markers[markers.length - 1].lat), Number.parseFloat(markers[markers.length - 1].lng)],
        travelMode: "walking",
        waypoints: waypoints,
        strokeColor: "blue",
        strokeOpacity: 0.5,
        strokeWeight: 3
      });
      return;
    }

    this.mapLat = this.props.lat;
    this.mapLng = this.props.lng

    map = new GMaps({
      el: '#map',
      lat: this.props.lat,
      lng: this.props.lng,
      scrollwheel: false,
      streetViewControl: false,
      mapTypeControl: false,
      zoom: 13
    });
    var markers = this.props.markers;
    var image = 'http://www.googlemapsmarkers.com/v1/076CB7/';
    for(var i = 0; i < markers.length; i++){
      map.addMarker({
        lat: markers[i].lat,
        lng: markers[i].lng,
        icon: image,
        infoWindow: {
          content: "<p>" + markers[i].title + "</p>"
        }
      });
    }

    map.setOptions({styles: styles});
  }

  render () {

    return (
      <div id="map"></div>
    );
  }
}

