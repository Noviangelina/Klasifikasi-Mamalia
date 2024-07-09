import React, { useState, forwardRef } from "react";

const DataTesting = forwardRef((props, ref) => {
  const [predictedLabel, setPredictedLabel] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedFile, setUploadedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [status, setStatus] = useState("");

  const labelDescriptions = {
    0: {
      label: "Mamalia Berkantung",
      description:
        "Marsupialia (Mamalia Berkantung) adalah kelompok mamalia yang melahirkan anak yang belum sepenuhnya berkembang. Setelah dilahirkan, anak-anak ini menyelesaikan perkembangan mereka di dalam kantung khusus yang terdapat di perut ibu, yang disebut marsupium.",
      imageUrl: "url_to_image_1", // Ganti dengan URL gambar yang sesuai
    },
    1: {
      label: "Mamalia Berplasenta",
      description:
        "Plasentalia (Mamalia Plasental) adalah kelompok mamalia yang embrionya berkembang di dalam rahim ibu dan mendapatkan nutrisi melalui plasenta.",
      imageUrl: "url_to_image_2", // Ganti dengan URL gambar yang sesuai  
    },
    2: {
      label: "Mamalia Bertelur",
      description:
        "Monotremata (Mamalia Bertelur) adalah kelompok mamalia yang paling primitif dan unik karena mereka bertelur. Setelah telur menetas, induk monotremata menyusui anaknya dengan cara mengeluarkan susu melalui kelenjar susu yang tidak memiliki puting.",
      imageUrl: "url_to_image_0", // Ganti dengan URL gambar yang sesuai 
    },
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      console.error("No file selected");
      return;
    }
    console.log("Selected file:", file);
    setUploadedFile(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);
    console.log("FormData:", formData.get("file"));

    try {
      const response = await fetch(
        "https://6662-35-196-122-177.ngrok-free.app/predict",
        {
          method: "POST",
          body: formData,
          headers: {
            "Access-Control-Allow-Origin": "*", // Menambahkan header ini hanya jika server mengizinkan
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data); // Logging respons data
      if (data.success) {
        console.log("Success:", data.success);
        setStatus("File berhasil diproses!");
        const labelData = labelDescriptions[data.label];
        if (labelData) {
          setPredictedLabel(labelData.label);
          setDescription(labelData.description);
          setImageUrl(labelData.imageUrl);
        } else {
          console.error("Label data not found:", data.label);
          setStatus("Label data not found!");
        }
      } else {
        console.error("Backend response indicates failure:", data.message);
        setStatus("File gagal diproses! Reason: " + (data.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Error during file processing:", error);
      setStatus("Terjadi kesalahan saat memproses file! Error: " + error.message);
    }
  };

  return (
    <section className="bg-[#FFFFFF] py-20" id="process" ref={ref}>
      <p className="text-2xl font-semibold tracking-tight leading-none text-center mb-10 font-poppins text-gradient">
        START <span className="text-[#D1B781]">PREDICTION</span>
      </p>
      <div className="container mx-auto flex flex-col items-center px-4">
        {/* Bagian Upload File */}
        <div className="w-full md:w-[908px] bg-white p-8 rounded-2xl border-4">
          <h2 className="text-center text-lg font-medium text-black mb-4">
            Silahkan Upload File Untuk Proses Data
          </h2>
          <input
            type="file"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-500 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-transparent file:text-gray-700"
            title=""
          />
          <div id="status" className="text-sm text-gray-700 mt-2 text-center">
            {status}
          </div>
        </div>

        {/* Bagian Prediksi Label dan Deskripsi */}
        {uploadedFile && (
          <div className="w-full mt-8 flex flex-col md:flex-row items-center justify-center md:space-x-8">
            <div className="flex justify-center items-center w-full md:w-1/2">
              <img
                src={uploadedFile}
                alt="Uploaded"
                className="max-w-full h-auto"
                style={{ maxHeight: "200px" }}
              />
            </div>

            {predictedLabel && (
              <div className="bg-white p-6 rounded shadow w-full md:w-1/2 flex flex-col items-center md:items-start">
                <h2 className="text-2xl font-bold text-black mb-2 font-poppins text-24px">
                  {predictedLabel}
                </h2>
                <p className="text-lg text-black text-center md:text-left font-poppins text-20px font-medium">
                  {description}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
});

export default DataTesting;
