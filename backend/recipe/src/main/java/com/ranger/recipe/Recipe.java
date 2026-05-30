package com.ranger.recipe;
import java.util.List;

public class Recipe {
  public int id;
  public String title;
  public String description;
  public List<String> ingredients;
  public String imageUrl;
  public int servings;
  public String category;
  public int cookTime;
  public int prepTime;
  public int totalTime;
  public List<String> steps;
  public String difficulty;
  public String imageDescription;
  public String story;

  public Recipe( int id, String title, 
  String description, List<String> ingredients,
  String imageUrl, int servings, String category,
  int cookTime, int prepTime, int totalTime,
  List<String> steps, String difficulty, String imageDescription, String story ) {

  this.id = id;
  this.title = title;
  this.description = description;
  this.ingredients = ingredients;
  this.imageUrl = imageUrl;
  this.servings = servings;
  this.category = category;
  this.cookTime = cookTime;
  this.prepTime = prepTime;
  this.totalTime = totalTime;
  this.steps = steps;
  this.difficulty = difficulty;
  this.imageDescription = imageDescription;
  this.story = story;

  }
}
