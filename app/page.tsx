import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { CircleArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import dataList from "./data/dataList";


export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="container max-w-[800px]">
        <div className="py-5">
          <h1 className="font-bold">LIST LATIAN BESTA :D</h1>
          <Separator className="my-2" />
          <div className="mt-5">
            {dataList.map((data, index) => (
              <Link
                href={data.link}
                target="_blank"
                className="link"
                key={index}
              >
                <Alert className="list-content">
                  <CircleArrowRight
                    size={16}
                    strokeWidth={2.5}
                    className="mr-4 circle-arrow"
                  />
                  <AlertTitle>{data.title}</AlertTitle>
                  <AlertDescription>{data.desc}</AlertDescription>
                </Alert>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
