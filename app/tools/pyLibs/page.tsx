"use client";
import MenuBar from "../../ui/MenuBar";
import FooterMain from "../../ui/FooterMain";
import PythonStandardLibs from "@/app/ui/tools/PythonStandardLibs";



export default function ToolsPage() {

  return (
    <div id="toolsPage">
        <MenuBar></MenuBar>
        <PythonStandardLibs></PythonStandardLibs>
        <FooterMain></FooterMain>
    </div>
  );
}
