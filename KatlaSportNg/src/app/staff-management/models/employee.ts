export class Employee {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public birthDate: Date,
    public hireDate: Date,
    public endDate: Date,
    public address: string,
    public salary: number,
    public reportsToId: number,
    public positionId: number,
    public departmentId: number
  ) { }
}
