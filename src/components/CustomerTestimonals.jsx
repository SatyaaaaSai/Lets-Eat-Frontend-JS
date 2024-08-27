/* eslint-disable react/prop-types */
import { FaUserCircle } from 'react-icons/fa';
import "./Common.css";
const CustomerTestimonials = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="animi">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10 mx-auto">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-base xl:text-xl">
            Hear from real customers about their experience with our home food service.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestimonialCard
            name="Jane Smith"
            title="Satisfied Customer"
            feedback="The meals from this service have been a game-changer for my family. The convenience and quality are unbeatable."
          />
          <TestimonialCard
            name="Michael Johnson"
            title="Loyal Customer"
            feedback="I've been using this home food service for over a year now, and I can't imagine going back to cooking every night. The meals are delicious and nutritious."
          />
          <TestimonialCard
            name="Emily Sato"
            title="Satisfied Customer"
            feedback="This home food service has saved me so much time and stress. The meals are always fresh and delicious, and the customer service is excellent."
          />
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ name, title, feedback }) => {
  return (
    <div className="flex flex-col items-start gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="h-12 w-12 text-gray-600">
          <FaUserCircle size={48} />
        </div>
        <div className="grid gap-0.5">
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="text-sm text-gray-600">{title}</div>
        </div>
      </div>
      <blockquote className="text-lg font-semibold leading-snug">
        &ldquo;{feedback}&rdquo;
      </blockquote>
    </div>
  );
};

export default CustomerTestimonials;
