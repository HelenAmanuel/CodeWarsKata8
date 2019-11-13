function howMany(students,finished,unfinish){
let totalDone= students - unfinish
let hwOne=totalDone - finished[0]
let hwTwo=finished[1] - hwOne
if (hwTwo>=0){
return hwTwo}
else{return -1}
}
