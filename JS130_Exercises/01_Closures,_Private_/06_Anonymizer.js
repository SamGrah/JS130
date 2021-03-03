let Account = (function() {

  function anonymize() {
    const chars = 'abcdefghijklmnopqrstuv0123456789';
    let identifierString = '';
    for (let charPosition = 1; charPosition <= 16; charPosition += 1) {
      identifierString += chars[Math.floor(Math.random() * chars.length)];
    }
    return identifierString;
  }

  function validatePassword(password, protectedValue) {
    if (this.password === password) return protectedValue;
    return 'Invalid Password';
  }

  return {
    init(email, password, firstName, lastName) {
      this.userEmail = email;
      this.password = password;
      this.userFirstName = firstName;
      this.userLastName = lastName;
      this.displayName = anonymize();
      return this;
    },

    reanonymize(password) {
      let validationResult = validatePassword.call(this, password);
      if (validationResult !== 'Invalid Password') {
        this.displayName = anonymize();
        return true;
      }
      return validationResult;
    },

    firstName(password) {
      return validatePassword.call(this, password, this.userFirstName);
    },

    lastName(password) {
      return validatePassword.call(this, password, this.userLastName);
    },

    email(password) {
      return validatePassword.call(this, password, this.userEmail);
    },

    resetPassword(password, newPassword) {
      let validationResult = validatePassword.call(this, password);
      if (validationResult !== 'Invalid Password') {
        this.password = newPassword;
        return true;
      }
      return validationResult;
    }
  };
})();


///////////////////////////////////// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
///////////////////////////////////// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
console.log(fooBar.firstName);                     // returns the firstName function
console.log(fooBar.email);                         // returns the email function
console.log(fooBar.firstName('123456'));           // logs 'foo'
console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
console.log(fooBar.displayName);                   // logs 16 character sequence
console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password';
console.log(fooBar.resetPassword('123456', 'abc')) // logs true

let displayName = fooBar.displayName;
fooBar.reanonymize('abc');                         // returns true
console.log(displayName === fooBar.displayName);   // logs false