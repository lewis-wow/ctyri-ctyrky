"use client";

import { api } from "@/trpc/react";
import { useParams } from "next/navigation";

const Room = () => {
  const params = useParams();

  const roomId = params.roomId as string;

  const getRoomMutation = api.room.get.useQuery({
    id: roomId,
  });

  console.log("room", getRoomMutation);

  return <div>{roomId}</div>;
};

export default Room;
