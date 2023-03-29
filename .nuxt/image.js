import Vue from 'vue'
import { createImage} from '~image'
import NuxtImg from '~image/components/nuxt-img.vue'
import NuxtPicture from '~image/components/nuxt-picture.vue'

import * as staticRuntime$e9cf from '/Users/manuel/wa/admin.trivicare.com/node_modules/@nuxt/image/dist/runtime/providers/static.js'
import * as ipxRuntime$e7c7 from '/Users/manuel/wa/admin.trivicare.com/node_modules/@nuxt/image/dist/runtime/providers/ipx.js'
import * as customProviderRuntime$0be0 from '/Users/manuel/wa/admin.trivicare.com/providers/custom.js'

const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {}
}

imageOptions.providers = {
  ['static']: { provider: staticRuntime$e9cf, defaults: {} },
  ['ipx']: { provider: ipxRuntime$e7c7, defaults: {} },
  ['customProvider']: { provider: customProviderRuntime$0be0, defaults: {} }
}

Vue.component(NuxtImg.name, NuxtImg)
Vue.component(NuxtPicture.name, NuxtPicture)
Vue.component('NImg', NuxtImg)
Vue.component('NPicture', NuxtPicture)

export default function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext)

  if (process.static && process.server) {
    nuxtContext.beforeNuxtRender(({ nuxtState }) => {
      const ssrData = nuxtState.data[0] || {}
      ssrData._img = nuxtState._img || {}
    })
  }

  inject('img', $img)
}
