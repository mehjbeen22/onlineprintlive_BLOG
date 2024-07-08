import Banner from "./Banner";

const SetupPage = () => {
  return (
    <main className="bg-white text-[#701a75] min-h-screen p-8">
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* First Section */}
        <section className="md:w-1/2">
          <img
            src="https://printeshope.com/images/Install-a-Printer-on-a-Windows-PC-Step-6.jpg"
            alt="image-1"
            className="rounded-lg shadow-lg w-full h-full"
          />
        </section>
        <section className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            To proceed with printer setup, follow these steps:
          </h2>
          <p className="text-lg mb-4">
            Setting up a printer for the first time can indeed be daunting. Here
            is a simplified step-by-step guide to help streamline the process.
          </p>
          <ul className="list-disc ml-6 space-y-4">
            {printerSetupSteps.map(({ title, description }, index) => (
              <li key={index}>
                <p className="font-semibold">{title}</p>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* ------------------- */}
      <Banner />
      {/* ------------------- */}
      {/* Second Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-8 mt-8 border-b-4 border-[#701a75] p-6">
        <section className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Here are some alternate points to consider when troubleshooting a
            printer offline issue:
          </h2>
          <p className="text-lg mb-4">
            Restart Devices: Sometimes, a simple restart can resolve the offline
            problem. Turn off both your printer and computer, then turn them
            back on after a minute or two.
          </p>
          <ul className="list-disc ml-6 space-y-4">
            {printerOfflineTroubleshooting.map(
              ({ title, description }, index) => (
                <li key={index}>
                  <p className="font-semibold">{title}</p>
                  <p>{description}</p>
                </li>
              )
            )}
          </ul>
        </section>
        <section className="md:w-1/2">
          <img
            src="https://printeshope.com/images/new/setup2.gif"
            alt="image-2"
            className="rounded-lg shadow-lg w-full h-full"
          />
        </section>
      </div>

      {/* Third Section */}
      <div className="container mx-auto flex flex-col md:flex-row gap-8 mt-8">
        {/* First Section */}
        <section className="md:w-1/2">
          <img
            src="https://printeshope.com/images/new/setup3.gif"
            alt="image-3"
            className="rounded-lg shadow-lg w-full h-full"
          />
        </section>
        <section className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            To resolve a printer offline issue using the Print and Scan Doctor
            tool, follow these steps:
          </h2>

          <ul className="list-disc ml-6 space-y-4">
            {printerOfflineResolutionSteps.map(
              ({ title, description }, index) => (
                <li key={index}>
                  <p className="font-semibold">{title}</p>
                  <p>{description}</p>
                </li>
              )
            )}
          </ul>
        </section>
      </div>
    </main>
  );
};

export default SetupPage;

const printerSetupSteps = [
  {
    title: "Unbox Carefully",
    description:
      "Remove the printer from its packaging, ensuring not to damage any components.",
  },
  {
    title: "Power Connection",
    description:
      "Plug in the power cord to the printer and connect it to a power outlet. Turn on the printer.",
  },
  {
    title: "Paper Loading",
    description:
      "Open the paper tray and adjust the guides to accommodate the paper size you're using. Load the paper into the tray, ensuring it's aligned properly.",
  },
  {
    title: "Connect to Computer",
    description:
      "Depending on your printer type, connect it to your computer using a USB cable or set it up wirelessly by connecting it to your Wi-Fi network.",
  },
  {
    title: "Driver Installation",
    description:
      "Install the printer drivers and software on your computer. You can usually download these from the printer manufacturer's website.",
  },
];

const printerOfflineTroubleshooting = [
  {
    title: "Restart Devices",
    description:
      "Sometimes, a simple restart can resolve the offline problem. Turn off both your printer and computer, then turn them back on after a minute or two.",
  },
  {
    title: "Check Network Connection",
    description:
      "Ensure that your printer is properly connected to the Wi-Fi network. Check the Wi-Fi settings on your printer to verify the connection.",
  },
  {
    title: "Update Firmware",
    description:
      "Check if there are any firmware updates available for your printer. Updating the firmware can sometimes resolve connectivity issues.",
  },
  {
    title: "Check Printer Status",
    description:
      "Look for any error messages or indicators on the printer's display panel. This might provide clues about the cause of the offline issue.",
  },
  {
    title: "Reset Printer",
    description:
      "Try resetting the printer to its factory defaults. Refer to the printer's manual for instructions on how to perform a reset.",
  },
  {
    title: "Disable Firewall/Antivirus",
    description:
      "Sometimes, firewall or antivirus software can block the communication between the printer and computer. Temporarily disable these software and check if the printer comes online.",
  },
  {
    title: "Check Printer Settings",
    description:
      "Verify that the printer is set as the default printer on your computer. Sometimes, a change in settings can cause the printer to go offline.",
  },
  {
    title: "Reinstall Printer Software",
    description:
      "Uninstall the printer software from your computer and then reinstall it. This can help refresh the printer settings and drivers.",
  },
];

const printerOfflineResolutionSteps = [
  {
    title: "Download and Install",
    description:
      "Visit the printer manufacturer's website and download the Print and Scan Doctor tool. Install it on your computer.",
  },
  {
    title: "Run the Tool",
    description:
      "Open the Print and Scan Doctor tool from your computer's programs or applications menu.",
  },
  {
    title: "Select Printer",
    description:
      "The tool will automatically detect connected printers. Choose the printer experiencing the offline issue from the list.",
  },
  {
    title: "Diagnose and Fix",
    description:
      "The Print and Scan Doctor tool will diagnose the issue and attempt to fix it automatically. It may resolve common connectivity or configuration problems.",
  },
  {
    title: "Test Print",
    description:
      "After the tool completes its troubleshooting process, attempt to print a test page to confirm if the issue has been resolved.",
  },
];
