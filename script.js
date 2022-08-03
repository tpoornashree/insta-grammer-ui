$(document).ready((e) => {
  const mainIcon =
    "images/avatar.png";
  const username = "shadingmyfadinglife";
  const profileDescription = "CSE Junior | MIT '24 | Web Designer | Artist";
  const profileLink = "https://github.com/tpoornashree";

  $("#profile").show();
  $(".profile-icon").attr("src", mainIcon);
  $(".usernameText").text(username);
  $(".descriptionText").text(profileDescription);
  $(".profileLink").attr("href", profileLink);
  $(".profileLink").text(profileLink);

  $("[target]").click((a) => {
    const target = $(a.currentTarget).attr("target");
    $(".page-hidden").hide();
    $("#" + target).toggle();

    if (target.includes("story")) $("#top-menu-bar").hide();
    else $("#top-menu-bar").show();
  });
});
