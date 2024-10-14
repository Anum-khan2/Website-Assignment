import React from 'react';
import styles from "./Header.module.css";


// components/Header.jsx
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md p-5">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/" legacyBehavior>
            <a className="flex items-center">
              <span className="text-pink-500 mr-2">🌹</span> 
              Welcome to my Website
            </a>
          </Link>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" legacyBehavior>
                <a className="text-gray-600 hover:text-pink-500">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a className="text-gray-600 hover:text-pink-500">About</a>
              </Link>
            </li>
            <li>
              <Link href="/projects" legacyBehavior>
                <a className="text-gray-600 hover:text-pink-500">Projects</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a className="text-gray-600 hover:text-pink-500">Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}





















// components/Header.jsx
// import Link from 'next/link';

// export default function Header() {
//   return (
//     <header className="bg-white shadow-md p-5">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <Link href="/">
//             <a className="flex items-center">
//               {/* Placeholder for logo */}
//               <span className="text-pink-500 mr-2">🌹</span> 
//               Anum Portfolio
//             </a>
//           </Link>
//         </div>

//         {/* Navigation Links */}
      
//         <ul className="flex space-x-4">
//             <li>
//               <Link href="/" legacyBehavior>
//                 <a className="text-gray-600 hover:text-pink-500">Home</a>
//               </Link>
//             <nav>
//           <ul className="flex space-x-4">
//             <li>
//               <Link href="/" legacyBehavior>
//                 <a className="text-gray-600 hover:text-pink-500">Home</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/about" legacyBehavior>
//                 <a className="text-gray-600 hover:text-pink-500">About</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/projects" legacyBehavior>
//                 <a className="text-gray-600 hover:text-pink-500">Projects</a>
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact" legacyBehavior>
//                 <a className="text-gray-600 hover:text-pink-500">Contact</a>
//               </Link>
//             </li>
//           </ul>
//         </nav>

//       </div>
//     </header>
//   );
// }




















// // // Define the Header component
// // const Header: React.FC = () => {
// //     return (
// //       <header className={styles.header} role="banner">
// //         <h1 className={styles.title}>My Next.js Website</h1>
// //         {/* You can add navigation links here if needed */}
// //         <nav className={styles.nav}>
    
// //         <a href="/">Home</a>
// //           <a href="/about">About</a>
// //           <a href="/contact">Contact</a>
// //         </nav>
// //       </header>
// //     );
// //   };
  
// //   // Export the Header component
// //   export default Header;



// // const Header = () => {
// //   return (
// //     <header className={styles.header}>
// //       <h1>My Next.js Website</h1>
// //      </header>
// //   );
// // };

// // export default Header;