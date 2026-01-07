import { FileText } from "lucide-react";

export default function TermsServices() {
    return (
        <div className="bg-[#111827]">
            {/* Header Section */}
            <section className="bg-[#020617] text-white py-20 px-6 text-center">
                <div className="flex justify-center mb-6">
                    <div className="bg-gray-800 p-4 rounded-full">
                        <FileText size={48} className="text-[#D946EF]" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
                <p className="text-xl text-gray-200">Last Updated: January 2, 2026</p>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6 max-w-4xl mx-auto text-gray-300 leading-relaxed font-sans">

                {/* 1. WHO WE ARE */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">1. WHO WE ARE</h2>
                    <p className="mb-4">
                        Crivient ("Crivient", "we", "us", "our") operates the Service, which is a cloud-based CRM platform available at crivient.com.
                    </p>
                    <p className="mb-2">Our contact details are:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Email: <a href="mailto:admin@crivient.com" className="text-[#D946EF] hover:underline">admin@crivient.com</a></li>
                        <li>Address: 476/42 Dhan Nadi, Vijay Singh Pathik Nagar, Ajmer, Rajasthan 305001, India</li>
                    </ul>
                    <p>
                        For certain transactions, payments are processed by Paddle as our Merchant of Record, as explained in section 6 (Fees, payments and billing).
                    </p>
                </div>



                <hr className="border-gray-700 my-8" />

                {/* 2. ELIGIBILITY AND ACCOUNTS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">2. ELIGIBILITY AND ACCOUNTS</h2>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">2.1 Business Use Only</h3>
                    <p className="mb-4">
                        The Service is intended for use by businesses, organizations, and professionals, not for personal or household use.
                    </p>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">2.2 Account Registration</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>You must provide accurate, current, and complete information when creating an account and keep it up to date.</li>
                        <li>You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">2.3 Authorized Users</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>You may authorize individuals within your organization ("Authorized Users") to access your workspace, subject to any seat or usage limits in your subscription.</li>
                        <li>You are responsible for the actions of your Authorized Users and for ensuring they comply with these Terms.</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 3. SERVICE LICENSE AND USE */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">3. SERVICE LICENSE AND USE</h2>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">3.1 License to Use the Service</h3>
                    <p className="mb-4">
                        Subject to your compliance with these Terms and timely payment of all fees, Crivient grants you a limited, non-exclusive, non-transferable, non-sublicensable right to access and use the Service for your internal business purposes during the subscription term.
                    </p>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">3.2 Acceptable Use</h3>
                    <p className="mb-2">You must not:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Use the Service in any way that violates applicable law, regulations, or third-party rights.</li>
                        <li>Upload, store, or transmit any harmful code, malware, or content that is unlawful, abusive, or infringing.</li>
                        <li>Attempt to reverse engineer, decompile, or extract source code from the Service, except to the extent expressly permitted by law.</li>
                        <li>Circumvent usage limits, security features, or technical protections in the Service.</li>
                        <li>Use the Service to build a competing product or service.</li>
                    </ul>
                    <p>
                        Crivient reserves the right to suspend or terminate access where there is actual or suspected abuse, violation of these Terms, or violation of Paddle's acceptable use requirements.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 4. YOUR DATA AND PRIVACY */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">4. YOUR DATA AND PRIVACY</h2>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">4.1 Customer Data</h3>
                    <p className="mb-4">
                        "Customer Data" means all data, content, and information that you or your Authorized Users submit or store in the Service, including your customer records, contacts, activities, and communications.
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>You retain ownership of Customer Data.</li>
                        <li>You are responsible for ensuring that you have all necessary rights and lawful bases to submit Customer Data to the Service and to use it as configured in your account.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">4.2 License to Customer Data</h3>
                    <p className="mb-4">
                        You grant Crivient a worldwide, limited, non-exclusive license to host, use, process, transmit, and display Customer Data only as necessary to provide, maintain, secure, and improve the Service and to comply with legal obligations.
                    </p>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">4.3 Data Protection</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Crivient processes personal data in accordance with the Crivient Privacy Policy, which forms part of these Terms.</li>
                        <li>Where required by law (for example, under GDPR or similar frameworks), Crivient may offer a separate data processing agreement governing processing of personal data on your behalf.</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 5. SERVICE AVAILABILITY AND SUPPORT */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">5. SERVICE AVAILABILITY AND SUPPORT</h2>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">5.1 Availability</h3>
                    <p className="mb-4">
                        Crivient aims to keep the Service available and operating reliably but does not guarantee uninterrupted or error-free operation. The Service may be temporarily unavailable due to scheduled maintenance, emergency maintenance, or factors outside Crivient's reasonable control (for example, network or infrastructure provider issues).
                    </p>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">5.2 Modifications to the Service</h3>
                    <p className="mb-4">
                        Crivient may improve, update, or modify the Service from time to time, including adding or removing features. If Crivient makes changes that materially reduce core functionality, reasonable efforts will be made to notify you in advance where practicable.
                    </p>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">5.3 Support</h3>
                    <p className="mb-4">
                        Crivient may provide standard support via email or other channels as specified on the website or in your plan. Any enhanced or premium support offerings may be subject to additional terms and fees.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 6. FEES, PAYMENTS, AND BILLING */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">6. FEES, PAYMENTS, AND BILLING</h2>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">6.1 Subscriptions and Pricing</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Access to the Service is generally provided on a subscription basis (for example, monthly or annually) as described on the Crivient website or in your order.</li>
                        <li>Crivient may change prices and plan structures from time to time; price changes will not apply to an existing paid term already invoiced, but will apply upon renewal after notice.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">6.2 Paddle as Merchant of Record</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>For many transactions, Paddle.com acts as the Merchant of Record and authorized reseller of the Service.</li>
                        <li>This means you purchase the subscription from Paddle, and Paddle is responsible for processing your payment, collecting applicable taxes, and issuing invoices, while Crivient provides the Service under these Terms (the "Supplier Agreement").</li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">6.3 Payment Processing</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>When you checkout, you may be redirected to a Paddle-hosted payment page or embedded Paddle checkout governed by Paddle's own buyer terms and privacy policy, available at <a href="https://paddle.com/legal" target="_blank" rel="noopener noreferrer" className="text-[#D946EF] hover:underline">paddle.com/legal</a>.</li>
                        <li>Payment methods, billing cycles, taxes, and invoicing are handled by Paddle (or other designated payment providers) in accordance with their terms.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">6.4 Renewals and Cancellation</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Unless otherwise stated, subscriptions automatically renew for successive periods at the then-current price, using the payment method on file.</li>
                        <li>You may cancel auto-renewal at any time via your account settings or via the Paddle subscription management interface, but cancellation will generally take effect at the end of the then-current billing period and will not trigger a refund for amounts already paid, unless required by law or by our refund policy.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">6.5 Refunds</h3>
                    <p className="mb-4">
                        Any refunds are subject to Crivient's Refund Policy and, where Paddle is Merchant of Record, may be processed by Paddle in accordance with its rules.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 7. INTELLECTUAL PROPERTY */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">7. INTELLECTUAL PROPERTY</h2>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">7.1 Crivient IP</h3>
                    <p className="mb-4">
                        The Service, including all software, technology, user interfaces, design, and documentation, is owned or licensed by Crivient and is protected by intellectual property laws. Except for the limited license expressly granted in section 3, no rights are granted to you.
                    </p>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">7.2 Feedback</h3>
                    <p className="mb-4">
                        If you provide suggestions, ideas, or feedback about the Service ("Feedback"), you grant Crivient a perpetual, irrevocable, worldwide, royalty-free license to use the Feedback without restriction or compensation.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 8. THIRD-PARTY SERVICES */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">8. THIRD-PARTY SERVICES</h2>
                    <p className="mb-4">
                        The Service may integrate or interoperate with third-party products or services (for example, email providers, analytics tools, or payment processors). Use of such third-party services is subject to their own terms, conditions, and privacy policies, and Crivient is not responsible for their actions or omissions.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 9. SUSPENSION AND TERMINATION */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">9. SUSPENSION AND TERMINATION</h2>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">9.1 Suspension</h3>
                    <p className="mb-2">Crivient may suspend access to the Service (in whole or in part) immediately if:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>You fail to pay fees when due.</li>
                        <li>Crivient reasonably suspects fraudulent or abusive activity, or a material breach of these Terms.</li>
                        <li>Suspension is necessary to comply with law or protect the security or integrity of the Service.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">9.2 Termination by You</h3>
                    <p className="mb-4">
                        You may stop using the Service at any time and may cancel your subscription in accordance with section 6.4.
                    </p>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">9.3 Termination by Crivient</h3>
                    <p className="mb-2">Crivient may terminate your account or access to the Service:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>For material breach of these Terms that remains uncured for 30 days after written notice, or immediately in the case of serious or repeated violations.</li>
                        <li>If Crivient decides to discontinue the Service, in which case reasonable notice will be provided and any pre-paid fees for unused periods may be refunded where applicable.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-white mb-2 mt-6">9.4 Effects of Termination</h3>
                    <p className="mb-2">Upon termination:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Your right to access the Service will cease.</li>
                        <li>You remain responsible for any outstanding fees.</li>
                        <li>Crivient may delete or anonymize Customer Data after a reasonable retention period, unless required by law to keep it longer.</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 10. DISCLAIMERS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">10. DISCLAIMERS</h2>
                    <p className="mb-4">
                        To the maximum extent permitted by law, the Service is provided "as is" and "as available" without warranties of any kind, whether express, implied, or statutory, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement. Crivient does not warrant that the Service will be uninterrupted, error-free, or free of harmful components, or that Customer Data will be secure or not otherwise lost or altered, although reasonable measures are taken to protect it.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 11. LIMITATION OF LIABILITY */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">11. LIMITATION OF LIABILITY</h2>
                    <p className="mb-2">To the maximum extent permitted by law:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Crivient will not be liable for any indirect, incidental, special, consequential, or punitive damages, or loss of profits, revenue, goodwill, or data arising out of or related to your use of the Service, even if advised of the possibility of such damages.</li>
                        <li>Crivient's aggregate liability for all claims arising out of or relating to the Service or these Terms will not exceed the total amount of fees paid by you for the Service during the twelve (12) months preceding the event giving rise to the claim.</li>
                    </ul>
                    <p className="mb-4">
                        Nothing in these Terms limits liability that cannot be limited under applicable law (for example, liability for death or personal injury caused by negligence, or for fraud).
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 12. INDEMNIFICATION */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">12. INDEMNIFICATION</h2>
                    <p className="mb-2">
                        You agree to indemnify and hold harmless Crivient and its officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising out of or related to:
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Your use of the Service in violation of these Terms or applicable law.</li>
                        <li>Customer Data, including any allegation that Customer Data infringes or misappropriates a third party's rights or violates applicable data protection laws.</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 13. CHANGES TO THESE TERMS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">13. CHANGES TO THESE TERMS</h2>
                    <p className="mb-4">
                        Crivient may update these Terms from time to time. When changes are material, reasonable efforts will be made to notify you (for example, via email or in-app notification). Continued use of the Service after the effective date of updated Terms constitutes your acceptance of the changes.
                    </p>
                    <p className="mb-4">
                        If you do not agree to the updated Terms, you must stop using the Service and cancel any active subscription.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 14. GOVERNING LAW AND DISPUTES */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">14. GOVERNING LAW AND DISPUTES</h2>
                    <p className="mb-4">
                        Unless prohibited by applicable law, these Terms are governed by the laws of India without regard to its conflict of laws rules.
                    </p>
                    <p className="mb-4">
                        Any dispute arising out of or in connection with these Terms or the Service will be subject to the exclusive jurisdiction of the courts of Rajasthan, India, except where mandatory law provides otherwise.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 15. MISCELLANEOUS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">15. MISCELLANEOUS</h2>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Entire Agreement:</strong> These Terms, together with any order or plan details and the Privacy Policy and Refund Policy, form the entire agreement between you and Crivient regarding the Service.</li>
                        <li><strong>Severability:</strong> If any provision is held invalid or unenforceable, the remaining provisions will remain in full force.</li>
                        <li><strong>No Waiver:</strong> A failure to enforce any right or provision is not a waiver of that right or provision.</li>
                        <li><strong>Assignment:</strong> You may not assign or transfer your rights or obligations under these Terms without Crivient's prior written consent. Crivient may assign these Terms in connection with a merger, acquisition, or sale of assets, or by operation of law.</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 16. CONTACT */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-white mb-4">16. CONTACT</h2>
                    <p className="mb-2">If you have any questions about these Terms, please contact:</p>
                    <p className="mb-2 font-bold">Crivient</p>
                    <ul className="list-none mb-4 space-y-1">
                        <li>Email: <a href="mailto:admin@crivient.com" className="text-[#D946EF] hover:underline">admin@crivient.com</a></li>
                        <li>Address: 476/42 Dhan Nadi, Vijay Singh Pathik Nagar, Ajmer, Rajasthan 305001, India</li>
                    </ul>
                </div>

            </section>

            {/* Footer Note */}
            <div className="bg-[#111827] text-center py-6 px-6 border-t border-gray-700">
                <p className="text-gray-400 font-medium">END OF TERMS OF SERVICE</p>
                <p className="text-gray-400 text-sm mt-2">
                    This Terms of Service is effective as of January 2, 2026. Your continued use of Crivient constitutes acceptance of these Terms.
                </p>
            </div>
        </div>
    );
}
