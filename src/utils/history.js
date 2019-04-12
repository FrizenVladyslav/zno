import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

history.listen(location => {
  setImmediate(() => window.scrollTo(0, 0))
})

export default history
