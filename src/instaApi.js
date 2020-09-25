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

instaApi.addComment = (comment, postId) => {
  return fetch('/api/user/addComment', {
    method: 'POST',
    body: JSON.stringify({ postId, comment }),
    headers: { 'Content-Type': 'application/json' },
  });
};

instaApi.getUser = (id) =>
  fetch(`/api/user/getUser/${id}`).then((res) => res.json());

instaApi.logout = () => fetch('/api/user/logout').then((res) => res.json());

instaApi.toggleLike = (postId) =>
  fetch(`/api/user/toggleLike/${postId}`).then((res) => res.json());

instaApi.getPost = (id) =>
  fetch(`/api/user/getPost/${id}`).then((res) => res.json());

export default instaApi;
