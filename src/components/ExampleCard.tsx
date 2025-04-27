export default function ExampleCard({ isFixed, children }: { isFixed: boolean, children: React.ReactNode }) {
    return (
        <div className={`p-4 rounded-lg shadow-md border bg-gradient-to-b ${isFixed ? `border-success-default  from-green-50 dark:from-green-950 to-transparent` : `border-danger-default from-red-50 dark:from-red-950 to-transparent`}`}>
            {children}
        </div>
    )
}