module.exports = {
  someSidebar: [
    {
      type: "category",
      label: "Installation",
      items: ["introduction", "getting-started"],
    },
    {
      type: "category",
      label: "Usage - CLI",
      items: ["cli/throne", "cli/api", "cli/bgp", "cli/ip", "cli/pdb", "cli/shodan", "cli/whois"]
    },
    {
      type: "category",
      label: "Usage - API",
      items: ["api/api", "api/authentication","api/asn", "api/whois", "api/ip"]
    },
    { type: "doc", id: "license" },
  ]
};