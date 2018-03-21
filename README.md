# React + Flyd

A small flyd provider for React and React Native.

## Usage

```javascript
const init = () => Object.assign({
  counter: 0,
})

var update = Action.caseOn({
  Incr: (state) => Object.assign({counter: state.counter + 1}),
})

ReactDOM.render(
  <Provider
    state={init()}
    update={update},
    <MyApp />
  </Provider>,
  document.getElementById('root')
)
```

More examples can be found [here](examples).
