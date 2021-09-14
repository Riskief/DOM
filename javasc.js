// const url = "https://api.github.com/users/riskief";
const getDataAsync = async () => {
  let response = await fetch("https://api.github.com/users/riskief");
  let result = await response.json();

  const name = document.getElementById("name");
  const login = document.getElementById("login");
  const bio = document.getElementById("bio");
  const avatarUrl = document.getElementById("avatar_url");

  console.log(result);

  name.innerHTML = result.name;
  login.innerHTML = result.login;
  bio.innerHTML = result.bio;
  avatarUrl.src = result.avatar_url;
};
getDataAsync();
