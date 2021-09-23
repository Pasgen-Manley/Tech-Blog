const addCommentHandler = async (event) => {
  event.preventDefault();
  const commentContent = document.querySelector('#comment-text').value.trim();

  const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  
  console.log(post_id)

  if (commentContent) {
    
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ commentContent, post_id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
      
    } else {
      alert('Failed to create comment');
    }
  }
};


document
  .querySelector('.new-comment-form')
  .addEventListener('submit', addCommentHandler);