class CrawlsList extends React.Component {

  constructor(props) {
    super();
    this.filterCrawls = this.filterCrawls.bind(this);
    this.state = {
      filtercrawls: props.crawls,
      clicked: false
    }
  }

  sortName(crawls) {
    if (this.state.clicked === true) {
      return crawls.sort(function(a, b){
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      })
    }
    else {
      return crawls.sort(function(a, b) {
        if(a.name > b.name) return -1;
        if(a.name < b.name) return 1;
        return 0;
      })
    }
  }

  // toggle sort to be both alphebetical / reverse alphabetical
  // implement an 'all' filter set to this.props.crawls that will show the crawls in original order
  filterCrawls(filter) {
    var tags = ['dive bar', 'wine', 'beer', 'cool', 'lounge', 'fancy', 'food'];
    var filters = ['all', 'name', 'price', 'rating'];
    if (tags.indexOf(filter) > -1) {
      this.setState({filtercrawls: this.props.crawls.filter(function(crawl) {
        for (var i = 0; i < crawl.tags.length; i++) {
          if (crawl.tags[i].name === filter) {
              return true;
          }
        }
        return false;
      })})
    }
    else if (filters.indexOf(filter) > -1) {
      switch (filter) {
        case 'all':
          this.setState({filtercrawls: this.props.crawls})
          break;
        case 'name':
          this.setState({clicked: !this.state.clicked})
          crawls = Array.from(this.props.crawls);
          this.setState({filtercrawls: this.sortName(crawls)})
          break;
        case 'price':
          console.log(filter);
          break;
        case 'rating':
          console.log(filter);
          break;
        default:
          console.log('wtf')
      }
    }
  }

  render () {
    var tags = ['dive bar', 'wine', 'beer', 'cool', 'lounge', 'fancy', 'food'];
    var filters = ['all', 'name', 'price', 'rating'];
    return (
      <div className="container" id="master-div">
        <div className="row">

            <h1>Crawls</h1>
            <Filters filterCrawls={this.filterCrawls} tags={tags} filters={filters}/>
            <div className="crawlList-flex">
              <div className="crawlList-header"><h3>Name</h3></div>
              <div className="crawlList-header"><h3>Start Address</h3></div>
              <div className="crawlList-header"><h3>Description</h3></div>
            </div>

        </div>

        { this.state.filtercrawls.map(function(crawl) {
          return (
            <Crawl key={ crawl.id } crawl={ crawl } bars={ crawl.bars } tags={ crawl.tags }/>
          )
        })}
      </div>
    )
  }
}

