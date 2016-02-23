class Filters extends React.Component {
  render () {
    return (
      <ul className="nav nav-pills">
        <li role="presentation" className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            tags <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
            <li role="presentation"><a href="#">dive bar</a></li>
            <li role="presentation"><a href="#">wine</a></li>
            <li role="presentation"><a href="#">cocktails</a></li>
            <li role="presentation"><a href="#">beer</a></li>
          </ul>
        </li>
        <li role="presentation" className="active"><a href="#">neighbourhood</a></li>
        <li role="presentation"><a href="#">name</a></li>
        <li role="presentation"><a href="#">proximity</a></li>
        <li role="presentation"><a href="#">rating</a></li>
      </ul>
    )
  }
}

