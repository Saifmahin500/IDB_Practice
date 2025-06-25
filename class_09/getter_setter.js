class Students {
    constructor() {
        var name;
        var marks;

    }

    setName(name) {
        this.name = name;
    }

    setMarks(marks) {
        this.marks = marks;
    }

    getName() {
        return this.name;
    }

    getMarks() {
        return this.marks;
    }
}

var s = new Students();
s.setName("saif");
s.setMarks(50);

var s2 = new Students();
s2.setName("Mahin");
s2.setMarks(60);

console.log(s.getName());
console.log(s.getMarks());

console.log(s2.getName());
console.log(s2.getMarks());