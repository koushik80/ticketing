import axios from 'axios';

const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  axios.get('/api/users/currentuser').catch((err) => {
    console.log(err.message);
  });

  return <h1>Landing Page</h1>
};

LandingPage.getInitialProps = () => {
  console.log('I am on the server!');

  return {color: 'red'};
};

export default LandingPage;