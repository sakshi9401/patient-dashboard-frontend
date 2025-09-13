import dynamic from "next/dynamic";
import React from "react";
import PatientTable from "../components/PatientTable";
import Sidebar from "@/components/Sidebar";

export default function Page() {
  return (
    <div>
      <PatientTable />
    </div>
  );
}
