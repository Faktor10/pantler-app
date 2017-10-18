Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


IngredientDashboard: Parent container
– EditableIngredientList: Displays a list of ingredient containers
* EditableIngredient: Displays either a ingredient or a ingredient’s edit form
· Ingredient: Displays a given ingredient
· IngredientForm: Displays a given ingredient’s edit form
– ToggleableIngredientForm: Displays a form to create a new ingredient
* IngredientForm (not displayed): Displays a new ingredient’s create form
* 
1. Break the app into components
2. Build a static version of the app
3. Determine what should be stateful
4. Determine in which component each piece of state should live
5. Hard-code initial states
6. Add inverse data flow
7. Add server communication