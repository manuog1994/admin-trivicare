import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeLayers,
  FontAwesomeLayersText,
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faTiktok as freeFabFaTiktok,
  faFacebookF as freeFabFaFacebookF,
  faInstagram as freeFabFaInstagram
} from '@fortawesome/free-brands-svg-icons'

library.add(
  freeFabFaTiktok,
  freeFabFaFacebookF,
  freeFabFaInstagram
)

config.autoAddCss = false

Vue.component('faIcon', FontAwesomeIcon)
Vue.component('faLayers', FontAwesomeLayers)
Vue.component('faLayersText', FontAwesomeLayersText)
