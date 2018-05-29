import path from 'path'
import uglify from 'uglify-es'

export default class {
  constructor(c = {}) {
    const def = {
      filter: new RegExp('\.js$'),
      config: {
        safari10: true
      }
    }

    this.setting = Object.assign({}, def, c)
  }
  apply(op) {
    let setting = this.setting

    if (!setting.filter.test(op.file)) {
      op.next()
    } else {
      op.output && op.output({
        action: '压缩',
        file: op.file
      })
      let rst = uglify.minify(op.code, this.setting.config)
      let k
      for (k in rst) {
        op[k] = rst[k]
      }
      op.next()
    }
  }
}
