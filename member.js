function skillsmember() {
    var member = document.getElementById("member").value;
    var member = member.toLowerCase();
    var member = member.replace(/\s/g, '');
    if (member == "member") {
        window.location.href = "skills.html";
    } else {
        alert("Invalid Member");
    }
}