"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { toast } from "@/hooks/use-toast"

// Define the form schema with validation
const formSchema = z.object({
  diceCount: z.number().min(1, "Dice count must be at least 1").max(20, "Dice count cannot exceed 20"),
})

type FormValues = z.infer<typeof formSchema>

export default function CreateGameRoom() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Initialize the form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      diceCount: 5,
    },
  })

  // Handle form submission
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    try {
      // Here you would typically make an API call to create the game room
      console.log("Creating game room with dice count:", data.diceCount)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Game Room Created!",
        description: `Your game room with ${data.diceCount} dice has been created.`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create game room. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Create Game Room</CardTitle>
        <CardDescription>Set up a new game room by specifying the number of dice to use.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="diceCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dice Count</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      onChange={(e) => field.onChange(Number.parseInt(e.target.value) || 0)}
                    />
                  </FormControl>
                  <FormDescription>Choose how many dice will be available in this game room.</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Creating..." : "Create Game Room"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}
