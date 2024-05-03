import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { CircleArrowRight, Github } from "lucide-react";
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
              <div className="flex" key={index}>
                <div className="w-full mr-5">
                  <Link
                    href={data.link}
                    target="_blank"
                    className="link"
                    key={index}
                  >
                    <Alert className="list-content relative">
                      <CircleArrowRight
                        size={16}
                        strokeWidth={2.5}
                        className="mr-4 circle-arrow"
                      />
                      <AlertTitle className="">
                        <span>{data.title}</span>
                      </AlertTitle>
                      <AlertDescription>{data.desc}</AlertDescription>
                    </Alert>
                  </Link>
                </div>
                <div className="w-auto flex items-center justify-end relative">
                  <a href={data.git} className="relative block">
                    <Github
                      size={16}
                      strokeWidth={2.5}
                      className="transform -translate-y-1/2"
                    />
                    <div className="transform -translate-y-1/2 absolute top-0 -right-2 w-8 h-8 rounded-full bg-black transition-all duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
                      <Github
                        size={16}
                        strokeWidth={2.5}
                        className="text-green-500"
                      />
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
