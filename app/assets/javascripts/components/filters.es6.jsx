class Filters extends React.Component {
  
  constructor() {
    super();
  }

  // filterProps(param) {
  //   this.props.filterProps
  //   console.log('You clicked ' + param);
  // }

  // hardcode to get it working
  // refactor to have array of values that get displayed as li items
  // value passed up to the parent function will be the value of the li item
  // implement switch statement to sort crawls param based on these values

  render () {

    return (
      <ul className="nav nav-pills">
        <li role="presentation" className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            tags <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li role="presentation" onClick={()=>this.props.filterProps('dive bar')}><a href="#">dive bar</a></li>
            <li role="presentation" onClick={()=>this.props.filterProps('wine')}><a href="#">wine</a></li>
            <li role="presentation" onClick={()=>this.props.filterProps('cocktails')}><a href="#">cocktails</a></li>
            <li role="presentation" onClick={()=>this.props.filterProps('beer')}><a href="#">beer</a></li>
          </ul>
        </li>
        <li role="presentation" className="active" onClick={()=>this.props.filterProps('name')}><a href="#">name</a></li>
        <li role="presentation" onClick={()=>this.props.filterProps('price')}><a href="#">price</a></li>
        <li role="presentation" onClick={()=>this.props.filterProps('rating')}><a href="#">rating</a></li>
      </ul>
    )
  }
}

