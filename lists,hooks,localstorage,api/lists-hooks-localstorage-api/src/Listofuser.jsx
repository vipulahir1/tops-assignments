import React from "react";

export default function Listofuser() {
  const users = [
    { id: 101, name: "Vipul Sisodiya" },
    { id: 102, name: "Anjali Patel" },
    { id: 103, name: "Raj Mehta" },
    { id: 104, name: "Kavya Shah" },
  ];
  return (
    <div>
      <div>
        <h3>User List</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
