"use client";
import React, { ChangeEvent } from "react";
import { snackbar } from "../Toaster";
import { getSession, signIn, useSession } from "next-auth/react";
import upload from "@/config/upload";
import axios from "axios";
import { apiRoutes, routes } from "@/config/routes";
import queens from "@/config/queens";
// import user from '@/config/services/user';

interface UploadProp {
  uploading: boolean;
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
}

export default function UploadAvatar({
  uploading,
  setUploading,
  progress,
  setProgress,
}: UploadProp) {
  const { upload, user } = apiRoutes;
  const { data } = useSession();

  const handleProfileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) {
      snackbar.error({
        description: "please Select File",
        message: "Upload Error",
      });
      return;
    }
    const fileState = e.target.files[0]; // Get the uploaded file
    if (fileState) {
      setUploading(true);
      try {
        const formData = new FormData();
        formData.append("file", fileState);
        console.log(formData);
        const res = await queens.post(upload, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (event) => {
            if (event.total) {
              const percent = Math.floor((event.loaded / event.total) * 100);
              setProgress(percent);
            }
          },
        });

        const body = {
          email: data?.user?.email,
          phone: data?.user?.phone ?? "",
          country_code: data?.user?.country_code ?? "",
          first_name: data?.user?.first_name,
          last_name: data?.user?.last_name,
          middle_name: data?.user?.middle_name ?? "",
          country: data?.user?.country ?? "",
          profile_photo: res?.data,
        };
        await queens.post(user.profile, body);
        const session = await getSession();
        await signIn("update-jwt", {
          accessToken: session?.accessToken,
          callbackUrl: routes.profile,
          redirect: false,
        });

        snackbar({
          description: "You have successfully uploaded a new profile picture.",
          message: "Profile Image Uploaded",
        });
      } catch (err) {
        console.log(err);
        snackbar.error({
          description: "Failed to upload profile picture.",
          message: "Upload Error",
        });
      } finally {
        setUploading(false);
        setProgress(0);
        e.target.value = "";
      }
    } else {
      snackbar.error({
        description: "please Select File",
        message: "Upload Error",
      });
    }
  };

  return (
    <div className=" items center hidden">
      <input
        type="file"
        id="profileUpload"
        onChange={handleProfileUpload}
        disabled={uploading}
        accept="image/*"
        hidden
        className="w-max bg-none hidden"
        // Disable input while uploading
      />
      <p className="text-xs font-bold text-center">{progress}%</p>
    </div>
  );
}
