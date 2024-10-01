/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-mock-interview_owner:9r6QPIJjlMGo@ep-solitary-mode-a1h6icsw.ap-southeast-1.aws.neon.tech/ai-mock-interview?sslmode=require",
  },
};
