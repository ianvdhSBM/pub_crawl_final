class Map extends React.Component {
  constructor(props){
    super();
  }

  componentDidMount(){
    this.componentDidUpdate();
  }

  componentDidUpdate(){

    if(this.mapLat == this.props.lat && this.mapLng == this.props.lng){
      map.removeMarkers();
      map.cleanRoute();
      var markers = this.props.markers;
      var waypoints = [];
      for(var i = 0; i < markers.length; i++){
        map.addMarker({
          lat: markers[i].lat,
          lng: markers[i].lng,
          infoWindow: {
            content: "<p>" + markers[i].title + "</p>"
          },
          label: (i + 1).toString()
        });
        waypoints.push({
          location: new google.maps.LatLng({
            lat: Number.parseFloat(markers[i].lat),
            lng: Number.parseFloat(markers[i].lng)
          })
        })
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
      zoom: 13
    });
    var markers = this.props.markers;
    for(var i = 0; i < markers.length; i++){
      map.addMarker({
        lat: markers[i].lat,
        lng: markers[i].lng,
        infoWindow: {
          content: "<p>" + markers[i].title + "</p>"
        }
      });
    }
  }

  render () {
    return (
        <div id="map"></div>
    );
  }
}

