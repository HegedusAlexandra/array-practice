async function getStudents() {
   const response = await fetch("http://localhost:3000/students")
   return await response.json()
}

async function init (){
   const students = await getStudents();
   document.body.innerHTML = getStudentListHTML(students);
}

function getStudentListHTML(students) {
    console.log(students);
    const StudentListHTMLs = students.map(studentComponent) 
    console.log(StudentListHTMLs);
    return  StudentListHTMLs.join('')
}

function studentComponent (){
   return`
    <div class="student">
        <p>${student.name}</p>
        <p>${student.status}</p>
    </div>` 
}

init()

