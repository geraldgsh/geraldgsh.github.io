/* eslint-disable quotes */
/* eslint-disable linebreak-style */
const navbar = () => {
  const navLinks = [
    {
      name: 'Home',
      link: '#home',
    },
    {
      name: 'Gallery',
      link: '#gallery',
    },
    {
      name: 'Menu',
      link: '#menu',
    },
    {
      name: 'Contact',
      link: '#contact',
    },
  ];

  const head = document.createElement('nav');
  head.classList.add('navbar', 'navbar-expand', 'bg-white', 'navbar-default', 'fixed-top');
  const container = document.createElement('div');
  container.classList.add('container');
  head.appendChild(container);

  const logo = document.createElement('a');
  logo.classList.add('nav-brand');
  logo.setAttribute('href', '#home');
  logo.innerHTML = `<img src="media/wok-logo-small.png" alt="Logo">`;
  container.appendChild(logo);

  const siteMenu = document.createElement('div');
  siteMenu.classList.add('collapse', 'navbar-collapse');
  siteMenu.id = 'navbar-collapse';
  container.appendChild(siteMenu);

  const unlist = document.createElement('ul');
  unlist.classList.add('navbar-nav', 'ml-auto');
  siteMenu.appendChild(unlist);

  navLinks.forEach((nav) => {
    const navItem = document.createElement('li');
    navItem.classList.add('nav-item');
    unlist.appendChild(navItem);

    const tab = document.createElement('a');
    tab.classList.add('nav-link');
    tab.setAttribute('href', nav.link);
    tab.id = nav.link;
    tab.innerHTML = nav.name;
    navItem.appendChild(tab);
  });

  return head;
};

export default navbar;
