import Layout from '../../components/Layout';
import AnimatedPage from '../../components/AnimatedPage';

export const transitionType = 'fade';

export const metadata = {
  title: 'Terms of Use',
  description:
    'Terms of Use governing collett.land and any application or website that references them.',
};

export default function Terms() {
  return (
    <Layout>
      <AnimatedPage transitionType={transitionType}>
        <div className="legal">
          <h1>Terms of Use</h1>
          <p className="legal-date">Effective September 5, 2026</p>

          <section>
            <h2>1. Acceptance and Scope</h2>
            <p>
              These Terms of Use (&ldquo;Terms&rdquo;) are a binding agreement between you
              and James Collett (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              They govern the website at collett.land and any other website, application,
              product, or service that links to or references these Terms (collectively, the
              &ldquo;Services&rdquo;).
            </p>
            <p>
              By accessing or using any of the Services, you agree to these Terms and to our{' '}
              <a href="/privacy">Privacy Policy</a>, which is incorporated by reference. If
              you do not agree, do not access or use the Services.
            </p>
          </section>

          <section>
            <h2>2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use the Services, and old enough to form a
              binding contract in your jurisdiction. By using the Services you represent that
              you meet these requirements and that you are not barred from using them under
              any applicable law.
            </p>
          </section>

          <section>
            <h2>3. Permitted Use</h2>
            <p>
              Subject to these Terms, we grant you a limited, personal, non-exclusive,
              non-transferable, revocable license to access and use the Services for lawful
              personal and informational purposes. All other rights are reserved.
            </p>
          </section>

          <section>
            <h2>4. Prohibited Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>use the Services in violation of any law, regulation, or third-party right;</li>
              <li>
                probe, scan, or test the vulnerability of the Services, or breach or
                circumvent any security or authentication measure;
              </li>
              <li>
                interfere with or disrupt the Services, or impose an unreasonable load on
                them, including through scraping, crawling, or automated data collection
                except as permitted by our robots.txt;
              </li>
              <li>
                reverse engineer, decompile, or attempt to derive the source code of any part
                of the Services, except where that restriction is prohibited by law;
              </li>
              <li>
                impersonate any person or entity or misrepresent your affiliation with anyone;
              </li>
              <li>
                transmit malware, spam, or any material that is unlawful, defamatory,
                harassing, or infringing;
              </li>
              <li>
                use the Services to develop a competing product, or to train machine learning
                or artificial intelligence models, without our prior written consent.
              </li>
            </ul>
          </section>

          <section>
            <h2>5. Intellectual Property</h2>
            <p>
              The Services and their contents, including text, graphics, design, and code,
              are owned by us or our licensors and are protected by intellectual property
              laws. Except as expressly permitted here, you may not copy, modify, distribute,
              publish, or create derivative works from the Services. Source code we release
              under an open source license is governed by that license, which controls over
              these Terms as to that code.
            </p>
          </section>

          <section>
            <h2>6. Your Submissions</h2>
            <p>
              If you send us feedback, suggestions, or other material, you grant us a
              worldwide, perpetual, irrevocable, royalty-free license to use, reproduce,
              modify, and distribute it for any purpose without obligation or compensation to
              you. You represent that you have all rights necessary to grant that license and
              that your submission does not violate any law or third-party right.
            </p>
          </section>

          <section>
            <h2>7. Third-Party Services and Content</h2>
            <p>
              The Services link to and rely on websites, platforms, and providers we do not
              own or control, including hosting, scheduling, email, newsletter, messaging,
              code-hosting, and social platforms. We provide those links and integrations for
              convenience only. We do not endorse, and are not responsible or liable for, any
              third party&rsquo;s content, products, practices, availability, security, or
              handling of your data.
            </p>
            <p>
              Your use of any third-party service is solely between you and that provider and
              is governed by that provider&rsquo;s own terms and privacy policy. You assume
              all risk arising from your use of third-party services and from any collection,
              processing, transmission, storage, loss, or disclosure of your data by them,
              and you release us from all claims arising out of or relating to it.
            </p>
          </section>

          <section>
            <h2>8. Text Messaging</h2>
            <p>
              Text messages are sent only to individuals who have opted in. Message frequency
              varies, and message and data rates may apply. Reply STOP to opt out or HELP for
              assistance. Carriers are not liable for delayed or undelivered messages.
            </p>
          </section>

          <section>
            <h2>9. No Professional Advice</h2>
            <p>
              All content on the Services is provided for general informational purposes
              only. Nothing on the Services is financial, investment, legal, tax, accounting,
              medical, or other professional advice, and nothing on the Services is an offer,
              solicitation, or recommendation to buy or sell any security or to enter into
              any transaction. Any analysis, valuation, opinion, or projection reflects a
              personal view as of its date, may be inaccurate or out of date, and should not
              be relied upon. You are solely responsible for your own decisions and should
              consult a qualified professional before acting. We are not your fiduciary,
              advisor, or agent.
            </p>
          </section>

          <section>
            <h2>10. Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE,&rdquo;
              WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND. TO THE FULLEST EXTENT
              PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS, IMPLIED, AND STATUTORY,
              INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
              PURPOSE, TITLE, ACCURACY, AND NON-INFRINGEMENT.
            </p>
            <p>
              We do not warrant that the Services will be uninterrupted, timely, secure,
              accurate, complete, or error-free, that defects will be corrected, or that the
              Services are free of harmful components. You use the Services entirely at your
              own risk.
            </p>
          </section>

          <section>
            <h2>11. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY
              LOSS OF PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS OPPORTUNITY, ARISING OUT
              OF OR RELATING TO THE SERVICES OR THESE TERMS, WHETHER BASED IN CONTRACT, TORT,
              NEGLIGENCE, STRICT LIABILITY, OR ANY OTHER THEORY, AND WHETHER OR NOT WE HAVE
              BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              THIS EXCLUSION APPLIES TO ANY CLAIM ARISING FROM THE COLLECTION, PROCESSING,
              TRANSMISSION, STORAGE, LOSS, CORRUPTION, UNAUTHORIZED ACCESS TO, OR DISCLOSURE
              OF YOUR DATA, FROM ANY SOURCE, INCLUDING BY ANY THIRD-PARTY PROVIDER.
            </p>
            <p>
              OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES WILL NOT
              EXCEED THE GREATER OF THE AMOUNT YOU PAID US IN THE TWELVE MONTHS BEFORE THE
              EVENT GIVING RISE TO THE CLAIM, OR ONE HUNDRED U.S. DOLLARS ($100).
            </p>
            <p>
              Some jurisdictions do not allow the exclusion of certain warranties or the
              limitation of certain damages. In those jurisdictions, the exclusions and
              limitations above apply only to the maximum extent permitted, and nothing in
              these Terms limits liability that cannot lawfully be limited, including
              liability for fraud, gross negligence, or willful misconduct. The remaining
              provisions remain in full force.
            </p>
          </section>

          <section>
            <h2>12. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless James Collett and his
              affiliates, contractors, and agents from and against any claim, demand, loss,
              liability, damage, cost, or expense, including reasonable attorneys&rsquo; fees,
              arising out of or relating to your use of the Services, your violation of these
              Terms or any law, your infringement of any third-party right, or any content or
              information you submit.
            </p>
          </section>

          <section>
            <h2>13. Availability and Termination</h2>
            <p>
              We may modify, suspend, or discontinue any part of the Services at any time,
              with or without notice, and we may terminate or restrict your access at our
              discretion. Sections 5 through 17 survive any termination.
            </p>
          </section>

          <section>
            <h2>14. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the state in which we maintain our
              principal residence, and by applicable federal law of the United States,
              without regard to conflict of law principles. Any dispute arising out of or
              relating to these Terms or the Services will be brought exclusively in the
              state or federal courts located in that state, and you consent to the personal
              jurisdiction and venue of those courts. If a mandatory consumer protection law
              of your place of residence gives you the right to bring a claim elsewhere or
              under different law, this section does not deprive you of that right.
            </p>
            <p>
              Any claim relating to the Services must be brought within one year after it
              arises, or it is permanently barred, except where a longer period is required
              by law. To the extent permitted by law, you and we each waive any right to a
              jury trial and to participate in a class or representative action.
            </p>
          </section>

          <section>
            <h2>15. Changes to These Terms</h2>
            <p>
              We may revise these Terms at any time. The revised version takes effect when
              posted, and the effective date above will be updated. Your continued use of the
              Services after a change constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2>16. General</h2>
            <p>
              These Terms and the Privacy Policy are the entire agreement between you and us
              regarding the Services and supersede any prior understanding. If any provision
              is held unenforceable, it will be modified to the minimum extent necessary or
              severed, and the remaining provisions will stay in effect. Our failure to
              enforce any provision is not a waiver of it. You may not assign these Terms; we
              may. Nothing in these Terms creates a partnership, joint venture, employment,
              or agency relationship.
            </p>
          </section>

          <section>
            <h2>17. Use of These Terms by Others</h2>
            <p>
              These Terms are written for the Services we create and maintain. If any other
              person or organization copies, adapts, links to, or otherwise adopts these
              Terms for a website, application, product, or service that we did not create
              and do not maintain, they do so entirely at their own risk and on their own
              behalf.
            </p>
            <p>
              We make no representation or warranty that these Terms are accurate, complete,
              current, lawful, enforceable, or suitable for any other party&rsquo;s purposes,
              and we disclaim all liability arising out of or relating to any such use,
              including any claim that the Terms proved unenforceable in whole or in part.
              Adopting these Terms creates no relationship between us and the adopting party
              or its users, and makes us no party to any agreement between them. Any party
              adopting these Terms is solely responsible for them and should obtain its own
              legal advice.
            </p>
          </section>

          <section>
            <h2>18. Contact</h2>
            <p>
              Questions about these Terms may be sent to{' '}
              <a href="mailto:james@collett.land">james@collett.land</a>.
            </p>
          </section>
        </div>
      </AnimatedPage>
    </Layout>
  );
}
