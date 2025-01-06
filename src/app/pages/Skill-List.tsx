"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table";
import Page from "../layout";
export type Skills = {
  id: string;
  level: number;
  status: "scheduled" | "in progress" | "success" | "failed";
  skill: string;
};

// Define LocalStorage key
const STORAGE_KEY = "intermediateSkillsData";

export const columns: ColumnDef<Skills>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "skill",
    header: "Skill",
  },
  {
    accessorKey: "level",
    header: () => <div className="">Level</div>,
    cell: ({ row }) => {
      const level = parseFloat(row.getValue("level"));
      return <div className="font-medium">{level}</div>;
    },
  },
];
// Component
export default function SkillList() {
  const [data, setData] = React.useState<Skills[]>([]);
  const [rowSelection, setRowSelection] = React.useState({});
  const [editingSkill, setEditingSkill] = React.useState<Skills | null>(null);
  const [showForm, setShowForm] = React.useState(false);
  const [formData, setFormData] = React.useState<Skills>({
    id: "",
    level: 0,
    status: "scheduled",
    skill: "",
  });

  React.useEffect(() => {
    // Load data from LocalStorage
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
      // Initialize with default data if LocalStorage is empty
      const initialData: Skills[] = [
        { id: "m5gr84i9", level: 9, status: "success", skill: "Python" },
        { id: "3u1reuv4", level: 6, status: "scheduled", skill: "Java" },
        { id: "derv1ws0", level: 2, status: "failed", skill: "C++" },
        { id: "derv1ws3", level: 8, status: "in progress", skill: "React JS" },
      ];
      setData(initialData);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
    }
  }, []);

  const saveToLocalStorage = (updatedData: Skills[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  };

  const resetForm = () => {
    setFormData({ id: "", level: 0, status: "scheduled", skill: "" });
    setEditingSkill(null);
    setShowForm(false);
  };

  const handleEdit = () => {
    const selectedRowIds = Object.keys(rowSelection);
    if (selectedRowIds.length !== 1) {
          alert("Select at least one column")
          return;
    }
    const selectedRowIndex = parseInt(selectedRowIds[0], 10);
    setEditingSkill(data[selectedRowIndex]);
    setFormData(data[selectedRowIndex]);
    setShowForm(true);
  };

  const handleSave = () => {
    let updatedData;
    if (editingSkill) {
      // Update existing skill
      updatedData = data.map((skill) =>
        skill.id === editingSkill.id ? formData : skill
      );
    } else {
      // Add new skill
      updatedData = [...data, { ...formData, id: `new-${Date.now()}` }];
    }
    setData(updatedData);
    saveToLocalStorage(updatedData);
    resetForm();
  };

  const handleDelete = () => {
    const selectedRowIds = Object.keys(rowSelection);
    const updatedData = data.filter((_, index) => !selectedRowIds.includes(`${index}`));
    setData(updatedData);
    saveToLocalStorage(updatedData);
    setRowSelection({});
  };

  const memoizedColumns = React.useMemo(() => columns, []);
  const table = useReactTable({
    data,
    columns: memoizedColumns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
  });

  return (
    <Page>
      <div className="w-full">
        <div className="flex items-center justify-end space-x-4 py-4">
          <Button variant="outline" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="outline" onClick={handleEdit}>
            Edit Skill
          </Button>
          <Button variant="outline" onClick={() => setShowForm(true)}>
            Add Skill
          </Button>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell: any) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        {showForm && (
          <div className="p-4 mt-4 border rounded-md">
            <h2 className="mb-4">{editingSkill ? "Edit" : "Add"}</h2>
            <div className="space-y-4">
              <input
                className="w-full border p-2 rounded"
                type="text"
                placeholder="Skill"
                value={formData.skill}
                onChange={(e) =>
                  setFormData({ ...formData, skill: e.target.value })
                }
              />
              <input
                className="w-full border p-2 rounded"
                type="number"
                placeholder="Level"
                value={formData.level}
                onChange={(e) =>
                  setFormData({ ...formData, level: parseInt(e.target.value, 10) })
                }
              />
              <select
                className="w-full border p-2 rounded"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value as Skills["status"] })
                }
              >
                <option value="scheduled">Scheduled</option>
                <option value="in progress">In Progress</option>
                <option value="success">Success</option>
                <option value="failed">Failed</option>
              </select>
              <div className="flex space-x-4">
                <Button variant="outline" onClick={handleSave}>
                  Save
                </Button>
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Page>
  );
}
