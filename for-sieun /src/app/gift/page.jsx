import { Card, CardContent, CardHeader, CardFooter} from "@/components/ui/card";

export default function video(){
    return(
        <>
        <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-200  p-20 pt-30">
            <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white backdrop-blur">
                    <CardHeader className="title text-center text-4xl">
                        For my love ❤️
                    </CardHeader>
                    <CardContent className=" flex justify-center">
                        <iframe 
                                className="bg-black/5 rounded-2xl overflow-hidden shadow-xl"
                                width="315" height="560"
                                src=""
                                title="Valentine's Day Video"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                        >
                        </iframe>
                    </CardContent>
                </Card>
                <Card className="bg-white backdrop-blur title">
                    <CardHeader className="text-4xl">Dear (Valentine),</CardHeader>
                    <CardContent className="text-2xl">
                        <p>Insert Letter</p>
                        <p></p>
                    </CardContent>
                    <CardFooter className="text-4xl">
                        <p>Love, (You) ❤️</p>
                    </CardFooter>
                </Card>
            </div>
            <a href="/main">
                    <button className="title pt-4 text-4xl text-red-500 hover:text-red-600">Back</button>
            </a>
        </div>
        </>
    );  
}