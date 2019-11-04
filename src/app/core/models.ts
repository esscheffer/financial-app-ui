export class Category {
  id: number;
  name: string;
}

export class State {
  id: number;
  stateName: string;
}

export class City {
  id: number;
  cityName: string;
  state = new State();
}

export class Person {
  id: number;
  name: string;
  address = new Address();
  active: boolean = true;
  contacts: Contact[] = [];
}

export class Contact {
  id: number;
  email: string;
  name: string;
  phoneNumber: string;
}

export class Address {
  streetAddress: string;
  number: string;
  complement: string;
  neighborhood: string;
  zipCode: string;
  city = new City();
}

export class FinancialEntry {
  id: number;
  entryDescription: string;
  dueDate: Date;
  paymentDate: Date;
  entryValue: number;
  observation: string;
  type: string = "INCOME";
  category: Category = new Category();
  person: Person = new Person();
}

export class PersonList {
  content: Person[];
  totalElements: number;
}

export class FinancialEntrySummary {
  id: number;
  entryDescription: string;
  dueDate: number[];
  paymentDate: number[];
  entryValue: number;
  type: string;
  category: string;
  person: string;
}

export class FinancialEntrySummaryList {
  content: FinancialEntrySummary[];
  totalElements: number;
}
