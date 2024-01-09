import { OrganizationList } from "@clerk/nextjs";

const selectOrganizationPage = () => {
  return (
    <OrganizationList
      hidePersonal
      afterCreateOrganizationUrl={`/organization/:id`}
      afterSelectOrganizationUrl={`/organization/:id`}
    />
  );
};
export default selectOrganizationPage;
