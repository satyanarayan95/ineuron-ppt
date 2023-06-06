    // Fetch blogs from API and display them on the UI
    function fetchBlogs() {
        fetch('https://jsonplaceholder.typicode.com/posts')
          .then(response => response.json())
          .then(blogs => {
            const blogList = document.querySelector('.blog-list');
  
            blogs.forEach(blog => {
              const blogItem = document.createElement('li');
              blogItem.classList.add('blog-item');
              blogItem.innerHTML = `
                <h3>${blog.title}</h3>
                <p>${blog.body}</p>
                <button onclick="deleteBlog(${blog.id})">Delete</button>
              `;
              blogList.appendChild(blogItem);
            });
          });
      }
  
      // Add a new blog to the UI and send it to the server
      function addBlog(event) {
        event.preventDefault();
  
        const titleInput = document.getElementById('title');
        const bodyInput = document.getElementById('body');
  
        const newBlog = {
          title: titleInput.value,
          body: bodyInput.value
        };
  
        // Send the new blog to the server
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify(newBlog),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => response.json())
        .then(blog => {
          const blogList = document.querySelector('.blog-list');
          const blogItem = document.createElement('li');
          blogItem.classList.add('blog-item');
          blogItem.innerHTML = `
            <h3>${blog.title}</h3>
            <p>${blog.body}</p>
            <button onclick="deleteBlog(${blog.id})">Delete</button>
          `;
          blogList.appendChild(blogItem);
  
          // Clear form inputs
          titleInput.value = '';
          bodyInput.value = '';
        });
      }
  
      // Delete a blog from the UI and the server
      function deleteBlog(blogId) {
        // Delete the blog from the server
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`, {
          method: 'DELETE'
        })
        .then(() => {
          // Remove the blog from the UI
          const blogItem = document.querySelector(`.blog-item:nth-child(${blogId})`);
          blogItem.remove();
        });
      }
  
      // Initialize the app
      function init() {
        fetchBlogs();
  
        const addBlogForm = document.getElementById('add-blog-form');
        addBlogForm.addEventListener('submit', addBlog);
      }
  
      // Call init() to start the app
      init();