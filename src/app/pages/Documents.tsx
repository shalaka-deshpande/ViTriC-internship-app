import Page from "../layout"
export default function Documents() {
    return (
        <Page>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <div className="aspect-video rounded-xl bg-blue-200/50" />
            <div className="aspect-video rounded-xl bg-blue-200/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-pink-400/50 md:min-h-min" />
        </div>
        </Page>
    )
}