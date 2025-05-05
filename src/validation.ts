import { z } from "zod";

export const playerRoleSchema = z.enum(["PLAYER", "HOST", "SPECTATOR"]);

export const playerSchema = z.object({
  id: z.string(),
  name: z.string(),
  color: z.string(),
  role: playerRoleSchema,
});

export const createRoomSchema = z.object({
  diceCount: z
    .number()
    .min(1, { message: "Dice count must be at least 1" })
    .max(20, { message: "Dice count cannot exceed 20" }),
});

export const getRoomSchema = z.object({
  id: z.string(),
});

export const roomSchema = z.object({
  id: z.string(),
  settings: z.object({
    diceCount: z.number(),
  }),
  players: z.array(playerSchema),
});

export const joinRoomSchema = z.object({
  roomId: z.string(),
});
