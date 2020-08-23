export class Product {
  //Here is where you list all the properties that match the Java Class [Product] in the backend in Spring Boot

  sku: String;
  name: String;
  description: String;
  unitPrice: Number;
  imageUrl: String;
  active: boolean;
  unitInStock: Number;
  dateCreated: Date;
  dateUpdated: Date;
}
