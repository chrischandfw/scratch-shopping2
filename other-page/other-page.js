import { 
    checkAuth, 
    logout,
    createItem,
    getItems,
    deleteAllItems,
    buyItem,
} from '../fetch-utils.js';

import { renderItem } from '../render-utils.js';

checkAuth();

const shoppingForm = document.querySelector('.item-form');
const deleteButton = document.querySelector('.delete-button');
const shoppingListEl = document.querySelector('.shopping-list');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

shoppingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(shoppingForm);

    await createItem({
        item: data.get('item'),
        amount: data.get('amount'),
        is_bought: false,
    });

    shoppingForm.reset();

	//await fetchAndDisplayList();
});