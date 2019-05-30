import axios from 'axios';

export function registerUser(userData, registerCb, setErrorsCb) {
  axios
    .post('/api/users/register', userData)
    .then(res => {
      console.log(res.data);
      registerCb();
    })
    .catch(err => {
      console.log(err.response.data);
      setErrorsCb(err.response.data);
    });
}

export function loginUser(userData, loginCb, setErrorsCb) {
  axios
    .post('/api/users/login', userData)
    .then(res => {
      console.log(res.data);
      const { token } = res.data;
      localStorage.setItem('jwtToken', token);
      loginCb();
    })
    .catch(err => {
      console.log(err.response.data);
      setErrorsCb(err.response.data);
    });
}

export function logoutUser(authCb) {
  localStorage.removeItem('jwtToken');
  authCb();
}

export function fetchUserProfile(successCb, errorCb) {
  axios
    .get('/api/profiles')
    .then(res => {
      console.log(res.data);
      successCb(res.data);
    })
    .catch(err => {
      console.log(err.response.data);
      errorCb(err.response.data);
    });
}

export function fetchProfile(username, successCb, errorCb) {
  axios
    .get(`/api/profiles/profile/${username}`)
    .then(res => successCb(res.data))
    .catch(err => {
      errorCb(err.response.data);
    });
}

export function createTweet(tweet, successCb, errorCb) {
  axios
    .post('/api/tweets', tweet)
    .then(res => {
      console.log('createTweet res', res.data);
      successCb();
    })
    .catch(err => errorCb(err.response.data));
}
