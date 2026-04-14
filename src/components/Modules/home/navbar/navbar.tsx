import CardNav from './CardNav';

export default function Navbar() {
  const navItems = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", href: "/company", ariaLabel: "About Company" },
        { label: "Careers", href: "/careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", href: "/featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", href: "/case-studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Email", href: "mailto:hi@example.com", ariaLabel: "Email us" },
        { label: "Twitter", href: "#", ariaLabel: "Twitter" }
      ]
    }
  ];

  return (
    <div className="bg-transparent">
      <CardNav 
        logo="/logo.svg" 
        items={navItems} 
      />
    </div>
  );
}