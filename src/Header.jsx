import { useEffect, useState } from "react";

function Header() {
const [profile, setProfile] = useState(null);

useEffect(() => {
fetch("http://localhost:8080/profile")
.then(res => res.json())
.then(data => setProfile(data))
},[]);


if (!profile) {
return <div>Loading...</div>
}

return (
  <div> 
    <div className="fullHeaderContainer" key={profile.id}>
    <div className="imageAndName">
    <img src={profile.userImage} 
     alt={profile.description} 
     className="profileImage"/>
       <span>{profile.quote}</span>
       <span>{profile.name}</span>
    </div>
    <div className="menuIcon">
    </div>
    </div>

</div>
);
}
export default Header;
