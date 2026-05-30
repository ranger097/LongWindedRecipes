import { useEffect, useState } from "react";

function Header() {
const [users, setUsers] = useState([]);

useEffect(() => {
fetch("https://localhost:8080/users")
.then(res => res.json())
.then(data => setUsers(data))
},[]);

return (
  <div>
  {users.map((user) =>  ( 
    <div className="fullHeaderContainer" key={user.id}>
    <div className="imageAndName">
    <img src={user.userImage} alt={user.description}/>
       <span>{user.message}</span>
       <span>{user.name}</span>
    </div>
    <div className="menuIcon">
    </div>
    </div>
  ))}

</div>
);
}
export default Header;
