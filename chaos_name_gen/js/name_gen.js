$(document).ready(function() {

   var championName = '';

   $('#generate').click(function(e) {
      e.preventDefault();

      var god = $('input[name="god"]:checked').val() - 1;
      var firstName = generateName(aos, 'first', rollDice());
      console.log("firstName: " + firstName);
      var secondName = generateName(aos, 'second', rollDice());
      console.log("secondName: " + secondName);
      var title = generateTitle(aos, god, rollDice());
      console.log("title: " + title);

      championName = firstName + secondName + ' ' + title;

      $('#display-name').html("<h2>"+championName+"</h2>");

   });

});

function randomRange(max) {
   number = Math.floor((Math.random() * max) + 1);
   return number;
}

function rollDice() {
   d1 = randomRange(6).toString();
   d2 = randomRange(6).toString();

   console.log("Roll: " + (d1 + d2));
   return d1 + d2;
}

function generateName(data, pos, roll) {
   var name = '';

   data.forEach(function(entry) {
      if (entry['roll'] === roll) {
         name = entry[pos];
      }
   });

   return name;
}

function generateTitle(data, god, roll) {
   var title = '';

   data.forEach(function(entry) {
      if (entry['roll'] === roll) {
         title = entry['title'][god];
      }
   });

   return title;
}
