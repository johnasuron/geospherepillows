document.addEventListener('DOMContentLoaded', function() {
    // Select all WhatsApp links
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
  
    // Open WhatsApp links in a new tab
    whatsappLinks.forEach(link => {
      link.setAttribute('target', '_blank');
    });
  
     // Add hover effect to buttons
     const buttons = document.querySelectorAll('.button');
  
     buttons.forEach(button => {
         button.addEventListener('mouseover', () => {
             button.style.opacity = '0.8'; // Slightly reduce opacity on hover
         });
  
         button.addEventListener('mouseout', () => {
             button.style.opacity = '1'; // Restore full opacity when mouse leaves
         });
     });
  });