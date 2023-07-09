javascript:((async function() {
  const entrantNumber = document.getElementsByClassName('user avatar').length;
  console.log('Reading', entrantNumber, 'entrants...');
  const entrants = [];
  for (let i = 1; i < entrantNumber; i++) {
    const entrant = document.getElementsByClassName('user avatar')[i].innerHTML;
    const formattedEntrant = entrant.split('title="')[1].split('" width')[0];
    entrants.push(formattedEntrant);
  };
  console.log('Entrants: right click > copy object for list', entrants);
  })())