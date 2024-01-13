import { z } from "zod";

export const CreateBoardSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title is invalid",
    })
    .min(2, {
      message: "Title is too short",
    }),
});
