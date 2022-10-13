
let userLogin = prompt('Kto tam?');
 if (userLogin == 'Admin') {
    let password = prompt('Parol?');
    if (password == 'Ia glavnii') {
      alert('Zdravstvyite!')
    } else {
      alert('Ne vernii parol!');
    }

 } else {
   alert('Ia vas ne znau!!!');
 }