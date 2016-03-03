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
      expanded: props.crawl.id,
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
      <div id="flexbox-container-columns">
          <div id="crawls-container-flex">
            {/* <Description /> */}
              <div>
                <div>
                  <div className="crawlShow-flex">
                    <div className="crawl-name">
                      <h2>{crawl.name}</h2>
                    </div>
                    <div className="crawl-rating">
                      { crawl.rating ?
                        <img src={"/assets/" + crawl.rating + "-stars.png"} /> :
                        <em>Not yet rated</em>
                      }
                    </div>
                    <div className="crawlShow-tags">
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
                  </div>
                </div>

              </div>
              <div className="details-reviews-flex">

                <div id="crawl-details-show">
                  <CrawlDetails key={ crawl.id } crawl= { crawl } hops={ crawl.hops } tags={ crawl.tags } price={ this.state.price }/>
                </div>

                { this.props.user ?
                <InviteForm userId={this.props.user.id} crawlId={this.props.crawl.id}/> : false
                }

                { this.props.user ?
                  <div className="crawl-details-review">
                    <div>
                      <h3>write a review</h3>
                    </div>
                    <div id="review-form">
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
                        <button type="submit" className="btn btn-default" id="review-button">Submit</button>
                      </form>
                      <br/>
                    </div>
                  </div> :
                    <div>
                      <h3>
                        please <a href="/users/sign_in">sign in</a> to write a review
                      </h3>
                    </div>
                }
              </div>

              { this.state.filteredreviews.length > 0 ?
                <div id="show-reviews">
                  <div className="review-list-flex">
                    <div className="review-list-header"><strong><h4>Username</h4></strong></div>
                    <div className="review-list-header"><h4>Rating</h4></div>
                    <div className="review-list-header"><h4>Comments</h4></div>
                  </div>

                    { this.state.filteredreviews.map(function(review) {
                      return (
                        <div className="row border" key={ review.id } >
                          <div className="review-list-flex" key={review.id}>
                            <img src={review.user.image.url} className="small-image" />
                            <div className="review-list-row"><h5><a href={"/users/" + review.user.id}>{review.user.firstname} {review.user.lastname}</a></h5></div>
                            <div className="crawl-rating">
                              <img src={"/assets/" + review.rating + "-stars.png"} />
                            </div>
                            <div className="review-list-row"><p>{review.comment}</p></div>
                          </div>
                        </div>
                      )
                    })}
                </div> : false
              }
            <br/>
            
          </div>
        <div id="map-flex">
          <Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng} markers={ this.state.markers } expanded={ this.state.expanded }/>
        </div>

      </div>
    )
  }

}
