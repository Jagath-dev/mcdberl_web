import { handleFormSubmission } from "../../../lib/form-submission";

export async function POST(request: Request) {
  return handleFormSubmission(
    request,
    "career_applications",
    {
      name: { required: true, max: 200 },
      email: { required: true, max: 254, email: true },
      phone: { max: 40 },
      track: { required: true, max: 100 },
      portfolio_url: { max: 500, url: true },
      cover_note: { max: 5000 },
    },
    "Application successfully received."
  );
}
