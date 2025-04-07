// Change text content dynamically
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.querySelector('p').textContent = "The paragraph text has been changed!";
});

// Modify CSS styles
document.getElementById('changeTextBtn').addEventListener('mouseover', function() {
    document.querySelector('p').style.color = "blue";
});

// Add or remove an element
document.getElementById('toggleBtn').addEventListener('click', function() {
    let content = document.getElementById('content');
    if (content.innerHTML === "") {
        content.innerHTML = "<p>This is a dynamically added paragraph.</p>";
    } else {
        content.innerHTML = ""; // Remove the element
    }
});
