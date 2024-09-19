const axios = require('axios');

async function getPrivatePage(req, res) {
  const userGitHubUsername = req.user.username;

  try {
    const societyGitHubUsername = 'bytemait' 
    const response = await axios.get(`https://api.github.com/users/${userGitHubUsername}/following/${societyGitHubUsername}`, {
      headers: {
        'Authorization': `token ${req.user.accessToken}` 
      }
    });

    // If the user follows the bytemait's GitHub account
    if (response.status === 204) {
      res.send('<h1>Welcome to the Private Page! This is the bytemait secret area.</h1>');
    } else {
      res.send('<h1>You need to follow the bytemait GitHub account to access this page.</h1>');
    }
  } catch (error) {
    // Handle errors
    if (error.response && error.response.status === 404) {
      res.send('<h1>You need to follow the bytemait GitHub account to access this page.</h1> ');
    } else {
      console.error(error);
      res.status(500).send('An error occurred while checking follow status.');
    }
  }
}

module.exports = {
  getPrivatePage,
};
