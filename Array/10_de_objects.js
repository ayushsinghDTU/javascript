const course = {
    coursename : "JS in hindi ",
    price : "999",
    courseInstructor : "Ayush"
}
//course.courseInstructor  ->> instead of this we can use another syntex 

const {courseInstructor } = course 

console.log(courseInstructor);  //  same work as course.courseInstructor
// if we want to short the name 
const {courseInstructor : instructor } = course 
//console.log(instructor); // same work 
// { } => For de_structering 

