
function testPiniaPlugin({pinia, app, options, store}) {

  console.log('store', store)
  store.$subscribe((...args) => {
    console.log(args)
  })

  store.$onAction((action) => {
    console.log('action', action)
  })
}

export default [testPiniaPlugin]