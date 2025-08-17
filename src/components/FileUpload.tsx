import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useTranslation } from 'react-i18next';

interface FileUploadProps {
    onFileChange: (file: File | null) => void;
    maxSizeInMB?: number;
    acceptedFormats?: string[];
    label?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
    onFileChange,
    maxSizeInMB = 3,
    acceptedFormats = ['image/jpeg', 'image/png'],
    label
}) => {
    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (selectedFile: File | null) => {
        setError(null);

        if (!selectedFile) {
            setFile(null);
            setPreview(null);
            onFileChange(null);
            return;
        }

        // Check file format
        const fileType = selectedFile.type;
        if (!acceptedFormats.includes(fileType)) {
            setError(`Yalnız ${acceptedFormats.map(format => format.split('/')[1].toUpperCase()).join(', ')} formatlarında fayllar qəbul edilir.`);
            return;
        }

        // Check file size (only maximum)
        const fileSizeInMB = selectedFile.size / (1024 * 1024);
        if (fileSizeInMB > maxSizeInMB) {
            setError(`Fayl ${maxSizeInMB} MB-dan böyük ola bilməz.`);
            return;
        }

        // Create preview URL
        const previewUrl = URL.createObjectURL(selectedFile);
        setFile(selectedFile);
        setPreview(previewUrl);
        onFileChange(selectedFile);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileChange(e.dataTransfer.files[0]);
        }
    };

    const removeFile = () => {
        if (preview) {
            URL.revokeObjectURL(preview);
        }
        setFile(null);
        setPreview(null);
        setError(null);
        onFileChange(null);
    };

    const { t } = useTranslation()

    return (
        <div className="w-full max-w-md ml-2">
            <p className="text-sm font-medium mb-1">{label ?? t('auth.photo')}</p>


            <Card className={`bg-[#070618] text-white border-2 ${isDragging ? 'border-blue-500' : 'border-dashed border-gray-300'} p-0`}>
                <CardContent className="p-2">
                    {!file ? (
                        <div
                            className="flex flex-col items-center justify-center p-1 cursor-pointer"
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => document.getElementById('file-upload')?.click()}
                        >
                            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                                <Plus className="h-6 w-6 text-gray-500" />
                            </div>
                            <p className="text-xs text-gray-500 text-center">
                                {maxSizeInMB}{t('auth.photoSize')}
                            </p>
                            <input
                                id="file-upload"
                                type="file"
                                accept={acceptedFormats.join(',')}
                                className="hidden"
                                onChange={(e) => handleFileChange(e.target.files ? e.target.files[0] : null)}
                            />
                        </div>
                    ) : (
                        <div className="relative">
                            <img
                                src={preview || ''}
                                alt="Preview"
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <div className="p-3 flex justify-between items-center">
                                <div>
                                    <p className="text-sm font-medium truncate max-w-xs">{file.name}</p>
                                    <p className="text-xs text-gray-500">
                                        {(file.size / (1024 * 1024)).toFixed(2)} MB • {file.type.split('/')[1].toUpperCase()}
                                    </p>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={removeFile}
                                    className="h-8 w-8 rounded-full"
                                >
                                    <X className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            {error && (
                <Alert variant="destructive" className="mt-2">
                    <AlertDescription>{error}</AlertDescription>
                </Alert>
            )}
        </div>
    );
};

export default FileUpload;