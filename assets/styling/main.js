indow.onload = function() {

    // Create a new div element
    var newDiv = document.createElement("div");

    // Assign styles to the new div element
    newDiv.style.position = 'fixed';
    newDiv.style.top = '0';
    newDiv.style.right = '0';
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = 'yellow';
    newDiv.style.border = '1px solid black';
    newDiv.style.padding = '10px';
    newDiv.style.boxSizing = 'border-box';
    newDiv.style.display = 'flex';
    newDiv.style.alignItems = 'center';
    newDiv.style.justifyContent = 'center';
    newDiv.style.textAlign = 'center';

    // Add some text content to the new div
    newDiv.innerHTML = "<p>This is an ad</p>";

    // Create a close button
    var closeButton = document.createElement("button");

    // Add text to the close button
    closeButton.innerHTML = "X";

    // Position the close button at the top right corner of the div
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px';
    closeButton.style.right = '5px';

    // Add an event listener to the close button to hide the div when clicked
    closeButton.onclick = function() {
        newDiv.style.display = 'none';
    };

    // Append the close button to the new div
    newDiv.appendChild(closeButton);

    // Append the new div to the body of the document
    document.body.appendChild(newDiv);
}