 // Debounce function implementation
 function debounce(callback, delay) {
    let timeoutId;

    return function() {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        callback.apply(this, arguments);
      }, delay);
    };
  }

  // Function to perform search
  function performSearch(event) {
    const searchTerm = event.target.value;
    const searchResults = document.getElementById('search-results');
    searchResults.innerHTML = '';

    // Simulating an asynchronous search operation
    fetch(`https://jsonplaceholder.typicode.com/posts?q=${searchTerm}`)
      .then(response => response.json())
      .then(posts => {
        posts.forEach(post => {
          const listItem = document.createElement('li');
          listItem.textContent = post.title;
          searchResults.appendChild(listItem);
        });
      });
  }

  // Get search input element and attach debounced search function to input event
  const searchInput = document.getElementById('search-input');
  const debouncedSearch = debounce(performSearch, 300);

  searchInput.addEventListener('input', debouncedSearch);