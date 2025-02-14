"use client";
import { useState } from "react";
import { Heart } from "lucide-react";
import { Gamepad } from "lucide-react";
import { Soup } from "lucide-react";
import { Gift } from "lucide-react";
import { Clapperboard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function main() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-200 flex flex-col items-center justify-center p-4 pb-20">
        <div className="title">
          <div className="flex justify-center">
            <Heart
              className="w-24 h-24 text-red-500 animate-bounce"
              fill="currentColor"
            />
          </div>
          <p className="text-6xl pt-10 text-center text-red-600">
            Yay! Happy Valentines Day!
          </p>
          <p className="text-3xl pt-10 text-center text-gray-600 pb-10">
            Choose a date for us tonight!
          </p>
          <div className="grid grid-cols-4 gap-4">
            <Card className="bg-white backdrop-blur hover:ring-4 ring-red-500 hover:bg-white/80">
              <Link href="https://www.roblox.com/home">
                <CardHeader>
                  <div className="flex justify-center">
                    <Gamepad className="w-16 h-16 text-red-500 hover:text-red-600" />
                  </div>
                </CardHeader>
                <CardContent className="text-center text-2xl text-gray-700">
                  <p>Let's play some games together!</p>
                </CardContent>
              </Link>
            </Card>
            <Card className="bg-white backdrop-blur hover:ring-4 ring-red-500 hover:bg-white/80">
              <Link href="https://rivestream.live/">
                <CardHeader>
                  <div className="flex justify-center">
                    <Clapperboard className="w-16 h-16 text-red-500 hover:text-red-600" />
                  </div>
                </CardHeader>
                <CardContent className="text-center text-2xl text-gray-700">
                  <p>Let's watch something together!</p>
                </CardContent>
              </Link>
            </Card>
            <Card className="bg-white backdrop-blur hover:ring-4 ring-red-500 hover:bg-white/80">
              <Link href="/ramyeon">
                <CardHeader>
                  <div className="flex justify-center">
                    <Soup className="w-16 h-16 text-red-500 hover:text-red-600" />
                  </div>
                </CardHeader>
                <CardContent className="text-center text-2xl text-gray-700">
                  <p>Let's eat some ramyeon together!</p>
                </CardContent>
              </Link>
            </Card>
            <Card
              asChild
              className="bg-white backdrop-blur hover:ring-4 ring-red-500 hover:bg-white/80"
            >
              <Link href="/gift">
                <CardHeader>
                  <div className="flex justify-center">
                    <Gift className="w-16 h-16 text-red-500 hover:text-red-600 " />
                  </div>
                </CardHeader>
                <CardContent className="text-center text-2xl text-gray-700">
                  <p>I made you something special!</p>
                </CardContent>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
