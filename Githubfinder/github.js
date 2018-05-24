class Github {
  constructor() {
    this.client_id ='83a0b4c8cf6385fb91ce';
    this.client_secret ='1fe5c6c9d755c6e5a6170cb2869274fb317f36aa';
  }

  // Get user method
  async getUser(user){
const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
const profile = await profileResponse.json();

return {
  profile
}
  }
}