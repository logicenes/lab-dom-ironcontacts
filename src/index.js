// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

// Create example table row
const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td>${randomContact.name}</td>
  <td>${randomContact.popularity.toFixed(2)}</td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

// ITERATION 2 - Delete Button for example row
const deleteBtnExample = exampleRow.querySelector(".btn-delete");
deleteBtnExample.addEventListener("click", () => {
  exampleRow.remove();
});

// Append example row to the table
tableBody.appendChild(exampleRow);


// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array
const threeContacts = contacts.splice(0, 3);

// Iterate over the 3 contacts and create rows
threeContacts.forEach((contact) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" alt="${contact.name}">
    </td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;

  // ITERATION 2 - Delete Button
  const deleteBtn = row.querySelector(".btn-delete");
  deleteBtn.addEventListener("click", () => {
    row.remove();
  });

  // ITERATION 3 - Like Button Toggle
  const likeBtn = row.querySelector(".btn-like");
  const heartIcon = likeBtn.querySelector("img");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected");

    if (likeBtn.classList.contains("selected")) {
      heartIcon.src = "./images/icon-full.png";
    } else {
      heartIcon.src = "./images/icon.png";
    }
  });

  // Append row to the table
  tableBody.appendChild(row);
});


// Bonus: ITERATION 4 - Add Random Contacts

// Your code goes here ...
