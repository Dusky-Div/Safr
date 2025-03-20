import CodeEditor from "../atoms/CodeEditor";
import RefactrButton from "../atoms/RefactrButton";
import AnalysisWindow from "./AnalysisWindow";
import RefactredCodeWindow from "./RefactredCodeWindow";

const MainArea = () => {
  return (
    <div className="flex flex-col overflow-auto w-full h-fit bg-[#0A0A0A]">
      <CodeEditor />
      <RefactrButton />
      <div className="flex gap-4 items-center justify-center">
        <AnalysisWindow />
        <RefactredCodeWindow />
      </div>
    </div>
  );
};

export default MainArea;
