import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default defineEventHandler(async event => {
	const { email, password } = await readBody(event)

	try {
		const user = await prisma.user.create({
			data: {
				email,
				password,
			},
		})
		return {
			success: true,
			statusCode: '200 OK',
			Users: user,
		}
	} catch (error) {
		return {
			success: false,
			statusCode: '500 Error',
			error: error,
		}
	}
})
