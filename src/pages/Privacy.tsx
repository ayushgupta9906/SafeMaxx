import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-8">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Lock className="h-6 w-6 text-blue-600 mr-2" />
                Information We Collect
              </h2>
              <p className="text-gray-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Name and contact information</li>
                <li>Company details</li>
                <li>Service requests and communications</li>
                <li>Technical information about your systems (with consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Eye className="h-6 w-6 text-blue-600 mr-2" />
                How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-4">
                We use the collected information for:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Providing security services</li>
                <li>Communicating about appointments and services</li>
                <li>Improving our services</li>
                <li>Legal compliance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                Data Protection
              </h2>
              <p className="text-gray-600 mb-4">
                We implement robust security measures to protect your information:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                <li>Encryption of sensitive data</li>
                <li>Regular security audits</li>
                <li>Access controls and monitoring</li>
                <li>Secure data storage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our privacy policy, please contact us at:
              </p>
              <div className="mt-4 text-gray-600">
                <p>Email: privacy@safemax.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Security Street, Cyber City, CC 12345</p>
              </div>
            </section>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;