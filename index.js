var React = require('react')
var flyd = require('flyd')

class Provider extends React.Component {
  constructor(props) {
    super(props)
    this.state = props.state
    this.update = props.update
    this.actions = flyd.stream()
  }

  componentDidMount() {
    var that = this
    this.actions
      .pipe(flyd.chain(function(action) {
        var res = that.update(action, that.state)
        return flyd.fromPromise(res)
      }))
      .map(this.setState.bind(this))
  }

  render() {
    var that = this
    return React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        state: that.state,
        actions: that.actions,
      })
    })
  }
}

module.exports = Provider
