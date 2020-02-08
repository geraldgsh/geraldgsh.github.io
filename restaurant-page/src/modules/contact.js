/* eslint-disable linebreak-style */
const contact = () => {
  const parallax = document.createElement('section');
  parallax.classList.add('parallax-section');
  parallax.id = 'contact';
  const container = document.createElement('div');
  container.classList.add('container');
  parallax.appendChild(container);

  const row = document.createElement('div');
  row.classList.add('row');
  container.appendChild(row);

  const col1 = document.createElement('div');
  col1.classList.add('col-md-12', 'col-sm-12');
  row.appendChild(col1);

  const wow = document.createElement('div');
  wow.classList.add('wow', 'fadeInUp', 'section-title');
  wow.setAttribute('data-wow-delay', '0.2s');
  col1.appendChild(wow);

  const title = document.createElement('h2');
  title.innerHTML = 'Contact us';
  wow.appendChild(title);

  const col2 = document.createElement('div');
  col2.classList.add('col-md-7', 'col-sm-10');
  row.appendChild(col2);

  const fade = document.createElement('div');
  fade.classList.add('wow', 'fadeInUp');
  fade.setAttribute('data-wow-delay', '0.4s');
  col2.appendChild(fade);

  const form = document.createElement('form');
  form.id = 'contact-form';
  form.setAttribute('action', '#');
  form.setAttribute('method', 'get');
  fade.appendChild(form);

  const col3 = document.createElement('div');
  col3.classList.add('col-md-6', 'col-sm-6');
  form.appendChild(col3);

  const input1 = document.createElement('input');
  input1.classList.add('form-control');
  input1.setAttribute('type', 'text');
  input1.setAttribute('name', 'name');
  input1.setAttribute('placeholder', 'Name');
  input1.setAttribute('require', "''");
  col3.appendChild(input1);

  const col4 = document.createElement('div');
  col4.classList.add('col-md-6', 'col-sm-6');
  form.appendChild(col4);

  const input2 = document.createElement('input');
  input2.classList.add('form-control');
  input2.setAttribute('type', 'text');
  input2.setAttribute('name', 'email');
  input2.setAttribute('placeholder', 'Email');
  input2.setAttribute('require', "''");
  col4.appendChild(input2);

  const col5 = document.createElement('div');
  col5.classList.add('col-md-6', 'col-sm-6');
  form.appendChild(col5);

  const input3 = document.createElement('input');
  input3.classList.add('form-control');
  input3.setAttribute('type', 'tel');
  input3.setAttribute('name', 'phone');
  input3.setAttribute('placeholder', '1-(555)-555-5555');
  input3.setAttribute('require', "''");
  col5.appendChild(input3);

  const col6 = document.createElement('div');
  col6.classList.add('col-md-12', 'col-sm-12');
  form.appendChild(col6);

  const input4 = document.createElement('textarea');
  input4.classList.add('form-control');
  input4.setAttribute('rows', '5');
  input4.setAttribute('name', 'message');
  input4.setAttribute('placeholder', 'Message');
  input4.setAttribute('require', "''");
  col6.appendChild(input4);

  const btn = document.createElement('div');
  btn.classList.add('col-md-offset-8', 'col-md-4', 'col-sm-offset-6', 'col-sm-6');
  form.appendChild(btn);

  const bttn = document.createElement('button');
  bttn.id = 'submit';
  bttn.classList.add('form-control');
  bttn.setAttribute('type', 'submit');
  bttn.setAttribute('name', 'submit');
  bttn.innerHTML = 'Submit';
  btn.appendChild(bttn);

  const col7 = document.createElement('div');
  col7.classList.add('col-md-5', 'col-sm-8');
  row.appendChild(col7);

  const info = document.createElement('div');
  info.classList.add('wow', 'fadeInUp', 'contact-info');
  info.setAttribute('data-wow-delay', '0.4s');
  col7.appendChild(info);

  const detail = document.createElement('div');
  detail.classList.add('section-title');
  detail.innerHTML = `
              <h2>Opening Hours</h2>
              <p>Sunday 8:30 AM - 10:00 PM</p>
              <p>Mon-Fri 9:00 AM - 8:00 PM</p>
              <p>Saturday 11:30 AM - 10:00 PM</p>`;
  info.appendChild(detail);

  const add = document.createElement('div');
  add.classList.add('address');
  add.innerHTML = `
              <br>
              <p><i class='fa fa-map-marker'></i> 456 New Street 22000, New York City, USA</p>
              <p><i class='fa fa-comment'></i> <a href='mailto:info@wokthisway.com'>info@wokthisway.com</a></p>
              <p><i class='fa fa-phone'></i> 010-020-0340</p>`;
  info.appendChild(add);
  return parallax;
};
export default contact;
