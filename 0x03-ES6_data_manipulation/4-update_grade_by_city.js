function updateStudentGradeByCity(arr, city, newGrades) {
  const result = arr.filter((item) => item.location === city).map((item) => {
    const temp = item;
    for (const i of newGrades) {
      if (i.studentId === item.id) {
        temp.grade = i.grade;
      }
    }
    if (!temp.grade) temp.grade = 'N/A';
    return temp;
  });
  return result;
}
export default updateStudentGradeByCity;
