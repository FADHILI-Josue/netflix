import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient
if(process.env.NODE_DEV === 'production') global.prismadb = client;