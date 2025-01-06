
export default function ProjectInformation() {
  return (
    <>
      <div className="grid grid-rows-5 rounded-lg gap-1 bg-slate-200/50 p-2">
        <div className="bg-slate-300/50 rounded-lg text-center p-4 font-extrabold italic underline"> Active Projects</div>
        <div className="bg-blue-300/50 rounded-lg  font-semibold italic p-4 ">1. Java Backend</div>
        <div className="bg-blue-300/50 rounded-lg  font-semibold italic p-4"> 2. Data Analysis</div>
        <div className="bg-blue-300/50 rounded-lg  font-semibold italic p-4"> 3. Web Development</div>
        <div className="bg-blue-300/50 rounded-lg  font-semibold italic p-4"> 4. Upcoming: AWS</div>
      </div>
    </>
  );
}
