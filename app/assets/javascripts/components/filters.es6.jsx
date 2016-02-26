class Filters extends React.Component {
  
  constructor() {
    super();
  }

  render () {
    var self = this;
    return (
      <ul className="nav nav-pills">
        {this.props.filters.map(function(filter) {
          return (
            <li role="presentation" onClick={()=>self.props.filterCrawls(filter)}>{filter}</li>
          )
        })}
        <li id="dropdown" role="presentation" className="dropdown">
          <a id="toggle-tags" className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            tags <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            {this.props.tags.map(function(tag) {
              return (
                <li role="presentation" onClick={()=>self.props.filterCrawls(tag)}><a href="#">{tag}</a></li>
              )
            })}
          </ul>
        </li>
      </ul>
    )
  }
}
