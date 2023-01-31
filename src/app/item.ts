import { Manufacturer } from "./manufacturer";

export class Item {
id: number = 0;
manufacturer: Manufacturer[];
name: string = "";
description: string = "";
category: string = "";
numberInInventory: number = 0;
numberMinimumToKeepOnHand: number = 0;

}
