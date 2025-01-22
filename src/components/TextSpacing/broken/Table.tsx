import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const invoices = [
    {
        invoice: "INV00001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        note: "Paid via Credit Card",
    },
    {
        invoice: "INV00002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        note: "Payment pending through PayPal",
    },
    {
        invoice: "INV00003",
        paymentStatus: "Unpaid",
        totalAmount: "$350.00",
        note: "Unpaid, expected via Bank Transfer",
    },
    {
        invoice: "INV00004",
        paymentStatus: "Paid",
        totalAmount: "$450.00",
        note: "Paid via Credit Card",
    },
    {
        invoice: "INV00005",
        paymentStatus: "Paid",
        totalAmount: "$550.00",
        note: "Paid via PayPal",
    },
    {
        invoice: "IN00V006",
        paymentStatus: "Pending",
        totalAmount: "$200.00",
        note: "Payment pending via Credit card",
    },
    {
        invoice: "INV00007",
        paymentStatus: "Unpaid",
        totalAmount: "$300.00",
        note: "Unpaid, expected via Credit Card",
    },
]


export function TableBroken() {
    return (
        <Table className="max-w-[440px]">
            <TableHeader>
                <TableRow>
                    <TableHead>
                        <div>Invoice</div>
                    </TableHead>
                    <TableHead>
                        <div>Status</div>
                    </TableHead>
                    <TableHead>
                        <div>Note</div>
                    </TableHead>
                    <TableHead className="text-right">
                        <div>Amount</div>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                        <TableCell className="font-medium">
                            <div className="h-10 flex items-center">
                                {invoice.invoice}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="h-10 flex items-center">
                                {invoice.paymentStatus}
                            </div>
                        </TableCell>
                        <TableCell>
                            <div className="h-10 flex items-center">
                                {invoice.note}
                            </div>
                        </TableCell>
                        <TableCell className="text-right">
                            <div className="h-10 flex items-center">
                                {invoice.totalAmount}
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

