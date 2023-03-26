import { joinURL } from 'ufo'
// import {} from '~image'

const serverUrl = process.env.baseUrl + '/' || 'http://localhost:8000/'  

export function getImage(src, { modifiers = {}, baseURL = serverUrl }, { options, nuxtContext, $img }) {
  const { width, height, format, fit, ...providerModifiers } = modifiers
  const operations = []
  // process modifiers
  const operationsString = operations.join(',')
  return {
    url: joinURL(baseURL, operationsString, src)
  }
}
