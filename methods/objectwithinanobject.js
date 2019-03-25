let person = Object.create(Object.prototype,
  {
    parent:{
      value: 'Mother',
      married: true,
      employed: true,
      stressed: false
    },
    child:{
      value: 'Daughter',
      todler: true,
      speaks: true,
      walks: true
    }
  });
console.log(person.parent); 
console.log(person.child);