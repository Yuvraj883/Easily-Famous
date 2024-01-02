const Footer = () => {
  return (
    <footer className="md:bg-purple-600 bg-red-600 text-white py-4 mt-16">
      <div className="flex justify-center items-center flex-col h-full">
        <span className="mb-2">
          For more offers, visit{" "}
          <a
            className="cursor-pointer pl-2 text-blue-300 hover:underline"
            href="https://indianprovider.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            indianprovider.com
          </a>
          💌
        </span>
        <p className="mb-2">
          Made by{" "}
          <a
            className="px-1 cursor-pointer text-blue-300 hover:underline"
            href="https://developer-yuvraj.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yuvraj Singh
          </a>
        </p>
        <span className="mb-2">© {new Date().getFullYear()} <a href="https://indianprovider.com/"   rel="noopener noreferrer" target="_blank">Indian Provider</a>. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
