import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async () => {
	try {
		const response = await prisma.user.findMany()

		return {
			success: true,
			statusCode: '200 OK',
			users: response,
		}
	} catch (error) {
		return {
			success: false,
			statusCode: '500 Error',
			error: error,
		}
	}
})
