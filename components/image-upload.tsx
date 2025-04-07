"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Upload, X } from "lucide-react"
import Image from "next/image"

interface ImageUploadProps {
  onChange: (file: File | null) => void
  value?: string | null
  className?: string
}

export default function ImageUpload({ onChange, value, className }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(value || null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(file)
      onChange(file)
    } else {
      setPreview(null)
      onChange(null)
    }
  }

  const handleRemoveImage = () => {
    setPreview(null)
    onChange(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className={`${className || ""}`}>
      <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} className="hidden" />

      {preview ? (
        <div className="relative">
          <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
            <Image src={preview || "/placeholder.svg"} alt="Event image preview" fill className="object-cover" />
          </div>
          <Button variant="destructive" size="icon" className="absolute right-2 top-2" onClick={handleRemoveImage}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div
          className="border-2 border-dashed rounded-lg p-12 text-center cursor-pointer hover:bg-muted/50 transition-colors"
          onClick={handleButtonClick}
        >
          <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
          <p className="text-sm text-muted-foreground mb-2">Drag and drop an image, or click to browse</p>
          <Button variant="outline" size="sm" type="button">
            Upload Image
          </Button>
        </div>
      )}
    </div>
  )
}

