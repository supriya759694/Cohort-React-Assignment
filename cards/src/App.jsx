import React from 'react'
import Card from './components/Card'

const App = () => {
  const users = [
  {
    fullName: "Tony Stark",
    title: "Iron Man",
    profile: "https://i.ibb.co/7Yz1KQp/ironman-profile.jpg",
    coverImage: "https://i.ibb.co/VVd4q4B/ironman-cover.jpg",
    likesCount: 12500,
    postCount: 340,
    viewsCount: 890000,
    followed: true
  },
  {
    fullName: "Steve Rogers",
    title: "Captain America",
    profile: "https://i.ibb.co/9v9mC9K/captain-profile.jpg",
    coverImage: "https://i.ibb.co/6mH3C6s/captain-cover.jpg",
    likesCount: 9800,
    postCount: 290,
    viewsCount: 720000,
    followed: false
  },
  {
    fullName: "Thor Odinson",
    title: "God of Thunder",
    profile: "https://i.ibb.co/Fm0sZzD/thor-profile.jpg",
    coverImage: "https://i.ibb.co/5hFjNwK/thor-cover.jpg",
    likesCount: 14300,
    postCount: 410,
    viewsCount: 1020000,
    followed: true
  },
  {
    fullName: "Bruce Banner",
    title: "Hulk",
    profile: "https://i.ibb.co/YXn4J2r/hulk-profile.jpg",
    coverImage: "https://i.ibb.co/ZhL7w7g/hulk-cover.jpg",
    likesCount: 8700,
    postCount: 180,
    viewsCount: 540000,
    followed: false
  },
  {
    fullName: "Natasha Romanoff",
    title: "Black Widow",
    profile: "https://i.ibb.co/7pLZ5t0/blackwidow-profile.jpg",
    coverImage: "https://i.ibb.co/Q9k3M8Q/blackwidow-cover.jpg",
    likesCount: 11200,
    postCount: 260,
    viewsCount: 680000,
    followed: true
  },
  {
    fullName: "Peter Parker",
    title: "Spider-Man",
    profile: "https://i.ibb.co/5hLwBkw/spiderman-profile.jpg",
    coverImage: "https://i.ibb.co/0t9XKcJ/spiderman-cover.jpg",
    likesCount: 15800,
    postCount: 500,
    viewsCount: 1340000,
    followed: true
  },
  {
    fullName: "T'Challa",
    title: "Black Panther",
    profile: "https://i.ibb.co/7y0k0Zd/blackpanther-profile.jpg",
    coverImage: "https://i.ibb.co/f4KZg1m/blackpanther-cover.jpg",
    likesCount: 10400,
    postCount: 310,
    viewsCount: 760000,
    followed: false
  },
  {
    fullName: "Wanda Maximoff",
    title: "Scarlet Witch",
    profile: "https://i.ibb.co/rF5bF3k/scarlet-profile.jpg",
    coverImage: "https://i.ibb.co/X4Zs5sQ/scarlet-cover.jpg",
    likesCount: 13200,
    postCount: 275,
    viewsCount: 910000,
    followed: true
  },
  {
    fullName: "Stephen Strange",
    title: "Doctor Strange",
    profile: "https://i.ibb.co/3z7X0ZZ/strange-profile.jpg",
    coverImage: "https://i.ibb.co/dc3Yz4Z/strange-cover.jpg",
    likesCount: 9600,
    postCount: 240,
    viewsCount: 650000,
    followed: false
  },
  {
    fullName: "Clark Kent",
    title: "Superman",
    profile: "https://i.ibb.co/9s7sJtF/superman-profile.jpg",
    coverImage: "https://i.ibb.co/2hF4yZk/superman-cover.jpg",
    likesCount: 17000,
    postCount: 560,
    viewsCount: 1580000,
    followed: true
  }
];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-10">
        Instagram Style Superhero Cards
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user) => (
          <Card key={user.fullName} user={user} />
        ))}
      </div>
    </div>
  )
}

export default App;