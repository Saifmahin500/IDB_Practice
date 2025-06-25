class User {
    #password;
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.#password = password;
    }

    login(userName, password) {
        if (userName == this.userName && password == this.#password) {
            console.log("Login Successful");
        }
        else {
            console.log("Authentication Failed!");
        }
    }
    register() {
        console.log(this.userName + " " + "is now registered");
    }
    setPassword(newPassword) {
        this.#password == newPassword;
    }
}

let saif = new User('Saif', 'saif@gmail.com', '1234');
saif.register();
saif.setPassword('1111')
saif.login('Saif', '1234');

// class Member extends User {
//     constructor(userName,email,password,memberPackage)
//     {
//         super(userName,email,password)
//         this.memberPackage =memberPackage;
//     }
//     getPackage() {
//         console.log(this.userName + " "+ this.memberPackage);
//     }
// }