use onlineCourseDB;

//////////////////////////// 1. STUDENTS /////////////////////////////
// READ – get all students
// ---------------------------------------------------------------
db.students.find();

// READ – filter by single field (city Sofia)
db.students.find({"address.city":"Sofia"});

// READ – filter by multiple fields (interest React AND city Varna)
db.students.find({interests:"React", "address.city":"Varna"});

// UPDATE – add new interest to a specific student
// (example: Ivan Petrov)
db.students.updateOne({email:"ivan.p@example.com"}, { $addToSet:{interests:"Docker"} });

// DELETE – remove a student who never logged in (none in sample, use birthDate before 1990 for demo)
db.students.deleteOne({birthDate:{$lt:ISODate("1990-01-01")}});

// AGGREGATE – number of students per city
// ---------------------------------------------------------------
db.students.aggregate([
  { $group:{ _id:"$address.city", total:{$sum:1} } },
  { $sort:{ total:-1 } }
]);

/////////////////////////// 2. INSTRUCTORS ///////////////////////////
// READ – all
 db.instructors.find();
// filter by expertise MongoDB
 db.instructors.find({expertise:"MongoDB"});
// filter multi field – expertise AWS and hired 2025
 db.instructors.find({expertise:"AWS", hiredAt:{$gte:ISODate("2025-01-01")}});
// UPDATE – append new expertise
 db.instructors.updateOne({_id:ObjectId("665000000000000000000105")}, {$addToSet:{expertise:"Terraform"}});
// DELETE – demo delete instructor hired before 2024‑10‑01
 db.instructors.deleteOne({hiredAt:{$lt:ISODate("2024-10-01")}});
// AGGREGATE – instructors per primary expertise (first element)
 db.instructors.aggregate([
   { $project:{primary:{$arrayElemAt:["$expertise",0]}} },
   { $group:{_id:"$primary", total:{$sum:1}}},
   { $sort:{total:-1}}
 ]);

//////////////////////////// 3. COURSES //////////////////////////////
// READ – all courses
 db.courses.find();
// filter – category Backend
 db.courses.find({category:"Backend"});
// filter – instructor + level
 db.courses.find({instructorId:ObjectId("665000000000000000000102"), level:"Beginner"});
// UPDATE – raise price 10% for Design category
 db.courses.updateMany({category:"Design"}, [{$set:{price:{$multiply:["$price",1.1]}}}]);
// DELETE – delete courses cheaper than 30 BGN
 db.courses.deleteMany({price:{$lt:30}});
// AGGREGATE – avg price per category
 db.courses.aggregate([
   { $group:{_id:"$category", avgPrice:{$avg:"$price"}, count:{$sum:1} } },
   { $sort:{avgPrice:-1} }
 ]);

////////////////////////// 4. ENROLLMENTS ////////////////////////////
// READ – list
 db.enrollments.find();
// filter – active status
 db.enrollments.find({status:"active"});
// filter – student + progress > 50
 db.enrollments.find({studentId:ObjectId("665000000000000000000002"), progress:{$gt:50}});
// UPDATE – mark progress 100 for one enrollment
 db.enrollments.updateOne({_id:ObjectId("665100000000000000000002")}, {$set:{progress:100, status:"completed"}});
// DELETE – remove cancelled (none sample) – simulation
 db.enrollments.deleteMany({status:"cancelled"});
// AGGREGATE – completion ratio per course
 db.enrollments.aggregate([
   { $group:{_id:"$courseId", completed:{$sum:{$cond:[{$eq:["$status","completed"]},1,0]}}, total:{$sum:1}} },
   { $addFields:{ratio:{$divide:["$completed","$total"]}} },
   { $sort:{ratio:-1} }
 ]);

///////////////////////////// 5. REVIEWS /////////////////////////////
// READ
 db.reviews.find();
// filter – rating >=4
 db.reviews.find({rating:{$gte:4}});
// filter – by course & rating 5
 db.reviews.find({courseId:ObjectId("665000000000000000001003"), rating:5});
// UPDATE – improve comment wording
 db.reviews.updateOne({_id:ObjectId("66520000000000000000001")}, {$set:{comment:"Excellent course!"}});
// DELETE – delete obvious spam (rating 1)
 db.reviews.deleteMany({rating:1});
// AGGREGATE – average rating per course (join course title)
 db.reviews.aggregate([
   { $group:{_id:"$courseId", avgRating:{$avg:"$rating"}, count:{$sum:1}} },
   { $lookup:{from:"courses", localField:"_id", foreignField:"_id", as:"course"}},
   { $unwind:"$course"},
   { $project:{_id:0, courseTitle:"$course.title", avgRating:{$round:["$avgRating",2]}, reviews:"$count"}},
   { $sort:{avgRating:-1}}
 ]);