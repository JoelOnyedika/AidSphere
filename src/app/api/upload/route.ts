import { writeFile } from 'fs/promises'
import { NextRequest, NextResponse } from 'next/server'
import {insertStorageBucket} from "@/lib/supabase/queries";
import { getFileExtension } from "@/lib/shit-functions/functions"

export async function POST(request: NextRequest) {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
        return NextResponse.json({success: false })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const extension = getFileExtension(file.name)
    console.log(extension)
    const bucket = await insertStorageBucket(extension, buffer)
    console.log(bucket)

    return NextResponse.json({ success: true })
}