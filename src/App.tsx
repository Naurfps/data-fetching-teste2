import { PlusCircle, Search } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Table, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./components/ui/dialog";
import { Label } from "./components/ui/label";
import { users } from "./data/users"
import { useState } from "react";

export function App() {
  const [filterName, setFilterName] = useState<string>("");
  const [filterId, setFilterId] = useState<string>();

  const filteredUsers = users.filter((user) => {
    const matchesName = user.name.toLowerCase().includes(filterName.toLowerCase());
    const matchesId = filterId === '' || user.id === Number(filterId);
    return matchesName && matchesId;
  });
  
  return (
        <div className="p-6 max-w-4xl nx-auto space-y-4">
          <h1 className="text-3xl font-bold">Equipe G5Dev</h1>
        <div className="flex items-center justify-between">
        <form className="flex itens-center gap-2">
        <Input 
        name="id" 
        placeholder="ID do Membro" 
        onChange={(e) => setFilterId(e.target.value)}
        value={filterId}
        />
        <Input 
        name="name" 
        placeholder="Nome do Membro" 
        onChange={(e) => setFilterName(e.target.value)}
        value={filterName}
        />
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
            {filteredUsers.map((user) => {
              return (
                <TableRow key={user.id}>
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
