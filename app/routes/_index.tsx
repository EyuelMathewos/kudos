import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div className="h-screen w-full bg-slate-600">
     <h2 className="font-bold text-5xl text-blue-400">TailwindCSS works</h2> 
    </div>
  );
}
