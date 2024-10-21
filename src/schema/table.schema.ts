// @/schema/example.ts
import { z } from "zod";

export const CreateTableSchema = z.object({
  tableNumber: z.string().nonempty("Table Number is required"), 
  capacity: z.string().nonempty("Capacity is required"),
});
