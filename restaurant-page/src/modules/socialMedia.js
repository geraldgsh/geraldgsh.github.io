/* eslint-disable linebreak-style */
const socialMedia = () => {
  const connect = document.createElement('div');
  connect.classList.add('contact-header');
  const container = document.createElement('div');
  container.classList.add('container');
  connect.appendChild(container);
  const row = document.createElement('row');
  row.classList.add('row');
  container.appendChild(row);

  const col = document.createElement('div');
  col.classList.add('col-md-offset-2', 'col-md-8');
  row.appendChild(col);

  const heading = document.createElement('div');
  heading.classList.add('section-heading');
  heading.innerHTML = `
            <h2>Connnect with Us</h2>
              <div class='heading-line' style='background-color: white; width: 100%;'></div>
              <ul class='social-network'>
                <li><a href='https://www.facebook.com/geraldgsh'>
                  <span class='fa-stack fa-2x'>
                    <i class='fa fa-circle fa-stack-2x'></i>
                    <i class='fa fa-facebook fa-stack-1x fa-inverse'></i>
                  </span>
                  </a>
                </li>
                <li><a href='https://twitter.com/geraldgsh'>
                  <span class='fa-stack fa-2x'>
                    <i class='fa fa-circle fa-stack-2x'></i>
                    <i class='fa fa-twitter fa-stack-1x fa-inverse'></i>
                  </span>
                  </a>
                </li>
                <li><a href='https://github.com/geraldgsh'>
                  <span class='fa-stack fa-2x'>
                    <i class='fa fa-circle fa-stack-2x'></i>
                    <i class='fa fa-github fa-stack-1x fa-inverse'></i>
                  </span>
                  </a>
                </li>
              </ul>`;
  col.appendChild(heading);

  return connect;
};

export default socialMedia;
