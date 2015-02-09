var eits = {
  "eit_2016": [
  {
    "name": "Ayodele", 
    "image": "ayo.jpg"
  }, 
  {
    "name": "Blessing Onomesino", 
    "image": "blessing.jpg"
  },  
  {
    "name": "Esther Olatunde", 
    "image": "esther.jpg"
  }, 
  {
    "name": "Babara Okoto", 
    "image": "babara.jpg"
  },
  {
    "name": "Priscilla Hazel", 
    "image": "priscilla.jpg"
  },
  {
    "name": "Prince Anim", 
    "image": "prince.jpg"
  },
  {
    "name": "David Evhade", 
    "image": "david.jpg"
  },
  {
    "name": "Kennedy Anyinatoe", 
    "image": "kennedy.jpg"
  },
  {
    "name": "Ike Owoh", 
    "image": "ike.jpg"
  },
  {
    "name": "Innocent Udeogu", 
    "image": "innocent.jpg"
  },
  {
    "name": "Philip Nunoo", 
    "image": "philip.jpg"
  },
  {
    "name": "Cassandra Sarfo", 
    "image": "cassandra.jpg"
  },
  {
    "name": "Derek Frimpong", 
    "image": "derek.jpg"
  },
  {
    "name": "Panin Tenkorang", 
    "image": "panin.jpg"
  },
  {
    "name": "Paul Damalie", 
    "image": "paul.jpg"
  },
  {
    "name": "Barnabas Ayinloya", 
    "image": "barnabas.jpg"
  },
  {
    "name": "Laud Bruce Tagoe", 
    "image": "laudbruce.jpg"
  },
  {
    "name": "Laud Bentil", 
    "image": "laudbentil.jpg"
  },
  {
    "name": "Kwame Asiedu", 
    "image": "kwamea.jpg"
  },
  {
    "name": "Kwame Yeboah", 
    "image": "kwamey.jpg"
  },
  {
    "name": "Jerry King", 
    "image": "jerry.jpg"
  },
  {
    "name": "Kelechi Uduagu", 
    "image": "kelechi.JPG"
  },
  {
    "name": "Afi Kwao", 
    "image": "afi.jpg"
  },
  {
    "name": "Benjamin Kissi", 
    "image": "ben.jpg"
  },
  {
    "name": "Abideen Adeleye", 
    "image": "abideen.jpg"
  },
  {
    "name": "Alexander Okereke", 
    "image": "alex.jpg"
  },
  {
    "name": "Samuel Nkoom Amoah", 
    "image": "samuel.jpg"
  },
  {
    "name": "Ijeoma", 
    "image": "ijeoma.jpg"
  }
  ]
}

//adding a shuffle function to the Array class
Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return;
  while ( --i ) {
    j = Math.floor( Math.random() * ( i + 1 ) );
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  }

  return this;
}

Array.prototype.is_empty = function() {
  return (this.length == 0);
}

Randomizer = function() {
  var eits_instance = eits.eit_2016.slice(); // keep a local copy of the list

  // remove random generated eit from the array
  var filter = function(e) {
    eits_instance = eits_instance.filter(function(i) {
      return i.name !== e.name;
    });
  };

  //randomly generate eit
  var get_eit = function() {
//    eit = eits_instance[Math.floor(Math.random() * eits_instance.length)];
//    filter(eit);
//    return eit;

    if(eits_instance.is_empty())
      eits_instance = eits.eit_2016.slice().shuffle();

    return eits_instance.shuffle().shift();
  };

  // public methods
  return {
    'get_all_eits': function() {
      return eits_instance.shuffle();
    },
      'get_random_eit': function(one_at_a_time) {
        if(one_at_a_time)
          return get_eit();

        return [get_eit(), get_eit(), get_eit()]; // get an array of 3 eits
      }
  }
}();

$(function() {
  $('button').click(function() {
    generated_eits = Randomizer.get_random_eit($('.option:checked').length == 1); // when button is clicked, generate eits based on the one at a time option

  });
});
