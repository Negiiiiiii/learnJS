//食事記録機能

//今日食べた食事のリスト
const meals = [
    {
        name:"breakfast",
        meal:"トースト",
        calorie: 300,
        time:"8:00"
    },
    {
        name:"lanch",
        meal:"ラーメン",
        calorie: 800,
        time:"12:30"
    },
    {
        name:"dinner",
        meal:"焼肉定食",
        calorie: 900,
        time:"19:00"
    },

]
console.log(meals)

const totalCalories = meals[0].calorie + meals[1].calorie + meals[2].calorie;
console.log("合計カロリー:" + totalCalories + "kcal");