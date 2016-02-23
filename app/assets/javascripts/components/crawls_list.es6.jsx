class CrawlsList extends React.Component {

  constructor(props) {
    super();
    this.state = {
      crawls: props.crawls
    }
  }



  // sortCrawls(param) {
  //   // sort based on param
  //   // set state
  // }

  filterProps(filter) {
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

        { this.props.crawls.map(function(crawl) {
          return (
            <Crawl key={ crawl.id } crawl={ crawl } bars={ crawl.bars } tags={ crawl.tags }/>
          )
        })}
      </div>

    )
  }
}

