class CrawlsList extends React.Component {

  constructor(props) {
    super();
    this.filterCrawls = this.filterCrawls.bind(this);
    this.searchName = this.searchName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      crawls: props.crawls,
      filtercrawls: props.crawls,
      clicked: false,
      expanded: null,
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
    //put tags in the database - get rid of these hardcoded arrays
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
          break;
        case 'name':
          this.setState({clicked: !this.state.clicked})
          crawls = Array.from(this.state.crawls);
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
      if (crawls[i].name.toLowerCase().indexOf(val.toLowerCase()) > -1) {
        console.log(val)
        filtered.push(crawls[i]);
      }
    }
    console.log(filtered)
    if (filtered.length > 0) {
      this.setState({filtercrawls: filtered})
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
    console.log("log the tags: " + this.props.tags);
    var filters = ['all', 'name', 'price', 'rating'];
    return (
      <div id="list-container">
          <form className="input-group" onSubmit={this.handleSubmit}>
            <input type="text" name="search" className="form-control" placeholder="Search for hops"/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="submit">Find</button>
            </span>
          </form>
          <div className="row">
            <div className="filters-flex">
              <Filters filterCrawls={this.filterCrawls} tags={tags} filters={filters}/>
            </div>
          </div>
          <div className="crawlList-flex">
            <div className="crawlList-header"><h3>Name</h3></div>
            <div className="crawlList-header"><h3>Start Address</h3></div>
            <div className="crawlList-header"><h3>Tags</h3></div>
          </div>
            { this.state.filtercrawls.map(function(crawl) {
              return (
                <Crawl key={ crawl.id } crawl={ crawl }
                bars={ crawl.bars } tags={ crawl.tags } setExpanded={self.props.setExpanded} expanded={self.props.expanded}/>
              )
            })}
      </div>
    )
  }
}

