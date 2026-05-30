package com.ranger.recipe;

public class User {

public int id;
public String name;
public String bio;
public String description;
public String role;
public String websiteUrl;
public String email;
public String userImage;
public boolean isOnline;

public User( int id, 
String name, String bio, 
String description, String role, 
String websiteUrl, String email, 
String userImage, boolean isOnline ) {

this.id = id;
this.name = name;
this.bio = bio;
this.description = description;
this.role = role;
this.websiteUrl = websiteUrl;
this.email = email;
this.userImage = userImage;
this.isOnline = isOnline;

  }
}
