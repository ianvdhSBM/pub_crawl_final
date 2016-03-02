class ShowUser extends React.Component {

  constructor(props) {
    super();
    this.setExpanded = this.setExpanded.bind(this);
    var markers = [];
    var crawls = props.user.crawls;
    for (var i = 0; i < props.user.crawls.length; i++) {
      markers.push({
        lat: crawls[i].hops[0].lat,
        lng: crawls[i].hops[0].lng,
        title: crawls[i].name
      });
    }
    this.state = {
      markers: markers,
      mapCoordinates: {
        lat: 43.645425,
        lng: -79.395020
      },
      expanded: null
    }
  }

  setExpanded(id) {
    if (id === null) {
      // var markers = this.setDefaultMarkers(this.state.crawls);
      this.setState({
        expanded: id
        // markers: markers
      });
    } else {
      // var crawl = this.state.crawls.filter(function(c){
      //   return c.id === id;
      // });
      // var markers = [];
      // for(var i = 0; i < crawl[0].hops.length; i++){
      //   markers.push({
      //     lat: crawl[0].hops[i].lat,
      //     lng: crawl[0].hops[i].lng,
      //     title: crawl[0].hops[i].name
      //   });
      // }
      this.setState({
        expanded: id
        // markers: markers
      });
    }
  }

  render() {
    var user = this.props.user;
    var self = this;
    return (
      <div id="flexbox-container-columns">
          <div id="crawls-container-flex">
            {/* <Description /> */}
            <div className="row">
              <div className="profile-flex text-center">
                <div className="profile-pic">
                  <img src={user.image.image.thumb.url || "/uploads/default/default.png"} />
                </div>
                <div className="profile-details text-center">
                  <h3>
                    {user.firstname} {user.lastname} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {
                      user.id === this.props.current_user.id && user.provider === null ?
                        <small><a href="/users/edit" className="profile-edit">edit my info</a></small> :
                        null
                    }
                  </h3>
                  <p>{user.email}</p>
                  <p><strong>Joined:</strong> {user.created_at}</p>
                  <p>{user.uid}</p>
                  <p><strong>Hops created:</strong> {this.props.user.crawls.length}</p>
                  <p><strong>Hops reviewed:</strong> {this.props.user.reviews.length}</p>
                </div>
              </div>
              <div>
                <h2>{user.firstname}'s Hops</h2>
              </div>
              { user.crawls.length > 0 ? 
                <CrawlsList key= { user.id } crawls={ user.crawls } tags={ this.props.tags } setExpanded={ self.setExpanded } expanded={ this.state.expanded }/> :
                <div>
                  <h3 id="no-hops">
                    this user hasn't created any hops yet!
                  </h3>
                </div>
              }
            </div>
          </div>
        <div id="map-flex">
          {console.log(this.state.mapCoordinates.lat)}

          <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} markers={this.state.markers}/>

        </div>
      </div>
    )
  }
}