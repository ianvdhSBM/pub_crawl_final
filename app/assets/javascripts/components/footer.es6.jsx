class Footer extends React.Component {
  render () {
    return (
      <div>
        <div id="footer-bar"></div>
        <div id="footer">
          <div className="container">
            <div className="row">
                <ul className="social-icons text-center">
                  <li className="social-list">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li className="social-list">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li className="social-list">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-github fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <li className="social-list">
                    <a href="#">
                      <span className="fa-stack fa-lg">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                      </span>
                    </a>
                  </li>
                  <br/>
                  <div className="credits">Created by Ian Van Den Heuvel, Paul Iogna, and Hanna Jones</div>
                  <div className="credits">&copy; Lighthouse Labs, February 2016</div>
                </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

  

