const websiteForm = document.getElementById("websiteForm");

websiteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const businessName = document.getElementById("businessName").value.trim();
  const businessType = document.getElementById("businessType").value;
  const description = document.getElementById("description").value.trim();

  document.getElementById("previewName").textContent = businessName;
  document.getElementById("previewType").textContent =
    "व्यवसाय का प्रकार: " + businessType;

  document.getElementById("previewDescription").textContent =
    description || "हमारे व्यवसाय में आपका स्वागत है!";

  document.getElementById("previewAbout").textContent =
    description || businessName + " में आपका स्वागत है!";
    const themeColor = document.getElementById("themeColor").value;

const colorThemes = {
  blue: ["#14213d", "#315c91", "#64dfdf"],
  green: ["#14532d", "#16a34a", "#bbf7d0"],
  pink: ["#831843", "#ec4899", "#fbcfe8"]
};

const colors = colorThemes[themeColor] || colorThemes.blue;

document.querySelector(".preview-hero").style.background =
  `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
document.getElementById("previewName").style.color = colors[2];

  document.getElementById("preview").hidden = false;
  document.getElementById("websiteForm").hidden = true;
  document.getElementById("home").hidden = true;
  document.getElementById("services").hidden = true;

  document.getElementById("preview").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});
function selectBusiness(type) {
  const businessType = document.getElementById("businessType");
  businessType.value = type;
 document.getElementById("maker").hidden = false;

document.getElementById("maker").scrollIntoView({
    behavior: "smooth"
});
}
const businessImageInput = document.getElementById("businessImage");

businessImageInput.addEventListener("change", function () {
  const file = businessImageInput.files[0];

  if (!file) {
    return;
  }

  if (!file.type.startsWith("image/")) {
    alert("कृपया फोटो फ़ाइल चुनें।");
    businessImageInput.value = "";
    return;
  }

  const imageUrl = URL.createObjectURL(file);
  const previewImage = document.getElementById("previewBusinessImage");

  previewImage.src = imageUrl;
  previewImage.hidden = false;
});
document.getElementById("backToForm").addEventListener("click", function () {
  document.getElementById("preview").hidden = true;
  document.getElementById("maker").hidden = false;
  document.getElementById("websiteForm").hidden = false;
  document.getElementById("contactMessage").hidden = true;

  document.getElementById("maker").scrollIntoView({
    behavior: "smooth"
  });
});
document.getElementById("startButton").addEventListener("click", function () {
  document.getElementById("services").hidden = false;

  document.getElementById("services").scrollIntoView({
    behavior: "smooth"
  });
});
document
  .getElementById("professionalWebsiteBtn")
  .addEventListener("click", function () {
    document.getElementById("contactMessage").hidden = false;

    document.getElementById("contactMessage").scrollIntoView({
      behavior: "smooth"
    });
  });