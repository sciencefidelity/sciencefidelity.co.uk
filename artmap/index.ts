import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  // Connect the client
  await prisma.$connect()
  const allOrganizations = await prisma.organization.findMany()
  console.log(allOrganizations)
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

