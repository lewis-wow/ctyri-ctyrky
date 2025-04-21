import { z } from "zod";

export const createRoomSchema = z.object({
  diceCount: z
    .number()
    .min(1, { message: "Dice count must be at least 1" })
    .max(20, { message: "Dice count cannot exceed 20" }),
});
