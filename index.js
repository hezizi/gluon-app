import * as Gluon from '@gluon-framework/gluon'

// async function main() {
//   await Gluon.open('dist/index.html', {
//     windowSize: [1600, 1000]
//   })
// }
// main()
;(async () => {
  await Gluon.open('dist/index.html', {
    windowSize: [1600, 1000]
  })
})()
