export default function HomeFooter() {
  return (
    <footer className="bg-[#0b9887] px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <div className="grid w-full gap-3 text-[13px] font-medium leading-5 text-[#F3E425] sm:w-auto sm:grid-cols-2 sm:gap-16">
          <div className="flex items-start justify-center gap-2 text-left">
            <svg
              viewBox="0 0 24 24"
              className="mt-[2px] h-[13px] w-[13px] shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 21s6-4.35 6-10a6 6 0 1 0-12 0c0 5.65 6 10 6 10Z" />
              <path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            </svg>
            <span className="max-w-[285px]">
              JL.Raya Rungkut Madya, Gunung Anyar, Surabaya Indonesia
            </span>
          </div>

          <div className="flex items-start justify-center gap-2 text-left">
            <svg
              viewBox="0 0 24 24"
              className="mt-[2px] h-[13px] w-[13px] shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72l.38 2.66a2 2 0 0 1-.57 1.73L7.1 9.9a16 16 0 0 0 7 7l1.79-1.82a2 2 0 0 1 1.73-.57l2.66.38A2 2 0 0 1 22 16.92Z" />
            </svg>
            <span>(+6231) 879-3589</span>
          </div>
        </div>

        <p className="mt-4 flex items-center justify-center gap-2 text-center text-[13px] leading-5 text-[#F3E425]">
          <svg
            viewBox="0 0 24 24"
            className="h-[13px] w-[13px] shrink-0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M15.5 9.5a4 4 0 1 0 0 5" />
          </svg>
          <span>Copyright UPA TIK UPN Veteran Jawa Timur. All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}
