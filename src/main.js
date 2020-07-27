class App{
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById('repo-from');

    this.resgisterHandlers();
  }

  resgisterHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository(event) {
    event.preventDefault();

    this.repositories.push({
      name: 'ec3 Solutions',
      description: 'Tire a sua ideia bla bla',
      avatar_url: 'https://avatars2.githubusercontent.com/u/34478974?s=460&u=06942d6e20b9aabb9f690013d3c28b2a98ce583a&v=4',
      html_url: 'https://github.com/augustovan/kops',
    });
    console.log(this.repositories);
  }
}
new App();