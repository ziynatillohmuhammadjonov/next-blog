
export default function Footer() {
    return (
      <footer className="border-t border-zinc-800 mt-44">
        <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-y-4 md:px-16 px-6 py-16 text-zinc-400">
          <small className=" duration-200 font-mono">
          Barcha huquqlar himoyalangan  {new Date().getFullYear()}
          </small>
  
          <small className="hover:text-white duration-200">
            <a
              href="https://github.com/ziynatillohmuhammadjonov?tab=repositories"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="text-green-400"> Ziynatillo Muhammadjonov</span>
            </a>
          </small>
        </div>
      </footer>
    );
  }
  