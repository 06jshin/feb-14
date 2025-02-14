"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const noClick = () => {
    const newX = Math.random() * 300 - 100;
    const newY = Math.random() * 300 - 100;
    setPosition({ x: newX, y: newY });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-200 flex flex-col items-center justify-center p-4">
      <Card className="bg-white backdrop-blur">
        <CardHeader>
          <div className="flex justify-center">
            <Heart className="w-16 h-16 text-red-500 animate-pulse"/>
          </div>
          <CardTitle className="title text-6xl pt-10 text-red-600">
            Will you be my Valentine?
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <Button
            asChild
            className="title bg-red-500 hover:bg-red-600 text-white text-xl animate-bounce"
          >
            <Link href="/main">Yes!</Link>
          </Button>
          <Button
            className="title bg-gray-500 hover:bg-gray-600 text-xl"
            onMouseEnter={noClick}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
              transition: "all 0.2s ease",
            }}
          >
            No!
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
