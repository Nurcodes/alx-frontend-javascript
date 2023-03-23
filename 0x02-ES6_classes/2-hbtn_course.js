class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    if (!Array.isArray(students)) {
      throw TypeError('Students must be an array');
    }
    this._length = length;
    this._name = name;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(n) {
    if (typeof n !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = n;
  }

  get length() {
    return this._length;
  }

  set length(len) {
    if (typeof len !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = len;
  }

  get students() {
    return this._students;
  }

  set students(stu) {
    if (!Array.isArray(stu)) {
      throw TypeError('Students must be an array');
    }
    this._students = stu;
  }
}

export default HolbertonCourse;
