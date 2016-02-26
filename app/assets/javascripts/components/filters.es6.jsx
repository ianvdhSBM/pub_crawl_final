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
            <li role="presentation" onClick={()=>self.props.filterCrawls(filter)}><a href="javascript:void(0);">{filter}</a></li>
          )
        })}
        <li role="presentation" className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="javascript:void(0);" role="button" aria-haspopup="true" aria-expanded="false">
            tags <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            {this.props.tags.map(function(tag) {
              return (
                <li role="presentation" onClick={()=>self.props.filterCrawls(tag)}><a href="javascript:void(0);">{tag}</a></li>
              )
            })}
          </ul>
        </li>
      </ul>
    )
  }
}
