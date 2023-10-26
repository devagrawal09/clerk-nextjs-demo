const FakeDb = [
  {
    id: 1,
    userId: "user_2XDT1UlgdlQdzUjaIqNoKr1Avkn",
    title: "Learn Next.js",
  },
  {
    id: 2,
    userId: "user_2XDT1UlgdlQdzUjaIqNoKr1Avkn",
    title: "Deploy to Vercel",
  },
  {
    id: 3,
    userId: "user_2XDT1UlgdlQdzUjaIqNoKr1Avkn",
    title: "Integrate Clerk",
  },
  {
    id: 4,
    userId: "user_2XDT1UlgdlQdzUjaIqNoKr1Avkn",
    title: "Profit",
  },
  {
    id: 5,
    userId: "user_2PyNWPqDHOi6cgTiM0vRUGpXrtm",
    title: "Go back to jQuery",
  },
  {
    id: 6,
    userId: "user_2PyNWPqDHOi6cgTiM0vRUGpXrtm",
    title: "I don't like JavaScript",
  },
  {
    id: 7,
    userId: "user_2PyNWPqDHOi6cgTiM0vRUGpXrtm",
    title: "San Franciso is awesome",
  },
];

export async function getTodos(userId: string) {
  return userId ? FakeDb.filter((todo) => todo.userId === userId) : FakeDb;
}
