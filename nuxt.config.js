import { defineNuxtConfig } from '@nuxt/bridge'
export default defineNuxtConfig({
    loading: {
        color: '#2AB5B2',
        height: '5px',
    },
    generate: {
        fallback: true
    },

    
    target: 'server', // default is 'server'
    
    "engines": {
        "node": "16.x"
    },
    
    
    // Global page headers (https://go.nuxtjs.dev/config-head)
    head: {
        title: 'ADMIN TRIVICARE',
        titleTemplate: '%s',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: "facebook-domain-verification", content: "emkkxxxa870mac4z4xcfd060aqgj1f" }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    // Global CSS (https://go.nuxtjs.dev/config-css)
    css: [
        '~/assets/scss/style.scss',
        '~/assets/css/animation.css',
        '~/assets/css/my-layout.css',
    ],


    // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
    plugins: [
        '~/plugins/vue-awesome-swiper.js',
        '~/plugins/vuejs-pagiante.js',
        '~/plugins/observe-visibility.js',
        '~/plugins/persistedState.client.js',
        '~/plugins/vue-progress-path.js',
        '~/plugins/chart.js',
        { 
            src: '~/plugins/bootstrap-vue',
            mode: 'client'
        },
        {
            src: '~/plugins/vue-type.js',
            mode: 'client'
        },
        {
            src: '~/plugins/vue-star-rating.js', // <--- file name
            mode: 'client'
        },
        {
            src: '~/plugins/vue-js-modal', 
            mode: 'client'
        },
        { 
            src: '~/plugins/notifications-client.js', 
            mode: 'client' 
        },
        {
            src: '~/plugins/tinymce.js',
            mode: 'client'
        },
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
    buildModules: [
        '@nuxtjs/fontawesome',
        '@nuxtjs/dotenv',
        'nuxt-compress'
    ],

    fontawesome: {
        component: 'fa',
        suffix: true,
        icons: {
            brands: [ 'faTiktok', 'faFacebookF', 'faInstagram' ],
        }
    },

    // Modules (https://go.nuxtjs.dev/config-modules)
    modules: [
        '@nuxt/image',
        '@nuxtjs/style-resources',
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
        ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 * 24 * 14 }],
        'cookie-universal-nuxt',
        '@nuxtjs/pwa',
    ],

    auth: {
        strategies: {
            laravelSanctum: {
                provider: 'laravel/sanctum',
                url: process.env.BASE_URL || 'http://localhost:8000',
                endpoints: {
                    login: {
                        url: '/login', method: 'post'
                    },
                    refresh: false,
                },
            },

        }
    },

    axios: {
        baseURL: process.env.BASE_URL || 'http://localhost:8000',
        credentials:true,
    },


    router: {
        middleware: ['auth', 'role'],
    },
      
    pageTransition: {
        name: 'slide-fade',
        mode: 'out-in',
    },



    styleResources: {
        scss: [
            '~/assets/scss/_variables.scss',
        ],
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        nitro: false,
        extractCSS: true,
        extend (config, ctx) {
        },
        babel: {
            compact: true,
        },
    },


    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:8000',
        googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
        stripeKey: process.env.STRIPE_PK,
        url: process.env.URL || 'http://localhost:3000',
        googleClientId: process.env.GOOGLE_CLIENT_ID,
        universalToken: process.env.UNIVERSAL_TOKEN,
        url_getnet: process.env.URL_GETNET,
    },

    image: {
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
            xxl: 1536,
            '2xl': 1536
        },
        
        providers: {
            customProvider: {
                name: 'customProvider', // optional value to overrider provider name
                provider: '~/providers/custom', // Path to custom provider
                options: {
                // ... provider options
                }
            },
        }
    },

    pwa: {
        manifest: {
          name: 'ADMIN TRIVICARE',
          short_name: 'ADMIN',
          lang: 'es',
          display: 'standalone',
          start_url: '/',
          theme_color: '#ffffff',
          background_color: '#ffffff'
        }
      }

      
})

