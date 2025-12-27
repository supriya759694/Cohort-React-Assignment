import React, { useState } from "react";

const Card = ({ user }) => {
  const [isFollowed, setIsFollowed] = useState(user.followed);

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-sm mx-auto">
      
      {/* Cover Image */}
      <div className="h-32 w-full">
        <img
          src={user.coverImage}
          alt="cover"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Profile Image */}
      <div className="relative flex justify-center">
        <img
          src={user.profile}
          alt={user.fullName}
          className="w-24 h-24 rounded-full border-4 border-white object-cover absolute -top-12 bg-white"
        />
      </div>

      {/* Content */}
      <div className="pt-14 pb-6 px-6 text-center">
        <h2 className="text-xl font-bold text-gray-800">
          {user.fullName}
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          {user.title}
        </p>

        {/* Stats */}
        <div className="flex justify-between text-center mb-5">
          <div>
            <h3 className="font-semibold text-gray-800">
              {user.postCount}
            </h3>
            <span className="text-xs text-gray-500">Posts</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">
              {user.likesCount}
            </h3>
            <span className="text-xs text-gray-500">Likes</span>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">
              {user.viewsCount}
            </h3>
            <span className="text-xs text-gray-500">Views</span>
          </div>
        </div>

        {/* Follow Button */}
        <button
          onClick={() => setIsFollowed(!isFollowed)}
          className={`w-full py-2 rounded-lg text-sm font-semibold transition
            ${
              isFollowed
                ? "bg-gray-200 text-gray-700"
                : "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
            }`}
        >
          {isFollowed ? "Following" : "Follow"}
        </button>
      </div>
    </div>
  );
};

export default Card;
