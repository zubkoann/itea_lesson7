const MediatorClasses = () => {

  class Flight {
    constructor( name ){
      this.name = name;
      this.controlRoom = null;

      console.log(`Flight ${name} in progress`, this);
    }

    receive( message, from ){
      console.log(`${from.name} to ${this.name}: ${message}`);
    }
    
    send( message, to ){
      if( this.controlRoom !== null){
        this.controlRoom.send( message, this, to );
      } else {
        console.warn(`${this.name} - you can't send message, until you dont connected to control room`);
      }
    }
  }

  /*  - - - - - */

  let Alpha = new Flight('Alpha');
  let Bravo = new Flight('Bravo');
  let Beta = new Flight('Beta');

  console.log('- - - - - - - - -');
  //
  Alpha.receive('Welcome in Ukraine!', {name: 'SBU'});
  Bravo.receive('Who are you?', {name: 'SBU'});
  Bravo.send(`Don't shoot me pls!`);

  /* - - - - - */

  class ControlRoom{
    constructor( name ){
      this.name = name;
      this.connectedFlights = {};
    }
    register (flight) {
        this.connectedFlights[flight.name] = flight;
        flight.controlRoom = this;

        console.log(`New flight '${flight.name}' registered in control room ${name}`);
        console.log('List or registered:', this.connectedFlights );
    }
    send( message, from, to ){
      // console.log(
      //   'message:', message,
      //   '\nfrom:', from,
      //   '\nthis:', this,
      //   '\nconnectedFlights:', this.connectedFlights
      // );
      if( to !== undefined ){
        to.receive( message, from );
      } else {
        for( let key in this.connectedFlights ){
          if( this.connectedFlights[key] !== from ){
            this.connectedFlights[key].receive(message, from);
          }
        }
      } // else
    } // send

  } // control room
  /*  - - - - - */
  //
  const Borispol = new ControlRoom('Borispol');
  console.log('- - - - - - - - -');
  Borispol.register(Alpha);
  Borispol.register(Bravo);
  Borispol.register(Beta);
  // console.log('- - - - - - - - -');
  Beta.send('Hello, Kyiv! How\'s the weather?');
  Alpha.send('Hello guys! It\s rainy, probably we need go to Harkiv or Odessa');
  Alpha.send('Shoot Beta! Probably he\'s a terrorist!', Bravo)

}

export default MediatorClasses;
