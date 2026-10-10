import { handleFormSubmission } from "../../../lib/form-submission";

export async function POST(request: Request) {
  return handleFormSubmission(
    request,
    "contact_submissions",
    {
      name: { required: true, max: 200 },
      email: { required: true, max: 254, email: true },
      phone: { max: 40 },
      company: { max: 200 },
      designation: { max: 200 },
      message: { required: true, max: 5000 },
    },
    "Enquiry successfully received."
  );
}
