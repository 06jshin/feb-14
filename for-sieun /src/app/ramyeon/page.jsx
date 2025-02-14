import { Heart } from "lucide-react";

export default function ramen(){
    return(
        <>
        <div className="title min-h-screen bg-gradient-to-br from-pink-100 to-red-200 flex flex-col items-center justify-center p-4">
        <div className="flex justify-center">
            <Heart
              className="w-24 h-24 text-red-500 animate-bounce"
              fill="currentColor"
            />
          </div>
            <p className="text-6xl pt-10 text-center text-gray-600">Did you really think ramyeon was gonna come out of your screen?</p>
            <p className="text-6xl pt-10 text-center text-gray-600">Go make some with me rn!!</p>
            <a href="/main">
                <button className="pt-20 text-4xl text-red-500 hover:text-red-600">Back</button>
            </a>
        </div>
        </>
    );
}