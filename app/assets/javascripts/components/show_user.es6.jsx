class ShowUser extends React.Component {

  constructor(props) {
    super();
    this.setExpanded = this.setExpanded.bind(this);

    this.state = {
      user: props.user,
      crawls: props.user.crawls,
      expanded: null
    }
  }

  setExpanded(id) {
    if (id === null) {
      // var markers = this.setDefaultMarkers(this.state.crawls);
      console.log(this)
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
      console.log(this)
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
      <div className="container">
        <div className="row">
          <div className="profile-flex">
            <div className="profile-pic">
              <img src={user.image.image.thumb.url} />
            </div>
            <div className="profile-details">
              <h3>{user.firstname}'s profile</h3>
              <p>{user.email}</p>
              <p><strong>Joined:</strong> {user.created_at}</p>
              <p><strong>Hops created:</strong> (Total number of hops created)</p>
              <p><strong>Reviewed:</strong> (number of reviews) hops</p>
            </div>
          </div>
          <div>
            <h2>{user.firstname}'s Hops</h2>
          </div>
          <CrawlsList key= { user.id } crawls={ user.crawls } tags={ this.props.tags } setExpanded={ self.setExpanded } expanded={ this.state.expanded }/>
        </div>
      </div>
    )
  }
}