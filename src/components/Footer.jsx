


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} PeelInnova. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Innovating sustainable solutions for a better future.
        </p>
      </div>
    </footer>
  );
}