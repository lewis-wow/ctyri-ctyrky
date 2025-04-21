import type { roomSchema } from "@/validation";
import Loki from "lokijs";
import type { z } from "zod";

export const db = new Loki("loki.db");

export const roomsCollection = db.addCollection<z.infer<typeof roomSchema>>(
  "rooms",
  {
    indices: ["id"],
  },
);
