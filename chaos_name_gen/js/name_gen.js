$(document).ready(function() {

   $.getJSON('data/data.min.json', function(data) {

      data = data['names'];
      for ( var i = 0; i < data.length; i++ ) {
         names.push(data[i]);
      }

   });

   var championName = '';
   var names = [];

   $('#generate').click(function(e) {
      e.preventDefault();

      var first = '';
      var second = '';
      var title = '';
      var god = $('input[name="god"]:checked').val() - 1;

      first = generateName(names, 0, rollDice());
      second = generateName(names, 1, rollDice());
      title = generateTitle(names, god, rollDice());

      championName = first + second + ' ' + title;

      $('#display-name').html('<h2>' + championName + '</h2>');
   });

   function randomRange(max) {
      number = Math.floor((Math.random() * max) + 1);

      return number;
   }

   function rollDice() {
      d1 = randomRange(4).toString();
      d2 = randomRange(6).toString();

      return d1 + d2;
   }

   function generateName(data, pos, roll) {
      var name = '';

      data.forEach(function(entry) {
         if (entry['roll'] === roll) {
            name = entry['data'][pos];
         }
      });

      return name;
   }

   function generateTitle(data, god, roll) {
      var title = '';

      data.forEach(function(entry) {
         if (entry['roll'] === roll) {
            title = entry['data'][2][god];
         }
      });

      return title;
   }
});
