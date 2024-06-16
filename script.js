// Function to create a grid with given rows and columns
function createGrid(rows, cols) {
    const container = document.getElementById('container');
    container.innerHTML = ''; // Clear the container

    for (let i = 0; i < rows * cols; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        container.appendChild(gridItem);
        styleCard(gridItem); // Style each grid item
    }
}

// Function to style each card
function styleCard(card) {
    // Create and append a cat image
    const cat = document.createElement('img');
    cat.classList.add('cardimg');
    cat.src = 'images/loadingcat.jpg';
    card.appendChild(cat);

    // Create a container for the title and icons
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('title-container');

    // Create and append a heading element
    const heading = document.createElement('h3');
    heading.innerHTML = "Title 1";
    titleContainer.appendChild(heading);

    // Create and append the GitHub icon
    const github = document.createElement('img');
    github.classList.add('icon');
    github.src = 'images/github-svgrepo-com.svg';
    titleContainer.appendChild(github);

    // Create and append the goto icon
    const goto = document.createElement('img');
    goto.classList.add('icon');
    goto.src = 'images/arrow-up-right-from-square-svgrepo-com.svg';
    titleContainer.appendChild(goto);

    // Append the title container to the card
    card.appendChild(titleContainer);

    // Create and append a description element
    const description = document.createElement('p');
    description.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    card.appendChild(description);
}

// Call the createGrid function to create a 2x3 grid
createGrid(2, 3);
