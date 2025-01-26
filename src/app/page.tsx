import Homepage from "@/blocks/homepage";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Main() {
  const user = await currentUser();
  if (!user) {
    redirect("/auth/sign-up");
  }
  return (
    <>
      <main className="mx-0 sm:mx-8 lg:mx-12 p-4 md:p-8">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Nextjs Template{" "}
          </h1>
          <p className="text-sm text-gray-600 mb-6 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque velit quod blanditiis quisquam, impedit, consequatur libero earum voluptatem omnis nulla voluptas. Itaque quasi dolor autem fugiat iure sapiente reiciendis animi.
          </p>
        </div>
        <Homepage />
      </main>
    </>
  );
}
