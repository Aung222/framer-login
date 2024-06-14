import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Google } from "./components/icons/google";
import { FramerIcon } from "./components/icons/framer";

export default function Home() {
  return (
    <div className="">
      <Card>
        <FramerIcon />
        <h1 className="text-white text-3xl font-bold py-2">Welcome to Framer</h1>
        <Button color="primary" className="flex gap-1 items-center justify-center"><Google /> Get Started</Button>
        <Button color="secondary">Learn More</Button>
      </Card>
    </div>
  );
}
