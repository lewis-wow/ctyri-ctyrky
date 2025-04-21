import { v4 as uuidv4 } from "uuid";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { createRoomSchema, getRoomSchema, roomSchema } from "@/validation";
import { TRPCError } from "@trpc/server";

export const roomRouter = createTRPCRouter({
  create: publicProcedure
    .input(createRoomSchema)
    .output(roomSchema)
    .mutation(async ({ input, ctx }) => {
      const roomId = uuidv4();

      const room = ctx.collections.rooms.insertOne({
        id: roomId,
        settings: {
          diceCount: input.diceCount,
        },
      });

      if (!room) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create room",
        });
      }

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
