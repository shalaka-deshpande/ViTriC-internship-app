import Page from "../layout"
export default function IntermediateSkills() {
    return (
        <Page>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <div className="aspect-video rounded-xl bg-yellow-700/50" />
            <div className="aspect-video rounded-xl bg-yellow-700/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-cyan-400/50 md:min-h-min" />
        </div>
        </Page>
    )
}