class Pet {
    constructor(name, type, age, happiness, hunger) {
      this.name = name;
      this.type = type;
      this.age = age;
      this.happiness = happiness;
      this.hunger = hunger;
    }
  
    feed() {
      this.hunger = Math.max(this.hunger - 20, 0);
    }
  
    play() {
      this.happiness = Math.min(this.happiness + 20, 100);
    }
  
    agePet() {
      this.age += 1;
      this.happiness = Math.max(this.happiness - 5, 0);
      this.hunger = Math.min(this.hunger + 10, 100);
    }
  
    displayState() {
      return `Name: ${this.name}\nType: ${this.type}\nAge: ${this.age}\nHappiness: ${this.happiness}\nHunger: ${this.hunger}`;
    }
  }
  
  