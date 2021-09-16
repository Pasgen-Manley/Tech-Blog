const newPostHandler = async (event) => {
  event.preventDefault();

  const blogTitle = document.querySelector('#blog-title').value.trim();
  const blogContent = document.querySelector('#blog-text').value.trim();

  if (blogTitle && blogContent) {
    
    const response = await fetch('/api/blogPost', {
      method: 'POST',
      body: JSON.stringify({ blogTitle, blogContent }),
      headers: {
        'content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create Blog Post!')
    }
  }
};

document
  .querySelector('new-post-form')
  .addEventListener('submit', newPostHandler);