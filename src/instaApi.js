const instaApi = {};

instaApi.isLoggedIn = () => fetch('/api').then((res) => res.json());
instaApi.login = () =>
  fetch('/api/signIn')
    .then((res) => res.json())
    .then(({ href }) => {
      window.location.href = href;
    });
export default instaApi;
