const bankAccount = {
    ownerName: "Іван Петренко",
    accountNumber: "UA123456789",
    balance: 1000,
  
    deposit() {
      if (confirm("Бажаєте поповнити рахунок?")) {
        const amount = parseFloat(prompt("Введіть суму для поповнення:"));
        if (!isNaN(amount) && amount > 0) {
          this.balance += amount;
          alert(`Рахунок поповнено. Новий баланс: ${this.balance} грн`);
        } else {
          alert("Некоректна сума.");
        }
      }
    },
  
    withdraw() {
      if (confirm("Бажаєте зняти готівку?")) {
        const amount = parseFloat(prompt("Введіть суму для зняття:"));
        if (!isNaN(amount) && amount > 0 && amount <= this.balance) {
          this.balance -= amount;
          alert(`Гроші знято. Залишок на рахунку: ${this.balance} грн`);
        } else {
          alert("Недостатньо коштів або некоректна сума.");
        }
      }
    }
  };
  
 
  bankAccount.deposit();
  bankAccount.withdraw();

  const weather = {
    temperature: 0,
    humidity: 50,
    windSpeed: 10,
  
    isFreezing() {
      this.temperature = parseFloat(prompt("Введіть температуру повітря (°C):"));
      return this.temperature < 0;
    }
  };
  
 
  if (weather.isFreezing()) {
    alert("Температура нижче 0 градусів Цельсія.");
  } else {
    alert("Температура вище або дорівнює 0 градусів Цельсія.");
  }
  


  const user = {
    name: "Олександр",
    email: "alex@gmail.com",
    password: "qwerty123",
  
    login() {
      const inputEmail = prompt("Введіть email:");
      const inputPassword = prompt("Введіть пароль:");
      
      if (inputEmail === this.email && inputPassword === this.password) {
        alert("Вхід виконано успішно!");
      } else {
        alert("Невірний email або пароль!");
      }
    }
  };
  

  user.login();


  const movie = {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,
  
    isTopRated() {
      return this.rating > 8;
    }
  };
  

  console.log(`Назва: ${movie.title}`);
  console.log(`Режисер: ${movie.director}`);
  console.log(`Рік: ${movie.year}`);
  console.log(`Рейтинг: ${movie.rating}`);
  console.log("Цей фільм має високий рейтинг:", movie.isTopRated());
  
  