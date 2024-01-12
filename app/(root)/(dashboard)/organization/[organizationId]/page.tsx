import { db } from "@/lib/db";

const organizationPage = () => {
  async function createBoard(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    await db.board.create({
      data: {
        title,
      },
    });
  }
  return (
    <form action={createBoard}>
      <input name="title" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default organizationPage;
