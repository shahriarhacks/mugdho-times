import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2 className="text-red-500 text-4xl">Hello world!</h2>
      <Button> Click me! </Button>
    </main>
  );
}
