// Search functionality for Trump v. CASA website
function initializeSearch() {
    // Create search UI
    const searchHTML = `
        <div id="search-container" style="position: fixed; top: 20px; right: 20px; z-index: 1000; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); display: none;">
            <input type="text" id="search-input" placeholder="Search case materials..." style="width: 250px; padding: 8px; border: 1px solid #ddd; border-radius: 4px;">
            <button onclick="performSearch()" style="margin-left: 5px; padding: 8px 15px; background: var(--color-uh-red); color: white; border: none; border-radius: 4px; cursor: pointer;">Search</button>
            <button onclick="toggleSearch()" style="margin-left: 5px; padding: 8px; background: #666; color: white; border: none; border-radius: 4px; cursor: pointer;">✕</button>
            <div id="search-results" style="margin-top: 15px; max-height: 400px; overflow-y: auto;"></div>
        </div>
        <button onclick="toggleSearch()" style="position: fixed; top: 20px; right: 20px; z-index: 999; padding: 10px 20px; background: var(--color-uh-red); color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 500;">
            🔍 Search
        </button>
    `;
    
    document.body.insertAdjacentHTML('beforeend', searchHTML);
}

function toggleSearch() {
    const container = document.getElementById('search-container');
    const button = event.target;
    
    if (container.style.display === 'none') {
        container.style.display = 'block';
        button.style.display = 'none';
        document.getElementById('search-input').focus();
    } else {
        container.style.display = 'none';
        document.querySelector('button[onclick="toggleSearch()"]').style.display = 'block';
    }
}

function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const results = document.getElementById('search-results');
    
    if (!query) {
        results.innerHTML = '<p style="color: #666;">Enter a search term...</p>';
        return;
    }
    
    // Search through all text content
    const searchableElements = document.querySelectorAll('h1, h2, h3, h4, p, li, a');
    const matches = [];
    
    searchableElements.forEach(el => {
        const text = el.textContent.toLowerCase();
        if (text.includes(query)) {
            const context = el.textContent.substring(0, 150);
            const section = el.closest('section')?.id || 'main';
            
            matches.push({
                text: context,
                element: el,
                section: section
            });
        }
    });
    
    // Display results
    if (matches.length > 0) {
        results.innerHTML = `
            <p style="font-weight: 600; margin-bottom: 10px;">Found ${matches.length} results:</p>
            ${matches.slice(0, 10).map(match => `
                <div style="margin-bottom: 10px; padding: 10px; background: #f8f9fa; border-radius: 4px; cursor: pointer;" 
                     onclick="scrollToElement('${match.section}')">
                    <small style="color: var(--color-uh-red); text-transform: uppercase;">${match.section}</small><br>
                    ${match.text}...
                </div>
            `).join('')}
        `;
    } else {
        results.innerHTML = '<p style="color: #666;">No results found.</p>';
    }
}

function scrollToElement(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        toggleSearch();
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', initializeSearch);

// Allow Enter key to search
document.addEventListener('keydown', function(e) {
    if (e.target.id === 'search-input' && e.key === 'Enter') {
        performSearch();
    }
});