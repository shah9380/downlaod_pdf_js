// script.js

function openPopup() {
    var popup = document.getElementById('popup');
    var downloadPart = document.querySelector('.download-part');
  downloadPart.style.display = 'block'; // Show the download-part

  // Download the content of "download-part" as a PDF
  html2pdf(downloadPart, {
    filename: 'downloaded_file.pdf',
    margin: 10,
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  });

  popup.style.display = 'block';
  }
  
  function closePopup() {
    var popup = document.getElementById('popup');
    var downloadPart = document.querySelector('.download-part');
    downloadPart.style.display = 'none'; // Hide the download-part
    popup.style.display = 'none';
  }
  
  document.querySelector('button[data-action="openPopup"]').addEventListener('click', openPopup);

// Add an event listener to the "Close" button in the popup
document.querySelector('button[data-action="closePopup"]').addEventListener('click', closePopup);
  
  
  