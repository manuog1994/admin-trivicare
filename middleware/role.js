export default function ({ store, redirect, route }) {
  let admin;
  let role;

  // Get the user roles
  if (store.state.auth.loggedIn === true) {
    admin = store.state.auth.user.roles;
    role = admin.filter(role => {
      return role;
    }).map(role => {
      return role.name;
    }).toString();
  }
  
  // If the user is not authenticated, redirect to error page
  if(route.path === '/crud' && store.state.auth.loggedIn === false) {
    redirect('/error');
  }
  // If the user is authenticated, but not admin
  if(store.state.auth.loggedIn === true && route.path === '/crud' && role !== 'admin') {
    redirect('/error');
  }
}