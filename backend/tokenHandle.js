// Function to store token in localStorage with a user-specific key
function storeToken(userId, token) {
    const key = `user_${userId}_token`;
    localStorage.setItem(key, token);
  }
  
  // Function to retrieve token from localStorage based on user ID
function retrieveToken(userId) {
  const key = `user_${userId}_token`;
  return localStorage.getItem(key);
}
  
module.exports = {storeToken, retrieveToken}
  