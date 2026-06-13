async function loadRepos() {
  const res = await fetch("https://api.github.com/users/LukeVergone/repos");
  const repos = await res.json();

  const container = document.getElementById("repo-grid");

  repos.forEach(repo => {
    const card = document.createElement("a");
    card.href = repo.html_url;
    card.target = "_blank";
    card.className = "card";

    card.innerHTML = `
      <h3>${repo.name}</h3>
      <p>${repo.description || "No description"}</p>
      
    `;

    container.appendChild(card);
  });
}

loadRepos();