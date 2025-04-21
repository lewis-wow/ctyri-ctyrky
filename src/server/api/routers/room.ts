import { v4 as uuidv4 } from "uuid";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import {
  createRoomSchema,
  getRoomSchema,
  playerSchema,
  roomSchema,
} from "@/validation";
import { TRPCError } from "@trpc/server";
import uniqolor from "uniqolor";
import jwt from "jsonwebtoken";
import type { z } from "zod";
import { cookies } from "next/headers";

export const roomRouter = createTRPCRouter({
  create: publicProcedure
    .input(createRoomSchema)
    .output(roomSchema)
    .mutation(async ({ input, ctx }) => {
      const roomId = uuidv4();

      const player: z.infer<typeof playerSchema> = {
        id: uuidv4(),
        name: "Unknown Player",
        color: uniqolor.random().color,
        role: "HOST",
      };

      const room = ctx.collections.rooms.insertOne({
        id: roomId,
        settings: {
          diceCount: input.diceCount,
        },
        players: [player],
      });

      if (!room) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create room",
        });
      }

      const token = jwt.sign(
        {
          playerId: player.id,
          playerRole: player.role,
          roomId: roomId,
        },
        "JWT_SECRET",
        { expiresIn: "7d" },
      );

      const cookieStore = await cookies();

      cookieStore.set("playerToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });

      return room;
    }),
  get: publicProcedure
    .input(getRoomSchema)
    .output(roomSchema)
    .query(async ({ input, ctx }) => {
      const room = ctx.collections.rooms.findOne({
        id: input.id,
      });

      if (!room) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create room",
        });
      }

      return room;
    }),
});
