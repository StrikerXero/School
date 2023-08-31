//Action Creators
export const repoSearchCompleted = (repos) => ({
  type: "REPO_SEARCH_COMPLETED",
  repos,
});

export const searchTextChanged = (text) => ({
  type: "SEARCH_TEXT_CHANGED",
  text,
});

export const searchGithub = (item) => {
  return fetch(`https://api.github.com/search/repositories?q=${item}`)
    .then((response) => response.json())
    .then((response) =>
      response.items.map((repo) => ({
        id: repo.id,
        name: repo.name,
        url: repo.html_url,
      }))
    );
};
