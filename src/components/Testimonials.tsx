import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'John Smith',
    role: 'CTO, TechCorp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'SafeMax Security transformed our cybersecurity infrastructure. Their VAPT services identified critical vulnerabilities that we were able to address before they could be exploited.',
    rating: 5
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Security Director, FinanceHub',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: "The team's expertise in threat intelligence has been invaluable. They've helped us stay ahead of potential security risks and maintain our compliance requirements.",
    rating: 5
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'CEO, DataSecure',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Outstanding service and support. Their 24/7 incident response team has been crucial in maintaining our security posture. Highly recommended!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Client Testimonials</h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-8 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-100" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-600 mb-4">{testimonial.content}</p>

              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
