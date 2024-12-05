import { FileInput, Label } from "flowbite-react";

import UploadSvg from "./assets/uploadSvg";
export function UploadVideo() {
  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.currentTarget.files?.[0];
    
    if (!file) {
      console.error("No file selected.");
      return window.alert("upload failed try again..");
    }
    
  }
  return (
    <div className="flex w-full items-center justify-center justify-self-center">
      <Label
        htmlFor="dropzone-file"
        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <UploadSvg />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload Video</span> or drag
            and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            MP4, MOV, AVI, WMV, ETC...
          </p>
        </div>
        <FileInput
          id="dropzone-file"
          className="hidden"
          accept="video/*"
          onChange={handleUpload}
        />
      </Label>
    </div>
  );
}
export default UploadVideo;
