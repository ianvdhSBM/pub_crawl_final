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

