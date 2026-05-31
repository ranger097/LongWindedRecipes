package com.ranger.recipe;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class ProfileController {

@GetMapping("/profile")
public Profile getProfile() {

Profile profile = new Profile(

1, //id;
"ranger097", //name;
"this is a bio", //bio;
"this is a description", //description;
"this is a role", //role;
"https://www.youtube.com/watch?v=J0qpVaoBNlM", //websiteUrl;
"email@email.com", //email;
"https://i.pinimg.com/originals/21/05/46/21054617a45bb296b2d328da95839edc.jpg", //userImage;
true, //isOnline;
"random qoute or something" //quote;


);


return profile;
  }
}
