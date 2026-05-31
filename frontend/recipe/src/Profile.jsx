import { useEffect, useState } from "react";

function Profile() {
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
<span>id {profile.id}</span><br/>
<span>{profile.name}</span><br/>
<span>{profile.bio}</span><br/>
<span>{profile.description}</span><br/>
<span>{profile.role}</span><br/>
<a href={profile.websiteUrl}>Website Link</a><br/>
<span>{profile.email}</span><br/>
<img 
src={profile.userImage} 
alt={profile.description} 
className="profileImage" /><br/>
<span>Status: {profile.isOnline ? "Online" : "Offline"}</span><br/>
</div>  
  );
}

export default Profile;
