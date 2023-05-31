module.exports = {
    apps: [
      {
        name: 'admin',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.mjs',
        args: 'start',
    	env: {
      	   NODE_ENV: "production",
     	   PORT: 3001
   	}
      }
    ]
  }
