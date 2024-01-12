import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
  return (
    <div className="w-11/12 flex justify-center items-center h-full ">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "100%",
            },
            card: {
              boxShadow: "none",
              border: "1px solid #e5e5e6",
              width: "100%",
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
