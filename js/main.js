const eventListItems = document.getElementById(`eventListItems`)
const addEventForm = document.getElementById(`addEventForm`);

let eventList = [
    { 
        name: `Easter Extravaganza`, 
        desc: `Have fun with Bob and friends at this cool Easter Party`,
        location: `Bob's house`,
        date: `April 14, 2019`,
        time: `1 pm`, 
    }, 
    { 
        name: `Easter Extravaganza`, 
        desc: `Have fun with Bob and friends at this cool Easter Party`,
        location: `Bob's house`,
        date: `April 14, 2019`,
        time: `1 pm`, 
    }, 

];








addEventForm.addEventListener('submit', event => {
    event.preventDefault();
  
    let newName = addEventForm.eventName.value;
    let newTime = addEventForm.time.value;
    let newLocation = addEventForm.location.value;
    eventList.push( {name: newName, time: newTime, location: newLocation} );




    // let newDesc = addEventForm.desc.value;
    // eventList.push( {text: newDesc} );
    
    // let newTime = addEventForm.time.value;
    // eventList.push( {text: newTime} );

    // let newLocation = addEventForm.location.value;
    // eventList.push( {text: newLocation} );

    // let newDate = addEventForm.date.value;
    // eventList.push( {text: newDate} );

    
    // Reset form fields
  
    addEventForm.reset();

    
    // Print the events
  
    printAllEvents();
  
  });
  
  let anEvent = (evnt) => {
  
    return `
        <div class="event-item">
            <h3>${evnt.name}</h3>
            <p>${evnt.time}  •  ${evnt.location}</p>
        </div>`;
}

let printAllEvents = () => {
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
