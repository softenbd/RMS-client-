// @/schema/example.ts
import { z } from "zod";

export const testSchema = z.object({
  input: z.string().nonempty("Select a value"), 
  select: z.string().nonempty("Select a value"),
  date: z.string().nonempty("Select a value"), 
  time: z.string().nonempty("Select a value"), 
  "text-area": z.string().nonempty("Select a value"), 
});
