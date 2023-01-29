import { manufacturer } from "./manufacturer";

export class Item {
   id: number = 0;
   manufacturer: manufacturer;
   name: string = "";
   description: string = "";
   numberInInventory: number = 0;
   numberMinimumToKeepOnHand: number = 0;

}
