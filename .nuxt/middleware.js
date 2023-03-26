const middleware = {}

middleware['bizum'] = require('../middleware/bizum.js')
middleware['bizum'] = middleware['bizum'].default || middleware['bizum']

middleware['paypal'] = require('../middleware/paypal.js')
middleware['paypal'] = middleware['paypal'].default || middleware['paypal']

middleware['role'] = require('../middleware/role.js')
middleware['role'] = middleware['role'].default || middleware['role']

middleware['token'] = require('../middleware/token.js')
middleware['token'] = middleware['token'].default || middleware['token']

middleware['transferBank'] = require('../middleware/transferBank.js')
middleware['transferBank'] = middleware['transferBank'].default || middleware['transferBank']

export default middleware
