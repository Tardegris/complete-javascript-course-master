const mark = {
    fullName : 'Mark',
    mass:78,
    height: 1.69,
    BMI: 0,
    calcBMI: function () {
        this.BMI = this.mass/(this.height * this.height)
        return this.BMI;
    }
}

console.log(mark.calcBMI());

for (let i =0; i < 10; i++) {
console.log(i);
}