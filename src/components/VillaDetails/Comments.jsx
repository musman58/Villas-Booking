import React, { useState } from 'react';

const Comments = () => {
  const [isLoggedIn] = useState(false); // Mock login state
  const [newComment, setNewComment] = useState('');

  const comments = [
    {
      id: 1,
      author: 'Byron Banks',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      date: 'June 14, 2023 at 7:47 pm',
      content: 'I loved this place – very quiet in comparison to other places in Campania! Will come here during my next vacation.'
    },
    {
      id: 2,
      author: 'Misty Mason',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      date: 'June 14, 2023 at 5:23 pm',
      content: 'I agree, a wonderful place to enjoy the nature and away from noisy cities.'
    },
    {
      id: 3,
      author: 'Nathan Reynolds',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
      date: 'June 14, 2023 at 8:05 am',
      content: 'This is the best place in Campania! Wonderful service, always clean pool and lots of green places around it! A good combination of water and green lives.'
    }
  ];

  const handleSubmitComment = (e) => {
    e.preventDefault();
    // Handle comment submission
    console.log('New comment:', newComment);
    setNewComment('');
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">3 thoughts on "Villa Bastilicata Grande"</h2>
      
      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <img
              src={comment.avatar}
              alt={comment.author}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <h3 className="font-bold">{comment.author}</h3>
                <span className="text-sm text-gray-500">{comment.date}</span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
              <button className="text-blue-600 hover:underline mt-2 text-sm">
                Log in to Reply
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Leave a Reply</h3>
        {isLoggedIn ? (
          <form onSubmit={handleSubmitComment}>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-4 border rounded-md focus:ring-2 focus:ring-emerald-500 mb-4"
              rows={4}
              placeholder="Write your comment here..."
            />
            <button
              type="submit"
              className="bg-emerald-500 text-white px-6 py-2 rounded hover:bg-emerald-600"
            >
              Post Comment
            </button>
          </form>
        ) : (
          <p>
            You must be{' '}
            <button className="text-blue-600 hover:underline">logged in</button>
            {' '}to post a comment.
          </p>
        )}
      </div>
    </div>
  );
};

export default Comments;