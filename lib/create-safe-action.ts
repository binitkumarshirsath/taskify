import { z } from "zod";

export type FieldError<T> = {
  [K in keyof T]?: string[];
};

/*

*/
export type ActionState<TInput, TOutput> = {
  data?: TOutput | null;
  error?: string | null;
  fieldError?: FieldError<TInput>;
};

/*
    Returns a function that will validate the passed data.
    Its a HOC
*/

export const createSafeAction = <TInput, TOutput>(
  schema: z.Schema<TInput>,
  handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
  return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      return {
        fieldError: validationResult.error.flatten() as FieldError<TInput>,
      };
    }

    return handler(data);
  };
};
