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
                                src="https://youtube.com/embed/tqEwzgnh44c"
                                title="Valentine's Day Video"
                                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                        >
                        </iframe>
                    </CardContent>
                </Card>
                <Card className="bg-white backdrop-blur title">
                    <CardHeader className="text-4xl">Dear Sieun,</CardHeader>
                    <CardContent className="text-2xl">
                        <p>Happy Valentines Day! Two weeks ago I told you that I got you a present for Valentines Day. I bet you didn't expect that I MADE you a present! Since I've been learning a lot of web development in the past two months, I thought it would be a great idea to make you happy through a website. So...did I succeed?</p>
                        <p>Anyways, while you've been very busy these past weeks, I've found a lot of free time to work on this new project. I just wanted to say that I am super grateful for your time, love, and effort. I know I can be a lot sometimes and I'm just so happy that you stuck with me for all these days, weeks, and months that I've been annoying. Thank you for giving me the best 1 and a half years of my life. These are times that I cherish most and I'll think about for rest of my life. I really love you so much and I'm so glad that you're all mine!</p>
                        <p>In addition to this super duper awesome website I created, I also learned a little bit of video editing. I got inspired by a reel I saw that I'm pretty sure I sent to you (I think you might recognize the song idk). Don't have too high of expectations...I only had like a couple of days to learn this. I tried my best!!! Anyways, I really want you to know that no matter the wait, the distance, the arguments, the lows, the bads, we always make it.</p>
                    </CardContent>
                    <CardFooter className="text-4xl">
                        <p>Love, Jacob ❤️</p>
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