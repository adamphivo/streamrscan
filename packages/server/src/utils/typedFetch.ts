import axios, { AxiosResponse } from "axios";
import { ZodSchema, ZodError } from "zod";

export async function typedFetch<T>(url: string, schema: ZodSchema<T>): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios.get(url);
    const data: T = response.data;

    // Validate the response data against the provided schema
    schema.parse(data);

    return data;
  } catch (error) {
    // Handle any validation errors
    if (error instanceof ZodError) {
      // You can perform custom error handling here
      console.error("Response validation error:", error);
    }

    // Throw or handle other types of errors as needed
    throw error;
  }
}
