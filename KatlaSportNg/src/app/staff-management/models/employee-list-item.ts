export class EmployeeListItem {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public address: string,
    public reportsToId: number,
    public positionId: number,
    public departmentId: number,
    public documentCount: number,
    public subordinateCount: number,
  ) { }
}
