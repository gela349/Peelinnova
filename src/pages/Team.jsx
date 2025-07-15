import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import ceo from '../assets/images/ceo.jpg';
import user from '../assets/images/user.jpg';
import user1 from '../assets/images/user1.jpg';

export default function Team() {
  const teamMembers = [
    {
      name: "Sony Madison",
      role: "SEO Expert",
      image: ceo,
    },
    {
      name: "Harry Waston",
      role: "Head Recruit",
      image: user,
    },
    {
      name: "Jenny Jacob",
      role: "Brand Advisor",
      image: user1,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="text-center mb-10">
        <h4 className="text-sm text-gray-500">our team</h4>
        <h2 className="text-3xl font-bold text-gray-800">
          <span className="text-red-500">Team</span> Members
        </h2>
        <p className="max-w-xl mx-auto text-gray-500 mt-4">
          Collaborative minds, detailed execution, remarkable outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 max-w-7xl mx-auto">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-4 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />
            <h3 className="text-lg font-semibold mt-4">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.role}</p>
            <div className="flex justify-center space-x-4 mt-4 text-gray-600">
              <FaFacebook className="hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              <FaInstagram className="hover:text-pink-500 cursor-pointer" />
              <FaLinkedin className="hover:text-blue-700 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
