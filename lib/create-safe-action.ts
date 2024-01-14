import { z } from "zod";

/*
You would use this type when you need to represent and manage validation errors for each field in an object of a given type, such as in form validation in a TypeScript project.

interface User {
  username: string;
  email: string;
  password: string;
}

const errors: FieldErrors<User> = {
  username: ['Username is required', 'Username must be unique'],
  email: ['Invalid email format'],
  // password is omitted, meaning no errors for the password field
};

*/
export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

/*
ActionState is a type that allows you to represent the possible outcomes of an action, including successful data, error messages, and field-specific validation errors. It's a way of structuring the result of actions in a consistent manner.

*/
export type ActionState<TInput, TOutput> = {
  fieldErrors?: FieldErrors<TInput>;
  error?: string | null;
  data?: TOutput;
};

/*
   The createSafeAction function is a Higher Order Function (HOF) that takes a Zod schema (z.Schema<TInput>) for validation and a handler function for processing the validated data. It returns a new function that performs validation using the Zod schema and then delegates to the provided handler function. The returned function produces an ActionState<TInput, TOutput>.
*/

export const createSafeAction = <TInput, TOutput>(
  schema: z.Schema<TInput>,
  handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
  return async (data: TInput): Promise<ActionState<TInput, TOutput>> => {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      return {
        fieldErrors: validationResult.error.flatten()
          .fieldErrors as FieldErrors<TInput>,
      };
    }

    return handler(validationResult.data);
  };
};
