import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
     
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      
      <Header />
      <main style={{ minHeight: "70vh" }}>
        

        {children}
      </main>
      <Footer/>
    </div>
  );
};

// Layout.defaultProps = {
//   title: "crud",
//   description: "mern stack project",
//   keywords: "mern,react,node,mongodb",
//   author: "Preet Tyagi",
// };

export default Layout;