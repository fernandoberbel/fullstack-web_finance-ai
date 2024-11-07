import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";

export default async function TransactionsPage() {
  const transactions = await db.transaction.findMany({});

  return (
    <main className="space-y-6 p-8">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Adicionar Transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <div>
        <DataTable columns={transactionColumns} data={transactions} />
      </div>
    </main>
  );
}