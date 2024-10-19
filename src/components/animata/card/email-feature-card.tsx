"use client";

import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import emailjs from "emailjs-com";

interface EmailCardProps {
  onClose: () => void;
}

const EmailCard: React.FC<EmailCardProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<{
    name: string;
    fromEmail: string;
    subject: string;
    message: string;
    attachment: File | null;
  }>({
    name: "",
    fromEmail: "",
    subject: "",
    message: "",
    attachment: null,
  });

  const [errors, setErrors] = useState<{ name?: string; fromEmail?: string }>({});
  const [isSent, setIsSent] = useState(false);

  const validateForm = () => {
    const newErrors: { name?: string; fromEmail?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.fromEmail.trim()) {
      newErrors.fromEmail = "Email is required.";
    } else if (!emailRegex.test(formData.fromEmail)) {
      newErrors.fromEmail = "Invalid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (files: File[]) => {
    setFormData({ ...formData, attachment: files[0] || null });
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    sendEmail();

    setIsSent(true);
    setTimeout(() => {
      onClose();
      setIsSent(false);
    }, 2000);
  };

  const sendEmail = () => {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("Missing EmailJS environment variables");
      return;
    }

    const emailParams = {
      from_name: formData.name,
      from_email: formData.fromEmail,
      subject: formData.subject,
      message: formData.message,
      to_email: "hasibshaif1@gmail.com",
      attachment: formData.attachment,
    };

    emailjs.send(serviceId, templateId, emailParams, publicKey).then(
      (result) => {
        console.log("Email successfully sent!", result.text);
      },
      (error) => {
        console.error("Error in sending email", error.text);
      }
    );
  };

  return (
    <div className="group relative w-full max-w-md bg-black/20 border border-white rounded-lg shadow-md p-4 text-black backdrop-blur-sm transition-shadow duration-300 ease-in-out">
      {isSent ? (
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-green-500 transition-opacity duration-300">
          <span className="text-2xl font-bold">Email Sent! 🎉</span>
        </div>
      ) : (
        <form onSubmit={handleSendEmail} className="flex flex-col gap-3 text-sm">
          <h2 className="text-lg font-bold text-white">Send an Email</h2>

          {/* Name Field */}
          <div className="flex flex-col">
            <label className="font-medium text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 rounded-md border border-gray-300 p-1 text-sm"
              placeholder="Your name"
              required
            />
            {errors.name && <p className="mt-1 text-red-600 text-xs">{errors.name}</p>}
          </div>

          {/* From Email */}
          <div className="flex flex-col">
            <label className="font-medium text-white">From</label>
            <input
              type="email"
              name="fromEmail"
              value={formData.fromEmail}
              onChange={handleInputChange}
              className="mt-1 rounded-md border border-gray-300 p-1 text-sm"
              placeholder="you@example.com"
              required
            />
            {errors.fromEmail && <p className="mt-1 text-red-600 text-xs">{errors.fromEmail}</p>}
          </div>

          {/* To Email (Static) */}
          <div className="flex flex-col">
            <label className="font-medium text-white">To</label>
            <p className="mt-1 rounded-md border border-gray-300 p-1 bg-gray-100 text-gray-400 text-sm">
              hasibshaif1@gmail.com
            </p>
          </div>

          {/* Subject Line */}
          <div className="flex flex-col">
            <label className="font-medium text-white">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="mt-1 rounded-md border border-gray-300 p-1 text-sm"
              required
            />
          </div>

          {/* Message Field with Overflow Handling */}
          <div className="flex flex-col">
            <label className="font-medium text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 h-16 rounded-md border border-gray-300 p-1 text-sm max-h-40 overflow-auto"
              required
            />
          </div>

          {/* File Upload Section */}
          <div className="flex flex-col">
            <label className="font-medium text-white">Attachment</label>
            <div className="file-upload-container">
              <FileUpload onChange={handleFileChange} />
            </div>
          </div>

          <button
            type="submit"
            className="mt-3 self-end rounded-full bg-gray-600 p-2 text-xs cursor-pointer transition-colors duration-300 hover:bg-green-600"
          >
            <span role="img" aria-label="send">
              ➤ Send
            </span>
          </button>
        </form>
      )}
    </div>
  );
};

export default EmailCard;
