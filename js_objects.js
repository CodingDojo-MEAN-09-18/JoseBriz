
console.log('print all student\'s names and their cohors:')

var students = [] 
students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function print(){
    for (var [index, student] of students.entries()){
        console.log('Name: ' + student.name + ' Cohort: ' + student.cohort)
    }
}

print(students)


console.log('print all employees and managers separately as a numbered list:')

var users = {}
users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

function process(){
    console.log('EMPLOYEES:')
    for (var [index,employee] of users.employees.entries()){
        var index = index + 1
        var lname = (employee.last_name).toUpperCase();
        var fname = (employee.first_name).toUpperCase();
        var length = lname.length + fname.length
        console.log(index + " - " + lname + ", " + fname + " - " + length)
    }
    console.log('MANAGERS:')
    for (var [index,manager] of users.managers.entries()){
        var index = index + 1
        var lname = (manager.last_name).toUpperCase();
        var fname = (manager.first_name).toUpperCase();
        var length = lname.length + fname.length
        console.log(index + " - " + lname + ", " + fname + " - " + length)
    }
}
process(users)