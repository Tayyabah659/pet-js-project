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
  
 
  let petName = prompt("What is your pet's name?");
  let petType = prompt("What kind of pet is it? (e.g., dog, cat, dragon)");
  let petAge = parseInt(prompt("How old is your pet?"), 10);
  let petHappiness = parseInt(prompt("How happy is your pet? (0-100)"), 10);
  let petHunger = parseInt(prompt("How hungry is your pet? (0-100)"), 10);
  
  
  let pet = new Pet(petName, petType, petAge, petHappiness, petHunger);
  
  
  while (true) {
    let action = prompt(`Choose an action:\n1. Feed\n2. Play\n3. Age Pet\n4. Display State\n5. Exit`);
  
    switch (action) {
      case "1":
        pet.feed();
        alert("You fed your pet.");
        break;
      case "2":
        pet.play();
        alert("You played with your pet.");
        break;
      case "3":
        pet.agePet();
        alert("Your pet has aged.");
        break;
      case "4":
        alert(pet.displayState());
        break;
      case "5":
        alert("Exiting simulation.");
        break;
      default:
        alert("Invalid choice. Please try again.");
    }
  
    if (action === "5") break; 
  }