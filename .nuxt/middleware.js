const middleware = {}

middleware['admin'] = require('../middleware/admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

export default middleware
