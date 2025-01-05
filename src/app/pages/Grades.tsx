import Page from "../layout";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/app/components/ui/table"




const grades = [
    {
      sem: "SEM-01",
      status: "Pass",
      cgpa: "9.1",
      mode: "Offline",
    },
    {
        sem: "SEM-02",
        status: "Pass",
        cgpa: "9.5",
        mode: "Offline",
      },
      {
        sem: "SEM-03",
        status: "Pass",
        cgpa: "8.2",
        mode: "Offline",
      },
      {
        sem: "SEM-04",
        status: "Pass",
        cgpa: "7.75",
        mode: "Offline",
      },
      {
        sem: "SEM-05",
        status: "Pass",
        cgpa: "8.5",
        mode: "Online",
      },
      {
        sem: "SEM-06",
        status: "Pass",
        cgpa: "8.22",
        mode: "Online",
      },
      {
        sem: "SEM-07",
        status: "Pass",
        cgpa: "9.25",
        mode: "Online",
      },
      {
        sem: "SEM-08",
        status: "Pass",
        cgpa: "6.75",
        mode: "Offline",
      },
  ]
   
export default function Grades() {
  return (
    <Page>
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[10%]">Semester</TableHead>
            <TableHead>SGPA</TableHead>
            <TableHead>Status</TableHead>
            <TableHead >Exam Mode</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {grades.map((grades) => (
            <TableRow key={grades.sem}>
              <TableCell className="font-medium">{grades.sem}</TableCell>
              <TableCell>{grades.cgpa}</TableCell>
              <TableCell>{grades.status}</TableCell>
              <TableCell >{grades.mode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>CGPA</TableCell>
            <TableCell >9.22</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Page>
  );
}
