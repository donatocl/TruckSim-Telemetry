const path = require('path')
const fs = require('fs')
const assert = require('assert')

const getPluginVersion = require('../lib/getPluginVersion')

describe('getPluginVersion()', function() {
  
  it('Should get the plugin version from the v10 buffer format', function() {
    const buffer = fs.readFileSync(path.resolve(__dirname, './buffers/scs_sdk_plugin_buffer_10'))

    assert.equal(getPluginVersion(buffer), 10)
  })

  it('Should return -1 if it can\'t find the version', function() {
    const buffer = new Buffer.from('foobar')

    assert.equal(getPluginVersion(buffer), -1)
  })

})