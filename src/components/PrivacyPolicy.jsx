import { Shield, Lock } from "lucide-react";

export default function PrivacyPolicy() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="bg-[#043873] text-white py-20 px-6 text-center">
                <div className="flex justify-center mb-6">
                    <div className="bg-[#4F9CF9] p-4 rounded-full">
                        <Shield size={48} className="text-[#043873]" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-xl text-gray-200">Last Updated: January 2, 2026</p>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6 max-w-4xl mx-auto text-gray-700 leading-relaxed font-sans">

                {/* 1. INTRODUCTION */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">1. INTRODUCTION</h2>
                    <p className="mb-4">
                        This Privacy Policy ("Policy") explains how Crivient ("Crivient", "we", "us", "our", "Company") collects, uses, discloses, and otherwise processes personal data when you visit our website at crivient.com, create an account, use our cloud-based Customer Relationship Management (CRM) software and services (collectively, the "Services").
                    </p>
                    <p className="mb-4">
                        This Policy is addressed to individuals who interact with us, including customers, prospective customers, website visitors, trial users, and end-users of the Services ("you"). Please note that not all provisions of this Policy apply to all individuals, as this depends on your specific relationship with Crivient.
                    </p>
                    <p className="mb-2">This Policy should be read in conjunction with:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Our Terms of Service</li>
                        <li>Paddle's Privacy Policy (<a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-[#4F9CF9] hover:underline">https://www.paddle.com/legal/privacy</a>)</li>
                        <li>Paddle's Checkout Buyer Terms and Conditions</li>
                    </ul>
                    <p className="mb-4">We encourage you to read this Policy carefully. This Policy may be updated from time to time to reflect changes in our practices, technology, or applicable law. We will notify you of material changes where required by law.</p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 2. INFORMATION WE COLLECT */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">2. INFORMATION WE COLLECT</h2>
                    <p className="mb-4">We collect personal data from various sources and in different ways:</p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">2.1 Information You Provide Directly</h3>
                    <p className="mb-2">When you interact with Crivient, you may provide personal data including:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Identification and Contact Information:</strong> Name, email address, phone number, mailing address, company name, job title, business registration details</li>
                        <li><strong>Account Information:</strong> Login credentials, password, account preferences, workspace settings, user roles, profile information</li>
                        <li><strong>Billing Information:</strong> Billing address, company VAT/tax identification number, payment method details (processed securely through Paddle)</li>
                        <li><strong>Communication Data:</strong> Support tickets, customer inquiries, feedback, survey responses, communication preferences</li>
                        <li><strong>CRM Business Data:</strong> Customer records, contacts, deals, notes, tasks, communication history, and other business data you or your organization upload or enter into the CRM</li>
                        <li><strong>Authentication Data:</strong> Two-factor authentication codes, security questions and answers, identification documents (for compliance purposes)</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">2.2 Information Collected Automatically</h3>
                    <p className="mb-2">When you use our Services or visit our website, we automatically collect:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Technical Data:</strong> Internet Protocol (IP) address, browser type and version, operating system, device identifiers, device characteristics</li>
                        <li><strong>Usage Data:</strong> Pages visited, features accessed, actions taken, date and time of visits, session duration, clickstream data, error logs</li>
                        <li><strong>Location Data:</strong> General geographic location based on IP address (country and city level)</li>
                        <li><strong>Cookie and Tracking Data:</strong> Information collected through cookies, web beacons, pixels, and similar technologies (see Section 9)</li>
                        <li><strong>Communication Metadata:</strong> Records of support interactions, system notifications, email delivery status</li>
                        <li><strong>Performance Data:</strong> Application crash reports, system performance metrics, diagnostics information</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">2.3 Information from Third Parties</h3>
                    <p className="mb-2">We may receive personal data about you from:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Payment Processors:</strong> Paddle provides transaction and billing information</li>
                        <li><strong>Third-Party Service Providers:</strong> Analytics providers, hosting services, communication platforms</li>
                        <li><strong>Publicly Available Sources:</strong> Public social media profiles, business directories, public records</li>
                        <li><strong>Your Organization:</strong> If you are an employee or authorized user of an organization's account, your organization may provide personal data about you</li>
                        <li><strong>Legal Authorities:</strong> When legally required to disclose information in response to lawful requests</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">2.4 Sensitive Personal Data</h3>
                    <p className="mb-4">
                        Crivient does not intentionally collect sensitive personal data (such as racial or ethnic origin, political opinions, religious beliefs, trade union membership, genetic data, biometric data, health information, or sexual orientation) in the ordinary course of business.
                    </p>
                    <p className="mb-2">If you provide sensitive personal data, you warrant that:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>You have a lawful basis to disclose such data to us</li>
                        <li>A valid legal basis applies to our Processing of that sensitive data</li>
                        <li>You have obtained any required consents from affected third parties</li>
                    </ul>
                    <p className="mb-4">Where processing sensitive personal data is necessary, we rely on explicit consent, legal obligation, or other lawful bases under applicable data protection laws.</p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 3. LEGAL BASIS FOR PROCESSING */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">3. LEGAL BASIS FOR PROCESSING</h2>
                    <p className="mb-4">
                        Crivient processes personal data only when there is a lawful basis under applicable data protection laws, including GDPR, UK GDPR, CCPA, and similar regulations. Our primary legal bases include:
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">3.1 Performance of Contract</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Providing, maintaining, and improving the CRM Services</li>
                        <li>Processing orders and managing subscriptions</li>
                        <li>Delivering customer support</li>
                        <li>Sending service-related communications and notifications</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">3.2 Compliance with Legal Obligation</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Fulfilling regulatory compliance requirements</li>
                        <li>Maintaining tax and accounting records</li>
                        <li>Responding to lawful requests from authorities</li>
                        <li>Meeting Know Your Customer (KYC) and Anti-Money Laundering (AML) requirements</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">3.3 Legitimate Interests</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Securing and protecting our Services, systems, and data</li>
                        <li>Detecting, preventing, and investigating fraud or misuse</li>
                        <li>Improving and optimizing our Services and user experience</li>
                        <li>Conducting business analytics and market research</li>
                        <li>Managing our business operations and legal compliance</li>
                        <li>Protecting our rights, privacy, safety, or property</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">3.4 Consent</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Processing marketing communications (where required by applicable law)</li>
                        <li>Placing non-essential cookies and tracking technologies</li>
                        <li>Processing certain types of sensitive personal data</li>
                        <li>Using your personal data for purposes beyond the primary purpose (where required)</li>
                    </ul>
                    <p className="mb-4">We will obtain your prior consent before using personal data for purposes where consent is required by applicable law.</p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 4. HOW WE USE YOUR INFORMATION */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">4. HOW WE USE YOUR INFORMATION</h2>
                    <p className="mb-4">Crivient processes personal data for the following purposes:</p>

                    <div className="space-y-6">
                        <div>
                            <p className="font-bold text-[#043873]">4.1 Delivery of Services</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Creating and managing user accounts and workspaces</li>
                                <li>Providing CRM features, functionality, and integrations</li>
                                <li>Processing, storing, and maintaining your CRM business data</li>
                                <li>Delivering technical support and customer service</li>
                                <li>Sending service-related notices, updates, and security alerts</li>
                                <li>Managing subscriptions, licenses, and access controls</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">4.2 Billing and Payment Processing</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Processing subscription orders and payments through Paddle</li>
                                <li>Managing billing cycles, invoices, and receipts</li>
                                <li>Calculating and applying taxes and VAT</li>
                                <li>Handling refunds, chargebacks, and payment disputes</li>
                                <li>Maintaining financial and accounting records</li>
                                <li>Conducting compliance and fraud checks</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">4.3 Communications</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Responding to customer inquiries and support requests</li>
                                <li>Sending transactional emails (confirmations, receipts, password resets)</li>
                                <li>Notifying you of changes to our Services, terms, or policies</li>
                                <li>Sending administrative messages and security alerts</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">4.4 Marketing and Promotional Activities</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Sending newsletters, product updates, and promotional content (with your consent where required)</li>
                                <li>Informing you about new features, services, or special offers</li>
                                <li>Conducting marketing campaigns and analyzing campaign performance</li>
                                <li>Personalizing marketing content based on your interests and usage patterns</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">4.5 Service Improvement and Analytics</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Analyzing usage patterns and user behavior to improve the CRM</li>
                                <li>Identifying technical issues, bugs, and performance problems</li>
                                <li>Testing new features and functionality</li>
                                <li>Conducting user research, surveys, and feedback collection</li>
                                <li>Creating aggregated, anonymized analytics and insights</li>
                                <li>Improving website design, functionality, and user experience</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">4.6 Compliance and Legal Obligations</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Verifying your identity and compliance status</li>
                                <li>Screening against sanctions lists and legal restrictions</li>
                                <li>Maintaining records for tax, accounting, and regulatory purposes</li>
                                <li>Responding to lawful requests from authorities</li>
                                <li>Establishing and defending legal claims</li>
                                <li>Investigating and preventing fraud, abuse, and violations of our policies</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">4.7 Security and Fraud Prevention</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Detecting, preventing, and investigating fraud, abuse, and unauthorized access</li>
                                <li>Protecting against security threats and cyber attacks</li>
                                <li>Maintaining access logs and audit trails</li>
                                <li>Verifying user identity and authorization</li>
                                <li>Enforcing our Terms of Service and other agreements</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">4.8 Business Operations</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Managing our vendor and supplier relationships</li>
                                <li>Conducting recruitment and job applications</li>
                                <li>Planning and conducting business analysis</li>
                                <li>Transferring data in connection with mergers, acquisitions, or sale of business</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 5. HOW WE SHARE YOUR INFORMATION */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">5. HOW WE SHARE YOUR INFORMATION</h2>
                    <p className="mb-4">Crivient does not sell your personal data to third parties. However, we may disclose personal data to the following categories of recipients:</p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">5.1 Paddle (Payment Processing)</h3>
                    <p className="mb-4">When you purchase a subscription, we share necessary personal data with Paddle as our Merchant of Record, including:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Name, email address, and contact information</li>
                        <li>Billing address and tax identification information</li>
                        <li>IP address and transaction data</li>
                        <li>Payment and subscription details</li>
                    </ul>
                    <p className="mb-4">
                        Paddle processes this data as an independent data controller under its own Privacy Policy (<a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-[#4F9CF9] hover:underline">https://www.paddle.com/legal/privacy</a>). Paddle is responsible for compliance with tax, financial regulations, and other merchant requirements. We recommend reviewing Paddle's Privacy Policy to understand how Paddle handles your data.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">5.2 Service Providers and Processors</h3>
                    <p className="mb-2">We engage third-party service providers to assist with providing our Services. These providers are subject to written contracts requiring them to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Process personal data only as instructed by Crivient</li>
                        <li>Maintain confidentiality and security of your data</li>
                        <li>Implement appropriate technical and organizational safeguards</li>
                        <li>Comply with applicable data protection laws</li>
                    </ul>
                    <p className="mb-2">Common categories of processors include:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Cloud hosting and infrastructure providers</li>
                        <li>Email delivery and communication platforms</li>
                        <li>Analytics and monitoring services</li>
                        <li>Customer support and ticketing systems</li>
                        <li>Security and fraud prevention services</li>
                        <li>Payment and billing processors (Paddle)</li>
                        <li>Authentication and identity verification providers</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">5.3 Professional Advisers</h3>
                    <p className="mb-4">
                        We may disclose personal data to professional advisers who provide legal, accounting, audit, tax, or consulting services, subject to confidentiality obligations.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">5.4 Legal and Regulatory Authorities</h3>
                    <p className="mb-2">We may disclose personal data to the extent required or permitted by law:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>In response to lawful requests from government agencies, law enforcement, or courts</li>
                        <li>To comply with legal obligations or court orders</li>
                        <li>To enforce our Terms of Service and other agreements</li>
                        <li>To protect our legal rights, privacy, safety, or property</li>
                        <li>To prevent or investigate fraud, abuse, or security threats</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">5.5 Business Transfers</h3>
                    <p className="mb-4">
                        If Crivient is involved in a merger, acquisition, bankruptcy, asset sale, or similar business transaction, personal data may be transferred as part of that transaction. We will provide notice and seek consent where required by applicable law.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">5.6 Your Organization</h3>
                    <p className="mb-4">
                        If you are an employee or authorized user of an organization's account, we may share your personal data with authorized administrators of that organization.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">5.7 Third-Party Integrations</h3>
                    <p className="mb-4">
                        If you authorize integrations with third-party applications or services, we may share necessary data with those third parties in accordance with the integration terms.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">5.8 Aggregated and Anonymized Data</h3>
                    <p className="mb-4">
                        We may share aggregated, de-identified, or anonymized data that cannot reasonably identify you with third parties for analytics, research, marketing, and other purposes.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 6. INTERNATIONAL DATA TRANSFERS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">6. INTERNATIONAL DATA TRANSFERS</h2>
                    <p className="mb-4">
                        Crivient and its service providers may process your personal data in countries outside your country of residence, including outside the European Economic Area (EEA), United Kingdom (UK), or other jurisdictions where stricter data protection laws apply.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">6.1 Transfer Mechanisms</h3>
                    <p className="mb-2">Where we transfer personal data internationally to countries without an adequacy decision, we rely on appropriate safeguards including:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Standard Contractual Clauses (SCCs): Contracts approved by relevant data protection authorities</li>
                        <li>Adequacy Decisions: Transfers to countries deemed to have adequate data protection</li>
                        <li>Binding Corporate Rules: Where applicable, internal company policies</li>
                        <li>Supplementary Safeguards: Additional measures to ensure adequate protection</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">6.2 Your Right to Information</h3>
                    <p className="mb-4">
                        You have the right to request information about the specific safeguards in place for international transfers of your personal data. Please contact us using the details in Section 14.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">6.3 Data Processing Arrangements</h3>
                    <p className="mb-4">
                        All international transfers of personal data are conducted in compliance with applicable data protection laws, including GDPR Chapter 5 (International Transfers).
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 7. DATA RETENTION */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">7. DATA RETENTION</h2>
                    <p className="mb-4">
                        Crivient retains personal data only for as long as necessary to fulfill the purposes described in this Policy, or as required by applicable law.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">7.1 Retention Periods by Data Category</h3>

                    <div className="space-y-6">
                        <div>
                            <p className="font-bold text-[#043873]">Account and Service Data:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Retained while your account is active and for a reasonable period after account termination (typically 12 months) to allow reactivation, resolve disputes, or fulfill remaining obligations</li>
                                <li>Archived thereafter for legal and compliance purposes</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">Billing and Transaction Data:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Retained for the duration required by applicable tax and financial laws (typically 6-7 years for tax purposes)</li>
                                <li>Maintained separately and securely after account closure</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">Support and Communication Data:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Retained for 12-24 months from the date of the last communication</li>
                                <li>Longer retention for data needed to establish or defend legal claims</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">CRM Business Data (Your Customer Data):</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Retained for as long as your account is active</li>
                                <li>Deleted upon account termination, subject to legal hold requirements and contractual obligations</li>
                                <li>You are responsible for backing up critical data</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">Usage and Analytics Data:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Aggregated analytics retained indefinitely</li>
                                <li>Individual-level usage logs retained for 12 months</li>
                                <li>Exception: data needed for security investigations retained longer</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">Marketing and Communication Preferences:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Retained to honor opt-out and preference selections (indefinitely)</li>
                                <li>Necessary to comply with unsubscribe requests and communications regulations</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">Cookies and Tracking Data:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Session cookies deleted when browser closes</li>
                                <li>Persistent cookies retain for up to 24 months (configurable)</li>
                                <li>Analytics data aggregated after 12 months</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">7.2 Legal Hold and Litigation</h3>
                    <p className="mb-4">
                        If legal proceedings are contemplated or initiated, we retain personal data necessary to establish, exercise, or defend legal claims, even if the normal retention period has expired.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">7.3 Deletion and Destruction</h3>
                    <p className="mb-2">Upon expiration of the retention period, personal data is either:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Securely deleted or destroyed in a manner that prevents recovery</li>
                        <li>Anonymized or de-identified so it cannot be linked to you</li>
                        <li>Retained if required by applicable law, court order, or legal obligation</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">7.4 Your Right to Deletion</h3>
                    <p className="mb-4">
                        You may request deletion of your personal data in accordance with Section 10 (Your Rights). Deletion requests are subject to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Legal retention obligations</li>
                        <li>Contractual requirements</li>
                        <li>Legitimate business interests</li>
                        <li>Our need to establish or defend legal claims</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 8. COOKIES AND TRACKING TECHNOLOGIES */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">8. COOKIES AND TRACKING TECHNOLOGIES</h2>
                    <p className="mb-4">
                        Crivient uses cookies and similar tracking technologies to operate the website, enhance user experience, and understand how our Services are used.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">8.1 Types of Cookies We Use</h3>
                    <div className="space-y-6">
                        <div>
                            <p className="font-bold text-[#043873]">Strictly Necessary Cookies:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Essential for login, authentication, and session management</li>
                                <li>Required for security, fraud prevention, and service integrity</li>
                                <li>Cannot be disabled without affecting core functionality</li>
                                <li>No consent required</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">Performance and Analytics Cookies:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Collect information about how users interact with our website and Services</li>
                                <li>Help us identify issues, improve performance, and understand usage patterns</li>
                                <li>Used with analytics providers such as Google Analytics</li>
                                <li>Require consent in certain jurisdictions</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">Preference Cookies:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Remember your settings, language preferences, and customizations</li>
                                <li>Enable personalized user experience</li>
                                <li>Require consent in certain jurisdictions</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">Marketing and Advertising Cookies:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Used to deliver targeted advertising and marketing content</li>
                                <li>Track campaign effectiveness and user engagement</li>
                                <li>Shared with advertising partners and social media platforms</li>
                                <li>Require explicit consent</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">8.2 Cookie Policy</h3>
                    <p className="mb-4">
                        For detailed information about cookies, including how to manage and disable them, please refer to our Cookie Policy.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">8.3 Your Cookie Choices</h3>
                    <p className="mb-2">Most web browsers allow you to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>View and delete cookies</li>
                        <li>Block all cookies or specific types of cookies</li>
                        <li>Receive notification when cookies are placed</li>
                    </ul>
                    <p className="mb-4">Please note that disabling strictly necessary cookies may prevent parts of our website and Services from functioning properly.</p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">8.4 Similar Technologies</h3>
                    <p className="mb-2">In addition to cookies, we use similar tracking technologies including:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Web beacons and pixels</li>
                        <li>Local storage (localStorage, sessionStorage)</li>
                        <li>JavaScript tags and pixel tags</li>
                        <li>Mobile analytics tools</li>
                        <li>SDK-based tracking in applications</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 9. SECURITY */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">9. SECURITY</h2>
                    <p className="mb-4">
                        Crivient implements appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, destruction, and other risks.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">9.1 Security Measures</h3>
                    <p className="mb-2">Our security measures include:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Encryption:</strong> Data in transit is encrypted using TLS/SSL protocols; sensitive data at rest is encrypted</li>
                        <li><strong>Access Controls:</strong> Role-based access controls and least-privilege principles</li>
                        <li><strong>Authentication:</strong> Strong password requirements, multi-factor authentication options</li>
                        <li><strong>Network Security:</strong> Firewalls, intrusion detection systems, DDoS protection</li>
                        <li><strong>Data Segregation:</strong> Logical separation of customer data</li>
                        <li><strong>Audit Logging:</strong> Comprehensive logging and monitoring of access and changes</li>
                        <li><strong>Regular Testing:</strong> Security audits, vulnerability assessments, and penetration testing</li>
                        <li><strong>Incident Response:</strong> Procedures for responding to and reporting security incidents</li>
                        <li><strong>Employee Training:</strong> Security awareness and data protection training for staff</li>
                        <li><strong>Vendor Management:</strong> Security requirements and audits of service providers</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">9.2 Responsibility</h3>
                    <p className="mb-2">
                        While we implement strong security measures, no method of transmission over the internet or electronic storage is completely secure. You are responsible for:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Maintaining the confidentiality of your login credentials</li>
                        <li>Ensuring secure transmission of your personal data to us</li>
                        <li>Reporting suspected security breaches or unauthorized access</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">9.3 Security Incident Notification</h3>
                    <p className="mb-4">
                        In the event of a confirmed data breach affecting your personal data, we will notify affected individuals in accordance with applicable law (typically within 72 hours for GDPR-regulated entities).
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 10. YOUR RIGHTS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">10. YOUR RIGHTS</h2>
                    <p className="mb-4">
                        You may have certain rights with respect to your personal data depending on your location and applicable law, including GDPR, UK GDPR, CCPA, and similar legislation.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">10.1 European Union / European Economic Area Rights</h3>
                    <p className="mb-2">If you are located in the EU/EEA, you may have the following rights:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Right of Access:</strong> You have the right to obtain confirmation of whether Crivient processes your personal data and to receive a copy of your personal data in a structured, commonly used format.</li>
                        <li><strong>Right to Rectification:</strong> You have the right to request correction of inaccurate, incomplete, or outdated personal data.</li>
                        <li>
                            <strong>Right to Erasure ("Right to be Forgotten"):</strong> You have the right to request deletion of your personal data in certain circumstances, including when:
                            <ul className="list-circle pl-6 mt-1 space-y-1 text-gray-600">
                                <li>Data is no longer necessary for the purpose it was collected</li>
                                <li>You withdraw consent and no other legal basis applies</li>
                                <li>You object to processing based on legitimate interests</li>
                                <li>Data has been unlawfully processed</li>
                                <li>Data must be deleted to comply with legal obligation</li>
                            </ul>
                        </li>
                        <li><strong>Right to Restrict Processing:</strong> You have the right to request restriction of processing (suspension of use) while you contest accuracy, or on other lawful grounds.</li>
                        <li><strong>Right to Data Portability:</strong> You have the right to receive your personal data in a structured, commonly used, machine-readable format and to transmit it to another controller, where technically feasible.</li>
                        <li><strong>Right to Object:</strong> You have the right to object to processing of your personal data on grounds of legitimate interests or for direct marketing purposes.</li>
                        <li><strong>Rights Related to Automated Decision-Making:</strong> You have the right to request human review of decisions based solely on automated processing that produces legal or similarly significant effects.</li>
                        <li><strong>Right to Withdraw Consent:</strong> Where processing is based on consent, you may withdraw consent at any time. Withdrawal does not affect the lawfulness of processing prior to withdrawal.</li>
                        <li><strong>Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with your local data protection authority if you believe your rights have been violated.</li>
                    </ul>
                    <p className="mb-4">Exceptions apply where we must retain data for legal, contractual, or legitimate interests.</p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">10.2 United Kingdom Rights</h3>
                    <p className="mb-4">
                        UK residents have similar rights under the UK GDPR and UK Data Protection Act 2018, as described above in Section 10.1.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">10.3 California Consumer Privacy Act (CCPA) Rights</h3>
                    <p className="mb-2">If you are a California resident, you may have the following rights under CCPA:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>
                            <strong>Right to Know:</strong> You have the right to request that we disclose:
                            <ul className="list-circle pl-6 mt-1 space-y-1 text-gray-600">
                                <li>The categories and specific pieces of personal information collected</li>
                                <li>The sources of such personal information</li>
                                <li>Our business purposes for collecting it</li>
                                <li>The categories of third parties with whom we share it</li>
                            </ul>
                        </li>
                        <li><strong>Right to Delete:</strong> You have the right to request deletion of personal information collected from you, subject to certain exceptions (e.g., information needed to complete transactions, comply with law, or enable internal uses reasonably aligned with your expectations).</li>
                        <li><strong>Right to Correct:</strong> You have the right to request correction of inaccurate personal information.</li>
                        <li><strong>Right to Opt-Out of Sale or Sharing:</strong> Crivient does not sell or share your personal information as defined by CCPA. If this changes, we will provide an opt-out mechanism.</li>
                        <li><strong>Right to Limit Use of Sensitive Personal Information:</strong> You have the right to limit our use and disclosure of sensitive personal information to what is necessary to provide requested services.</li>
                        <li><strong>Right to Non-Discrimination:</strong> You have the right to be free from discrimination for exercising your CCPA rights.</li>
                        <li><strong>Authorized Agent:</strong> You may appoint an authorized agent to submit requests on your behalf. Your agent must provide proof of authorization.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">10.4 Other State and International Rights</h3>
                    <p className="mb-4">
                        Residents of other states/countries may have similar rights under applicable privacy laws. Please contact us for information specific to your jurisdiction.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">10.5 How to Exercise Your Rights</h3>
                    <p className="mb-4">To exercise any of these rights, please submit a request via:</p>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-6">
                        <p className="mb-2"><strong>Email:</strong> <a href="mailto:admin@crivient.com" className="text-[#4F9CF9] hover:underline">admin@crivient.com</a></p>
                        <p className="mb-2"><strong>Mailing Address:</strong><br />
                            Crivient<br />
                            476/42 DHAN NADI VIJAY SINGH PATHIK NAGAR<br />
                            AJMER, RAJASTHAN 305001<br />
                            India</p>
                    </div>
                    <p className="mb-2">Your Request Should Include:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Your full name and email address associated with your account</li>
                        <li>A clear description of the right you wish to exercise</li>
                        <li>Any relevant account or transaction details</li>
                        <li>A signature or declaration of accuracy (depending on jurisdiction)</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">10.6 Verification and Response</h3>
                    <p className="mb-4">
                        We will verify your identity before processing your request. We may require additional information to confirm your identity and association with an account. Response timelines:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>EU/UK/similar: 30 days (extendable to 60-90 days for complex requests)</li>
                        <li>California/similar: 45 days (with one 45-day extension period)</li>
                        <li>Other jurisdictions: As required by applicable law</li>
                    </ul>
                    <p className="mb-4">We will respond to all valid requests within applicable timeframes. If we cannot fulfill your request, we will explain the legal basis for denial.</p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">10.7 Right to Appeal</h3>
                    <p className="mb-4">
                        You have the right to appeal our decision regarding your rights request. Contact us at the address above to submit an appeal.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 11. CHILDREN'S PRIVACY */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">11. CHILDREN'S PRIVACY</h2>
                    <p className="mb-4">
                        Crivient's Services are intended for business and professional use and are not directed to children under the age of 16 (or the applicable age of digital consent in your jurisdiction).
                    </p>
                    <p className="mb-4">
                        Crivient does not knowingly collect personal data from children. Accounts should not be created or used by individuals under 16 years of age.
                    </p>
                    <p className="mb-2">
                        If we become aware that a child has provided personal data, we will take steps to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Delete such data without undue delay</li>
                        <li>Terminate any associated accounts</li>
                        <li>Notify the child's parent or guardian where appropriate</li>
                    </ul>
                    <p className="mb-4">
                        If you are a parent or guardian and believe a child has provided personal data to Crivient, please contact us immediately at <a href="mailto:admin@crivient.com" className="text-[#4F9CF9] hover:underline">admin@crivient.com</a>.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 12. THIRD-PARTY LINKS AND SERVICES */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">12. THIRD-PARTY LINKS AND SERVICES</h2>
                    <p className="mb-4">
                        Crivient's website and Services may contain links to third-party websites, applications, integrations, or services that are not operated by Crivient.
                    </p>
                    <p className="mb-4">
                        Crivient is not responsible for the privacy practices, data security, or content of third-party services. Your use of third-party services is governed by their own terms and privacy policies, which we encourage you to review.
                    </p>
                    <p className="mb-4">
                        When you authorize integrations with third-party applications, you are granting permission for data to be shared with those third parties. The third party's privacy policy governs their use of such data.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 13. CHANGES TO THIS PRIVACY POLICY */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">13. CHANGES TO THIS PRIVACY POLICY</h2>
                    <p className="mb-4">
                        Crivient may update this Privacy Policy from time to time to reflect:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Changes in our data processing practices</li>
                        <li>Changes in applicable law or regulatory requirements</li>
                        <li>New features or services</li>
                        <li>Feedback from users and data subjects</li>
                        <li>Business needs</li>
                    </ul>
                    <p className="mb-2">Notification of Changes:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Material changes will be communicated via email to your registered email address</li>
                        <li>We may also post a notice on our website</li>
                        <li>Your continued use of Crivient after changes become effective constitutes acceptance of the revised Policy</li>
                    </ul>
                    <p className="mb-4"><strong>Effective Date:</strong> Changes become effective on the date posted on this page as the "Last Updated" date.</p>
                    <p className="mb-4">We encourage you to review this Policy regularly to stay informed about how we handle your personal data.</p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 14. CONTACT US */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">14. CONTACT US</h2>
                    <p className="mb-4">
                        If you have questions about this Privacy Policy, wish to exercise your rights, or have concerns about our data processing practices, please contact us:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-4">
                        <p className="mb-2"><strong>Email:</strong> <a href="mailto:admin@crivient.com" className="text-[#4F9CF9] hover:underline">admin@crivient.com</a></p>
                        <p className="mb-2"><strong>Mailing Address:</strong><br />
                            Crivient<br />
                            476/42 DHAN NADI VIJAY SINGH PATHIK NAGAR<br />
                            AJMER, RAJASTHAN 305001<br />
                            India</p>
                    </div>
                    <p className="mb-2"><strong>Response Time:</strong> We will respond to inquiries within 10 business days. For data subject rights requests, we will respond according to the timelines specified in Section 10.6.</p>
                    <p className="mb-4"><strong>Escalation:</strong> If you are not satisfied with our response, you have the right to lodge a complaint with your local data protection authority.</p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 15. PADDLE MERCHANT OF RECORD */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">15. PADDLE MERCHANT OF RECORD</h2>
                    <p className="mb-4">
                        Crivient uses Paddle as a Merchant of Record to process payments and manage billing. This means:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Paddle's Role:</strong> Paddle handles payment processing, tax calculation and collection, invoicing, and compliance with financial regulations</li>
                        <li><strong>Data Sharing:</strong> Your personal data (name, email, billing address, tax ID, IP address) is shared with Paddle to facilitate transactions</li>
                        <li><strong>Paddle's Privacy:</strong> Paddle processes this data as an independent data controller under its own Privacy Policy: <a href="https://www.paddle.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-[#4F9CF9] hover:underline">https://www.paddle.com/legal/privacy</a></li>
                        <li><strong>Buyer Terms:</strong> All purchases are subject to Paddle's Checkout Buyer Terms and Conditions: <a href="https://www.paddle.com/legal/checkout-buyer-terms" target="_blank" rel="noopener noreferrer" className="text-[#4F9CF9] hover:underline">https://www.paddle.com/legal/checkout-buyer-terms</a></li>
                        <li><strong>Data Processing:</strong> Paddle is responsible for compliance with financial regulations, tax laws, and relevant data protection requirements for payment data</li>
                        <li><strong>Your Rights with Paddle:</strong> You may exercise rights regarding your data with Paddle separately, in addition to rights with Crivient</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 16. ADDITIONAL INFORMATION FOR BUSINESS USERS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">16. ADDITIONAL INFORMATION FOR BUSINESS USERS</h2>
                    <p className="mb-4">If you are using Crivient on behalf of an organization:</p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">Your Organization as Data Controller</h3>
                    <p className="mb-2">If your organization (employer, customer, or other entity) has contracted with Crivient, your organization may be the data controller for CRM data you process. Your organization is responsible for:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Providing notice about data processing to affected individuals</li>
                        <li>Obtaining necessary consents and legal bases</li>
                        <li>Establishing data processing agreements (DPA) with Crivient if required</li>
                        <li>Responding to data subject rights requests</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">Data Processing Agreement</h3>
                    <p className="mb-4">
                        Organizations requiring a Data Processing Agreement (DPA) for GDPR, UK GDPR, or similar compliance should contact <a href="mailto:admin@crivient.com" className="text-[#4F9CF9] hover:underline">admin@crivient.com</a>. We maintain a standard DPA template available upon request.
                    </p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">Sub-processors</h3>
                    <p className="mb-4">
                        Crivient may engage sub-processors for hosting, analytics, and other services. We maintain an updated list of sub-processors available upon request.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 17. DISPUTE RESOLUTION */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">17. DISPUTE RESOLUTION</h2>
                    <p className="mb-4">If you have a dispute regarding Crivient's data processing practices:</p>
                    <ol className="list-decimal pl-6 mb-4 space-y-2">
                        <li><strong>Contact Us:</strong> Email <a href="mailto:admin@crivient.com" className="text-[#4F9CF9] hover:underline">admin@crivient.com</a> with details of the dispute</li>
                        <li><strong>Good Faith Discussion:</strong> We will attempt to resolve the matter through good faith discussion within 30 days</li>
                        <li><strong>Escalation:</strong> If unresolved, you may lodge a complaint with your local data protection authority</li>
                        <li><strong>Jurisdiction:</strong> This Privacy Policy and our handling of personal data is governed by applicable data protection laws in your jurisdiction</li>
                    </ol>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 18. DEFINITIONS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">18. DEFINITIONS</h2>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Personal Data:</strong> Any information relating to an identified or identifiable natural person (data subject).</li>
                        <li><strong>Processing:</strong> Any operation performed on personal data, including collection, recording, organization, structuring, storage, adaptation, retrieval, consultation, use, transmission, erasure, or destruction.</li>
                        <li><strong>Data Controller:</strong> The entity that determines the purposes and means of Processing.</li>
                        <li><strong>Data Processor:</strong> An entity that processes personal data on behalf of a controller under instruction.</li>
                        <li><strong>Sensitive Personal Data:</strong> Personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, trade union membership, genetic data, biometric data for identification purposes, health data, or data concerning sex life or sexual orientation.</li>
                        <li><strong>GDPR:</strong> General Data Protection Regulation (EU Regulation 2016/679).</li>
                        <li><strong>UK GDPR:</strong> UK General Data Protection Regulation as retained in UK law following Brexit.</li>
                        <li><strong>CCPA:</strong> California Consumer Privacy Act (California Civil Code §1798.100 et seq.), as amended by the California Privacy Rights Act (CPRA).</li>
                        <li><strong>Data Subject:</strong> The individual to whom personal data relates.</li>
                        <li><strong>Data Protection Authority:</strong> The independent public authority responsible for monitoring compliance with data protection laws in a jurisdiction (e.g., ICO in UK, local data protection office in EU member states).</li>
                    </ul>
                </div>

            </section>

            {/* Footer Note */}
            <div className="bg-gray-50 text-center py-6 px-6 border-t border-gray-200">
                <p className="text-gray-500 font-medium">END OF PRIVACY POLICY</p>
                <p className="text-gray-400 text-sm mt-2">
                    This Privacy Policy is effective as of January 2, 2026. If you have any questions, please contact us at admin@crivient.com.
                </p>
            </div>
        </div>
    );
}
