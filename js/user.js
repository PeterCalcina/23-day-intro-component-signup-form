class User {
  constructor(first_name, last_name, email, password) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
  }

  validateEmptyField = () => {
    return [this.first_name, this.last_name, this.email, this.password].map(field => field === '' ? false : true);
  };

  validateEmail = () => this.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
}

let user = new User('', '', '', '');

fillData = (field, value) => {
  user[field] = value;
  window.clearInstance(field);
};

window.userInstance = user;