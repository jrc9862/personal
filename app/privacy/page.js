import Layout from '../../components/Layout';
import AnimatedPage from '../../components/AnimatedPage';

export const transitionType = 'fade';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy governing collett.land and any application or website that references it.',
};

export default function Privacy() {
  return (
    <Layout>
      <AnimatedPage transitionType={transitionType}>
        <div className="legal">
          <h1>Privacy Policy</h1>
          <p className="legal-date">Effective September 5, 2026</p>

          <section>
            <h2>1. Scope</h2>
            <p>
              This Privacy Policy describes how James Collett (&ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles information in connection with
              the website at collett.land and with any other website, application, product,
              or service that links to or references this Privacy Policy (collectively, the
              &ldquo;Services&rdquo;). By accessing or using any of the Services, you agree
              to this Policy. If you do not agree, do not use the Services.
            </p>
            <p>
              This Policy applies only to the Services. It does not apply to any third-party
              website, platform, or service, including those described in Section 5, each of
              which is governed by its own privacy policy.
            </p>
          </section>

          <section>
            <h2>2. Information You Provide</h2>
            <p>We collect information you choose to give us. Depending on how you use the Services, that may include:</p>
            <ul>
              <li>
                <strong>Contact information.</strong> Your name, email address, phone number,
                and the contents of any message you send us by email or through a form.
              </li>
              <li>
                <strong>Scheduling information.</strong> If you book time with us, the name,
                email address, meeting time, and any responses you provide to the scheduling
                tool.
              </li>
              <li>
                <strong>Newsletter information.</strong> If you subscribe to our newsletter,
                the email address you submit and your engagement with the emails we send.
              </li>
              <li>
                <strong>Messaging information.</strong> If you opt in to receive text
                messages, your mobile number, your consent record, and the contents and
                delivery status of messages exchanged with you.
              </li>
              <li>
                <strong>Anything else you volunteer.</strong> Any other information you
                choose to submit through the Services.
              </li>
            </ul>
          </section>

          <section>
            <h2>3. Information Collected Automatically</h2>
            <p>
              When you access the Services, our hosting and infrastructure providers may
              automatically record technical information, including your IP address, browser
              type and version, device and operating system, referring page, the pages you
              request, and the date and time of your request. This information is used to
              operate, secure, and improve the Services.
            </p>
            <p>
              The Services may use cookies or similar browser storage where necessary to
              function. Third-party services accessible from the Services may set their own
              cookies, which we do not control. Most browsers let you refuse or delete
              cookies; doing so may affect how parts of the Services work. We do not respond
              to &ldquo;Do Not Track&rdquo; browser signals.
            </p>
          </section>

          <section>
            <h2>4. How We Use Information</h2>
            <p>We use the information described above to:</p>
            <ul>
              <li>provide, operate, maintain, and improve the Services;</li>
              <li>respond to your inquiries and communicate with you;</li>
              <li>schedule and conduct meetings you request;</li>
              <li>send messages or newsletters you have asked to receive;</li>
              <li>monitor for and prevent fraud, abuse, and security incidents;</li>
              <li>comply with legal obligations and enforce our terms.</li>
            </ul>
          </section>

          <section>
            <h2>5. Third-Party Services</h2>
            <p>
              The Services rely on third-party providers, and some links take you to
              platforms we do not operate. These currently include, without limitation,
              hosting and content-delivery providers, scheduling tools, email and newsletter
              platforms, messaging and telecommunications providers, and code-hosting and
              social platforms.
            </p>
            <p>
              When you interact with one of these providers, you provide your information
              directly to that provider, and its collection, use, storage, disclosure, and
              security of your information are governed solely by its own privacy policy and
              terms, not by this Policy. We do not control those providers and are not
              responsible for their acts or omissions. We encourage you to review the
              policies of any third-party service before using it.
            </p>
          </section>

          <section>
            <h2>6. Text Messaging</h2>
            <p>
              We send text messages only to individuals who have opted in to receive them.
              Message frequency varies. Message and data rates may apply. You may opt out at
              any time by replying STOP to any message, and you may reply HELP for
              assistance. Carriers are not liable for delayed or undelivered messages.
            </p>
            <p>
              No mobile information will be sold, rented, or shared with third parties or
              affiliates for marketing or promotional purposes. Text messaging originator
              opt-in data and consent are not shared with any third party except the
              subcontractors and providers that help us deliver the messaging service itself.
            </p>
          </section>

          <section>
            <h2>7. How We Share Information</h2>
            <p>We do not sell your personal information. We disclose information only:</p>
            <ul>
              <li>
                to service providers and subcontractors that perform functions on our behalf,
                and only as needed to perform those functions;
              </li>
              <li>
                when required by law, subpoena, court order, or other legal process, or to
                respond to a lawful government request;
              </li>
              <li>
                to establish, exercise, or defend legal claims, or to protect the rights,
                property, or safety of any person;
              </li>
              <li>
                in connection with a merger, acquisition, financing, or sale of assets, in
                which case this Policy will govern the transferred information;
              </li>
              <li>with your consent or at your direction.</li>
            </ul>
          </section>

          <section>
            <h2>8. Retention and Security</h2>
            <p>
              We retain information for as long as needed for the purposes described in this
              Policy or as required by law, and then delete or de-identify it. We use
              reasonable measures to protect the information we hold, but no method of
              transmission or storage is completely secure. We cannot and do not guarantee
              the security of any information you transmit to or through the Services, and
              you do so at your own risk.
            </p>
          </section>

          <section>
            <h2>9. Your Choices and Rights</h2>
            <p>
              You may unsubscribe from newsletters using the link in any message, opt out of
              text messages by replying STOP, and decline to provide information, though some
              features may not work without it.
            </p>
            <p>
              Depending on where you live, you may have rights to request access to,
              correction of, deletion of, or a copy of your personal information, to object
              to or restrict certain processing, or to withdraw consent. You also have the
              right not to receive discriminatory treatment for exercising these rights. To
              make a request, contact us at the address in Section 14. We may need to verify
              your identity before responding, and we will respond within the time required
              by applicable law. Nothing in this Policy waives any right you cannot lawfully
              waive.
            </p>
          </section>

          <section>
            <h2>10. Children</h2>
            <p>
              The Services are not directed to children under 13, and we do not knowingly
              collect personal information from them. If you believe a child has provided us
              information, contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2>11. International Users</h2>
            <p>
              The Services are operated from the United States. If you access them from
              elsewhere, you understand that your information may be transferred to, stored
              in, and processed in the United States and other countries whose data
              protection laws may differ from those of your jurisdiction, and you consent to
              that transfer and processing.
            </p>
          </section>

          <section>
            <h2>12. Changes to This Policy</h2>
            <p>
              We may update this Policy at any time. The revised version takes effect when
              posted, and the effective date above will be updated. Your continued use of the
              Services after a change constitutes acceptance of the revised Policy.
            </p>
          </section>

          <section>
            <h2>13. Use of This Policy by Others</h2>
            <p>
              This Policy is written for the Services we create and maintain. If any other
              person or organization copies, adapts, links to, or otherwise adopts this
              Policy for a website, application, product, or service that we did not create
              and do not maintain, they do so entirely at their own risk and on their own
              behalf.
            </p>
            <p>
              We make no representation or warranty that this Policy is accurate, complete,
              current, lawful, enforceable, or suitable for any other party&rsquo;s purposes,
              and we disclaim all liability arising out of or relating to any such use,
              including any claim that the Policy failed to comply with any law or to protect
              any person. Adopting this Policy creates no relationship between us and the
              adopting party or its users, and imposes no obligation on us with respect to
              that party&rsquo;s data practices. Any party adopting this Policy is solely
              responsible for it and should obtain its own legal advice.
            </p>
          </section>

          <section>
            <h2>14. Contact</h2>
            <p>
              Questions or requests regarding this Policy may be sent to{' '}
              <a href="mailto:james@collett.land">james@collett.land</a>.
            </p>
          </section>
        </div>
      </AnimatedPage>
    </Layout>
  );
}
