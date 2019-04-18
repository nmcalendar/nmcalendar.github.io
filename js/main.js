const eventListItems = document.getElementById(`eventListItems`)
const addEventForm = document.getElementById(`addEventForm`);

let eventList = [
    { 
        name: `Easter Extravaganza`, 
        desc: `Have fun with Bob and friends at this cool Easter Party`,
        location: `Bob's house`,
        start: {date: {year: 2019, month: 03, day: 15},
                time: {hour: 13, min: 0}}, 
        end:   {date: {year: 2019, month: 03, day: 15},
                time: {hour: 14, min: 0}}
    }, 
    { 
        name: `Easter Extravaganza`, 
        desc: `Have fun with Bob and friends at this cool Easter Party`,
        location: `Bob's house`,
        start: {date: {year: 2019, month: 03, day: 15},
                time: {hour: 13, min: 0}}, 
        end:   {date: {year: 2019, month: 03, day: 15},
                time: {hour: 14, min: 0}}
    }, 

];







addEventForm.addEventListener('submit', event => {
    event.preventDefault();
  
    let newName = addEventForm.eventName.value;
    eventList.push( {text: newName} );
  
    addEventForm.reset();
  
    printAllEvents();
  
  });
  
  
  const anEvent = (evnt) => {
  
    return `
        <div class="event-item">
            <h3>${evnt.name}</h3>
            <p>${evnt.start.time.hour}h  •  ${evnt.location}</p>
        </div>`;
};


const printAllEvents = () => {
    eventListItems.innerHTML = eventList.map(anEvent).join(``);
}

printAllEvents();
























// // ADD A NEW ITEM //////////////////////////////////////////////

// addEventForm.addEventListener('submit', event => {
//     // The form was submit, stop the refreshing of the page
//     //      (which is what a form wants to do by default)
//     event.preventDefault();

//     // Get the text from the field
//     let eventItem = addEventForm.eventName.value;
    
//     // Clear the text from the field (so we can add a new item again later)
//     addEventForm.eventName.value = '';

//     // Force focus the input field in case we want to add more
//     addEventForm.eventName.focus();

//     // Use the current filter category as the default for any new items added
//     // Push it into our dataset (Array: shoppingList)
//     // Default to 0 quantity, and no category
//     eventList.push(eventList);

//     // Save our shoppingList to the browser
//     window.localStorage.setItem('events', JSON.stringify(eventList));

//     // Print the list
//     printList();
// });
