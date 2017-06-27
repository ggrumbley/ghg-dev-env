import './index.css';
import { getUsers, deleteUser } from './api/userApi';
import { $, $$ } from './utils/bling';

// Populate table of users via API call.
getUsers().then((result) => {
  let usersBody = "";

  result.forEach((user) => {
    usersBody+= `
      <tr>
        <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
        <td>${user.id}</td>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
      </tr>
    `;
  });

  $('#users').innerHTML = usersBody;

  const deleteLinks = $$('.deleteUser');

  Array.from(deleteLinks, (link) => {
    link.onclick = (e) => {
      const element = e.target;
      e.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  })
});
