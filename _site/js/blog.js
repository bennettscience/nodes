$(function() {
  var ref = new Firebase("https://nodes-commenting.firebaseio.com/"),
    postRef = ref.child(slugify(window.location.pathname));

  postRef.on("child_added", function(snapshot) {
    var newPost = snapshot.val();
    if(newPost.moderated) {
      $("#comment-list").prepend('<div class="comment">' +
        '<h4>' + escapeHtml(newPost.name) + '</h4>' +
        '<span class="date">' + moment(newPost.postedAt).fromNow() + '</span><p>' + escapeHtml(newPost.message)  + '</p></div>');
      }
  });

  $("#comment").submit(function() {
        var a = postRef.push();

        a.set({
          name: $("#name").val(),
          message: $("#message").val(),
          md5Email: md5($("#email").val()),
          postedAt: Firebase.ServerValue.TIMESTAMP,
          moderated: false
        });

        $("input[type=text], input[type=email], textarea").val("");
        $("#toast").removeClass("hide");
        setTimeout(function() {
          $("#toast").addClass("hide");
        }, 3000);
        return false;
    });
  })

function slugify(text) {
  return text.toString().toLowerCase().trim()
    .replace(/&/g, '-and-')
    .replace(/[\s\W-]+/g, '-')
    .replace(/[^a-zA-Z0-9-_]+/g,'');
}


function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}
