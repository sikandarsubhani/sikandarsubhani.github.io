import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

const menuItems = ["about", "projects", "skills", "contact"];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onMenuItemClick = () => {
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.span 
            className="text-xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
          >
            Muhammad Sikandar Subhani
          </motion.span>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className="text-muted-foreground hover:text-primary cursor-pointer capitalize"
              >
                {item}
              </Link>
            ))}
            <a 
              href="/assets/cv/CV_SIKANDAR.pdf" 
              download
              className="flex items-center gap-2 text-primary hover:text-primary/80"
            >
              <Download className="w-4 h-4" />
              CV
            </a>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-lg">
              <div className="flex flex-col gap-8 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item}
                    to={item}
                    spy={true}
                    smooth={true}
                    offset={-64}
                    duration={500}
                    className="text-lg text-muted-foreground hover:text-primary cursor-pointer capitalize"
                    onClick={onMenuItemClick}
                  >
                    {item}
                  </Link>
                ))}
                <a 
                  href="/assets/cv/CV_SIKANDAR.pdf" 
                  download
                  className="flex items-center gap-2 text-lg text-primary hover:text-primary/80"
                  onClick={onMenuItemClick}
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};