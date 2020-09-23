const instaApi = {};

instaApi.isLoggedIn = () => fetch('/api/isSignedIn').then((res) => res.json());

instaApi.login = () =>
  fetch('/api/signIn')
    .then((res) => res.json())
    .then(({ href }) => {
      window.location.href = href;
    });

instaApi.getPosts = () => fetch('/api/user/getPosts').then((res) => res.json());
export default instaApi;
