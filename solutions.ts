const multiplyValue = (value: number, multiplier?: number) : number => {
  if (multiplier !== undefined) {
    return value * multiplier;
  }
  return value * 2;
}



const processInput = (value: string | number | boolean) : number | string => {
  if (typeof value === 'string') {
    return value.trim().toLowerCase();
  }
  else if (typeof value === 'number') {
    return value * 10;
  }
  return value ? 'Active' : 'Inactive';
}



const formatCoordinate = (coordinates : readonly [number, number, string]) : string => {
  const [latitude, longitude, locationName] = coordinates;
  return `Location: ${locationName} (${latitude}, ${longitude}])`
}



const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
}



interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number) => {
  return courses.filter(({ students, isPublished }) => isPublished && students >= minStudents);
}



const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
  return items.map(item => item[key]);
}



class Employee {
  protected name: string;
  private baseSalary: number;
  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails() {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
  }
}

class Manager extends Employee {
  private department: string;
  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo() {
    return `Manager of ${this.department}: ${this.name}`
  }
}



const validateAgeAsync = async (age : number) : Promise<string> => {
  return new Promise((resolve, reject) => {
    if (age < 18) {
      reject(new Error("Access Denied: Must be 18 or older"))
    }
    else {
      setTimeout(() => resolve("Access Granted"), 1000);
    }
  })
}
