import { UserProfile } from "@clerk/nextjs";

export default function Profile() {
  return (
    <div className="bg-white border-none ">
      <UserProfile
        appearance={{
          elements: {
            card: "shadow-none rounded-[1px]",
            navbar: "hidden",
            headerTitle: "scroll-m-20 text-xl font-medium text-green-900",
            headerSubtitle: "my-2 text-muted-foreground",
            profilePage: "text-green-900",
            profileSection: "rounded-lg my-1",
            profileSectionTitle: "text-green-900 px-6 py-3",
            profileSectionContent: "p-3 pb-5",
            profileSectionTitleText: "text-green-900",
            formButtonPrimary: "bg-[#38B279] hover:bg-[#38B279]/80",
            footerActionLink:
              "text-[#38B279] hover:text-[#38B279] hover:underline",
          },
        }}
      />
    </div>
  );
}
