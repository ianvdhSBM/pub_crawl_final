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
        var styles = [
        {
            "featureType": "water",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#d3d3d3"
                }
            ]
        },
        {
            "featureType": "transit",
            "stylers": [
                {
                    "color": "#808080"
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#b3b3b3"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "weight": 1.8
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d7d7d7"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ebebeb"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#a7a7a7"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#efefef"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#696969"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#737373"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#d6d6d6"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {},
        {
            "featureType": "poi",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        }
    ]

    map.setOptions({styles: styles});
  }

  render () {

    return (
      <div id="map"></div>
    );
  }
}

