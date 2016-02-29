class CrawlShow extends React.Component {

  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    var markers = [];
    for(var i = 0; i < props.crawl.hops.length; i++){
      markers.push({
        lat: props.crawl.hops[i].lat,
        lng: props.crawl.hops[i].lng,
        title: props.crawl.hops[i].name
      });
    }
    var crawl_id = props.crawl.id
    var filteredreviews = [];
    for (var i = 0; i < props.reviews.length; i++) {
      if (props.reviews[i].crawl_id === crawl_id) {
        filteredreviews.push(props.reviews[i]);
      }
    }
    this.state = {
      user: props.user,
      markers: markers,
      crawl: props.crawl,
      mapCoordinates: {
        lat: 43.645425,
        lng: -79.395020
      },
      filteredreviews: filteredreviews,
      reviews: props.reviews,
      review: {
        crawl_id: props.crawl.id,
        rating: 1,
        comment: '',
        user_id: props.user ? props.user.id : null
      }
    }
  }

  componentDidMount() {
    var bars = this.props.crawl.hops
    var prices = [];
    for (var i = 0; i < bars.length; i++) {
      if (bars[i].price !== null) {
        prices.push(bars[i].price);
      }
    }
    this.setState({price: Math.round(((prices.reduce ( (prev, curr) => prev + curr )) / (prices.length)))})
  }

  handleSubmit(e) {
    var review = this.state.review;
    var crawl = this.state.crawl;
    review.rating = e.target.querySelector('#rating').value;
    review.comment = e.target.querySelector('#comment').value;
    this.setState({review: review})
    var data = this.state.review;
    $.ajax({
      url: "/crawls/" + crawl.id + "/reviews",
      dataType: 'json',
      type: 'POST',
      data: data
    })
  }

  render () {
    var self = this;
    var crawl = this.props.crawl;
    var review = this.state.review;
    return (
      <div>
        <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} markers={this.state.markers}/>
        <div className="container page-wrapper">
          <div>
            <div>
              <h2>{crawl.name}</h2>
            </div>
            <div className="tags-flex">

              { self.props.crawl.tags.map(function(tag) {
                return (
                  <div className="tags-list" key={tag.id}>#{tag.name}</div>
                )
              })}

            </div>
          </div>
          <div id="crawl-details-show">
            <CrawlDetails key={ crawl.id } crawl= { crawl } hops={ crawl.hops } tags={ crawl.tags} price={ this.state.price }/>
          </div>
          { this.props.user ?
            <div id="review-form">
              <h3>Write a Review</h3>
              <form className="input-group" onSubmit={this.handleSubmit}>
                <label>Rating:</label>
                <select name="review[rating]" className="form-control" id="rating" value={review.value}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <div className="form-group">
                  <label>Comments:</label>
                  <textarea name="review[comment]" className="form-control" id="comment" rows="5"></textarea>
                  <br/>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
              </form>
              <br/>
            </div> :
              <div>
                <h3>
                  Please <a href="/users/sign_in">Sign In</a> to write a review
                </h3>
              </div>
          }
          { this.state.filteredreviews.length > 0 ?
            <div id="show-reviews">
              <table className="table table-hover text-center">
                <thead>
                  <tr>
                    <th className="text-center"><h3>Username</h3></th>
                    <th className="text-center"><h3>Rating</h3></th>
                    <th className="text-center"><h3>Comment</h3></th>
                  </tr>
                </thead>
                <tbody>
                  { this.state.filteredreviews.map(function(review) {
                    return (
                      <tr className="review" key={review.id}>
                        <td><h5><a href={"/users/" + review.user.id}>{review.user.firstname} {review.user.lastname}</a></h5></td>
                        <td><p>{review.rating}</p></td>
                        <td><p>{review.comment}</p></td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div> : false
          }
        </div>
      </div>
    )
  }

}
