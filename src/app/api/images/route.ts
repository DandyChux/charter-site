import fs from 'fs'
import path from 'path'
import { type NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const dirPath = path.join(process.cwd(), 'public')
  const imageFiles = fs.readdirSync(dirPath)

  const imageNames = imageFiles
    .filter(file => {
        const ext = path.extname(file)
        const name = path.basename(file, ext)

        return ['.jpeg', 'jpg', '.png'].includes(ext) && !name.includes('Logo') && !name.includes('captain')
    })
    .map(file => `/${file}`)

  return NextResponse.json({
    images: imageNames,
  })
}