export class Employee {
  id: number;
  firstName: string;
  lastName: string;
  position: string;
  directReports ?: Array<number>;
  compensation ?: number;
}

export class Reports{
  totalReports : number;
  directReports : Array<Employee>;
  id: number;

  constructor(id: number, totalReports: number, direcReports: Array<Employee>){
    this.id = id;
    this.totalReports = totalReports;
    this.directReports = direcReports;
  }
}
