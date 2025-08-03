import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import ceo from '../assets/images/ceo.jpg';
import user from '../assets/images/user.jpg';
import user1 from '../assets/images/user1.jpg';
import Navbar from "../components/Navbar";

// Personal team section (not overly polished)
export default function Team() {
  const team = [
    {
      name: "Sonny Yaw Gilbert",
      role: "CEO & Founder Scientist",
      image: ceo,
      socials: [FaFacebook, FaTwitter, FaLinkedin],
    },
    {
      name: "Dauda Nafissah",
      role: "Chief Operations Officer",
      image: user1,
      socials: [FaFacebook, FaInstagram, FaLinkedin],
    },
    {
      name: "Enock Siekaah",
      role: "User Experience Officer",
      image: user,
      socials: [FaInstagram, FaTwitter],
    },
  ];

  return (
    <>
      <Navbar />
    <section className="bg-[#fefefe] mt-0 py-16 px-6 text-gray-800">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
          Meet <span className="">Our Team</span>
        </h2>
        <p className="mt-3 text-gray-600">
          The people who make this dream work.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-85 object-cover rounded-t-xl"
            />
            <div className="p-5 text-center">
              <h3 className="text-lg font-medium text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{member.role}</p>

              <div className="flex justify-center gap-4 mt-4 text-gray-600">
                {member.socials.map((Icon, i) => (
                  <Icon key={i} className="hover:text-indigo-600 cursor-pointer" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
    
  );
}
