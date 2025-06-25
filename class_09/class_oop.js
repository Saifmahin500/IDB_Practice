class Students {
    constructor(name, sub, dept) {
        this.name = name;
        this.sub = sub;
        this.dept = dept;
    }
    getDetails() {
        return (`the subject of student is ${this.sub}
            and name is ${this.name}`);
    }
}
var s = new Students("kamal", "math", "science");
var s2 = new Students("saif", "CSE", "CSE");

console.log(s.getDetails());
console.log(s2.getDetails());
