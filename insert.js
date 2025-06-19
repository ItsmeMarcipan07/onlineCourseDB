use onlineCourseDB;

//////////////////////////// 1. STUDENTS ////////////////////////////
// Insert 10 students with diverse interests and addresses
/* Columns: _id, name, email, interests, address, dates */

const students = [
  { _id: ObjectId("665000000000000000000001"), firstName: "Ivan",  lastName: "Petrov",  email: "ivan.p@example.com",  birthDate: ISODate("1995-05-12"), registeredAt: ISODate("2025-01-15"), interests:["JavaScript","Node","Football"], address:{city:"Sofia", country:"BG"}},
  { _id: ObjectId("665000000000000000000002"), firstName: "Maria", lastName: "Georgieva", email: "maria.g@example.com", birthDate: ISODate("1998-03-30"), registeredAt: ISODate("2025-02-11"), interests:["Python","Data Science"], address:{city:"Plovdiv", country:"BG"}},
  { _id: ObjectId("665000000000000000000003"), firstName: "John",  lastName: "Doe",     email: "john.d@example.com",  birthDate: ISODate("1992-07-22"), registeredAt: ISODate("2025-02-28"), interests:["DevOps","Cycling"], address:{city:"Varna", country:"BG"}},
  { _id: ObjectId("665000000000000000000004"), firstName: "Elena", lastName: "Stoyanova",email: "elena.s@example.com", birthDate: ISODate("1990-11-09"), registeredAt: ISODate("2025-03-03"), interests:["UI/UX","Design"], address:{city:"Burgas", country:"BG"}},
  { _id: ObjectId("665000000000000000000005"), firstName: "Peter", lastName: "Ivanov",  email: "peter.i@example.com", birthDate: ISODate("2000-01-18"), registeredAt: ISODate("2025-03-12"), interests:["C#","Gaming"], address:{city:"Ruse", country:"BG"}},
  { _id: ObjectId("665000000000000000000006"), firstName: "Sara",  lastName: "O'Neil",  email: "sara.o@example.com",  birthDate: ISODate("1994-09-14"), registeredAt: ISODate("2025-03-20"), interests:["Java","Travel"], address:{city:"Sofia", country:"BG"}},
  { _id: ObjectId("665000000000000000000007"), firstName: "Nikolai",lastName: "Kuznetsov",email:"nik.k@example.com", birthDate: ISODate("1991-04-02"), registeredAt: ISODate("2025-03-27"), interests:["Go","Chess"], address:{city:"Pleven", country:"BG"}},
  { _id: ObjectId("665000000000000000000008"), firstName: "Yana",  lastName: "Popova", email: "yana.p@example.com",  birthDate: ISODate("1997-12-25"), registeredAt: ISODate("2025-04-01"), interests:["React","Photography"], address:{city:"Stara Zagora", country:"BG"}},
  { _id: ObjectId("665000000000000000000009"), firstName: "Georgi",lastName: "Angelov",email: "georgi.a@example.com",birthDate: ISODate("1993-08-08"), registeredAt: ISODate("2025-04-08"), interests:["Rust","Running"], address:{city:"Sofia", country:"BG"}},
  { _id: ObjectId("665000000000000000000010"),firstName:"Lily",   lastName:"Boyanova",email:"lily.b@example.com",   birthDate: ISODate("1999-06-17"), registeredAt: ISODate("2025-04-16"), interests:["Docker","Cooking"], address:{city:"Varna", country:"BG"}}
];

db.students.insertMany(students);

/////////////////////////// 2. INSTRUCTORS //////////////////////////
const instructors = [
  { _id:ObjectId("665000000000000000000101"), firstName:"Dimitar", lastName:"Petrov",  email:"d.petrov@teach.com",  bio:"10y Java dev",   expertise:["Java","Spring"], hiredAt:ISODate("2024-10-01") },
  { _id:ObjectId("665000000000000000000102"), firstName:"Olga",    lastName:"Ivanova", email:"o.ivanova@teach.com", bio:"Full‑stack JS",  expertise:["Node","React"], hiredAt:ISODate("2024-11-15") },
  { _id:ObjectId("665000000000000000000103"), firstName:"Kiril",   lastName:"Stoichkov",email:"k.stoichkov@teach.com",bio:"DBA",           expertise:["SQL","MongoDB"], hiredAt:ISODate("2025-01-05") },
  { _id:ObjectId("665000000000000000000104"), firstName:"Ana",     lastName:"Dimitrova",email:"a.dimitrova@teach.com",bio:"UX guru",        expertise:["UI/UX","Figma"], hiredAt:ISODate("2024-09-20") },
  { _id:ObjectId("665000000000000000000105"), firstName:"George",  lastName:"Smith",   email:"g.smith@teach.com",   bio:"Cloud Architect", expertise:["AWS","DevOps"], hiredAt:ISODate("2025-02-10") },
  { _id:ObjectId("665000000000000000000106"), firstName:"Svetla",  lastName:"Koleva",  email:"s.koleva@teach.com",  bio:"Data scientist",  expertise:["Python","ML"], hiredAt:ISODate("2024-12-01") },
  { _id:ObjectId("665000000000000000000107"), firstName:"Victor",  lastName:"Radev",   email:"v.radev@teach.com",   bio:"Security eng",    expertise:["Cybersec","Go"], hiredAt:ISODate("2025-03-01") },
  { _id:ObjectId("665000000000000000000108"), firstName:"Emily",   lastName:"Clark",   email:"e.clark@teach.com",   bio:"Mobile dev",      expertise:["Flutter","Dart"], hiredAt:ISODate("2024-10-30") },
  { _id:ObjectId("665000000000000000000109"), firstName:"Hasan",   lastName:"Yilmaz",  email:"h.yilmaz@teach.com",  bio:"Game dev",        expertise:["Unity","C#"], hiredAt:ISODate("2025-02-20") },
  { _id:ObjectId("665000000000000000000110"), firstName:"Laura",   lastName:"Garcia",  email:"l.garcia@teach.com",  bio:"Product mgr",     expertise:["Agile","PM"],  hiredAt:ISODate("2025-01-25") }
];

db.instructors.insertMany(instructors);

//////////////////////////// 3. COURSES /////////////////////////////
/* Use instructorId references */
const courses = [
  { _id:ObjectId("665000000000000000001001"), title:"Java Fundamentals",    description:"OOP & basics",       category:"Programming", durationHours:20, level:"Beginner", instructorId:ObjectId("665000000000000000000101"), tags:["Java","OOP"], price:49.99, createdAt:ISODate("2025-03-10") },
  { _id:ObjectId("665000000000000000001002"), title:"Spring Boot API",      description:"REST with Spring",   category:"Backend",     durationHours:25, level:"Intermediate", instructorId:ObjectId("665000000000000000000101"), tags:["Spring","REST"], price:59.99, createdAt:ISODate("2025-03-15") },
  { _id:ObjectId("665000000000000000001003"), title:"React 18 From Zero",  description:"SPA development",     category:"Frontend",    durationHours:18, level:"Beginner", instructorId:ObjectId("665000000000000000000102"), tags:["React","JSX"], price:45.00, createdAt:ISODate("2025-03-20") },
  { _id:ObjectId("665000000000000000001004"), title:"Node.js & Express",   description:"Server‑side JS",      category:"Backend",     durationHours:22, level:"Intermediate", instructorId:ObjectId("665000000000000000000102"), tags:["Node","API"], price:54.99, createdAt:ISODate("2025-03-25") },
  { _id:ObjectId("665000000000000000001005"), title:"MongoDB Deep Dive",   description:"NoSQL design",       category:"Database",    durationHours:15, level:"Intermediate", instructorId:ObjectId("665000000000000000000103"), tags:["MongoDB","Aggregation"], price:39.99, createdAt:ISODate("2025-04-01") },
  { _id:ObjectId("665000000000000000001006"), title:"Figma for Beginners",description:"UI prototypes",        category:"Design",      durationHours:10, level:"Beginner", instructorId:ObjectId("665000000000000000000104"), tags:["Figma","Design"], price:29.99, createdAt:ISODate("2025-04-05") },
  { _id:ObjectId("665000000000000000001007"), title:"AWS Certified Cloud", description:"Architect path",      category:"Cloud",       durationHours:30, level:"Advanced", instructorId:ObjectId("665000000000000000000105"), tags:["AWS","DevOps"], price:79.99, createdAt:ISODate("2025-04-08") },
  { _id:ObjectId("665000000000000000001008"), title:"Intro to Machine Learning",description:"Supervised models",category:"Data Science",durationHours:24, level:"Intermediate", instructorId:ObjectId("665000000000000000000106"), tags:["ML","Python"], price:64.99, createdAt:ISODate("2025-04-12") },
  { _id:ObjectId("665000000000000000001009"), title:"Cybersecurity 101",  description:"Threat modelling",    category:"Security",    durationHours:16, level:"Beginner", instructorId:ObjectId("665000000000000000000107"), tags:["Security","Network"], price:44.99, createdAt:ISODate("2025-04-15") },
  { _id:ObjectId("665000000000000000001010"), title:"Flutter Mobile Apps",description:"Cross‑platform",       category:"Mobile",      durationHours:26, level:"Intermediate", instructorId:ObjectId("665000000000000000000108"), tags:["Flutter","Dart"], price:59.99, createdAt:ISODate("2025-04-18") }
];

db.courses.insertMany(courses);

/////////////////////////// 4. ENROLLMENTS //////////////////////////
/* Pair up first 10 students with first 10 courses */
const enrollments = [];
for (let i = 0; i < 10; i++) {
  enrollments.push({
    _id: ObjectId("6651000000000000000000" + (i+1).toString().padStart(2,"0")),
    studentId: students[i]._id,
    courseId: courses[i]._id,
    enrolledAt: ISODate(`2025-04-${(i+1).toString().padStart(2,"0")}`),
    progress: Math.floor(Math.random()*60),
    status: i % 2 === 0 ? "active" : "completed"
  });
}
db.enrollments.insertMany(enrollments);

///////////////////////////// 5. REVIEWS ////////////////////////////
/* Reviews only for completed enrollments */
const reviews = enrollments.filter(e => e.status === "completed").map((e,idx) => ({
  _id: ObjectId("6652000000000000000000" + (idx+1).toString().padStart(2,"0")),
  courseId: e.courseId,
  studentId: e.studentId,
  rating: 3 + (idx % 3),
  comment: `Great course #${idx+1}!`,
  createdAt: new Date()
}));

db.reviews.insertMany(reviews);