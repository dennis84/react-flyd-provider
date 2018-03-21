var React = require('react')
var ReactDOM = require('react-dom')
var Type = require('union-type')
var Provider = require('../index')

var Action = Type({
  Incr: [],
  Decr: [],
})

var update = Action.caseOn({
  Incr: function(state) {
    return Promise.resolve(Object.assign(state, {
      counter: state.counter + 1,
    }))
  },

  Decr: function(state) {
    return Promise.resolve(Object.assign(state, {
      counter: state.counter - 1,
    }))
  },
})

const init = () => Object.assign({
  counter: 0,
})

class App extends React.Component {
  render() {
    return React.createElement('div', null, [
      React.createElement('h1', null, 'Counter: ' + this.props.state.counter),
      React.createElement('button', {
        onClick: () => this.props.actions(Action.Incr),
      }, 'Incr'),
      React.createElement('button', {
        onClick: () => this.props.actions(Action.Decr),
      }, 'Decr'),
    ])
  }
}

ReactDOM.render(
  React.createElement(Provider, {
    state: init(),
    update: update,
  }, React.createElement(App, {}, null)),
  document.getElementById('container')
)
