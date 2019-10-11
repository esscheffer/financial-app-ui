export class Category {
  id: number;
  name: string;
}

export class Person {
  id: number;
  name: string;
  address = new Address();
  active: boolean = true;
}

export class Address {
  streetAddress: string;
  number: string;
  complement: string;
  neighborhood: string;
  zipCode: string;
  city: string;
  state: string;
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
