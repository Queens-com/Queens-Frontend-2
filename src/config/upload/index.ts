import { apiRoutes } from "@/config/routes";
import { FieldValues } from "react-hook-form";
import { GeneratedUrl } from "@/types";
import queens from "../queens";

const { upload: uploadService } = apiRoutes;

const generateUrl = (payload: FieldValues) =>
  queens.post(uploadService, payload);

const upload = {
  generateUrl,
};

export default upload;
