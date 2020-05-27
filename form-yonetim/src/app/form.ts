export class Form {
    id: number;
    formName: string;
    description: string;
    createdAt: string;
    firstName: string;
    lastName: string;
    age: number;
  
    constructor(id: number, formName: string,description: string,createdAt: string,firstName: string,lastName: string,age: number) {
      this.id = id;
      this.formName = formName;
      this.description = description;
      this.createdAt = createdAt;
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  }