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
    document.getElementById("star-"+ this.props.crawl.rating + "0").checked = true;

    var elements = document.getElementById("averageRating").elements;
    for (var i = 0, len = elements.length; i < len; ++i) {
        elements[i].disabled = true;
    }
  }


  onRatingChange(e) {
    var newRating = e.target.value;
    this.setState({review: {rating: newRating}})
  }


  handleSubmit(e) {
    var review = this.state.review;
    var crawl = this.state.crawl;
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
              <div className="crawlShow-flex">
                <div className="crawl-name">
                  <h2>{crawl.name}</h2>
                </div>
                <div className="crawl-rating">
                  <form id="averageRating">
                    <div className="stars">
                      <input type="radio" name="star" className="star-10" id="star-10" />
                      <label className="star-10" htmlFor="star-10">1</label>
                      <input type="radio" name="star" className="star-20" id="star-20" />
                      <label className="star-20" htmlFor="star-20">2</label>
                      <input type="radio" name="star" className="star-30" id="star-30" />
                      <label className="star-30" htmlFor="star-30">3</label>
                      <input type="radio" name="star" className="star-40" id="star-40" />
                      <label className="star-40" htmlFor="star-40">4</label>
                      <input type="radio" name="star" className="star-50" id="star-50" />
                      <label className="star-50" htmlFor="star-50">5</label>
                      <span></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="tags-flex">

              { self.props.crawl.tags.map(function(tag) {
                return (
                  <div className="tags-list" key={tag.id}>
                    #{tag.name}
                  </div>
                )
              })}

            </div>
          </div>
          <div id="crawl-details-show">
            <CrawlDetails key={ crawl.id } crawl= { crawl } hops={ crawl.hops } tags={ crawl.tags } price={ this.state.price }/>
          </div>
          { this.props.user ?
            <div id="review-form">
              <h3>Write a Review</h3>
              <form className="input-group ratingsForm" onChange={this.onRatingChange.bind(this)}>
                <label>Rating:</label>
                <div className="stars">
                  <input type="radio" name="star" className="star-1 rating" id="star-1" value="1" />
                  <label className="star-1" htmlFor="star-1">1</label>
                  <input type="radio" name="star" className="star-2 rating" id="star-2" value="2" />
                  <label className="star-2" htmlFor="star-2">2</label>
                  <input type="radio" name="star" className="star-3 rating" id="star-3" value="3" />
                  <label className="star-3" htmlFor="star-3">3</label>
                  <input type="radio" name="star" className="star-4 rating" id="star-4" value="4" />
                  <label className="star-4" htmlFor="star-4">4</label>
                  <input type="radio" name="star" className="star-5 rating" id="star-5" value="5" />
                  <label className="star-5" htmlFor="star-5">5</label>
                  <span></span>
                </div>
              </form>
              <form className="input-group" onSubmit={this.handleSubmit}>
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
