import { SidebarTrigger } from "@/components/ui/sidebar";
import Avatar from "@/shared/ui/Avatar";

const Navbar = () => {
  return (
    <section className="flex items-center justify-between 14">
      <SidebarTrigger />
      Navbar
      <Avatar />
    </section>
  );
};

export default Navbar;
