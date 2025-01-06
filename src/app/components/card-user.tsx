import { useState } from "react";
import { GithubIcon, Globe2, LinkedinIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogOverlay } from "./ui/dialog"; 

export default function UserInformation() {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [studentDetails, setStudentDetails] = useState({
        name: "First Middle Last",
        email: "student@university.com",
        DOB: "01/01/2000",
        Standard: "12th",
        phone: "123-456-7890",
    });

    const [editDetails, setEditDetails] = useState({ ...studentDetails });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setEditDetails({ ...editDetails, [name]: value });
    };

    const saveDetails = () => {
        setStudentDetails(editDetails);
        setIsDialogOpen(false);
    };

    return (
        <>
            <div className="grid grid-cols-3 rounded-lg divide-x-2 divide-slate-400/50 bg-slate-200/50 p-2">
                <div className="rounded-l-lg grid grid-rows-3 gap-1 divide-solid divide-slate-400/50 divide-y-2 p-2">
                    <div className="row-span-2 p-5">
                        <div className="rounded-2xl border-solid bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-slate-400 border-3 min-w-full min-h-full"></div>
                    </div>
                    <div className="p-2">
                        <div className="flex flex-row pt-7 gap-2">
                            <Button className="flex-1 grow" variant={"outline"}>
                                <GithubIcon />
                            </Button>
                            <Button className="flex-1 grow" variant={"outline"}>
                                <LinkedinIcon />
                            </Button>
                            <Button className="flex-1 grow" variant={"outline"}>
                                <Globe2 />
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 col-span-2 gap-4 p-4 ml-5">
                    {Object.entries(studentDetails).map(([key, value]) => (
                    <button key={key}
                        className="bg-slate-200/50 hover:bg-slate-400/50 text-center text-md italic py-1 shadow-sm rounded-lg"
                    >
                        {`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}
                    </button>
                    ))}
                    <div className="text-center">
                        <Button
                            variant="outline"
                            onClick={() => setIsDialogOpen(true)}
                            className=" w-full hover:scale-105 transition-transform"
                        >
                            Edit Details
                        </Button>
                    </div>
                </div>
            </div>

            {isDialogOpen && (
                <Dialog>
                    <DialogOverlay onClick={() => setIsDialogOpen(false)} />
                    <DialogContent className="w-[600px]">
                        <DialogHeader>
                            <DialogTitle>Edit Student Details</DialogTitle>
                        </DialogHeader>
                        <form className="space-y-5">
                            {Object.entries(editDetails).map(([key, value]) => (
                                <div key={key} className="flex flex-col">
                                    <label htmlFor={key} className="font-medium">
                                        {key.charAt(0).toUpperCase() + key.slice(1)}:
                                    </label>
                                    <input
                                        id={key}
                                        name={key}
                                        value={value}
                                        onChange={handleInputChange}
                                        className="border rounded-lg p-2"
                                    />
                                </div>
                            ))}
                        </form>
                        <DialogFooter>
                            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                                Cancel
                            </Button>
                            <Button variant="default" onClick={saveDetails}>
                                Save
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
        </>
    );
}
