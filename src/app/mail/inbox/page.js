// src/app/mail/inbox/page.js
import { mailData } from "../data";
import EmailCard from "@/app/components/emailcard";

export default function InboxPage() {
  return (
    <div>
      {mailData.map((email) => (
        <EmailCard key={email.id} email={email} />
      ))}
    </div>
  );
}
