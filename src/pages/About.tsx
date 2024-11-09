import React from 'react';
import { Award, Users, Shield, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">About SafeMax Security</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Leading the way in cybersecurity excellence since 2020
          </p>
        </div>
      </div>

      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2020, SafeMax Security has rapidly grown to become a trusted leader in cybersecurity solutions. Our commitment to excellence and innovation has helped us protect businesses worldwide from evolving digital threats.
            </p>
            <p className="text-gray-600 mb-6">
              With a team of certified security experts and a track record of successful implementations, we continue to set the standard for comprehensive security services.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-2xl text-blue-600">50+</h4>
                <p className="text-gray-600">Global Clients</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-2xl text-blue-600">100%</h4>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <img 
              src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1000" 
              alt="SafeMax Security Team" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of professional ethics and transparency.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every security solution we deliver.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p className="text-gray-600">
                We work closely with our clients to ensure optimal results.
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of emerging threats with innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;