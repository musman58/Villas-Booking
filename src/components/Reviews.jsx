import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Joe Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    text: 'I was in Italy for the first time and stayed by chance in a winder cottage Monte Bianco. I must say that was an unforgettable experience!'
  },
  {
    id: 2,
    name: 'Kim Lee',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    text: 'I\'ll never forget our summer stay at villa Emilia! Perfect location, perfect service, amazing nature views. I enjoyed the stay and would recommend it to everyone.'
  },
  {
    id: 3,
    name: 'Tom Hendrix',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80',
    text: 'I was visiting Le Marche with my family and friends and stayed at Etna House – this was an amazing and unforgettable stay! A lot of space, a pool, a beachfront, just a peaceful rest.'
  }
];

const Reviews = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Guest Reviews</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 ">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <h3 className="font-medium">{review.name}</h3>
              </div>
              <p className="text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;