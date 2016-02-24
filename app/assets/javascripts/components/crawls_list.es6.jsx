class CrawlsList extends React.Component {

  constructor(props) {
    super();
    this.filterProps = this.filterProps.bind(this);
    this.state = {
      crawls: props.crawls
    }
  }

  sortName(crawls) {
    return crawls.sort(function(a, b){
      if(a.name < b.name) return -1;
      if(a.name > b.name) return 1;
      return 0;
    })
  }

  // toggle sort to sort alphabetically / reverse
  filterProps(filter) {
    console.log('You clicked ' + filter);
    switch (filter) {
      case 'dive bar':
        //iterate over crawls to get each crawl's tags
        //iterate over those tags
        //see if it matches the case value
        //if so set crawls: equal to a new array of those crawls
        //this.setState({crawls: this.})
        console.log(filter);
        break;
      case 'wine':
        this.setState({crawls: this.state.crawls.filter(this.filterByProperty)})
        break;
      case 'name':
        console.log('filter');
        this.props.crawls.map(function(crawl) {
          console.log(crawl.tags);
        })
        crawls = Array.from(this.props.crawls);
        this.setState({crawls: this.sortName(crawls)})
        break;
      default:
        console.log('what?');
    }
  }

  filterByProperty(value) {
    var tags = ['dive bar', 'wine', 'beer', 'cool', 'lounge', 'fancy', 'food'];
    var filters = ['name', 'price', 'rating'];
    for (var i = 0; i < value.tags.length; i++) {
      // if (tags.indexOf(value.tags[i].name) > -1) {
      //   return true;
      // }
      if (value.tags[i].name === 'dive bar') {
          return true;
      }
    }
    return false;
  }

  render () {
    var tags = ['dive bar', 'wine', 'beer', 'cool', 'lounge', 'fancy', 'food'];
    var filters = ['name', 'price', 'rating'];
    return (
      <div>
        <div className="container">
          <div className="row">

              <h1>Crawls</h1>
              <Filters filterProps={this.filterProps} tags={tags} filters={filters}/>
              <div className="crawlList-flex">
                <div className="crawlList-header"><h3>Name</h3></div>
                <div className="crawlList-header"><h3>Start Address</h3></div>
                <div className="crawlList-header"><h3>Description</h3></div>
              </div>

          </div>

          { this.state.crawls.map(function(crawl) {
            return (
              <Crawl key={ crawl.id } crawl={ crawl } bars={ crawl.bars } tags={ crawl.tags }/>
            )
          })}
        </div>
      </div>
    )
  }
}

