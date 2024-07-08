const FAQsPage = () => {
  return (
    <main className="text-[#701a75] bg-white min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-[#701a75] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-lg">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default FAQsPage;

const faqs = [
  {
    question: "How do I set up my printer for the first time?",
    answer:
      "Setting up your printer involves unboxing carefully, connecting to power, loading paper, connecting to your computer, and installing drivers. Refer to our detailed setup guide for step-by-step instructions.",
  },
  {
    question: "What should I do if my printer goes offline?",
    answer:
      "If your printer goes offline, try restarting devices, checking network connections, updating firmware, resetting the printer, and verifying printer settings. Our troubleshooting guide can help you resolve common offline issues.",
  },
  {
    question: "Where can I find printer drivers?",
    answer:
      "You can download printer drivers from the manufacturer’s website. Make sure to select the correct model and operating system version for compatibility.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our 24X7 customer support team via phone, email, or live chat. We are here to assist you with any printer-related issues or queries.",
  },
  {
    id: 1,
    question: "How do I find the model number of my printer?",
    answer:
      "The model number is usually located on a label at the back or bottom of the printer.",
  },
  {
    id: 2,
    question: "Can I use my printer with multiple computers?",
    answer:
      "Yes, you can typically connect your printer to a network or use it wirelessly to allow multiple computers to print.",
  },
  {
    id: 3,
    question: "What should I do if my printer is printing blank pages?",
    answer:
      "Check the ink or toner levels, ensure cartridges are correctly installed, and run a printer cleaning cycle if available.",
  },
];
