package com.ranger.recipe;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class RecipeController {

  @GetMapping("/recipes")
  public List<Recipe> getAllRecipe() {
  Recipe r1 = new Recipe(
  1,//id;
  "oatmeal",//title
  "best oatmeal ever",//description
  List.of("oats","sugar free syrup","blueberries"),//ingredients
  "img/oatmeal.jpg",//imageUrl
  1,//servings
  "Breakfast",//category;
  10,//cookTime
  5,//prepTime
  15,//totalTime
  List.of("microwave","eat"),//steps
  "low",//difficulty
  "a nice picture of oatmeal",//imageDescription
  "random story here" //story

  );

  Recipe r2 = new Recipe(
  2,//id
  "chicken",//title
  "best roasted chicken",//description
  List.of("chicken","sauce","msg"),//ingredients
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffood55.com%2Fthumb%2F768%2Fzesty-oven-buffalo-chicken-breasts.webp&f=1&ipt=d955c078c65b93af11b91720d6725d356f6a00857baee883454e3e4af0a0d0bc",//imageUrl
  5,//servings
  "lunch",//category
  30,//cookTime
  30,//prepTime
  60,//totalTime
  List.of("oven","eat"),//steps
  "medium",//difficulty
  "a nice picture of buffalo chicken",//imageDescription
  "randomer story here"//story
  );

  return List.of(r1,r2);

  }


}
