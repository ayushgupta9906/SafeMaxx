import React from 'react';
import { Shield, Search, Lock, AlertTriangle, Clock, Database, Server, Wifi, Users, FileCheck, RefreshCw } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Security Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Comprehensive cybersecurity solutions to protect your business from evolving digital threats.
          </p>
        </div>
      </div>

      {/* Main Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Shield className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">VAPT Services</h2>
            <p className="text-gray-600 mb-4">
              Comprehensive vulnerability assessment and penetration testing to identify and address security weaknesses in your systems.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Server className="h-5 w-5 mr-2 text-blue-600" />
                Infrastructure Testing
              </li>
              <li className="flex items-center">
                <Wifi className="h-5 w-5 mr-2 text-blue-600" />
                Network Security Assessment
              </li>
              <li className="flex items-center">
                <Database className="h-5 w-5 mr-2 text-blue-600" />
                Application Security Testing
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <Search className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Threat Intelligence</h2>
            <p className="text-gray-600 mb-4">
              Advanced threat detection and monitoring to stay ahead of potential security risks and cyber threats.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-blue-600" />
                Real-time Threat Monitoring
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                24/7 Security Operations
              </li>
              <li className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Proactive Defense Strategies
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <Lock className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Security Consulting</h2>
            <p className="text-gray-600 mb-4">
              Expert guidance on implementing robust security measures and best practices for your organization.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Security Architecture Design
              </li>
              <li className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-blue-600" />
                Staff Training Programs
              </li>
              <li className="flex items-center">
                <FileCheck className="h-5 w-5 mr-2 text-blue-600" />
                Compliance Assessment
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <AlertTriangle className="h-12 w-12 text-blue-600 mb-4" />
            <h2 className="text-2xl font-bold mb-4">Incident Response</h2>
            <p className="text-gray-600 mb-4">
              Rapid response and recovery services for security incidents and breaches.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                24/7 Emergency Response
              </li>
              <li className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-blue-600" />
                Breach Investigation
              </li>
              <li className="flex items-center">
                <RefreshCw className="h-5 w-5 mr-2 text-blue-600" />
                System Recovery
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;