import { betterAuth } from "better-auth";
import {prisma} from './prisma'
import { prismaAdapter } from "better-auth/adapters/prisma";
 
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: false, // Set to false if you don't want email verification
    },
});