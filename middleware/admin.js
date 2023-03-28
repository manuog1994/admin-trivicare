export default function ({ app, redirect, route }) {
  const cookies = app.$cookies.get('auth._token.laravelJWT')
  const refreshToken = app.$cookies.get('auth._refresh_token.laravelJWT')

  if (cookies == false) {
    return redirect('/login')
  }

  if (cookies && route.path === '/login') {
    return redirect('/')
  }

  // Comprobar si la cookies esta caducada y redirigir a login
  if (refreshToken == false) {
    return redirect('/login')
  }

}