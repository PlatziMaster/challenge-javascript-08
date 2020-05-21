const numbers = [1,2,3,4];
const rta = numbers.map(item => item + 2);


const tasks = [
  {
    title: 'Fix issue 423',
    duration: 60,
    completed: true,
  },
  {
    title: 'Make new chart for dashboard',
    duration: 120,
    completed: false,
  },
  {
    title: 'Make new chart for dashboard 2',
    duration: 130,
    completed: true,
  },
  {
    title: 'Show validations in form',
    duration: 180,
    completed: false,
  },
  {
    title: 'Make new endpoint for login',
    duration: 240,
    completed: false,
  },
];

const durations = tasks.map(item => item.duration);
console.log('durations', durations);
console.log('titles', tasks.map(item => item.title));

// const newTasks = tasks.map(item => {
//   return {
//     ...item,
//     durationInHours: Math.ceil(item.duration / 60)
//   };
// })

const rta3 = tasks
.map(item => {
  return {
    ...item,
    durationInHours: Math.ceil(item.duration / 60)
  };
})
.filter(item => item.durationInHours >= 2 && item.durationInHours <= 3 && item.completed);

console.log(rta3);