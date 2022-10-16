function exam_status(totmarks, is_exam){
    if(is_exam){
return totmarks >= 90;
    }
return (totmarks >= 89 && totmarks <=100)
}
console.log(exam_status("90", ""));
console.log(exam_status("45", ""));
