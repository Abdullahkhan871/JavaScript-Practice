// learning and implementing async behaviour and api fetching 

const cardContainer = document.querySelector('.card-container');

async function fetchUsers(numberOfUsers) {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=${numberOfUsers}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
}

function createUserCard(user) {
  const userCard = document.createElement('div');
  userCard.className = 'card';
  userCard.id = 'user-card';
  
  userCard.innerHTML = `
    <img id="user-image" src="${user.picture.medium}" alt="User Image">
    <h2 id="user-name">${user.name.first} ${user.name.last}</h2>
    <p id="user-email">${user.email}</p>
  `;
  
  return userCard;
}

async function displayUsers(numberOfUsers) {
  const users = await fetchUsers(numberOfUsers);
  users.forEach(user => {
    const userCard = createUserCard(user);
    cardContainer.appendChild(userCard);
  });
}

displayUsers(5);
