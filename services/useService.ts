import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function createUser(email: string, password: string) {
	return await prisma.user.create({
		data: {
			email,
			password,
		},
	})
}
