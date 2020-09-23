const instaApi = {};

instaApi.isLoggedIn = () => fetch('/api/isSignedIn').then((res) => res.json());

instaApi.login = () =>
  fetch('/api/signIn')
    .then((res) => res.json())
    .then(({ href }) => {
      window.location.href = href;
    });

instaApi.getPosts = (category) => {
  const url =
    category === 'all'
      ? '/api/user/getPosts'
      : `/api/user/getUsersPosts/${category}`;
  return fetch(url).then((res) => res.json());
};

instaApi.getUser = (id) =>
  fetch(`/api/user/getUser/${id}`).then((res) => res.json());

export default instaApi;
