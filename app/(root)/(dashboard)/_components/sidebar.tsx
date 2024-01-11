"use client";

import { Button } from "@/components/ui/button";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import { NavitemComponent } from "./nav-item";
import { useLocalStorage } from "usehooks-ts";
import { Skeleton } from "@/components/ui/skeleton";

interface SideBarComponent {
  storageKey?: string;
}

export const SideBarComponent = ({
  storageKey = "t-sidebar-state",
}: SideBarComponent) => {
  // store which are accordions are open
  const [expanded, setExpanded] = useLocalStorage<Record<string, boolean>>(
    storageKey,
    {}
  );

  /*
      { key1 : true,
        key2 : true,
        key3 : false,
        key4 : true
      }
      ==>
      ['key1','key2','key4']
  */

  // can be passed to accordion to keep it open even after refresh
  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  // Open or close the accordion
  const expandToggle = (id: string) => {
    return setExpanded((prevData) => ({
      ...prevData,
      [id]: !expanded[id],
    }));
  };

  const { organization: activeOrganization, isLoaded: isActiveOrgLoaded } =
    useOrganization();

  const {
    userMemberships: userJoinedOrganizations,
    isLoaded: userJoinedOrganizationsLoaded,
  } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  if (
    !isActiveOrgLoaded ||
    !userJoinedOrganizationsLoaded ||
    userJoinedOrganizations.isLoading
  ) {
    return (
      <div className="flex flex-col">
        {/* Workspaces and + btn */}
        <div className="flex items-center">
          <Skeleton className="pl-2 opacity-15">Workspaces</Skeleton>
          <Skeleton className="ml-auto h-10 w-10"></Skeleton>
        </div>
        {/* Accordion */}

        <div className="pt-10 md:pt-8">
          <NavitemComponent.Skeleton></NavitemComponent.Skeleton>
          <NavitemComponent.Skeleton></NavitemComponent.Skeleton>
          <NavitemComponent.Skeleton></NavitemComponent.Skeleton>
          <NavitemComponent.Skeleton></NavitemComponent.Skeleton>
          <NavitemComponent.Skeleton></NavitemComponent.Skeleton>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Workspaces and + btn */}
      <div className="flex items-center font-semibold">
        <div className="flex items-center w-full font-semibold">
          <div className="pl-2">Workspaces</div>
          <Button
            asChild
            type="button"
            size={"icon"}
            variant={"ghost"}
            className="ml-auto"
          >
            <Link href={"/select-org"} className="ml-auto">
              <Plus height={20} width={20} />
            </Link>
          </Button>
        </div>
      </div>
      {/* Accordion */}

      <div className="pt-10 md:pt-8">
        <Accordion type="multiple" defaultValue={defaultAccordionValue}>
          {userJoinedOrganizations?.data?.map(({ organization }) => (
            <NavitemComponent
              key={organization.id}
              isActive={activeOrganization?.id === organization.id}
              organization={organization}
              isExpanded={expanded[organization.id]}
              expandToggle={expandToggle}
            />
          ))}
        </Accordion>
      </div>
    </div>
  );
};
