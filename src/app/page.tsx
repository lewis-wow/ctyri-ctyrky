"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/_components/ui/card";
import { Button } from "@/app/_components/Button";
import { Form } from "@/app/_components/ui/form";
import { createRoomSchema } from "@/validation";
import { TextField } from "./_components/TextField";

const Index = () => {
  const form = useForm<z.infer<typeof createRoomSchema>>({
    resolver: zodResolver(createRoomSchema),
    defaultValues: {
      diceCount: 5,
    },
  });

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle>Create Game Room</CardTitle>
        <CardDescription>
          Set up a new game room by specifying the number of dice to use.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => {
              console.log(values);
            })}
            className="space-y-6"
          >
            <TextField form={form} name="diceCount" />
            <Button type="submit" className="w-full" isLoading={false}>
              Create Game Room
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default Index;
