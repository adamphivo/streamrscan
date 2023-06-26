import { z } from "zod";

export const AppStatusParser = z.object({
  status: z.string(),
  uptime: z.number(),
});

export type AppStatus = z.infer<typeof AppStatusParser>;
