import React from 'react';

const Sidebar = () => {
  const regions = ['Aosta Valley', 'Lazio', 'Le Marche'];
  
  const comments = [
    {
      author: 'Stacy Palmer',
      text: 'on Lazio in Campagna whole location hire for your party',
    },
    {
      author: 'Byron Banks',
      text: 'on "Celebrate Lucca Summer Festival at Villa"',
    },
    {
      author: 'Mitch Mason',
      text: 'on "Places of interest near summer Villa Emilia"',
    },
    {
      author: 'Nathan Reynolds',
      text: 'on Places of interest near summer Villa Emilia',
    },
    {
      author: 'Byron Banks',
      text: 'on "Special discount for Italian destination"',
    },
  ];

  return (
    <div className="w-[300px] bg-white p-5 ">
      {/* Region Section */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">REGION</h2>
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <button
              key={region}
              className="px-3 py-1.5 bg-gray-100 border border-gray-200  text-sm hover:bg-gray-200 transition-colors"
            >
              {region}
            </button>
          ))}
        </div>
      </section>

      {/* We Recommend Section */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">WE RECOMMEND</h2>
        <div className="   overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80"
            alt="Summer Villa Emilia"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="font-medium text-base mb-2">Summer Villa Emilia</h3>
            <p className="text-sm text-gray-600 mb-3">
              Prices start at: €650 for 2 nights
            </p>
            <button className="w-full bg-emerald-500 text-white py-2 px-4  hover:bg-emerald-600 transition-colors">
              BOOK
            </button>
          </div>
        </div>
      </section>

      {/* Recent Comments Section */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold text-gray-700 mb-4">RECENT COMMENTS</h2>
        <div className="space-y-3">
          {comments.map((comment, index) => (
            <div key={index} className="text-sm leading-relaxed">
              <span className="font-semibold text-gray-700">{comment.author}</span>
              <span className="text-gray-600"> {comment.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Search Section */}
      <section>
        <h2 className="text-sm font-semibold text-gray-700 mb-4">SEARCH</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Keywords"
            className="flex-1 px-3 py-2 border border-gray-200  text-sm focus:outline-none focus:border-gray-400"
          />
          <button className="p-2 bg-gray-100 border border-gray-200  hover:bg-gray-200 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-gray-600"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;