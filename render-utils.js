export function renderItem(item) {
    const renderItemEl = document.createElement('div');
    const pTagEl = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    renderItemEl.classList.add(item.is_bought ? 'complete' : 'incomplete');  
    // add the 'todo' css class no matter what
    renderItemEl.classList.add('item');
    // put the todo's text into the p tag
    pTagEl.textContent = item.item;
    // append stuff
    renderItemEl.append(pTagEl);
    // return the div
    return renderItemEl;
}