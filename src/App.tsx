import { PlusCircle, Search } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Table, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { useEffect, useState } from "react";

type Users = {
  id: number;
  name: string;
  role: string;
}

export function App() {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => {
      setUsers(data);
    })
  },[])

  return (
        <div className="p-6 max-w-4xl nx-auto space-y-4">
          <h1 className="text-3xl font-bold">Equipe G5Dev</h1>
        <div className="flex items-center justify-between">
        <form className="flex itens-center gap-2">
        <Input name="id" placeholder="ID do pedido" />
        <Input name="name" placeholder="Nome do pedido" />
        <Button type="submit" variant="link">
          <Search className="w-4 h-4 mr-2"/>
          Filtrar resultados
        </Button>
      </form>

          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <PlusCircle className="w-4 h-4 mr-2"/>
                Novo Membro
              </Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Novo Membro</DialogTitle>
                <DialogDescription>Integrar um novo membro para a equipe</DialogDescription>
              </DialogHeader>

            <form className="space-y-6">
              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="name">Membro</Label>
                <Input className="col-span-3" id="name"/>
              </div>


              <div className="grid grid-cols-4 items-center text-right gap-3">
                <Label htmlFor="role">Cargo</Label>
                <Input className="col-span-3" id="role"/>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">Cancelar</Button>
                </DialogClose>
                  <Button type="submit">Salvar</Button>
              </DialogFooter>
            </form>
            </DialogContent>
          </Dialog>
        </div>

      <div className="border rounded-lg p-2">
          <Table>
            <TableHeader>
              <TableHead>ID</TableHead>
              <TableHead>Produtos</TableHead>
              <TableHead>Preço</TableHead>
            </TableHeader>
            {users.map((user) => {
              return (
                <TableRow>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
              </TableRow>
              )
            })}
          </Table>
      </div>
    </div>
  )
}
