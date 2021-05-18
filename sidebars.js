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
      items: ["throne-cli", "throne-cli-bgp", "throne-cli-ip", "throne-cli-pdb", "throne-cli-shodan", "throne-cli-whois"]
    },
    {
      type: "category",
      label: "Usage - API",
      items: ["throne-api", "throne-api-whois"]
    },
    { type: "doc", id: "license" },
  ]
};