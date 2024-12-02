import { useState } from "react";

function UploadVideo() {
  const [videoFile, setVideoFile] = useState<string>("");

  const handleFileChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith("video")) {
      setVideoFile(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <h1>Video Upload App</h1>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      {videoFile && (
        <div>
          <h2>Video Preview:</h2>
          <video
            src={videoFile}
            controls
            width="600"
            style={{ marginTop: "10px", borderRadius: "10px" }}
          />
        </div>
      )}
    </div>
  );
}
export default UploadVideo