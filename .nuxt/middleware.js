const middleware = {}

middleware['role'] = require('../middleware/role.js')
middleware['role'] = middleware['role'].default || middleware['role']

export default middleware
