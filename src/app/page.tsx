import Featured from "@/components/Featured";
import ScrollingText from "@/components/ScrollingText";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto  ">
      <Featured></Featured>
      <h1>hello world</h1>
      <Button>hello </Button>
      {/* <ScrollingText></ScrollingText> */}

      <Card className="text-sm text-muted-foreground">
        <CardTitle className="text-2xl font-bold">History</CardTitle>
        <CardContent>
          <p>View past quiz attempts.</p>
        </CardContent>
      </Card>

      <Card className="text-sm text-muted-foreground">
        <CardTitle className="text-2xl font-bold">History</CardTitle>
        <CardContent>
          <p>View past quiz attempts.</p>
        </CardContent>
      </Card>
    </div>
  );
}
