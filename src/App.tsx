import "./App.css";
import UserInformation from "./app/components/card-user";
import Notice from "./app/components/notice";
import ProjectInformation from "./app/components/projects";
import Page from "./app/layout";

function App() {
  return (
    <>
      <Page>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <UserInformation></UserInformation>
            <ProjectInformation></ProjectInformation>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-slate-200/50 md:min-h-min" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-slate-200/50 md:min-h-min overflow-hidden">
            <Notice></Notice>
          </div>
        </div>
      </Page>
    </>
  );
}

export default App;