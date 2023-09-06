import { z } from "zod";
import { publicProcedure, router } from "./trpc";
import { env } from "~/env.mjs";
import path from "path";
import fs from "fs";

export const appRouter = router({
    getImages: publicProcedure.query(async () => {
        const dirPath = path.join(process.cwd(), 'public')
        const imageFiles = fs.readdirSync(dirPath)

        const imageNames = imageFiles
            .filter(file => {
                const ext = path.extname(file)
                const name = path.basename(file, ext)

                return ['.jpeg', 'jpg', '.png'].includes(ext) && !name.includes('Logo') && !name.includes('captain')
            })
            .map(file => `/${file}`)

        return {
            images: imageNames,
        }
    })
});

export type AppRouter = typeof appRouter