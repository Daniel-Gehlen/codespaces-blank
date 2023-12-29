// Defining the Hero class
class Hero {
    // Class constructor with properties name, age, and type
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    // Attack method
    attack() {
      let attack;
  
      // Choosing the attack based on the hero's type
      switch (this.type) {
        case "mage":
          attack = "used magic";
          break;
        case "warrior":
          attack = "used sword";
          break;
        case "monk":
          attack = "used martial arts";
          break;
        case "ninja":
          attack = "used shuriken";
          break;
        default:
          attack = "used an undefined attack";
      }
  
      // Displaying the attack message
      console.log(`The ${this.type} ${this.name} attacked using ${attack}`);
    }
  }
  
  // Creating an instance of the Hero class
  const myHero = new Hero("Hero1", 25, "mage");
  
  // Calling the attack method of the created instance
  myHero.attack();
  