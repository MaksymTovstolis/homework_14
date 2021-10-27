let amount = parseInt(100);
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
   ['A whole lot of nothing',240]
];


function mainFunc(list) {
  list
  .map(function(el){
    return [el[0],el[1] / 60];})
  .filter(function(item){
    return item[1]>2})
  .map(function(item){
    const newItem = [...item];
     newItem.push(item[1] * amount);
    return newItem})
  .forEach((elem) => {
    document.write(`
  <tr>
        <p>Task name: ${elem[0]}<p>
      <p>Task duration: ${elem[1]}<p>
      <p>Task amount: ${elem[2]}<p>
    `)
   })
;}

mainFunc(monday)