class Map extends React.Component {
  constructor(props){
    super();
  }

  componentDidMount(){
    this.componentDidUpdate();
  }

  componentDidUpdate(){

    if(this.lastLat == this.props.lat && this.lastLng == this.props.lng){
      return;
    }

    this.lastLat = this.props.lat;
    this.lastLng = this.props.lng

    var map = new GMaps({
      el: '#map',
      lat: this.props.lat,
      lng: this.props.lng
    });
  }

  render () {
    return (
        <div id="map"></div>
    );
  }
}

