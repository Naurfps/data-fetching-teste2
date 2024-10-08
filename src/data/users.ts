export type User = {
    id: number;
    name: string;
    role: string;
  };

export const users: User[] = [
    { id: 1, name: "Ruan", role: "Moderator" },
    { id: 2, name: "Alexandre", role: "Admin" },
    { id: 3, name: "Yuri", role: "Moderator" },
    { id: 4, name: "Bruno", role: "Admin" },
    { id: 5, name: "Brendo", role: "Admin" },
    { id: 6, name: "Matheus", role: "Moderator" },
    { id: 7, name: "Felipe", role: "Moderator" },
    { id: 8, name: "Juan", role: "User" },
    { id: 9, name: "Gabriel", role: "User" },
    { id: 10, name: "Sidney", role: "User" },
    { id: 11, name: "Ikaro", role: "User" }
];
