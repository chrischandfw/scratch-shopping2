/* eslint-disable no-console */
export function renderItem(item) {
    const renderItemEl = document.createElement('div');
    const itemName = document.createElement('p');
    const itemAmount = document.createElement('p');
	
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    renderItemEl.classList.add(item.is_bought ? 'complete' : 'incomplete');  
    // add the 'todo' css class no matter what
    renderItemEl.classList.add('item');
    // put the todo's text into the p tag
    itemName.textContent = item.item;
    itemAmount.textContent = item.amount;
    // append stuff
    renderItemEl.append(itemName, itemAmount);
    // return the div
    return renderItemEl;
}