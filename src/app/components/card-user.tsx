import { GithubIcon, Globe2, LinkedinIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function UserInformation(){
    return (
        <div className="grid grid-cols-3 rounded-lg divide-x-2 divide-slate-400/50 bg-slate-200/50 p-2">
            <div  className="rounded-l-lg grid grid-rows-3 gap-1 divide-solid divide-slate-400/50 divide-y-2 p-2">
                <div className="row-span-2 p-5">
                    <div className="rounded-2xl border-solid bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-slate-400 border-3 min-w-full min-h-full"></div>
                </div>
                <div className="p-2">
                    <div className="flex flex-row pt-7 gap-2">
                        <Button className="flex-1 grow" variant={"outline"}><GithubIcon ></GithubIcon></Button>
                        <Button className="flex-1 grow" variant={"outline"}><LinkedinIcon ></LinkedinIcon></Button>
                        <Button className="flex-1 grow " variant={"outline"}><Globe2></Globe2></Button>
                    </div>
                </div>
            </div>
            <div className="grid grid-rows-5 col-span-2 gap-2">
                <div className=" bg-slate-300/50 p-4 mx-3 rounded-lg">
                    Name: First Middle Last
                </div>
                <div className="bg-pink-400"> </div>
                <div className="bg-pink-500"></div>
                <div className="bg-pink-600"></div>
                <div className="bg-pink-700"></div>
            </div>
        </div>
    )
}