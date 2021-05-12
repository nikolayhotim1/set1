let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let set = new Set(values);

alert ( set.size );

set.forEach((value, valueAgain, set) => {
  alert(value);
});