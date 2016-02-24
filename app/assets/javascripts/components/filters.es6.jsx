class Filters extends React.Component {
  
  constructor() {
    super();
  }

  // hardcode to get it working
  // refactor to have array of values that get displayed as li items
  // value passed up to the parent function will be the value of the li item
  // implement switch statement to sort crawls param based on these values

  render () {
    var self = this;
    return (
      <ul className="nav nav-pills">
        <li role="presentation" className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            tags <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            {this.props.tags.map(function(tag) {
              return (
                <li role="presentation" onClick={()=>self.props.filterProps(tag)}><a href="#">{tag}</a></li>
              )
            })}
          </ul>
        </li>
          {this.props.filters.map(function(filter) {
            return (
              <li role="presentation" onClick={()=>self.props.filterProps(filter)}><a href="#">{filter}</a></li>
            )
          })}
      </ul>
    )
  }
}

{/*<li role="presentation" className="active" onClick={()=>this.props.filterProps('name')}><a href="#">name</a></li>
  <li role="presentation" onClick={()=>this.props.filterProps('price')}><a href="#">price</a></li>
  <li role="presentation" onClick={()=>this.props.filterProps('rating')}><a href="#">rating</a></li>*/}