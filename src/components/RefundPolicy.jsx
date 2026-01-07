import { RefreshCcw } from "lucide-react";

export default function RefundPolicy() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="bg-[#043873] text-white py-20 px-6 text-center">
                <div className="flex justify-center mb-6">
                    <div className="bg-[#4F9CF9] p-4 rounded-full">
                        <RefreshCcw size={48} className="text-[#043873]" />
                    </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
                <p className="text-xl text-gray-200">Last Updated: January 2, 2026</p>
            </section>

            {/* Main Content */}
            <section className="py-20 px-6 max-w-4xl mx-auto text-gray-700 leading-relaxed font-sans">

                {/* 1. OVERVIEW */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">1. OVERVIEW</h2>
                    <p className="mb-4">
                        This Refund Policy ("Policy") explains Crivient's refund and return practices for subscriptions and purchases made through our website at crivient.com. This Policy should be read in conjunction with our Terms of Service and Privacy Policy.
                    </p>
                    <p className="mb-4">
                        For purchases made through Paddle as our Merchant of Record, Paddle's refund policies and procedures also apply. Please review both this Policy and Paddle's policies at <a href="https://www.paddle.com/legal" target="_blank" rel="noopener noreferrer" className="text-[#4F9CF9] hover:underline">https://www.paddle.com/legal</a> for complete information.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 2. REFUND ELIGIBILITY */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">2. REFUND ELIGIBILITY</h2>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">2.1 Refundable Purchases</h3>
                    <p className="mb-2">Refunds may be available for:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Monthly subscription fees</li>
                        <li>Annual subscription fees</li>
                        <li>One-time license purchases</li>
                        <li>Upgrade fees</li>
                        <li>Add-on services</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">2.2 Non-Refundable Items</h3>
                    <p className="mb-2">The following are non-refundable:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Custom development or implementation services (once completed)</li>
                        <li>Training and consulting services (once delivered)</li>
                        <li>Professional services and support hours used</li>
                        <li>Data migration services (once completed)</li>
                        <li>API access fees (once activated)</li>
                        <li>Taxes, VAT, and other transaction fees already remitted to authorities</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 3. REFUND TIMELINE */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">3. REFUND TIMELINE</h2>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">3.1 Standard Refund Period</h3>
                    <p className="font-bold mb-2">30-Day Money-Back Guarantee:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>You may request a refund within 30 days of your initial purchase or subscription activation</li>
                        <li>This applies to your first month of service</li>
                        <li>Refund requests made after 30 days are generally not eligible, except in special circumstances (see section 3.2)</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">3.2 Exceptions to the 30-Day Period</h3>
                    <p className="mb-2">Refunds may be considered outside the 30-day window in the following circumstances:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Service Failure:</strong> If Crivient fails to provide the Service as described, preventing you from using core features for more than 7 consecutive days</li>
                        <li><strong>Billing Error:</strong> If there is a clear billing error (e.g., duplicate charge, incorrect amount)</li>
                        <li><strong>Cancellation of Service:</strong> If Crivient discontinues the Service, a pro-rata refund will be issued for the unused portion of your subscription</li>
                        <li><strong>Regulatory Requirement:</strong> If applicable law requires a refund or credits</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">3.3 Annual Subscriptions</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Annual subscriptions are eligible for refund within 30 days of purchase</li>
                        <li>Refunds are issued as a full credit or full refund depending on payment method</li>
                        <li>Annual subscriptions cannot be downgraded to monthly plans; cancellation or refund is required</li>
                        <li>If you request a refund after 30 days but within the first 90 days of an annual subscription, a partial refund may be considered (remaining months only)</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 4. HOW TO REQUEST A REFUND */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">4. HOW TO REQUEST A REFUND</h2>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">4.1 Refund Request Process</h3>
                    <p className="mb-4">To request a refund, please follow these steps:</p>

                    <div className="space-y-6">
                        <div>
                            <p className="font-bold text-[#043873]">Step 1: Contact Support</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Email: <a href="mailto:admin@crivient.com" className="text-[#4F9CF9] hover:underline">admin@crivient.com</a></li>
                                <li>Subject line: "Refund Request"</li>
                                <li>Include your full name, email address, and account details</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">Step 2: Provide Details</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Clearly explain the reason for your refund request</li>
                                <li>Include your order number, transaction ID, and original purchase date</li>
                                <li>Describe any issues or problems encountered (if applicable)</li>
                                <li>Attach relevant screenshots or documentation</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">Step 3: Await Review</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Crivient will review your request within 5-7 business days</li>
                                <li>You will receive a response via email with a decision and next steps</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-[#043873]">Step 4: Receive Your Refund</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>If approved, the refund will be processed within 10-15 business days</li>
                                <li>Refunds are issued to the original payment method</li>
                                <li>For transactions processed through Paddle, refund processing is handled by Paddle (typically 3-5 business days from Paddle's approval)</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">4.2 Response Timeline</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Initial Response:</strong> Within 5-7 business days of submitting your request</li>
                        <li><strong>Refund Processing:</strong> Within 10-15 business days after approval (Paddle transactions may take 3-5 additional business days)</li>
                        <li><strong>Bank Processing:</strong> Your bank may require 3-5 additional business days to credit the refund</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 5. REFUND CONDITIONS AND RESTRICTIONS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">5. REFUND CONDITIONS AND RESTRICTIONS</h2>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">5.1 General Conditions</h3>
                    <p className="mb-2">To be eligible for a refund, you must:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Have a valid, active account with Crivient</li>
                        <li>Submit your refund request within the applicable timeframe (see section 3)</li>
                        <li>Not have violated our Terms of Service or Acceptable Use Policy</li>
                        <li>Not have used the Service for commercial resale or as a competing product</li>
                        <li>Provide accurate information and truthful reason for the refund</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">5.2 Restrictions on Refunds</h3>
                    <p className="mb-2">Refunds will NOT be issued if:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>You have violated the Terms of Service or Acceptable Use Policy</li>
                        <li>You have used the Service to build a competing product</li>
                        <li>Your account was suspended or terminated due to policy violation</li>
                        <li>You accessed or used the Service beyond what was necessary to evaluate it (e.g., extensive production use)</li>
                        <li>The refund request is made by someone other than the account owner or authorized representative</li>
                        <li>You are requesting a refund for the second time or have a history of refund abuse</li>
                        <li>You have engaged in fraudulent activity or chargeback disputes</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">5.3 Data Deletion</h3>
                    <p className="mb-2">Upon refund approval and processing:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Your account will be scheduled for termination</li>
                        <li>All Customer Data will be deleted within 30 days</li>
                        <li>We recommend backing up any important data before requesting a refund</li>
                        <li>Deleted data cannot be recovered</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 6. SUBSCRIPTION CANCELLATION */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">6. SUBSCRIPTION CANCELLATION</h2>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">6.1 Cancellation Without Refund</h3>
                    <p className="mb-2">You may cancel your subscription at any time without penalty. Cancellation applies to future billing periods only:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>No Refund for Past Periods:</strong> You will not receive a refund for the current billing period or any months/years already paid</li>
                        <li><strong>Immediate Access Termination:</strong> Your access may terminate at the end of the current billing cycle or immediately, depending on your plan</li>
                        <li><strong>Data Preservation:</strong> You have 30 days to export or backup your data before deletion</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">6.2 How to Cancel</h3>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-gray-800">Via Your Account:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Log into your Crivient account</li>
                                <li>Navigate to Account Settings &gt; Subscription</li>
                                <li>Select "Cancel Subscription"</li>
                                <li>Confirm cancellation</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">Via Paddle (if Merchant of Record):</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Visit your Paddle subscription management page</li>
                                <li>Select your Crivient subscription</li>
                                <li>Click "Cancel Subscription"</li>
                                <li>Confirm cancellation</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">Via Email:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Email <a href="mailto:admin@crivient.com" className="text-[#4F9CF9] hover:underline">admin@crivient.com</a></li>
                                <li>Subject: "Subscription Cancellation Request"</li>
                                <li>Include your full name, email, and account details</li>
                                <li>Cancellation will be processed within 2 business days</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">6.3 Reactivation</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>If you cancel your subscription and later wish to reactivate, you may do so</li>
                        <li>Reactivation will be at the then-current subscription rate</li>
                        <li>Any data deleted during the inactive period cannot be recovered</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 7. PADDLE MERCHANT OF RECORD */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">7. PADDLE MERCHANT OF RECORD</h2>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">7.1 Paddle's Role</h3>
                    <p className="mb-2">For purchases processed through Paddle:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Merchant of Record:</strong> Paddle is responsible for payment processing, tax collection, invoicing, and financial compliance</li>
                        <li><strong>Refund Processing:</strong> Paddle processes all refunds in accordance with their own refund policy and applicable law</li>
                        <li><strong>Chargebacks:</strong> Paddle handles chargeback disputes and reserves the right to refuse service for disputed transactions</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">7.2 Paddle Refund Policy</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Paddle's refund policy applies in addition to Crivient's policy</li>
                        <li>For details, see <a href="https://www.paddle.com/legal" target="_blank" rel="noopener noreferrer" className="text-[#4F9CF9] hover:underline">https://www.paddle.com/legal</a></li>
                        <li>In case of conflict, Crivient's policy is more favorable to you, and that policy applies</li>
                        <li>Refunds may be issued as store credits or account credits with Paddle rather than direct refunds</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">7.3 Paddle Checkout Disputes</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Any disputes regarding Paddle transactions should be directed to Paddle first</li>
                        <li>Paddle's contact information is available at <a href="https://www.paddle.com/support" target="_blank" rel="noopener noreferrer" className="text-[#4F9CF9] hover:underline">https://www.paddle.com/support</a></li>
                        <li>Crivient will cooperate with Paddle to resolve disputes fairly</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 8. CHARGEBACKS AND DISPUTES */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">8. CHARGEBACKS AND DISPUTES</h2>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">8.1 Chargeback Policy</h3>
                    <p className="mb-2">Crivient reserves the right to:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Suspend or terminate accounts associated with chargebacks</li>
                        <li>Pursue collection of any amounts owed</li>
                        <li>Report chargeback disputes to payment processors</li>
                        <li>Take legal action to recover losses</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">8.2 Dispute Resolution</h3>
                    <p className="mb-2">If you dispute a charge:</p>
                    <ol className="list-decimal pl-6 mb-4 space-y-2">
                        <li><strong>Contact Us First:</strong> Email <a href="mailto:admin@crivient.com" className="text-[#4F9CF9] hover:underline">admin@crivient.com</a> with details</li>
                        <li><strong>Good Faith Discussion:</strong> We will attempt to resolve within 10 business days</li>
                        <li><strong>Document Your Issue:</strong> Provide transaction details, dates, and explanation</li>
                        <li><strong>Avoid Chargebacks:</strong> Working directly with us is faster and more reliable</li>
                    </ol>
                    <p>Initiating a chargeback with your bank without first attempting to resolve the issue with Crivient may result in account suspension and loss of service access.</p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 9. SPECIAL CIRCUMSTANCES */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">9. SPECIAL CIRCUMSTANCES</h2>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">9.1 Service Discontinuation</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>If Crivient discontinues the Service or major features, all affected customers will be notified with at least 60 days' notice</li>
                        <li>A pro-rata refund will be issued for the unused portion of active subscriptions</li>
                        <li>Refunds will be processed within 30 days of the discontinuation date</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">9.2 Service Outages</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Temporary outages do not automatically qualify for refunds</li>
                        <li>If the Service is unavailable for more than 7 consecutive days due to Crivient's fault, a pro-rata credit or refund may be issued</li>
                        <li>Contact support at <a href="mailto:admin@crivient.com" className="text-[#4F9CF9] hover:underline">admin@crivient.com</a> with documentation of the outage</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">9.3 Significant Service Degradation</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Report the issue to support@crivient.com with details and screenshots</li>
                        <li>Crivient will work to resolve within 5 business days</li>
                        <li>If unresolved, a partial refund or service credit may be offered</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 10. CREDIT AND SERVICE CREDITS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">10. CREDIT AND SERVICE CREDITS</h2>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">10.1 Alternative to Refunds</h3>
                    <p className="mb-2">Crivient may offer:</p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li><strong>Account Credits:</strong> Applied to future invoices</li>
                        <li><strong>Service Extensions:</strong> Additional months of free service</li>
                        <li><strong>Plan Upgrades:</strong> Temporary upgrade to a higher-tier plan</li>
                    </ul>
                    <p className="mb-4">These alternatives may be offered instead of cash refunds in certain circumstances.</p>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">10.2 Credit Usage</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Credits must be used within the specified timeframe</li>
                        <li>Unused credits expire after the designated period</li>
                        <li>Credits are non-transferable and cannot be cashed out</li>
                        <li>Credits may not be used for custom services or professional services</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 11. TAXES AND FEES */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">11. TAXES AND FEES</h2>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">11.1 Tax-Related Refunds</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Taxes, VAT, GST, and similar transaction fees that have been remitted to tax authorities cannot be refunded</li>
                        <li>You may be entitled to a tax credit or deduction; consult with a tax professional</li>
                        <li>Paddle handles all tax collection and remittance</li>
                    </ul>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">11.2 Payment Processing Fees</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Payment processing fees charged by your bank or payment method are not refundable by Crivient</li>
                        <li>Contact your bank or payment provider regarding fees they may have charged</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 12. INTERNATIONAL CUSTOMERS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">12. INTERNATIONAL CUSTOMERS</h2>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">12.1 Regional Refund Rights</h3>
                    <p className="mb-4">Customers in certain jurisdictions have additional refund rights:</p>
                    <div className="space-y-4">
                        <div>
                            <p className="font-bold text-gray-800">European Union / EEA:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>14-day cooling-off period under EU Consumer Rights Directive</li>
                                <li>Right to withdraw from distance contracts within 14 days</li>
                                <li>Exceptions apply for digital services that have been partially or fully used</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">United Kingdom:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>14-day right to cancel under UK Consumer Contracts Regulations</li>
                                <li>Exceptions apply for digital content delivered (with consent)</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">California (USA):</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Consumers have certain rights under California Consumer Protection laws</li>
                                <li>Minors may have special refund rights under COPPA</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#043873] mb-2 mt-6">12.2 Applicable Law</h3>
                    <p className="mb-4">
                        Refund eligibility and timelines are subject to the laws of your jurisdiction. Where local law provides stronger consumer protections, those rights apply regardless of this Policy.
                    </p>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 13. FREQUENTLY ASKED QUESTIONS */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-6">13. FREQUENTLY ASKED QUESTIONS</h2>

                    <div className="space-y-6">
                        <div>
                            <p className="font-bold text-gray-900 mb-1">Q: Can I get a refund after 30 days?</p>
                            <p className="text-gray-700">A: Generally, no. However, exceptions may apply if there is a service failure, billing error, or regulatory requirement. Contact <a href="mailto:support@crivient.com" className="text-[#4F9CF9] hover:underline">support@crivient.com</a> with details.</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 mb-1">Q: Will I get a refund if I cancel my subscription mid-month?</p>
                            <p className="text-gray-700">A: No. Cancellation applies to future billing periods. You will not receive a refund for the current month's subscription.</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 mb-1">Q: How long does a refund take?</p>
                            <p className="text-gray-700">A: 10-15 business days after approval. Paddle-processed refunds may take an additional 3-5 business days. Your bank may require 3-5 additional days to credit the refund.</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 mb-1">Q: Can I request a refund for a previous month?</p>
                            <p className="text-gray-700">A: No, unless there is a billing error or exceptional circumstance. Refunds are only available within the 30-day initial period.</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 mb-1">Q: Will my data be deleted if I get a refund?</p>
                            <p className="text-gray-700">A: Yes. Upon refund approval, your account will be terminated and all data will be deleted within 30 days. Back up important data before requesting a refund.</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 mb-1">Q: What if I don't agree with the refund decision?</p>
                            <p className="text-gray-700">A: You may appeal the decision by emailing <a href="mailto:admin@crivient.com" className="text-[#4F9CF9] hover:underline">admin@crivient.com</a> with additional information or documentation. We will review your appeal within 10 business days.</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 mb-1">Q: Can I get a refund as a store credit instead?</p>
                            <p className="text-gray-700">A: Yes, in some cases. We may offer account credits or service extensions as alternatives to cash refunds.</p>
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 mb-1">Q: What happens if I file a chargeback?</p>
                            <p className="text-gray-700">A: Your account may be suspended or terminated. We recommend contacting us first to resolve billing disputes.</p>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 14. CHANGES TO THIS POLICY */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">14. CHANGES TO THIS POLICY</h2>
                    <p className="mb-4">
                        Crivient may update this Refund Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.
                    </p>
                    <ul className="list-disc pl-6 mb-4 space-y-2">
                        <li>Material changes will be communicated via email to registered account holders</li>
                        <li>Your continued use of Crivient after changes become effective constitutes acceptance</li>
                    </ul>
                </div>

                <hr className="border-gray-200 my-8" />

                {/* 15. CONTACT US */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-[#043873] mb-4">15. CONTACT US</h2>
                    <p className="mb-4">If you have questions about this Refund Policy or wish to request a refund, please contact:</p>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <p className="mb-2"><strong>Email:</strong> <a href="mailto:admin@crivient.com" className="text-[#4F9CF9] hover:underline">admin@crivient.com</a></p>
                        <p className="mb-2"><strong>Mailing Address:</strong><br />
                            Crivient<br />
                            476/42 DHAN NADI VIJAY SINGH PATHIK NAGAR<br />
                            AJMER, RAJASTHAN 305001<br />
                            India</p>
                        <p className="mt-4 text-sm text-gray-600"><strong>Response Time:</strong> We will respond to refund requests and inquiries within 5-7 business days.</p>
                    </div>
                </div>



            </section>

            {/* Footer Note */}
            <div className="bg-gray-50 text-center py-6 px-6 border-t border-gray-200">
                <p className="text-gray-500 font-medium">END OF REFUND POLICY</p>
                <p className="text-gray-400 text-sm mt-2">
                    This Refund Policy is effective as of January 2, 2026. Your use of Crivient is subject to this Policy and our Terms of Service.
                </p>
            </div>
        </div>
    );
}
