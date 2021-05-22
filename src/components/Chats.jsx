import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import database from "../firebase";

const Chats = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const unsuv = database
      .collection("people")
      .onSnapshot((snap) => setUsers(snap.docs.map((doc) => ({
          id:doc.id,
          data:doc.data()
      }))));
  }, []);

  return (
    <div>
      {console.log(users)}

      <div className="chats">
        {users.map((user) => (
          <Chat key={user.data.name} id={user.id} name={user.data.name} img={user.data.url} message={user.data.message} />
        ))}
      </div>
    </div>
  );
};

export default Chats;
