import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contactus = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch('https://tabbdocaircraft.com/api/contactus.php', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.status === 'success') {
        toast.success('Message sent successfully!');
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
    <div className="flex flex-col lg:flex-row gap-20 w-full">
      
      <div className="lg:w-1/3 space-y-8">
        <div className="space-y-6 mt-6 info-text">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1b50aa] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Office Address</h3>
              <p className="text-slate-600 mt-2">
              Located at Seva Kendra, M K K Road<br />
              5th Main Road, Malleswaram<br />
              next to ICICI Bank, Bangalore- 560003
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 ">
            <div className="w-12 h-12 rounded-full bg-[#1b50aa] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="mt-6 info-text">
              <h3 className="text-xl font-semibold">Contact Number</h3>
              <p className="text-slate-600 mt-2">+91 6360409263</p>
              
            </div>
          </div>

          <div className="flex items-start gap-4 mt-6 info-text">
            <div className="w-12 h-12 rounded-full bg-[#1b50aa] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Message Us</h3>
              <p className="text-slate-600 mt-2">test@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="lg:w-2/3 bg-[#fafafa] p-8 rounded-lg">
        <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              placeholder="Enter a Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white"
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white"
              required
            />
            <Input
              placeholder="Phone No."
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-white"
              required
            />
            <Input
              placeholder="Subject"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="bg-white"
              required
            />
          </div>
          <Textarea
            placeholder="Write your message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="min-h-[150px] bg-white"
            required
          />
          <Button 
            type="submit" 
            className="w-full bg-[#1b50aa] hover:bg-[#6490dc]  text-white py-6"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Submit Now"}
          </Button>
        </form>
      </div>
    </div>
    </section>
  );
};

export default Contactus;