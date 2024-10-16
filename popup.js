const style = document.createElement('style');
style.textContent = `
.popup {
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: #4a6ee0;
    color: white;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    z-index: 1000;
    display: none;
    max-width: 300px;
}
.popup-close {
    float: right;
    cursor: pointer;
    font-weight: bold;
    margin-left: 10px;
}
`;
document.head.appendChild(style);

// Create and append the popup HTML
const popup = document.createElement('div');
popup.id = 'developmentNotice';
popup.className = 'popup';
popup.innerHTML = `
    <span class="popup-close" onclick="closePopup()">&times;</span>
    <p>This website is under constant development. Changes and errors may occur at any time. We appreciate your patience and feedback!</p>
`;
document.body.appendChild(popup);

// Functions for the popup
function showPopup() {
    document.getElementById('developmentNotice').style.display = 'block';
}

function closePopup() {
    document.getElementById('developmentNotice').style.display = 'none';
}

// Show the popup when the page loads
window.addEventListener('load', function() {
    setTimeout(showPopup, 1000); // Show popup after 1 second
});

// Make closePopup function global so it can be called from HTML
window.closePopup = closePopup;
