export class LocationListItem {
  constructor(
    public id: number,
    public name: string,
    public country: string,
    public postalCode: string,
    public departmentCount: number
  ) { }
}
