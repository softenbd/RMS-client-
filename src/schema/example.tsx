// @/schema/example.ts
import { z } from "zod";

export const testSchema = z.object({
  select: z.string().nonempty("Select a value"), // Ensures a value is selected
});
