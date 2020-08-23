export class Product {
  //Here is where you list all the properties that match the Java Class [Product] in the backend in Spring Boot
  name: String;
  sku: String;
  description: String;
  unitPrice: Number;
  imageUrl: String;
  active: boolean;
  unitInStock: Number;
  dateCreated: Date;
  dateUpdated: Date;
}
