let amount = 100;
let monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
let tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
   ['A whole lot of nothing',240]
];

let newMonday = 
  monday
  .map(function(el){return [el[0],el[1] / 60];})
  .filter(function(item){return item[1]>2})
  .map(function(item){
    const newItem = [...item];
     newItem.push(item[1] * amount);
    return newItem})
;
console.log(newMonday);

let newTuesday = 
  tuesday
  .map(function(el){
    return [el[0],el[1] / 60];})
  .filter(function(item){
    return item[1]>2})
  .map(function(item){
    const newItem = [...item];
     newItem.push(item[1] * amount);
    return newItem})
;
console.log(newTuesday  );




document.write(`Monday
<table>
  <tr>
  <td>Task name: Write a tutorial</td>
  <td>Taks duration: 3 hours</td>
  <td>Task amount: $300</td>
  </tr>
</table>`)