class CrawlShow extends React.Component {

  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onCommentChange = this.onCommentChange.bind(this);
    this.onRatingChange = this.onRatingChange.bind(this);
    var markers = [];
    for(var i = 0; i < props.crawl.hops.length; i++){
      markers.push({
        lat: props.crawl.hops[i].lat,
        lng: props.crawl.hops[i].lng,
        title: props.crawl.hops[i].name
      });
    }
    this.state = {
      markers: markers,
      crawl: props.crawl,
      mapCoordinates: {
        lat: 43.645425,
        lng: -79.395020
      },
      review: {
        crawl_id: props.crawl.id,
        rating: null,
        comment: '',
        user_id: props.user.id
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

  onCommentChange(e) {
    var review = this.state.review;
    review.comment = e.target.value;
    this.setState({review: review})
  }

  onRatingChange(e) {
    var review = this.state.review;
    review.rating = e.target.value;
    this.setState({review: review})
  }

  handleSubmit(e) {
    e.preventDefault();
    data = this.state.review
    console.log(data);
    // data.review = this.state.review;
    // $.ajax({
    //   url: "/crawls/:id",
    //   dataType: 'json',
    //   type: 'POST',
    //   data: data,
    //   success: function(data) {
    //     console.log(data);
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.log('you suck');
    //   }
    // })
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
            <div><h2>{crawl.name}</h2></div>
            <div className="tags-flex">

              { self.props.crawl.tags.map(function(tag) {
                return (
                  <div className="tags-list" key={tag.id}>#{tag.name}</div>
                )
              })}

            </div>
          </div>
          <div>
          <CrawlDetails key={ crawl.id } crawl= { crawl } hops={ crawl.hops } tags={ crawl.tags} price={ this.state.price }/>
          </div>
          <div className="review">
            <h3>Review Goes Here</h3>
            <form className="input-group" onSubmit={this.handleSubmit}>
              <label>Rating:</label>
              <select className="form-control" id="rating" value={review.value}onChange={this.onRatingChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
              <div className="form-group">
                <label>Comments:</label>
                <textarea value={review.comment} onChange={this.onCommentChange} className="form-control" id="comment" rows="5"></textarea>
                <br/>
              </div>
              <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        </div>
      </div>  
    )
  }
}
