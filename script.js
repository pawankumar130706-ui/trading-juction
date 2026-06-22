document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("siteName").textContent = siteData.siteName;
document.getElementById("tagline").textContent = siteData.tagline;
document.getElementById("founderName").textContent = siteData.founderName;
document.getElementById("youtubeBtn").href = siteData.youtubeLink;
document.getElementById("emailText").textContent = "Email: " + siteData.email;
document.getElementById("instagramText").textContent = "Instagram: " + siteData.instagram;
document.getElementById("telegramText").textContent = "Telegram: " + siteData.telegram;
document.getElementById("subscribers").textContent = siteData.subscribers;
document.getElementById("videosCount").textContent = siteData.videosCount;

const videoList = document.getElementById("videoList");
siteData.videos.forEach(v => {
  videoList.innerHTML += `
    <div class="card">
      <h3>${v.title}</h3>
      <p>${v.description}</p>
      <br>
      <a href="${v.link}" target="_blank">Watch Now →</a>
    </div>
  `;
});

const notesList = document.getElementById("notesList");
siteData.notes.forEach(n => {
  notesList.innerHTML += `
    <div class="card">
      <h3>${n.title}</h3>
      <p>${n.description}</p>
      <br>
      <a href="${n.link}" target="_blank">Download →</a>
    </div>
  `;
});
