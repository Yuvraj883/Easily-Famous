const Footer = () => {
    return (
      <footer className="md:bg-purple-600 bg-red-600 text-white py-4 w-screen  mt-16 ">
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
            Made with Love by{" "}
            <a
              className="px-1 cursor-pointer text-blue-300 hover:underline"
              href="https://github.com/Yuvraj883"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yuvraj Singh
            </a>
          </p>
          <span className="mb-2">All rights reserved &#169; </span>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  