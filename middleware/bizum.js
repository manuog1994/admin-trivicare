export default function ({ store, redirect, route }) {
    // Compara el estado de la página de Bizum
    if (store.state.bizumPage !== true || store.state.reserve !== route.query.reserve) {
        redirect('/');
    }
    

}