import PasswordItem from "../atoms/PasswordItem";

const PasswordsList = () => {
  const passwordData = [
    {
      websiteName: "Pinterest",
      websiteURL: "pinterest.com",
      logoURL:
        "https://pngfre.com/wp-content/uploads/nike-logo-18-1024x1024.png",
      username: "divyanshyadu25",
      updated: "4 days ago",
    },
    {
      websiteName: "Netflix",
      websiteURL: "netflix.com",
      logoURL: "https://loodibee.com/wp-content/uploads/Netflix-logo.png",
      username: "divyansh.netflix",
      updated: "2 weeks ago",
    },
    {
      websiteName: "GitHub",
      websiteURL: "github.com",
      logoURL:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      username: "divyansh-code",
      updated: "1 day ago",
    },
    {
      websiteName: "Spotify",
      websiteURL: "spotify.com",
      logoURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_HT_3dSC6StBbOFFnFoIhrp1wqQdnDP5_w&s",
      username: "dvysh_music",
      updated: "24 Sept 2023",
    },
    {
      websiteName: "Amazon",
      websiteURL: "amazon.in",
      logoURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZoPxHxiJ8nsrZTejjkVOIWcBlJt1D0KhLQ&s",
      username: "divyansh.amazon",
      updated: "3 weeks ago",
    },
    {
      websiteName: "Pinterest",
      websiteURL: "pinterest.com",
      logoURL:
        "https://pngfre.com/wp-content/uploads/nike-logo-18-1024x1024.png",
      username: "divyanshyadu25",
      updated: "4 days ago",
    },
    {
      websiteName: "GitHub",
      websiteURL: "github.com",
      logoURL:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      username: "divyansh-code",
      updated: "1 day ago",
    },
    {
      websiteName: "Spotify",
      websiteURL: "spotify.com",
      logoURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_HT_3dSC6StBbOFFnFoIhrp1wqQdnDP5_w&s",
      username: "dvysh_music",
      updated: "24 Sept 2023",
    },
    {
      websiteName: "Amazon",
      websiteURL: "amazon.in",
      logoURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZoPxHxiJ8nsrZTejjkVOIWcBlJt1D0KhLQ&s",
      username: "divyansh.amazon",
      updated: "3 weeks ago",
    },
    {
      websiteName: "Pinterest",
      websiteURL: "pinterest.com",
      logoURL:
        "https://pngfre.com/wp-content/uploads/nike-logo-18-1024x1024.png",
      username: "divyanshyadu25",
      updated: "4 days ago",
    },
    {
      websiteName: "GitHub",
      websiteURL: "github.com",
      logoURL:
        "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      username: "divyansh-code",
      updated: "1 day ago",
    },
    {
      websiteName: "Spotify",
      websiteURL: "spotify.com",
      logoURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_HT_3dSC6StBbOFFnFoIhrp1wqQdnDP5_w&s",
      username: "dvysh_music",
      updated: "24 Sept 2023",
    },
    {
      websiteName: "Amazon",
      websiteURL: "amazon.in",
      logoURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ZoPxHxiJ8nsrZTejjkVOIWcBlJt1D0KhLQ&s",
      username: "divyansh.amazon",
      updated: "3 weeks ago",
    },
  ];

  return (
    <div className="flex flex-col h-fit w-full overflow-auto mt-4">
      <div className="data flex flex-col">
        {passwordData.map((item, index) => (
          <PasswordItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default PasswordsList;
