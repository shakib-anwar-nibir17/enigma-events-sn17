<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ? Answer is A: {}

<i>Write your explanation here: Here greetign was declared without let, const, var meaning it is a Global variable according to Javascript. So it has a value assigned as {}. thats why the console log value was {}.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ? Answer is C: "12"

<i>Write your explanation here: Javascript will perform type coercion to match the string type of b. Thus it will be a concatenation with the + operator. So the result will be "12" , string value rather than 3 which would be number type value</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ? Answer is A: `['🍕', '🍫', '🥑', '🍔']`

<i>Write your explanation here : food is an array and info is a object. As they are separate variables change in info object will not affect the array of food. So the array elements of food will remain the same.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ? Answer is B: `Hi there, undefined`

<i>Write your explanation here: The function was called but but no argument was pass in sayHi() function. That's why , the console.log showed undefined as it as missing an argument</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: ? Answer is C: 3

<i>Write your explanation here : The for each method run through the nums array and for each num if the value is truthy it add 1 to the count. The nums array haas 4 element, for element to a truthy value it has to be not equal to 0. As 0 is only element which is equal to , so for 1, 2 and 3 , 1 is added to count resulting in 3. </i>

</p>
</details>
