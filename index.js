'use strict'

const { Namefully } = require('namefully')

module.exports = name => {
    const n = new Namefully(name || 'Ralph Florent')
	console.log(`Hello, ${n.fn()}!`)
	console.log('Welcome to the JS world!')
}
