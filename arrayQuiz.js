// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join()
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',',2)
    console.log(result)
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result);
    console.log(array);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    // splice는 배열 자체를 수정한다.
    // const result = array.splice(0,2)
    // console.log('Q4', result) // 지운 것을 returning
    // console.log('Q4', array) // 지워지고 남은 놈들이 담긴다. 
    // but splice는 새로운 배열을 만드는 것이 아니므로 정답이 아니다!
    // slice는 원하는 부분만 return 해서 받아온다.
    let result = array.slice(2, 5)
    console.log(result)
  }

  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
    let result = students.find((student) => student.score === 90);
    console.log(result)
  }
  
  // Q6. make an array of enrolled students
  {
    const result = students.filter((student) => student.enrolled)
    console.log(result) // student.enrolled 의 value가 true 인 것만 담는다.
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
    const result = students.map((student) => student.score)
    console.log(result) // 다 정리해서 하나의 배열로
  }
  
  // Q8. check if there is a student with the score lower than 50
  { 
    // const result = student.some()
    // const result2 = student.every()
  }
  console.clear();
  // Q9. compute students' average score
  { 
    const result = students.reduce((acc, cur) =>
      // console.log(`----`) 
      // console.log(acc)
      // console.log(cur)
      acc + cur.score, 0)
    console.log(result / students.length)
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result = students
    .map((student) => student.score)
    .filter(score => score >= 50)
    .join();
    console.log(result)
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result = students.map(student => student.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result)
  }
  