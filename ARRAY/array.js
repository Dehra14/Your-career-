
const students = [
    {
      firstName: "John",
      lastName: "Okoye",
      age: 19,
      score: 85,
      courses: ["Math", "Physics"]
    },
    {
      firstName: "Aisha",
      lastName: "Bello",
      age: 20,
      score: 91,
      courses: ["Biology", "Chemistry"]
    },
    {
      firstName: "Tunde",
      lastName: "Olowu",
      age: 18,
      score: 78,
      courses: ["English", "History"]
    },
    {
      firstName: "Chioma",
      lastName: "Okoro",
      age: 21,
      score: 88,
      courses: ["Law", "Sociology"]
    },
    {
      firstName: "Emeka",
      lastName: "Ike",
      age: 22,
      score: 93,
      courses: ["Computer Science", "Mathematics"]
    }
  ];
  
  
  const container = document.getElementById("studentList");

  const studentLiteral = [];

  students.map((student) => {
    const { firstName, lastName, age, score, courses } = student;
    studentLiteral.push(`${firstName} ${lastName} is ${age} years old and scored ${score}. Taking: ${courses.join(", ")}`)
  })

  studentLiteral.forEach((literal) => {
    console.log(literal)
  })
  
  students.forEach(student => {
    const { firstName, lastName, age, score, courses } = student;
  
    const studentDiv = document.createElement("div");
    studentDiv.className = "student";
    studentDiv.innerText = `${firstName} ${lastName} is ${age} years old and scored ${score}. Taking: ${courses.join(", ")}`;
  
    container.appendChild(studentDiv);
  });
  