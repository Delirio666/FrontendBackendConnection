//--------HELPER VARIABLES & FUNCTIONS-----------
var id = 0

function studentId(){
    return ++id
}

//---------------------DATABASE------------------
 var studentsDB=[
    {
        id:studentId(),
        name:'Carlos',
        lastName:'Mendez',
        age:39
    },
    {
        id:studentId(),
        name:'Daniel',
        lastName:'Mendez',
        age:39
    }
]

module.exports = studentsDB