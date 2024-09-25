
import { FaPhoneAlt as PhoneIcon, FaEnvelope as MailIcon, FaMapMarkerAlt as LocateIcon } from "react-icons/fa";
import { FaFacebookF as FacebookIcon, FaTwitter as TwitterIcon, FaInstagram as InstagramIcon } from "react-icons/fa";
import { Link } from "react-router-dom";
<<<<<<< HEAD
// import "../css/common.css";
const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 md:py-12 ">
      <div className="container px-4 md:px-6" id="footer">
=======

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 md:py-12">
      <div className="container px-4 md:px-6">
>>>>>>> c61fe6fffe86074401758e4c355376fbde96ca05
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-2 text-muted-foreground">
              We are a team of food enthusiasts dedicated to bringing you the best local cuisine.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>
                <PhoneIcon className="mr-2 inline-block h-5 w-5" />
                +1 (123) 456-7890
              </li>
              <li>
                <MailIcon className="mr-2 inline-block h-5 w-5" />
                info@fooddelivery.com
              </li>
              <li>
                <LocateIcon className="mr-2 inline-block h-5 w-5" />
                123 Main Street, Anytown USA
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="mt-2 flex gap-4">
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <TwitterIcon className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-muted-foreground hover:text-foreground">
                <InstagramIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Legal</h3>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li>
                <Link to="#" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          &copy; 2024 Food Delivery. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
