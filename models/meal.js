class Meal {
    constructor(id, categoryIDS, title, affordability, complexity, imageUrl, duration, ingrdients, steps, isGlutenFree, isVegan, isVegetarian, isLactoseFree) {
        {
            this.id = id,
                this.categoryIDS = categoryIDS,
                this.title = title,
                this.affordability = affordability,
                this.complexity = complexity,
                this.imageUrl = imageUrl,
                this.duration = duration,
                this.ingrdients = ingrdients,
                this.steps = steps,
                this.isGlutenFree = isGlutenFree,
                this.isVegan = isVegan,
                this.isVegetarian = isVegetarian,
                this.isLactoseFree = isLactoseFree
        }
    }
}
export default Meal