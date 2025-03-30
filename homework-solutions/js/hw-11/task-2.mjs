class Employee {

    #salary;

    constructor(firstName, lastName, profession, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.profession = profession;
        this.#salary = salary;
    }
      
    get firstName() {
        return this._firstName;
    }
  
    get lastName() {
        return this._lastName;
    } 
  
    get profession() {
        return this._profession;
    }
  
    get salary() {
        return this.#salary;
      }
  
  //     firstName и lastName — строка от 2 до 50 символов, только латинские буквы.
    set firstName(firstNameValue) {
        if(typeof firstNameValue !== 'string') {
            throw Error('Invalid firstname. Must be a string.');
        }
        if(firstNameValue.length < 2 || firstNameValue.length > 50) {
            throw Error('Invalid firstname. Must contain 2-50 symbols.');
        }
        if(!firstNameValue.split('').every(char => latinAlphabet.trim().includes(char))) {
            throw Error('Invalid firstname. Must contain only latin alphabet symbols.');
        }
        this._firstName = firstNameValue;
    }  
  
    set lastName(lastNameValue) {
        if(typeof lastNameValue !== 'string') {
            throw Error('Invalid lastname. Must be a string.');
        }
        if(lastNameValue.length < 2 || lastNameValue.length > 50) {
            throw Error('Invalid lastname. Must contain 2-50 symbols.');
        }
        if(!lastNameValue.split('').every(char => latinAlphabet.trim().includes(char))) {
            throw Error('Invalid lastname. Must contain only latin alphabet symbols.');
        }    
        this._lastName = lastNameValue;
    }
  //     profession — строка, не может быть пустой, только латинские буквы и пробелы.
    set profession(professionValue) {
        if (typeof professionValue !== 'string') {
            throw Error('Invalid profession. Must be a string.');
        }
        if(!professionValue.split('').every(char => latinAlphabet.includes(char))) {
            throw Error('Invalid profession. Must contain only latin alphabet symbols and a space.');
        }    
        if(professionValue.length < 1) {
            throw Error('Indicate profession.');
        }
        this._profession = professionValue;
    }
  //     salary — число, должно быть больше 0 и меньше 10000. // НЕ РАБОТАЕТ ВАЛИДАЦИЯ
    set salary(salaryValue) {
        if (typeof salaryValue !== 'number' || isNaN((salaryValue))) {
            throw Error('Invalid salary. Must be a number.');
        }
        if(salaryValue <= 0 || salaryValue >= 10000) {
            throw Error('Invalid salary. Must be a value between 0 and 1000.');
        }
        this.#salary = salaryValue;
    }
  
    getFullName() {
        return `${this._firstName} ${this._lastName}`;
    }
}

class Company {

  #employees;
  
  constructor(title, phone, address, employees = []) {
      this.title = title;
      this.phone = phone;
      this.address = address;
      this.#employees = employees;
  }

  get title() {
      return this._title;
  }

  get phone() {
      return this._phone;
  }

  get address() {
      return this._address;
  }

  set title(titleValue) {
      if(typeof titleValue !== 'string') {
          throw Error('Invalid title. Must be a string.');
      }
      this._title = titleValue;
  }

  set phone(phoneValue) {
      if(typeof phoneValue !== 'number') {
          throw Error('Invalid phone. Must be a number.');
      }
      this._phone = phoneValue;
  }

  set address(addressValue) {
      if(typeof addressValue !== 'string') {
          throw Error('Invalid address. Must be a number.');
      }
      this._address = addressValue;
  }

  addEmployee(employee) {
      if(employee instanceof Employee) {
          this.#employees.push(employee);
      } else {
        throw Error('Invalid employee')
      };
  }

  getEmployees() {
      return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
      if(typeof firstName !== 'string') {
          throw Error('Invalid firstname. Must be a string.');
      };
      const employeeToFind = this.#employees.find((employee) => employee._firstName === firstName);
      if (!employeeToFind) throw Error ("Can't find employee");
      return employeeToFind;
  }

  #getEmployeeIndex(firstName) {
      const employeeIndex = this.#employees.findIndex((employee) => employee._firstname === firstName);
      return employeeIndex;
  }

  removeEmployee(firstName) {
      const employeeIndex = this.#employees.findIndex((employee) => employee.firstName === firstName); // Добавлено: находим индекс
      if (employeeIndex >= 0) {
          this.#employees.splice(employeeIndex, 1); // Используем найденный индекс
      } else {
          throw Error ("Can't find employee to remove");
      } 
  }
// Метод getTotalSalary() в классе Company, который возвращает сумму всех зарплат сотрудников
  getTotalSalary() {
      const totalSalaries = this.#employees.reduce((accumulator, item) => {
          return accumulator += item.salary;
        }, 0);
      return totalSalaries;
  }
}

const latinAlphabet = ' ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

export { Employee, Company };
