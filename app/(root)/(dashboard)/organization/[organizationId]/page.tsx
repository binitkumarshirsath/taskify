"use client";
import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board";

const OrganizationPage = () => {
  const { execute, error, fieldErrors, isLoading } = useAction(createBoard, {
    onSuccess: (data) => console.log(data),
  });

  const onSubmit = (formdata: FormData) => {
    const title = formdata.get("title") as string;
    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <input name="title" />
      <button type="submit">Submit</button>
      <div>{fieldErrors && <p>{fieldErrors.title}</p>}</div>
    </form>
  );
};

export default OrganizationPage;
