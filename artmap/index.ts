import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

// async function main() {
// 	await prisma.$connect()

// 	const allOrganizations = await prisma.organization.findMany()
// 	console.log(allOrganizations)
// }

async function main() {
	await prisma.$connect()

	await prisma.organization.create({
		data: {
			name: "Blackwood Miners' Institute",
			website: "https://blackwoodminersinstitute.com"
		}
	})

	const allOrganizations = await prisma.organization.findMany()
	console.dir(allOrganizations, { depth: null })
}

main()
	.catch(e => {
		throw e
	})
	.finally(async () => {
		await prisma.$disconnect()
	})
