const newPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#blog-title').value.trim();
  const content = document.querySelector('#blog-text').value.trim();

  if (title && content) {
    
    const response = await fetch(`/api/blogpost`, {
      method: 'POST',
      body: JSON.stringify({ title, content }),
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

document.querySelector('.new-post-form').addEventListener('submit', newPostHandler);