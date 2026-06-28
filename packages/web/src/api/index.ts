import { Hono } from 'hono';
import { cors } from "hono/cors"
import { z } from "zod"

const ENQUIRY_TO = "enquiries@junglethrill.africa"
const ENQUIRY_FROM = "Safari Enquiries <enquiries@junglethrill.africa>"
const PARTNER_TO = "partners@junglethrill.africa"
const HUGO_FROM = "Hugo <hugo@junglethrill.africa>"
const HUGO_EMAIL = "hugo@junglethrill.africa"
const RESEND_ENDPOINT = "https://api.resend.com/emails"

const enquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("A valid email is required"),
  contact: z.string().optional().default(""),
  travelDate: z.string().optional().default(""),
  groupSize: z.string().optional().default(""),
  message: z.string().optional().default(""),
  journeyTitle: z.string().optional().default(""),
  journeySummary: z.string().optional().default(""),
  agency: z.string().optional().default(""),
  country: z.string().optional().default(""),
  source: z.string().optional().default(""),
})

type Enquiry = z.infer<typeof enquirySchema>

const esc = (s: string) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

function row(label: string, value: string) {
  if (!value) return ""
  return `<tr>
    <td style="padding:8px 16px 8px 0;color:#9a8c6a;font-size:12px;letter-spacing:1px;text-transform:uppercase;vertical-align:top;white-space:nowrap;">${esc(label)}</td>
    <td style="padding:8px 0;color:#1a1a1a;font-size:15px;line-height:1.5;">${esc(value).replace(/\n/g, "<br>")}</td>
  </tr>`
}

function businessHtml(d: Enquiry) {
  const journeyBlock = d.journeyTitle
    ? `<div style="margin:0 0 24px;padding:16px 20px;background:#faf6ec;border-left:3px solid #c9a84a;">
        <p style="margin:0 0 4px;color:#9a8c6a;font-size:11px;letter-spacing:1px;text-transform:uppercase;">Enquiring about</p>
        <p style="margin:0;color:#1a1a1a;font-size:16px;font-weight:600;">${esc(d.journeyTitle)}</p>
        ${d.journeySummary ? `<p style="margin:6px 0 0;color:#555;font-size:13px;line-height:1.5;">${esc(d.journeySummary)}</p>` : ""}
      </div>`
    : ""
  return `<!DOCTYPE html><html><body style="margin:0;background:#f4f1ea;padding:32px;font-family:Georgia,'Times New Roman',serif;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e8e2d4;">
      <div style="background:#141414;padding:24px 32px;">
        <p style="margin:0;color:#c9a84a;font-size:12px;letter-spacing:3px;text-transform:uppercase;">New Safari Enquiry</p>
        <h1 style="margin:6px 0 0;color:#f4f1ea;font-size:24px;font-weight:700;">${esc(d.name)}</h1>
      </div>
      <div style="padding:28px 32px;">
        ${journeyBlock}
        <table style="width:100%;border-collapse:collapse;">
          ${row("Email", d.email)}
          ${row("Contact", d.contact)}
          ${row("Travel dates", d.travelDate)}
          ${row("Group size", d.groupSize)}
          ${row("Message", d.message)}
        </table>
      </div>
      <div style="padding:16px 32px;background:#faf6ec;border-top:1px solid #e8e2d4;">
        <p style="margin:0;color:#9a8c6a;font-size:12px;">Reply directly to this email to reach ${esc(d.name)}.</p>
      </div>
    </div>
  </body></html>`
}

function customerHtml(d: Enquiry) {
  const first = d.name.split(" ")[0] || "there"
  const journeyLine = d.journeyTitle
    ? `<p style="margin:0 0 20px;color:#555;font-size:15px;line-height:1.6;">I've noted that you're drawn to <strong style="color:#1a1a1a;">${esc(d.journeyTitle)}</strong> — we'll start there and shape it around exactly what you're after.</p>`
    : ""
  return `<!DOCTYPE html><html><body style="margin:0;background:#141414;padding:32px;font-family:Georgia,'Times New Roman',serif;">
    <div style="max-width:560px;margin:0 auto;background:#1c1c1c;border:1px solid #2a2a2a;">
      <div style="padding:36px 36px 8px;">
        <p style="margin:0;color:#c9a84a;font-size:12px;letter-spacing:3px;text-transform:uppercase;">Your enquiry is in</p>
        <h1 style="margin:10px 0 0;color:#f4f1ea;font-size:28px;font-weight:700;line-height:1.2;">Thank you, ${esc(first)}.</h1>
      </div>
      <div style="padding:20px 36px 36px;">
        <p style="margin:0 0 20px;color:#cfc7b5;font-size:15px;line-height:1.6;">I've received your details and I'll personally read through everything you've shared. Expect a reply from me — usually within a few hours.</p>
        ${journeyLine}
        <p style="margin:0 0 24px;color:#cfc7b5;font-size:15px;line-height:1.6;">In the meantime, no need to do anything. When I write back, it'll be with real questions and ideas — not a generic brochure. This is the start of a conversation about a trip built entirely around you.</p>
        <div style="margin:0 0 8px;padding:18px 20px;background:#141414;border-left:3px solid #c9a84a;">
          <p style="margin:0 0 6px;color:#9a8c6a;font-size:11px;letter-spacing:1px;text-transform:uppercase;">What you sent me</p>
          ${d.travelDate ? `<p style="margin:0;color:#cfc7b5;font-size:13px;">Travel dates: ${esc(d.travelDate)}</p>` : ""}
          ${d.groupSize ? `<p style="margin:4px 0 0;color:#cfc7b5;font-size:13px;">Group size: ${esc(d.groupSize)}</p>` : ""}
          ${d.message ? `<p style="margin:8px 0 0;color:#9a9384;font-size:13px;line-height:1.5;font-style:italic;">"${esc(d.message)}"</p>` : ""}
        </div>
      </div>
      <div style="padding:18px 36px;background:#141414;border-top:1px solid #2a2a2a;">
        <p style="margin:0;color:#c9a84a;font-size:14px;font-weight:600;">Hugo</p>
        <p style="margin:2px 0 0;color:#7a7363;font-size:12px;">On the ground in Tanzania, where your safari happens.</p>
      </div>
    </div>
  </body></html>`
}

function partnerBusinessHtml(d: Enquiry) {
  return `<!DOCTYPE html><html><body style="margin:0;background:#f4f1ea;padding:32px;font-family:Georgia,'Times New Roman',serif;">
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e8e2d4;">
      <div style="background:#141414;padding:24px 32px;">
        <p style="margin:0;color:#c9a84a;font-size:12px;letter-spacing:3px;text-transform:uppercase;">New Partner Enquiry</p>
        <h1 style="margin:6px 0 0;color:#f4f1ea;font-size:24px;font-weight:700;">${esc(d.agency || d.name)}</h1>
      </div>
      <div style="padding:28px 32px;">
        <table style="width:100%;border-collapse:collapse;">
          ${row("Agency", d.agency)}
          ${row("Contact", d.name)}
          ${row("Email", d.email)}
          ${row("WhatsApp / phone", d.contact)}
          ${row("Market / based in", d.country)}
          ${row("Message", d.message)}
        </table>
      </div>
      <div style="padding:16px 32px;background:#faf6ec;border-top:1px solid #e8e2d4;">
        <p style="margin:0;color:#9a8c6a;font-size:12px;">Reply directly to this email to reach ${esc(d.name)}.</p>
      </div>
    </div>
  </body></html>`
}

function partnerCustomerHtml(d: Enquiry) {
  const first = d.name.split(" ")[0] || "there"
  return `<!DOCTYPE html><html><body style="margin:0;background:#141414;padding:32px;font-family:Georgia,'Times New Roman',serif;">
    <div style="max-width:560px;margin:0 auto;background:#1c1c1c;border:1px solid #2a2a2a;">
      <div style="padding:36px 36px 8px;">
        <p style="margin:0;color:#c9a84a;font-size:12px;letter-spacing:3px;text-transform:uppercase;">Agent to agent</p>
        <h1 style="margin:10px 0 0;color:#f4f1ea;font-size:28px;font-weight:700;line-height:1.2;">Thank you, ${esc(first)}.</h1>
      </div>
      <div style="padding:20px 36px 36px;">
        <p style="margin:0 0 20px;color:#cfc7b5;font-size:15px;line-height:1.6;">I'm really glad you reached out. The best partnerships out here are built on trust, so let me say it plainly: when you work with me, your traveller stays <strong style="color:#f4f1ea;">your traveller</strong>. I look after them on the ground and hand the relationship right back to you.</p>
        <p style="margin:0 0 24px;color:#cfc7b5;font-size:15px;line-height:1.6;">I'll read everything you've sent and come back to you personally. In the meantime, here's how to reach me directly — anytime.</p>
        <div style="margin:0 0 8px;padding:18px 20px;background:#141414;border-left:3px solid #c9a84a;">
          <p style="margin:0 0 8px;color:#9a8c6a;font-size:11px;letter-spacing:1px;text-transform:uppercase;">Reach me directly</p>
          <p style="margin:0;color:#cfc7b5;font-size:14px;">WhatsApp: <a href="https://wa.me/255655260925" style="color:#c9a84a;text-decoration:none;">+255 655 260 925</a></p>
          <p style="margin:6px 0 0;color:#cfc7b5;font-size:14px;">Email: <a href="mailto:${HUGO_EMAIL}" style="color:#c9a84a;text-decoration:none;">${HUGO_EMAIL}</a></p>
        </div>
      </div>
      <div style="padding:18px 36px;background:#141414;border-top:1px solid #2a2a2a;">
        <p style="margin:0;color:#c9a84a;font-size:14px;font-weight:600;">Hugo</p>
        <p style="margin:2px 0 0;color:#7a7363;font-size:12px;">Your partner on the ground in Tanzania.</p>
      </div>
    </div>
  </body></html>`
}

async function sendEmail(payload: {
  from: string
  to: string
  subject: string
  html: string
  reply_to?: string
}) {
  const key = process.env.RESEND_API_KEY
  if (!key) throw new Error("RESEND_API_KEY is not configured")
  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
  if (!res.ok) {
    const detail = await res.text().catch(() => "")
    throw new Error(`Resend ${res.status}: ${detail}`)
  }
  return res.json()
}

const app = new Hono()
  .basePath('api')
  .use(cors({ origin: (origin) => origin ?? "*", credentials: true, exposeHeaders: ["set-auth-token"] }))
  .get('/ping', (c) => c.json({ message: `Pong! ${Date.now()}` }, 200))
  .get('/health', (c) => c.json({ status: 'ok' }, 200))
  .post('/enquiry', async (c) => {
    let body: unknown
    try {
      body = await c.req.json()
    } catch {
      return c.json({ ok: false, error: "Invalid request body" }, 400)
    }

    const parsed = enquirySchema.safeParse(body)
    if (!parsed.success) {
      const msg = parsed.error.issues[0]?.message ?? "Invalid enquiry"
      return c.json({ ok: false, error: msg }, 400)
    }
    const data = parsed.data

    // ===== Partner / travel-agent enquiry =====
    if (data.source === "partner-enquiry") {
      try {
        // 1. Notify Hugo's partner inbox — reply-to goes to the agent.
        await sendEmail({
          from: ENQUIRY_FROM,
          to: PARTNER_TO,
          reply_to: data.email,
          subject: `New partner enquiry — ${data.agency || data.name}`,
          html: partnerBusinessHtml(data),
        })

        // 2. Personal auto-reply FROM Hugo so it feels human.
        try {
          await sendEmail({
            from: HUGO_FROM,
            to: data.email,
            reply_to: HUGO_EMAIL,
            subject: "Let's build something together — welcome",
            html: partnerCustomerHtml(data),
          })
        } catch (err) {
          console.error("Partner auto-reply failed:", err)
        }

        return c.json({ ok: true }, 200)
      } catch (err) {
        console.error("Partner enquiry send failed:", err)
        return c.json({ ok: false, error: "Could not send your message. Please email partners@junglethrill.africa directly." }, 502)
      }
    }

    try {
      // 1. Notify the business — reply-to goes to the customer.
      await sendEmail({
        from: ENQUIRY_FROM,
        to: ENQUIRY_TO,
        reply_to: data.email,
        subject:
          data.source === "overland-waitlist"
            ? `New JTA Overland interest — ${data.name}`
            : `New safari enquiry — ${data.name}${data.journeyTitle ? ` (${data.journeyTitle})` : ""}`,
        html: businessHtml(data),
      })

      // 2. Auto-reply to the customer. Don't fail the whole request if this bounces.
      try {
        await sendEmail({
          from: ENQUIRY_FROM,
          to: data.email,
          reply_to: ENQUIRY_TO,
          subject: "Your safari enquiry — I'll be in touch shortly",
          html: customerHtml(data),
        })
      } catch (err) {
        console.error("Auto-reply failed:", err)
      }

      return c.json({ ok: true }, 200)
    } catch (err) {
      console.error("Enquiry send failed:", err)
      return c.json({ ok: false, error: "Could not send your enquiry. Please email enquiries@junglethrill.africa directly." }, 502)
    }
  });

export type AppType = typeof app;
export default app;
