// src/app/mail/email/[id]/page.js
import EmailDetail from '../../../components/emaildetails';

// **Two levels up** from `/email/[id]/page.js` lands in `/app/mail`
import { mailData }  from '../../data';

export async function generateStaticParams() {
  return mailData.map((email) => ({
    id: email.id.toString()
  }));
}

export default function EmailPage({ params }) {
  const id = parseInt(params.id, 10);
  const email = mailData.find((m) => m.id === id);

  if (!email) {
    return (
      <div style={{ fontFamily: 'sans-serif' }}>
        Email not found.
      </div>
    );
  }

  return (
    <div style={{ padding: '10px' }}>
      <EmailDetail email={email} />
    </div>
  );
}
