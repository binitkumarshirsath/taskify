import { Separator } from "@/components/ui/separator";
import InfoComponent from "./_components/info";
import { Suspense } from "react";
import { BoardList } from "./_components/board-list";

const OrganizationPage = () => {
  return (
    <div className="w-full">
      <InfoComponent />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationPage;
