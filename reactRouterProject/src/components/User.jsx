import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </>
  );
};

export default User;
