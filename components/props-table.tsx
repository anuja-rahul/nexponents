import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PropTableProps {
  name: string;
  type: string;
  default: string;
  description: string;
}

interface Items {
  items: PropTableProps[];
}

export default function PropTable({ items }: Items) {
  return (
    <div className="bg-background border border-foreground/20 rounded-lg">
      <Table className="bg-foreground/5 rounded-lg">
        <TableHeader className="bg-transparent *:border-foreground/20">
          <TableRow className="*:border-foreground/20 hover:bg-transparent [&>:not(:last-child)]:border-r">
            <TableHead>Prop</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Default</TableHead>
            <TableHead>Description</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="[&_td:first-child]:rounded-l-lg [&_td:last-child]:rounded-r-lg *:border-foreground/20">
          {items.map((item) => (
            <TableRow
              key={item.name}
              className="*:border-foreground/20 hover:bg-transparent [&>:not(:last-child)]:border-r"
            >
              <TableCell className="font-[400] h-20">
                <span className="flex items-center justify-center h-auto w-fit bg-foreground/5 rounded-sm px-[6px] py-[0px]">
                  {item.name}
                </span>
              </TableCell>
              <TableCell className="h-20">
                <span className="flex items-center justify-center h-auto w-fit bg-foreground/5 rounded-sm px-[6px] py-[0px]">
                  {item.type}
                </span>
              </TableCell>
              <TableCell className="h-20">
                <span className="flex items-center justify-center h-auto w-fit bg-foreground/5 rounded-sm px-[6px] py-[0px]">
                  {item.default}
                </span>
              </TableCell>
              <TableCell className="h-20">{item.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export { PropTable };
