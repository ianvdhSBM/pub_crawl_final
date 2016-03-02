class CrawlsList extends React.Component {

  constructor(props) {
    super();
    this.filterCrawls = this.filterCrawls.bind(this);
    this.searchName = this.searchName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      filtercrawls: props.crawls,
      clicked: false
    }
  }

  sortName(crawls) {
    if (this.state.clicked === true) {
      return crawls.sort(function(a, b){
        if(a.name > b.name) return -1;
        if(a.name < b.name) return 1;
        return 0;
      })
    }
    else {
      return crawls.sort(function(a, b) {
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
      })
    }
  }

  setTagsArray(tags) {
    tagsArray = []
    tags.map(function(tag) {
      tagsArray.push(tag.name);
    })
    return tagsArray;
  }

  filterCrawls(filter) {
    var tags = this.setTagsArray(this.props.tags)
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
          this.props.setExpanded(null)
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

  searchName(val) {
    var crawls = this.props.crawls
    var filtered = []
    for (var i = 0; i < crawls.length; i++) {
      var crawl = crawls[i];
      if (crawl.name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
        filtered.push(crawl);
      }
      for (var j = 0; j < crawl.hops.length; j++) {
        if (crawl.hops[j].name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          filtered.push(crawl);
        }
      }
    }
    if (filtered.length > 0) {
      this.setState({filtercrawls: filtered})
    }
    else {
      this.setState({filtercrawls: []})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    var content = e.target.querySelector('[name="search"]').value;
    this.searchName(content)
    e.target.reset()
  }

  render () {
    var self = this;
    var tags = this.setTagsArray(this.props.tags);
    var filters = ['all', 'name', 'price', 'rating'];
    return (
      <div className="row">
        <div className="filters-search">
          <form className="input-group" onSubmit={this.handleSubmit}>
            <input type="text" name="search" className="form-control" placeholder="Search for hops"/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">Find</button>
            </span>
          </form>
        </div>
        <div className="filters-flex">
          <Filters filterCrawls={this.filterCrawls} tags={tags} filters={filters} setExpanded={this.setExpanded}/>
        </div>
        <div className="crawlList-flex">
          <div className="crawlList-header first"><h3>Name</h3></div>
          <div className="crawlList-header second"><h3>Start Address</h3></div>
          <div className="crawlList-header third"><h3 id="justified">Tags</h3></div>
        </div>
          { this.state.filtercrawls.map(function(crawl) {
            return (
              <Crawl key={ crawl.id } crawl={ crawl } bars={ crawl.bars } tags={ crawl.tags } setExpanded={self.props.setExpanded} expanded={self.props.expanded === crawl.id }/>
            )
          })}
      </div>
    )
  }
}

