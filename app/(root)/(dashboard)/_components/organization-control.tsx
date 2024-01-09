"use client";
import { useEffect } from "react";
import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";

export const OrganizationControlComponent = () => {
  const { setActive } = useOrganizationList();
  const params = useParams();
  useEffect(() => {
    if (!setActive) return;
    setActive({
      organization: params.organizationId as string,
    });
    // when written params, it goes into infinite switch loop
  }, [setActive, params.organizationId]);

  return null;
};
