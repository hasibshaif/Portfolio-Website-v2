"use client";

import React, { useState, useEffect } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import emailjs from "emailjs-com";
import { Copy, CopyCheck } from "lucide-react";

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
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const [showCopyText, setShowCopyText] = useState<boolean>(false);

  // Reset the copy icon and "Copied" text when the modal is closed
  useEffect(() => {
    setCopySuccess(false);
    setShowCopyText(false);
  }, [onClose]);

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

  const copyToClipboard = () => {
    const email = "hasibshaif1@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopySuccess(true);
      setShowCopyText(true);
      setTimeout(() => {
        setCopySuccess(false);
        setShowCopyText(false);
      }, 2000);
    });
  };

  return (
      <div
        className={`group relative max-w-5xl w-full md:w-[80vw] lg:w-[90vw] bg-black/20 border border-white rounded-lg shadow-md text-black backdrop-blur-sm transition-shadow duration-300 ease-in-out md:h-[90vh] sm:h-[80vh] h-[75vh] overflow-auto ${
          isSent ? "p-0" : "p-8"
        }`}
      >
      {isSent ? (
        <div className="flex items-center justify-center h-full w-full bg-green-500 rounded-lg">
          <span className="text-2xl font-bold text-white">Email Sent! 🎉</span>
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
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm"
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
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm"
              placeholder="you@example.com"
              required
            />
            {errors.fromEmail && <p className="mt-1 text-red-600 text-xs">{errors.fromEmail}</p>}
          </div>

          {/* To Email (Static) with Copy/CopyCheck Icon */}
          <div className="flex flex-col">
            <label className="font-medium text-white">To</label>
            <div className="flex items-center justify-between gap-2 mt-1 rounded-md border border-gray-300 p-2 bg-gray-100 text-gray-400 text-sm">
              hasibshaif1@gmail.com
              <button
                type="button"
                className="ml-2 flex items-center text-gray-500 hover:text-blue-500"
                onClick={copyToClipboard}
                aria-label="Copy email to clipboard"
              >
                {copySuccess ? <CopyCheck size={18} /> : <Copy size={18} />}
              </button>
            </div>
            {showCopyText && <p className="text-xs text-green-500 mt-1">Copied!</p>}
          </div>

          {/* Subject Line */}
          <div className="flex flex-col">
            <label className="font-medium text-white">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm"
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
              className="mt-1 rounded-md border border-gray-300 p-2 text-sm max-h-40 overflow-auto"
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
            className="mt-4 self-end rounded-full bg-gray-600 p-3 text-xs cursor-pointer transition-colors duration-300 hover:bg-green-600"
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
