class CrawlsList extends React.Component {

  constructor(props) {
    super();
    this.filterProps = this.filterProps.bind(this);
    this.state = {
      crawls: props.crawls,
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
    debugger
    console.log('You clicked' + filter);
    switch (filter) {
      case 'dive bar':
        console.log(filter);
        break;
      case 'wine':
        console.log(filter);
        break;
      case 'cocktails':
        console.log(filter);
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

  render () {
  
    return (

      <div className="container">
        <div className="row">

            <h1>Crawls</h1>
            <Filters filterProps={this.filterProps}/>
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

    )
  }
}

