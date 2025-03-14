// Create and initialize the navbar
function initNavbar() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  const tabs = [
    { name: 'Playground', path: 'index.html' },
    { name: 'Activity', path: 'pages/activity.html' },
    { name: 'Analytics', path: 'pages/analytics.html' },
    { name: 'Sources', path: 'pages/sources.html' },
    { name: 'Actions', path: 'pages/actions.html', badge: 'New' },
    { name: 'Contacts', path: 'pages/contacts.html', badge: 'New' },
    { name: 'Connect', path: 'pages/connect.html' },
    { name: 'Settings', path: 'pages/settings.html' }
  ];
  
  const navElement = document.querySelector('nav');
  
  tabs.forEach(tab => {
    const linkElement = document.createElement('a');
    linkElement.href = tab.path.includes('/') ? tab.path : `/${tab.path}`;
    linkElement.className = `tab ${currentPage === tab.path ? 'active-tab' : ''}`;
    linkElement.textContent = tab.name;
    
    if (tab.badge) {
      const badgeElement = document.createElement('span');
      badgeElement.className = 'badge';
      badgeElement.textContent = tab.badge;
      linkElement.appendChild(badgeElement);
    }
    
    navElement.appendChild(linkElement);
  });
}

// Call this function when the DOM is loaded
document.addEventListener('DOMContentLoaded', initNavbar); 