import { z } from "zod";
import { Board } from "@prisma/client";
import { ActionState } from "@/lib/create-safe-action";
import { CreateBoardSchema } from "./schema";

// This simply means are extractng the type from createBoardSchema and passing it to actionstate
// as we cant pass the value in generics , we need type
// in this case , **while coding**, its of type

//  type InputType = {
//        title: string;
//  }

/*

alternative can be written as this, just to make code more organized its done via infer keyword
export type ReturnType = ActionState<
  {
    title: string;
  },
  Board
>;

*/

export type InputType = z.infer<typeof CreateBoardSchema>;
export type ReturnType = ActionState<InputType, Board>;
