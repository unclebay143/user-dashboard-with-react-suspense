import React, { useEffect } from "react";
import "./user-albums.css";

const UserAlbums = () => {
  const [albums, setAlbums] = React.useState(null);

  const fetchUserAlbums = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums-invalid"
        // "https://jsonplaceholder.typicode.com/albums"
      );
      const albums = await response.json();
      return setAlbums(albums);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    fetchUserAlbums();
  }, []);
  return (
    <>
      <section className='album-section'>
        {albums?.map(({ id, title }) => {
          return (
            <div className='album-card' key={id}>
              <span className='album-id'>{id}</span>
              <span>{title}</span>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default UserAlbums;
