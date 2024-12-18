import Container from "@/components/Container";
import { SignInForm } from "@/components/SignInForm";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/manageSession";
import SocialSingup from "@/components/SocialSingup";
import { Separator } from "@/components/ui/separator"

const SignInPage = async () => {
  const session = await getSession();

  if (session?.user) {
    redirect("/");
  }

  return (
    <Container className="flex flex-col items-center justify-center">
      <div className="bg-bgLight p-10 rounded-lg shadow-sm shadow-darkOr/50 space-y-4">
        <SocialSingup />
        <Separator  />
        <SignInForm />
      </div>
    </Container>
  
  );
};

export default SignInPage;
